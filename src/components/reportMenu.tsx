import { ActionIcon, Button, Flex, Menu, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { IconCirclePlus } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

interface ReportMenuProps {}

const ReportMenu: FunctionComponent<ReportMenuProps> = () => {
  const navigate = useNavigate();
  return (
    <Menu
      shadow='lg'
      position='top'
      withArrow={true}
      width={200}
      withinPortal={true}
    >
      <Menu.Target>
        <ActionIcon variant='transparent' size={50}>
          <IconCirclePlus color='white' size={100} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Want to Help?</Menu.Label>
        <Menu.Divider></Menu.Divider>
        <Menu.Item
          sx={{ fontSize: '1rem' }}
          onClick={() => navigate('/donate')}
        >
          Make Donation
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item
          sx={{ fontSize: '1rem' }}
          onClick={() => navigate('/report')}
        >
          Report/Post
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item sx={{ fontSize: '1rem' }} onClick={() => navigate('/offer')}>
          Offer My Pet
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ReportMenu;
