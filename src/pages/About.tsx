import { Center, Heading, Text, VStack, HStack, Link } from '@chakra-ui/react';

export function About() {
  return (
    <Center flex="1" py={8}>
      <VStack spacing={6} maxW="768px" textAlign="center" align="center">
        <Heading size="xl">About Me</Heading>
        <Text fontSize="lg" color="gray.600">
          Hi, I’m Hitesh Kumar! A B.Tech student in CSE (AI/ML) at Chandigarh University, passionate about AI, machine learning, and web development.
        </Text>

        <VStack spacing={4} align="center">
          <Text>
            Contact: +91-7206139480 |{' '}
            <Link href="mailto:hiteshofficial0001@gmail.com" color="teal.500" isExternal>
              hiteshofficial0001@gmail.com
            </Link>
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/Hiteshydv001" color="teal.500" isExternal>
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/hitesh-kumar-71336" color="teal.500" isExternal>
              LinkedIn
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
}

export default About;
