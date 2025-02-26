import { Center, Heading, Text, VStack, Button, HStack, Box, Image, Input, IconButton } from '@chakra-ui/react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { MiddleSection } from '../middle-section';

export function Home() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const textColor = useColorModeValue('purple.300', 'purple.200');
  const accentColor = useColorModeValue('teal.400', 'teal.300');
  const buttonBg = useColorModeValue('gray.800', 'gray.700');
  const [searchValue, setSearchValue] = useState('');

  return (
    <Center flex="1" p="10" bg={bgColor} minH="100vh" position="relative">
      <VStack align="center" maxW="4xl" w="full">
        <Image
          src="src/assets/profile-pic.png"
          alt="Hitesh Kumar"
          boxSize="150px"
          borderRadius="full"
          border="4px solid"
          borderColor={accentColor}
          mb={4}
        />

        <Heading size="2xl" color={textColor}>
          Hi, I am Hitesh Kumar.
        </Heading>

        <Heading size="xl" color={textColor} mb={4}>
          An AI/ML Engineer & Web Developer
        </Heading>

        <Text fontSize="lg" color={textColor} textAlign="center" maxW="2xl">
          Passionate about building innovative solutions in artificial intelligence, machine learning, and web development. Explore my journey and skills through the sidebar!
        </Text>

        <HStack mt={8} spacing={6}>
          <Button as="a" href="" download="Hitesh_Kumar_Resume.pdf" leftIcon={<FaFilePdf />} colorScheme="teal" bg={buttonBg} color={accentColor} _hover={{ bg: "teal.500", color: "white" }} size="lg" px={8} py={6} borderRadius="full">
            Resume
          </Button>
          <Button as="a" href="https://github.com/Hiteshydv001" target="_blank" rel="noopener noreferrer" leftIcon={<FaGithub />} colorScheme="teal" bg={buttonBg} color={accentColor} _hover={{ bg: "teal.500", color: "white" }} size="lg" px={8} py={6} borderRadius="full">
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/hitesh-kumar-71336" target="_blank" rel="noopener noreferrer" leftIcon={<FaLinkedin />} colorScheme="teal" bg={buttonBg} color={accentColor} _hover={{ bg: "teal.500", color: "white" }} size="lg" px={8} py={6} borderRadius="full">
            LinkedIn
          </Button>
        </HStack>
      </VStack>

      {/* Middle Section */}
      <MiddleSection />

    </Center>
  );
}

export default Home;
