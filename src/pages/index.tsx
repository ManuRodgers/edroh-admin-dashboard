import { Box, Button, useTheme } from '@mui/material';
import type { NextPage } from 'next';
import { useContext } from 'react';

import { ColorModeContext, tokens } from '@/lib/theme';

const HomePage: NextPage = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box bgcolor={colors.greenAccent['400']} width={400} height={400}></Box>
      <div>hello</div>
      <Button
        variant='contained'
        color='primary'
        onClick={colorMode.toggleColorMode}
      >
        change mode
      </Button>
    </>
  );
};
export default HomePage;
