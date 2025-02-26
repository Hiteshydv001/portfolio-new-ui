import { Center, Heading, Text, VStack } from '@chakra-ui/react';

export function Home() {
  return (
    <Center flex='1'>
      <VStack gap='6'>
        <Heading size='3xl'>Welcome to Hitesh's Portfolio</Heading>
        <Text textAlign='center'>Explore my journey by selecting a section from the sidebar!</Text>
      </VStack>
    </Center>
  );
}