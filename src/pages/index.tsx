import { Box, Slider } from '@mui/material';
import type { NextPage } from 'next';

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Box>
      <Slider defaultValue={30} />
      <Slider
        defaultValue={30}
        className='text-teal-900'
        slotProps={{ thumb: { className: 'rounded-sm' } }}
      />
    </Box>
  );
};
export default HomePage;
