import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import ArrowDownwardRounded from '@material-ui/icons/ArrowDownwardRounded';

const ScrollDownIndicator = () => {
  // const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column"
      justifyContent="center" alignItems="center" marginBottom={4}>
      <ArrowDownwardRounded />
      <Typography variant="caption">
        scroll
      </Typography>
    </Box>
  )
}

export default ScrollDownIndicator;
