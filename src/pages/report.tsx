import {
  Box,
  Flex,
  Title,
  Card,
  Button,
  BackgroundImage,
  NativeSelect,
  Input,
  Textarea,
  FileInput,
  Modal,
  Text,
} from '@mantine/core';
import { FunctionComponent, useState } from 'react';
import {
  IconPaw,
  IconMapPin,
  IconUpload,
  IconCircleCheck,
} from '@tabler/icons';
interface ReportProps {}

const Report: FunctionComponent<ReportProps> = () => {
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
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/450px-American_Shorthair.jpg'
          >
            <Title
              variant='gradient'
              gradient={{ from: 'blue.0', to: 'cyan.4' }}
            >
              Found a Poor Animal?
            </Title>
          </BackgroundImage>
        </Card.Section>
        <Card.Section>
          <Flex
            sx={{ padding: '1rem', width: '90%' }}
            gap='lg'
            direction={'column'}
          >
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
              label='What type of animal did you found?'
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

export default Report;
