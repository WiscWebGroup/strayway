import { Link } from 'react-router-dom';
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
  

  return (
    <>
        <div style={{"backgroundImage": "url('../public/jack-russell-2310391_960_720.jpg')", }}>
            <Container style={{"backgroundColor": "rgba(86, 92, 97, .5)", "height": "10vh", "alignItems":"left", "position": "relative"}}>
                <Image
                    width={"10vh"}
                    src={"../assets/logo_transparent.png"}
                    fit={"contain"}
                    radius={"lg"}
                    style={{"position" : "relative", "float": "left"}}
                />
                <Title
                    variant='gradient'
                    gradient={{ from: 'white', to: 'cyan' }}
                    inherit
                    style={{"position" : "relative", "float": "left", "marginTop": "2vh"}}
                >
                    StrayWay
                </Title>
                
            </Container>
            <Container style={{"height": "36vh"}}>
                <Text size='xl' weight={800} color={"white"} style={{"fontSize": "40px", "marginTop": "8vh"}}>
                        We Are StrayWay, We Help Animals
                </Text>
            </Container>
        </div>

        <div style={{"backgroundImage": "url('../public/cat-2536662_960_720.jpg')", "marginTop": "-10vh", "backgroundSize": "cover"}}>
            <Container style={{"height": "46vh"}}>
                <Title size='xl' weight={800} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} style={{"fontSize": "40px", "marginTop": "8vh"}}>
                        Here, We Provide Love & Care
                </Title>
            </Container>
        </div>

        <div style={{"backgroundImage": "url('http://www.sinaimg.cn/dy/slidenews/1_img/2013_08/28436_233668_548745.jpg')", "marginTop": "-10vh", "backgroundSize": "cover"}}>
            <Container style={{"height": "46vh"}}>
                <Title size='xl' weight={800} variant="gradient" gradient={{ from: 'orange', to: 'white', deg: 60 }} style={{"fontSize": "40px", "marginTop": "8vh"}}>
                        About Us
                </Title>
                <Text size='xl' weight={800} color={"#F7C280"} style={{"fontSize": "30px", "marginTop": "2vh"}}>
                        - THE OS Crew -<br/>
                        Yixuan Ye<br/>
                        Simon Fu<br/>
                </Text>
                <Text size='xl' weight={800} color={"#F7C280"} style={{"fontSize": "30px"}}>
                        Wong Tsz Yat<br/>
                        Jeffrey Hui
                </Text>
            </Container>
        </div>
    </>
  );
}

export default Index;
