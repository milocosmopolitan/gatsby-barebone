import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import EmailForm from './email';

export const ContactSectionContent = (props: any) => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Box marginBottom={7}
        display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h3">
          {t('contact.heading')}
        </Typography>
        <Typography variant="subtitle1">
          {t('contact.subHeading')}
        </Typography>
      </Box>
      <EmailForm />
    </Container>
  )
}
