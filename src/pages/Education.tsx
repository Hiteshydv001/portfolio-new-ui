import { Center, Heading, Text, VStack } from '@chakra-ui/react';

export function Education() {
  return (
    <Center flex='1'>
      <VStack gap='6'>
        <Heading size='xl'>Education</Heading>
        <Text maxW='768px' textAlign='center'>
          B.Tech (Hons) in CSE (AI/ML) - Chandigarh University, Mohali, Punjab (Sept 2022 - Sept 2026, CGPA: 7.87). Senior Secondary: Pathfinder Global School, Gurugram (88%, 2020-2022). Secondary: Pathfinder Global School (91.4%, 2018-2020). Relevant Coursework: OOP, Databases, Data Structures, ML, Image Processing.
        </Text>
      </VStack>
    </Center>
  );
}