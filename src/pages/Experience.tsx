import { Center, Heading, Text, VStack } from '@chakra-ui/react';

export function Experience() {
  return (
    <Center flex='1'>
      <VStack gap='6'>
        <Heading size='xl'>Experience</Heading>
        <Text maxW='768px' textAlign='center'>
          African Association of Entrepreneurs (Sept-Oct 2024): Developed French website with WordPress. Think Blue Data (Aug-Oct 2024): Annotated building topology data. Code Clause (Sept-Oct 2023): Built spam classifier, mask detection. Bharat Intern (Nov-Dec 2023): House price & wine quality prediction.
        </Text>
      </VStack>
    </Center>
  );
}