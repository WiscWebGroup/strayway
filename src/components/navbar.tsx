import { Box, Flex, Grid, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarButton from './navbarButton';
import { IconPaw, IconPlus, IconUser } from '@tabler/icons';
import ReportMenu from './reportMenu';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <Flex
      sx={{ width: '100vw', overflow: 'hidden' }}
      direction={'column'}
      gap={10}
    >
      <Box sx={{ paddingBottom: '5vh' }}>
        <Outlet />
      </Box>
      <Flex
        sx={{
          position: 'fixed',
          bottom: 5,
          width: '100vw',
          backgroundColor: '#15AABF',
          padding: '10',
          overflow: 'hidden',
          borderRadius: '10px',
          zIndex: 999,
        }}
        justify={'space-evenly'}
        align={'center'}
      >
        <NavbarButton
          text={'Discover'}
          icon={<IconPaw color='white' />}
          routeTo={'/home'}
        />
        <ReportMenu></ReportMenu>
        <NavbarButton
          text={'Profile'}
          icon={<IconUser color='white' />}
          routeTo={'/profile'}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
