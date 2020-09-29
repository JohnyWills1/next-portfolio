import { Flex, Box, Text, Heading, Link, useColorMode } from '@chakra-ui/core';

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { dark: 'gray.800' };
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
				height='80vh'
			>
				<Box m={20} p={5}>
					<Heading fontSize='6xl' mb={5} textAlign='center'>
						My name is Jonathan. I am a web developer based in Cambridge.
					</Heading>
					<Text fontSize='4xl' mb={5} textAlign='center'>
						I am passionate about modern web technologies and creating solutions that
						work for the many, not the few.
					</Text>
					<Text fontSize='4xl' mb={5} textAlign='center'>
						🗻 My goal is to one day live and work in Tokyo, Japan 🗼
					</Text>
					<Heading fontSize='4xl' mb={5} textAlign='center'>
						Contact:
					</Heading>
					<Text textAlign='center'>
						<Link
							fontSize='4xl'
							href='mailto:jonathan_wills@icloud.com'
							color='blue.400'
							mb={5}
						>
							jonathan_wills@icloud.com
						</Link>
					</Text>
				</Box>
			</Flex>
		</>
	);
}
