import React, { useState, useEffect } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import HorizontalScroll from '../shared/components/horizontal-section';
import IconButton from '@material-ui/core/IconButton';
import ScrollDownIndicator from './scroll-down-indicator';
import ServiceCard, {IService} from './services-card';
import { BrowserUtils } from '../shared/browser/browser.utils';
import { CSSTransition } from 'react-transition-group';
import { Drawer, Box, Typography } from '@material-ui/core';
import { useScrollContext } from '../shared/scroll/scroll.provider';
import { useTranslation } from 'react-i18next';

const SERVICES: IService[] = [
  {
    name: 'Individual Tax',
    details: {
      '1': 'Federal and State Income Tax Return Filings',
      '2': 'Year-end Tax Planning and Projections',
      '3': 'Schedule C & E Business Accounting and Bookkeeping',
      '4': 'Quarterly Income Tax Estimates',
      '5': 'Audit Representation before Federal and State Tax Authorities',
      '6': 'Responding to Tax Notices and Inquiries'
    }
  },
  {
    name: 'Small Businesses',
    details: {
      '1': 'Federal and State Income Tax Return Filings',
      '2': 'Year-end Tax Planning and Projections',
      '3': 'Business Advisory Services for startups and scaling businesses',
      '4': 'Monthly Bookkeeping through Quickbooks',
      '5': 'Payroll and Sales Tax Filings',
      '6': 'Audit Representation before Federal and State Tax Authorities',
      '7': 'Responding to Tax Notices and Inquiries'
    }
  },
  {
    name: 'Real Estate',
    details: {
      "1": 'Tax compliance for developers and investors, both commercial and residential',
      '2': 'Tangible Property Regulations and tax treatment of repairs vs improvements',
      "3": 'Depreciation methods, including bonus depreciation and Sec.179 expensing',
      "4": 'Refinancing and Debt Restructuring Tax Implications',
      "5": 'Tax projections and compliance for sale of real estate property, 1231 exchanges, and acquisitions of Qualified Opportunity Zone(QOZ) properties'
    }
  }
];

const scrollIndicatorDuration = 300;

function triggerAnimation(
  ref: React.RefObject<any>,
  scrollY: number,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
) {
  const vh = BrowserUtils.GetViewSize().height;
  const yPos: number = ref.current.offsetTop + ref.current.offsetHeight - vh;
  setTrigger(scrollY <= yPos)
}

export const ServiceSectionContent = (props: any) => {
  const { t } = useTranslation();
  const { scrollY } = useScrollContext();
  const { height: vh, width: vw } = BrowserUtils.GetViewSize();
  const headerHeight = vh * 0.2;
  const bodyHeight = vh * 0.8;

  const [trigger, setTrigger] = useState(false);

  const [opened, setState] = useState(false);
  const [active, setActive] = useState<string|null>(null);

  const toggleDrawer = (open: boolean, id: string|null = null) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setActive(id);
    setState(open);
  }

  useEffect(() => {
    triggerAnimation(props.containerRef, scrollY, setTrigger)
  }, [scrollY])

  return (
    <>
      <Box height={vh} width="100%" position="sticky" top="0">
        <Box width="100%"
          display="flex" flexDirection="column" justifyContent="center" alignItems="center"
          style={{
            willChange: 'position',
            transition: 'position 100ms ease-in'
          }}>

          <Box height={headerHeight} position="absolute" left="0" top="0" paddingTop={14} paddingLeft={14}>
            <Typography variant="h3">
              {t('services.heading')}
            </Typography>
            <Typography variant="subtitle1">
              {t('services.subHeading')}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box position="sticky" top="90vh">
        <CSSTransition in={trigger} timeout={scrollIndicatorDuration} classNames="scroll-indicator">
          <ScrollDownIndicator />
        </CSSTransition>
      </Box>

      <Box position="relative" marginTop={-bodyHeight+'px'}>
        <HorizontalScroll width={vw} height={vh-headerHeight} top={headerHeight} leftPos={0}>
          <Box
            display="flex" flexDirection="row" flexWrap="nowrap"
            justifyContent="flex-start" alignItems="center"
            paddingLeft={14}
            paddingRight={0}
            position="relative" height="100%">
              <>
              {SERVICES.map((service, i) => (
                <ServiceCard key={`service-card-${i}`} service={service} onButtonClick={toggleDrawer(true, service.name)} />
              ))}
            </>
          </Box>
        </HorizontalScroll>
      </Box>

      <Drawer anchor='right' open={opened} onClose={toggleDrawer(false)}
        SlideProps={{timeout: 1000}}
        ModalProps={{
          style: {mixBlendMode: 'difference'},
          BackdropProps: {invisible: true}
        }}>
        <Box id="about-detail-container" component="aside" position="relative" width="100vw">
          <Box id="about-detail-header" component="header"
            position="relative" width="100%" display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)} aria-label={t('about.drawer.closeButton')}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box component="main" position="relative" width="100%" display="flex" style={{background: 'black'}}>
            {active}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
