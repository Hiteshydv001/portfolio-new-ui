import { FaGlobe } from "react-icons/fa";
import { VStack, Box, Heading, Text, HStack, Badge, Link, Center } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode"; // Assuming this handles color mode logic
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function Experience() {
  const experiences = [
    {
      title: "Project Maintainer",
      company: "JGEC Winter of Code",
      duration: "Feb 2025 - Present (1 mo)",
      location: "Remote (GitHub)",
      description:
        "Fostering open-source excellence at JWoC. Managed projects like Guard AI (AI-powered proctoring) and LinkedIn-Automation (scraping, sentiment analysis, AI comments).",
      skills: ["Selenium", "AI", "Machine Learning", "Python"],
      links: [
        { name: "Guard AI", url: "https://github.com/Hiteshydv001/Guard-AI-Designing-Remote-Proctoring-System" },
        { name: "LinkedIn Automation", url: "https://github.com/Hiteshydv001/linkedin-automate-comment" },
      ],
    },
    {
      title: "Project Maintainer",
      company: "Delta Winter of Code",
      duration: "Jan 2025 - Present (2 mos)",
      location: "Remote (GitHub)",
      description: "Led open-source contributions at NIT Trichy's Delta Force initiative, focusing on innovative developer projects.",
      skills: ["Machine Learning", "Deep Learning", "Next.js"],
    },
    {
      title: "Project Maintainer | Mentor",
      company: "Social Winter of Code (SWOC)",
      duration: "Dec 2024 - Present (3 mos)",
      location: "Remote (GitHub)",
      description: "Mentored contributors in SWOC, enhancing workflows and features for open-source projects like Guard AI.",
      skills: ["AI", "Python", "Flask", "Next.js", "MongoDB"],
      links: [{ name: "Guard AI", url: "https://github.com/Hiteshydv001/Guard-AI" }],
    },
    {
      title: "Blockchain Intern",
      company: "Vodafone Idea Foundation",
      duration: "Jan 2025 - Feb 2025 (2 mos)",
      location: "Remote",
      description: "Developed a Blockchain-based Land Registry System using Ethereum, Solidity, and Web3.py for secure land ownership records.",
      skills: ["Blockchain", "Solidity", "Ganache", "MetaMask"],
      links: [{ name: "Land Registry", url: "https://github.com/Hiteshydv001/Land-Register-blockchain" }],
    },
  ];

  return (
    <Center flex="1" p="10" bg={useColorModeValue("gray.50", "gray.900")}>  
      <MotionVStack 
        w="full" 
        maxW="5xl" 
        align="center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading size="2xl" color={useColorModeValue("teal.600", "teal.300")}>Experience</Heading>
        
        <VStack w="full">
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="lg"
              rounded="lg"
              p="6"
              w="full"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack align="start">
                <Heading size="md" color={useColorModeValue("teal.600", "teal.300")}>{exp.title}</Heading>
                <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>{exp.company}</Text>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue("gray.700", "gray.300")}>{exp.duration}</Text>
                <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>{exp.location}</Text>
                <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>{exp.description}</Text>

                <HStack wrap="wrap">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} colorScheme="teal" px="3" py="1" rounded="full">
                      {skill}
                    </Badge>
                  ))}
                </HStack>

                {exp.links && exp.links.length > 0 && (
                  <VStack align="start" mt="4">
                    {exp.links.map((link, idx) => (
                      <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer" color="teal.400" _hover={{ color: "teal.300" }}>
                        <HStack>
                          <FaGlobe />
                          <Text>{link.name}</Text>
                        </HStack>
                      </Link>
                    ))}
                  </VStack>
                )}
              </VStack>
            </MotionBox>
          ))}
        </VStack>
      </MotionVStack>
    </Center>
  );
}
