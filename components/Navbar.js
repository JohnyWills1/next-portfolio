import React from 'react';
import {
	Box,
	Heading,
	Flex,
	Text,
	Button,
	Link,
	IconButton,
} from '@chakra-ui/core';

export default function Navbar(props) {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				warp='wrap'
				padding='1rem'
				bg='purple.800'
				color='white'
				{...props}
			>
				<Box>Logo</Box>

				<Flex align='center' padding='0.5rem'>
					<Box>
						<Link href='/about'>About</Link>
					</Box>

					<Flex align='center' ml={5} mr={5}>
						<Heading as='h1'>Johny Wills</Heading>
					</Flex>

					<Box>
						<Link href='/projects'>Projects</Link>
					</Box>
				</Flex>

				<Box>
					<IconButton icon='moon' variantColor='purple'></IconButton>
				</Box>
			</Flex>
		</>
	);
}
