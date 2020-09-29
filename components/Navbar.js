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
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	MenuOptionGroup,
	MenuItemOption,
	Icon,
} from '@chakra-ui/core';

export default function Navbar(props) {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);
	const { colorMode, toggleColorMode } = useColorMode();

	const bgColor = { dark: 'gray.800' };
	const buttonColor = { dark: 'yellow' };
	const textColor = { light: 'black', dark: 'white' };

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				warp='wrap'
				padding='1rem'
				bg={bgColor[colorMode]}
				color={textColor[colorMode]}
				borderBottom='1px'
				borderColor='#E2E8F0'
				{...props}
			>
				<Flex padding='1rem'>Logo</Flex>

				<Flex align='center' padding='0.5rem'>
					<Flex align='center' ml={5} mr={5}>
						<Menu>
							<Heading>
								<MenuButton as='h1'>
									<Icon name='chevron-down' />
									J.Wills
									<Icon name='chevron-down' />
								</MenuButton>
							</Heading>
							<MenuList>
								<MenuItem>
									<Link href='/projects'>Projects</Link>
								</MenuItem>
								<MenuDivider />
								<MenuItem>CV</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				<Box>
					<IconButton
						icon={colorMode === 'light' ? 'moon' : 'sun'}
						variantColor={buttonColor[colorMode]}
						size='lg'
						onClick={toggleColorMode}
					></IconButton>
				</Box>
			</Flex>
		</>
	);
}
