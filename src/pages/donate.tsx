import { Link } from 'react-router-dom';
import {
  Text,
  Button,
  Title,
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
import { IconActivity, IconHeart, IconSearch } from '@tabler/icons';
import { Avatar } from '@mantine/core';
import { Card, Overlay, CardProps } from '@mantine/core';
import { IconCheck } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    position: 'absolute',
    bottom: theme.spacing.xl,
    maxWidth: 220,
  },
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  contentbeta: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

function Donate() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Header height={60} className={classes.header} mb={0}>
        <div className={classes.inner}>
        <Group>
            <Avatar
              src='./assets/logo_transparent.png'
              alt="it's me"
              size={'md'}
            />
          </Group>
          <Group>
            <Autocomplete
              placeholder='Search Groups'
              icon={<IconSearch size={16} stroke={1.5} />}
              data={[]}
            />
            <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} size={"sm"}><IconSearch /></Button>
          </Group>
          
        </div>
      </Header>
      <Flex
        direction={'column'}
        wrap='nowrap'
        gap={'xl'}
        style={{ padding: '15px' }}
      >
        <Card
          radius='md'
          style={{
            backgroundImage: `url(http://cheng-bing.top/wp-content/uploads/2020/11/AM.jpg)`,
            height: 300,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Overlay
            gradient={`linear-gradient(105deg, #627ABC 20%, #312f2f 50%, #A86FC7 100%)`}
            opacity={0.55}
            zIndex={0}
          />

          <div className={classes.content}>
            <Text size='xl' weight={800} className={classes.title}>
              Help AM Home !
            </Text>

            <Text
              size='sm'
              className={classes.description}
              style={{ display: 'flex', marginTop: '0px' }}
            >
              AM Home is an organization established in 2006 at York, UK. We have adopted over 2000+ animals and our campus is the home of these lovely creatures. We are currently experiencing 
              difficulties like lack of funding, volunteers, etc. Please help us so that we can help more animals!
            </Text>

            <Button
              className={classes.action}
              variant='white'
              color='dark'
              component='a'
              size='xs'
              href={''}
            >
              Learn more
            </Button>
          </div>
        </Card>

        <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={550}>Help These Organizations!</Text>
          <IconActivity/>
        </Group>
      </Card.Section>
      
      <Card.Section inheritPadding mt="sm" pb="md">

      <Group style={{"alignItems": "start", marginBottom:'5px'}}>
        <Avatar size={"lg"} mt={10} src="http://cheng-bing.top/wp-content/uploads/2020/06/images.jpg" radius="xl" />
        
        <div >
            <Flex>
            <Text size="md" weight={600}>
            Badger Animal Home
            
          </Text>
          <Badge
                  variant='gradient'
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  ml={10}
            >
            <IconCheck />
            </Badge>
            </Flex>
          
          <Text size="sm" weight={300}>
              Bounded at 2001
          </Text>
          <Text size="xs" weight={300}>
              Location: Madison, WI
          </Text>
          <Text size="xs">
            Badger Animal Home is an organization set up by students and other volunteers in Madison. The group was founded at 2001 and now we are experiencing a high volume of 
            animal in our campus. We are currently short of funding.
          </Text>
          <Group mt="xs">
          <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} leftIcon={<IconHeart/>} >
                Make a Donation
            </Button>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                Learn More
            </Button>
          </Group>
          
          </div>
        
      </Group>
      <Group style={{"alignItems": "start", marginBottom:'5px'}}>
        <Avatar size={"lg"} mt={10} src="http://cheng-bing.top/wp-content/uploads/2021/12/o_1fnjstpgc1u4i1hnq1hbf119653k52.jpeg" radius="xl" />
        <div>
            <Flex>
            <Text size="md" weight={600}>
            A-Maple Organization
            
          </Text>
          <Badge
                  variant='gradient'
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  ml={10}
            >
            <IconCheck />
            </Badge>
            </Flex>
          
          <Text size="sm" weight={300}>
              Bounded at 1996
          </Text>
          <Text size="xs" weight={300}>
              Location: Vancouver, Canada
          </Text>
          <Text size="xs">
            A-Maple Organization was founded in Canada and is an important supporter of animal care organization. Our volunteers have helped over 1900+ stray animals and we 
            need more fund and volunteers now.
          </Text>
          <Group mt="xs">
          <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} leftIcon={<IconHeart/>} >
                Make a Donation
            </Button>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                Learn More
            </Button>
          </Group>
          
          </div>
        
      </Group>

      <Group style={{"alignItems": "start", marginBottom:'5px'}}>
        <Avatar size={"lg"} mt={10} src="http://cheng-bing.top/wp-content/uploads/2022/09/DSC05844-scaled.jpg" radius="xl" />
        <div >
            <Flex>
                <Text size="md" weight={600}>
                Kuoluo Organization
            
            </Text>
            <Badge
                    variant='gradient'
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    ml={10}
                >
                <IconCheck />
                </Badge>
            </Flex>
          
          <Text size="sm" weight={300}>
              Bounded at 2007
          </Text>
          <Text size="xs" weight={300}>
              Location: Shenzhen, China
          </Text>
          <Text size="xs">
            Kuoluo Org. is an organization for animal care. We are non-profit organization that help stray animals, disabled animals in China. We are now trying to build a new 
            animal care facility in Huangzhou and we need more donation and volunteers. We appreciate your help!
          </Text>
          <Group mt="xs">
          <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} leftIcon={<IconHeart/>} >
                Make a Donation
            </Button>
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                Learn More
            </Button>
          </Group>
          
          </div>
        
      </Group>
      </Card.Section>
    </Card>
    
      
      </Flex>
    </>
  );
}

export default Donate;
