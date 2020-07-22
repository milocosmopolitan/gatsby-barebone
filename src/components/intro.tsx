import React from 'react';
import Box from '@material-ui/core/Box';
import { useTranslation } from "react-i18next";
export const IntroSectionContent = (props: any) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <h2 className="headline-1">
        {t('home.title')}
      </h2>
      <p>
        {t('home.subline')}
        {/* This is a placeholder section for <b>business slogan / catchy phrase</b> to draw visitors interest. */}
      </p>
    </Box>
  )
}
