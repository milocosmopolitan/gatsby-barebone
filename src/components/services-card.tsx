import React, { useState, useEffect, ComponentType, useRef } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
const ServiceWrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 100vw;
  // background-color: rgba(50,100,60,0.4);
  // padding: 0 0 0 150px;
  margin-right: 150px;
  flex-shrink: 0;
  color: #e6e6e6;
  // box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

export interface IService {
  name: string;
  details: {[key: string]: string; };
}

interface ServiceCardProps {
  onButtonClick: (event: React.MouseEvent) => void;
  service: IService;
}

const ServiceCard: ComponentType<ServiceCardProps> = ({onButtonClick, service}) => {
  const { t } = useTranslation();
  // const 
  return (
    <ServiceWrapper>
      <Container maxWidth="sm">
        <Box padding={0} display="flex">
          <Box paddingTop={4}>
            <Typography variant="h4">
              {service.name}
            </Typography>

            {(Object.keys(service.details).map((key: string, index: number) => (

              <Box key={key} display="flex" justifyContent="flex-start">
                <Box className="bullet-point-symbol" marginRight={3}>
                  <Typography variant="body1">
                    &#10148;
                  </Typography>
                </Box>
                <Typography variant="body1">
                  {(service.details as any)[index+1]}
                </Typography>
              </Box>
            )))}

            <Box display="flex" justifyContent="center" paddingTop={8}>
              <Button variant="contained"
                onClick={onButtonClick}
                aria-label={t('services.drawer.openButton')}>
                {t('services.drawer.openButton')}
              </Button>
            </Box>
          </Box>

        </Box>
      </Container>
    </ServiceWrapper>
  )
}

export default ServiceCard;
