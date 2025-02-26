import { Center, Heading, Text, VStack, HStack, Badge, Link } from '@chakra-ui/react';

export function About() {
  return (
    <Center flex="1" py={8}>
      <VStack spacing={6} maxW="768px" textAlign="center" align="center"> {/* Added align="center" */}
        {/* Header */}
        <Heading size="xl">About Me</Heading>
        <Text fontSize="lg" color="gray.600">
          Hi, I’m Hitesh Kumar! A B.Tech student in CSE (AI/ML) at Chandigarh University, passionate about artificial intelligence, machine learning, and web development.
        </Text>

        {/* Personal Info */}
        <VStack spacing={4} align="center">
          <Text>
            UID: 22BAI71336 | Contact: +91-7206139480 |{' '}
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

        {/* Education */}
        <VStack spacing={2} align="center">
          <Heading size="md" color="teal.700">
            Education
          </Heading>
          <Text fontWeight="bold">
            B.Tech (Hons) in CSE (AI/ML) - Chandigarh University
          </Text>
          <Text fontSize="sm" color="gray.500">
            Mohali, Punjab | Sept 2022 - Sept 2026 | CGPA: 7.87
          </Text>
          <Text>
            Relevant Coursework: OOP, Databases, Data Structures, Machine Learning, Image Processing
          </Text>
        </VStack>

        {/* Key Project */}
        <VStack spacing={2} align="center">
          <Heading size="md" color="teal.700">
            Highlighted Project
          </Heading>
          <Text fontWeight="bold">
            Gemini BlogBot: Automated Content Creator
          </Text>
          <Text>
            Built a Retrieval-Augmented Generation (RAG) system using Gemini LLM and YouTube API for blog content generation.
          </Text>
          <HStack spacing={2} wrap="wrap" justify="center">
            {["Gemini LLM", "YouTube API", "Python", "GitHub"].map((tech, idx) => (
              <Badge key={idx} colorScheme="blue" variant="solid">
                {tech}
              </Badge>
            ))}
          </HStack>
        </VStack>

        {/* Skills */}
        <VStack spacing={2} align="center">
          <Heading size="md" color="teal.700">
            Technical Skills
          </Heading>
          <HStack spacing={2} wrap="wrap" justify="center">
            {[
              "Python",
              "Java",
              "SQL",
              "React",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "NLP",
              "Web Dev",
              "MLOps",
            ].map((skill, idx) => (
              <Badge key={idx} colorScheme="blue" variant="solid">
                {skill}
              </Badge>
            ))}
          </HStack>
        </VStack>

        {/* Interests */}
        <VStack spacing={2} align="center">
          <Heading size="md" color="teal.700">
            Interests
          </Heading>
          <Text>
            Running, listening to music, staying with nature, and exploring cloud-based AI solutions.
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
}

export default About;
