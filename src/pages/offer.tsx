import {
  Card,
  BackgroundImage,
  Title,
  Flex,
  NativeSelect,
  Input,
  Textarea,
  FileInput,
  Button,
  Box,
  TextInput,
  Radio,
  NumberInput,
  Modal,
  Text,
} from '@mantine/core';
import {
  IconPaw,
  IconMapPin,
  IconUpload,
  IconDna2,
  IconCake,
  IconCircleCheck,
} from '@tabler/icons';
import { FunctionComponent, useState } from 'react';

interface OfferProps {}

const Offer: FunctionComponent<OfferProps> = () => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <Box sx={{ padding: 10 }}>
      <Modal opened={opened} onClose={() => setOpened(false)} centered={true}>
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
          sx={{ marginBottom: 15 }}
        >
          <IconCircleCheck size={120} color='#20C997' />
          <Title>Congratulation!</Title>
          <Text>You have succesfully filed a report.</Text>
        </Flex>
      </Modal>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        <Card.Section>
          <BackgroundImage
            sx={{
              boxShadow:
                '0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)',
              height: '5rem',
              width: 'inherit',
              padding: '4%',
            }}
            src='https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg'
          >
            <Title
              variant='gradient'
              gradient={{ from: 'blue.0', to: 'cyan.4' }}
            >
              Offer Your Pet to StrayWay
            </Title>
          </BackgroundImage>
        </Card.Section>
        <Card.Section>
          <Flex
            sx={{ padding: '1rem', width: '90%' }}
            gap='lg'
            direction={'column'}
          >
            <TextInput
              placeholder='Personal or organization name'
              label='Name'
              size='lg'
              withAsterisk
            />
            <Radio.Group
              name='favoriteFramework'
              label='Are you an organization?'
              withAsterisk
              size='lg'
            >
              <Radio value='Yes' label='Yes' />
              <Radio value='No' label='No' />
            </Radio.Group>
            <NativeSelect
              data={['Please Select', 'Male', 'Female', 'Unknown', 'Others']}
              label='What is the sex of your animal?'
              placeholder='Please select'
              sx={{ width: '100%' }}
              size={'lg'}
              required
              icon={<IconDna2 />}
            ></NativeSelect>
            <NumberInput
              label='What is the age of your pet?'
              defaultValue={3}
              min={0}
              icon={<IconCake />}
              size='lg'
            />
            <NativeSelect
              data={[
                'Please Select',
                'Cat',
                'Dog',
                'Bird',
                'Squirrel',
                'Horse',
                'Bat',
                'Hamster',
                'Others',
              ]}
              label='What type of animal do you have?'
              placeholder='Please select'
              sx={{ width: '100%' }}
              size={'lg'}
              required
              icon={<IconPaw />}
            ></NativeSelect>
            <Input.Wrapper
              label='Where did you find this animal?'
              required
              size='lg'
            >
              <Input
                sx={{ '& input': { height: '3rem' } }}
                icon={<IconMapPin />}
              ></Input>
            </Input.Wrapper>
            <Textarea
              label='Appearance description'
              placeholder='Describe what the animal looks like'
              size='lg'
              required
            ></Textarea>
            <Textarea
              label='Disability description'
              placeholder='Your description (N/A if unknown)'
              size='lg'
              required
            ></Textarea>
            <FileInput
              label='Upload a Photo'
              size='lg'
              placeholder='Click to upload'
              required
              icon={<IconUpload />}
            ></FileInput>
            <Button
              variant='gradient'
              gradient={{ from: 'indigo', to: 'cyan' }}
              size='lg'
              onClick={() => setOpened(true)}
            >
              Submit
            </Button>
          </Flex>
        </Card.Section>
      </Card>
    </Box>
  );
};

export default Offer;
