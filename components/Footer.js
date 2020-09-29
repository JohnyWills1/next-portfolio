import React from 'react';
import {
	Box,
	Heading,
	Flex,
	Text,
	Button,
	Link,
	IconButton,
	useColorMode,
} from '@chakra-ui/core';
import { GrGithub } from 'react-icons/gr';
import { SiLinkedin } from 'react-icons/si';
import router from 'next/router';

export default function Footer(props) {
	const [show, setShow] = React.useState(false);
	const { colorMode, toggleColorMode } = useColorMode();

	const bgColor = { dark: 'gray.800' };
	const buttonColor = { dark: 'yellow' };
	const textColor = { light: 'black', dark: 'white' };

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='center'
				warp='wrap'
				padding='1rem'
				bg={bgColor[colorMode]}
				color={textColor[colorMode]}
				borderTop='1px'
				borderColor='#E2E8F0'
				{...props}
			>
				<Flex align='center' padding='0.5rem'>
					<Box ml={2} mr={2}>
						<IconButton
							icon={GrGithub}
							size='lg'
							onClick={() => {
								router.push('https://github.com/JohnyWills1');
							}}
							variantColor={buttonColor[colorMode]}
						></IconButton>
					</Box>
					<Box ml={2} mr={2}>
						<IconButton
							icon={SiLinkedin}
							size='lg'
							onClick={() => {
								router.push('https://linkedin.com/in/jonathanwillsdev');
							}}
							variantColor={buttonColor[colorMode]}
						></IconButton>
					</Box>
				</Flex>
			</Flex>
		</>
	);
}
