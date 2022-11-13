import { Link, useNavigate } from 'react-router-dom';
import {
  Text,
  Button,
  Title,
  Image,
  Box,
  Flex,
  Container,
  Paper,
  TypographyStylesProvider,
  ActionIcon,
  Badge,
} from '@mantine/core';
import { useState } from 'react';
import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart, IconSearch } from '@tabler/icons';
import { IconShield } from '@tabler/icons';
import { Avatar } from '@mantine/core';
import { Card, Overlay, CardProps } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { ThemeContext } from '@emotion/react';

function Index() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: 'url(jack-russell-2310391_960_720.jpg)',
        boxShadow:
          '0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.2)',
        backgroundSize: 'cover',
        backgroundPositionX: '-11rem',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Flex
        direction={'row'}
        justify={'space-between'}
        sx={{
          height: '10vh',
          padding: '1rem',
        }}
      >
        <Image
          width={'10vh'}
          src={'logo_transparent.png'}
          fit={'contain'}
          radius={'lg'}
          style={{ position: 'relative', float: 'left' }}
        />
        <Title
          color={'cyan.6'}
          style={{ position: 'relative', float: 'left', marginTop: '2vh' }}
        >
          StrayWay
        </Title>
      </Flex>
      <Container style={{ height: '80vh' }}>
        <Title
          weight={800}
          color={'white'}
          style={{ fontSize: '2.5rem', marginTop: '1rem' }}
        >
          Find a home for{' '}
          <Title
            weight={800}
            variant='gradient'
            gradient={{ from: 'blue', to: 'cyan' }}
            sx={{ fontSize: '2.5rem' }}
          >
            animals
          </Title>{' '}
          with care and{' '}
          <Title
            weight={800}
            variant='gradient'
            gradient={{ from: 'blue', to: 'cyan' }}
            sx={{ fontSize: '2.5rem' }}
          >
            love
          </Title>{' '}
        </Title>
        <Text color={'gray.5'} sx={{ width: '70vw' }}>
          Discover, adopt, and report animals with ease - at StrayWay, we care
          about animals.
        </Text>
        <Button
          size='lg'
          variant='gradient'
          gradient={{ from: 'blue', to: 'cyan' }}
          sx={{ marginTop: '2rem' }}
          onClick={() => navigate('/home')}
        >
          Get started now
        </Button>
      </Container>
    </div>
  );
}

export default Index;
