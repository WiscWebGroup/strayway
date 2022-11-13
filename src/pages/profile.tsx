import { FC } from 'react';
import {
  Title,
  Flex,
  Button,
  Image,
  Badge,
  ActionIcon,
  Menu,
  SimpleGrid,
  Container,
  ThemeIcon,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { createStyles, Card, Avatar, Text, Group } from '@mantine/core';
import { IconPaw, IconActivity, IconSettings } from '@tabler/icons';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  return (
    <Flex direction={'column'} wrap='nowrap' gap={'xl'} sx={{ padding: 10 }}>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        <Card.Section>
          <Image
            src='https://comptroller.texas.gov/economy/fiscal-notes/2021/jul/images/rescue-hero.jpg'
            height={160}
            alt='Norway'
          />
          <Avatar
            src='https://cheng-bing.top/wp-content/uploads/2020/09/cropped-20200811_2_f2-1.jpg'
            alt="it's me"
            size={80}
            radius={80}
            mt={-28}
            ml={30}
          />
        </Card.Section>

        <Group position='apart' mt='md' mb='xs'>
          <Text weight={500} ml={10}>
            Harold Ye
          </Text>
          <Badge color='pink' variant='light'>
            Animal's Friend
          </Badge>
        </Group>

        <Text size='sm' color='dimmed'>
          Hello, I am Harold Ye! I love animals and I have adopted 2 pets here.
        </Text>
      </Card>
      <Card withBorder shadow='sm' radius='md'>
        <Card.Section withBorder inheritPadding py='xs'>
          <Group position='apart'>
            <Text weight={550}>My Pets</Text>
            <IconPaw />
          </Group>
        </Card.Section>

        <Card.Section inheritPadding mt='sm' pb='md'>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='https://thiscatdoesnotexist.com/'
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='sm' weight={600}>
                Luoluo
              </Text>
              <Text size='sm' weight={400}>
                Cat - fbc cat
              </Text>
              <Text color='dimmed' size='xs'>
                Luoluo is the first cat I adopted, she is shy, but nice to
                people.
              </Text>
            </div>
          </Group>

          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg'
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='sm' weight={600}>
                Sunny
              </Text>
              <Text size='sm' weight={400}>
                Dog - alsatian dog
              </Text>
              <Text color='dimmed' size='xs'>
                Sunny is the first dog I adopted, he likes to play in
                grasslands, he is always energetic when going out.
              </Text>
            </div>
          </Group>
        </Card.Section>
      </Card>

      <Card withBorder shadow='sm' radius='md'>
        <Card.Section withBorder inheritPadding py='xs'>
          <Group position='apart'>
            <Text weight={550}>My Activities</Text>
            <IconActivity />
          </Group>
        </Card.Section>

        <Card.Section inheritPadding mt='sm' pb='md'>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='data:image/jpeg;base64,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'
              radius='xl'
            />
            <div style={{ flex: 1 }}>
              <Text size='sm' weight={600}>
                Found - Cat Russian Blue
              </Text>
              <Text size='sm' weight={300}>
                2019/08/27
              </Text>
              <Text color='dimmed' size='xs'>
                <a href=''>Track information</a>.
              </Text>
              <Text color='dimmed' size='xs'>
                Harold found a disabled Russian Blue Cat at{' '}
                <a href=''>Madison, Wisconsin</a>. This cat has been sent to the{' '}
                <a href=''>CBR Animal Organization</a>!
              </Text>
            </div>
          </Group>
          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='https://thiscatdoesnotexist.com/'
              radius='xl'
            />

            <div style={{ flex: 1 }}>
              <Text size='sm' weight={600}>
                Adoption - Cat Luoluo
              </Text>
              <Text size='sm' weight={300}>
                2022/10/12
              </Text>
              <Text color='dimmed' size='xs'>
                Harold adopted Luoluo from{' '}
                <a href=''>CBR Animal Organization</a>!
              </Text>
            </div>
          </Group>

          <Group style={{ alignItems: 'start' }}>
            <Avatar
              mt={10}
              src='https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg'
              radius='xl'
            />
            <div style={{ flex: 1 }}>
              <Text size='sm' weight={600}>
                Adoption - Dog Sunny
              </Text>
              <Text size='sm' weight={300}>
                2021/12/27
              </Text>
              <Text color='dimmed' size='xs'>
                Harold adopted Sunny from <a href=''>FrBst Organization</a>!
              </Text>
            </div>
          </Group>
        </Card.Section>
      </Card>
    </Flex>
  );
};

export default Profile;
function useStyles(): { classes: any } {
  throw new Error('Function not implemented.');
}
