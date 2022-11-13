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
import { IconHeart, IconSearch } from '@tabler/icons';
import { IconShield } from '@tabler/icons';
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

function Home() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Header height={60} className={classes.header} mb={0}>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size='sm' />
            <Autocomplete
              placeholder='Search'
              icon={<IconSearch size={16} stroke={1.5} />}
              data={[]}
            />
          </Group>
          <Group>
            <Avatar
              src='./assets/logo_transparent.png'
              alt="it's me"
              size={'lg'}
            />
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
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/450px-American_Shorthair.jpg)`,
            height: 300,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Overlay
            gradient={`linear-gradient(105deg, #9E9E9E 20%, #312f2f 50%, #DE4321 100%)`}
            opacity={0.55}
            zIndex={0}
          />

          <div className={classes.content}>
            <Text size='xl' weight={800} className={classes.title}>
              Help Apricotti !
            </Text>

            <Text
              size='sm'
              className={classes.description}
              style={{ display: 'flex', marginTop: '0px' }}
            >
              Apricotti is a domestic shorthair cat with leg disability, she was
              found at north of Chicago, now been protected by the CBR Animal
              Organization. Help Apricotti find a new home!
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

        <Card withBorder radius='md'>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='http://www.petswithdisabilities.org/PWDDogs/vinny2.jpg'
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='md' weight={600}>
                Vinny
              </Text>
              <Text size='sm' weight={400}>
                Dog - spaniel/lab mix
              </Text>
              <Text size='xs' weight={400}>
                CBR Animal Group - 959 Hassu Rd. Milwaukee
              </Text>
              <Text color='dimmed' size='xs'>
                Vinny is a cute dog. He was discovered near the 103 Anthu Rd. by
                a volunteer, sent to our nearest animal care campus in 959 Hassu
                Rd. Milwaukee. If you would like to provide Vinny a new home,
                please let us know!
              </Text>
            </div>
          </Group>
        </Card>
        <Card withBorder radius='md'>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='http://www.petswithdisabilities.org/PWDDogs/darbyface.jpg'
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='md' weight={600}>
                Youyou
              </Text>
              <Text size='sm' weight={400}>
                Dog - shitzu
              </Text>
              <Text size='xs' weight={400}>
                OneCareAni Organization - 930 Harry Blvd. Milwaukee
              </Text>
              <Text color='dimmed' size='xs'>
                Youyou was discovered near the Dane County. She has disabilities
                with eyes and was sent to us by a volunteer. Now she is been
                cared by us in OCA Center (930 Harry Blvd. Milwaukee). Let's
                help Youyou together! Please contact us if you would like to
                provide Youyou a new lovely home!
              </Text>
            </div>
          </Group>
        </Card>

        <Paper withBorder radius='md' className={classes.comment}>
          <Group>
            <Avatar
              src={
                'http://cheng-bing.top/wp-content/uploads/2022/06/image8-modified.png'
              }
              alt={'John Doescher'}
              radius='xl'
            />
            <div>
              <Text size='sm'>John Doescher</Text>
              <Text size='xs' color='dimmed'>
                30 minutes ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div className={classes.contentbeta}>
              John commited to the CBR Animal Group and provided Yolo a new
              home! Thank you John!
            </div>
          </TypographyStylesProvider>
          <Group mt='xs'>
            <Button radius='md' style={{ flex: 1 }}>
              Show details
            </Button>
            <ActionIcon variant='default' radius='md' size={36}>
              <IconHeart size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Paper>

        <Card withBorder radius='md'>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='https://media.istockphoto.com/id/1067347086/photo/cat-with-blue-eyes-looks-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=UvUyWWSKNX15YAuzQfsqeJholO_aRhRUU3QL-duqbWo='
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='md' weight={600}>
                Matt
              </Text>
              <Text size='sm' weight={400}>
                Cat - Tabby
              </Text>
              <Text size='xs' weight={400}>
                JohnsonPets Group - 200 Polaris St. Madison, WI
              </Text>
              <Text color='dimmed' size='xs'>
                Matt is a tabby cat. He experienced a bone fracture in leg. We
                found him near the campus area of UW-Madison, Matt was sent to
                our nearest help campus at 200 Polaris St. Madison. He is
                energetic and lovely. Could you please help Matt?
              </Text>
            </div>
          </Group>
        </Card>
        <Paper withBorder radius='md' className={classes.comment}>
          <Group>
            <Avatar
              src={'http://cheng-bing.top/wp-content/uploads/2021/08/flag2.jpg'}
              alt={'Antares Animal Care'}
              radius='xl'
            />
            <div>
              <Text size='sm'>
                Antares Animal Group
                <Badge
                  variant='gradient'
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  ml={10}
                >
                  <IconCheck />
                </Badge>
              </Text>
              <Text size='xs' color='dimmed'>
                1 day ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div className={classes.contentbeta}>
              Antares Animal Group joined us via an official account. Follow us
              to help more disabled animals!
            </div>
          </TypographyStylesProvider>
          <Group mt='xs'>
            <Button radius='md' style={{ flex: 1 }}>
              Details
            </Button>
            <ActionIcon variant='default' radius='md' size={36}>
              <IconHeart size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Paper>
      </Flex>
    </>
  );
}

export default Home;
