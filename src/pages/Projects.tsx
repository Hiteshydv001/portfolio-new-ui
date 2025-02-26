import { Center, Heading, Text, VStack } from '@chakra-ui/react';

export function Projects() {
  return (
    <Center flex='1'>
      <VStack gap='6'>
        <Heading size='xl'>Projects</Heading>
        <Text maxW='768px' textAlign='center'>
          Gemini BlogBot: Built a Retrieval-Augmented Generation (RAG) system using Gemini LLM and YouTube API for automated blog content. Tech Stack: Python, Gemini LLM, GitHub. [GitHub Link] [Deployed Link].
        </Text>
      </VStack>
    </Center>
  );
}