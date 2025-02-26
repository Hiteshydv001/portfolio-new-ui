import { Center, Heading, Text, VStack } from '@chakra-ui/react';

export function Skills() {
  return (
    <Center flex='1'>
      <VStack gap='6'>
        <Heading size='xl'>Skills</Heading>
        <Text maxW='768px' textAlign='center'>
          Languages: Python, Java, SQL, C++. Frameworks: React, TensorFlow, PyTorch, Scikit-learn. Areas: ML, NLP, Web Dev, MLOps. Tools: Git, VS Code, Jupyter Lab.
        </Text>
      </VStack>
    </Center>
  );
}