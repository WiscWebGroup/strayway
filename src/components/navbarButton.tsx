import { ActionIcon, Button, Card, Flex, Text } from '@mantine/core';
import { FunctionComponent } from 'react';
import { IconPaw, TablerIcon } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
interface NavbarButtonProps {
  text: string;
  icon: React.ReactNode;
  routeTo: string;
}

const NavbarButton: FunctionComponent<NavbarButtonProps> = ({
  text,
  icon,
  routeTo,
}) => {
  const navigate = useNavigate();
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      onClick={() => navigate(routeTo)}
    >
      <ActionIcon variant='transparent'>{icon}</ActionIcon>
      <Text color={'white'} size={'xs'}>
        {text}
      </Text>
    </Flex>
  );
};

export default NavbarButton;
