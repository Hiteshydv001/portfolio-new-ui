import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

// Motion-enabled components
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "Multi-RAG-Agent Tools",
    company: "JGEC Winter of Code (Open Source Program)",
    description:
      "Engineered a Multi-Agent AI System for automated text summarization, research article generation, and data sanitization, improving processing efficiency by 40%.",
    skills: ["Python", "Streamlit", "FAISS", "Hugging Face", "Gemini API", "NextJS", "Flask"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/multi-rag-agent" },
      { name: "Live Demo", url: "https://hiteshydv001.github.io/multi-rag-agent" },
    ],
  },
  {
    title: "LinkedIn Automate Comment",
    company: "JGEC Winter of Code & Delta Winter of Code",
    description:
      "Built an AI automation system for LinkedIn interactions, increasing engagement efficiency by 50%.",
    skills: ["Python", "Selenium", "Gemini API", "FastAPI", "Streamlit", "Vercel", "Playwright"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/linkedin-automate-comment" },
      { name: "Live Demo", url: "https://hiteshydv001.github.io/linkedin-automate-comment" },
    ],
  },
  {
    title: "Waste Classification Model",
    company: "Edunet Foundation (AICTE & SHELL)",
    description:
      "Designed an AI-based waste classification system with 92% accuracy using CNN and YOLO for real-time detection.",
    skills: ["TensorFlow", "OpenCV", "Streamlit", "Python", "YOLO"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/waste-classification" },
      { name: "Live Demo", url: "https://hiteshydv001.github.io/waste-classification" },
    ],
  },
  {
    title: "Guard AI: Remote Proctoring",
    company: "JGEC, Delta & Social Winter of Code",
    description:
      "Created an AI-powered remote proctoring system with real-time facial recognition, gaze tracking, and lip movement detection.",
    skills: ["Python", "FastAPI", "OpenCV", "Machine Learning", "Streamlit", "Vercel"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/Guard-AI" },
      { name: "Live Demo", url: "https://hiteshydv001.github.io/Guard-AI" },
    ],
  },
  {
    title: "Blockchain Land Registry",
    company: "Self Project",
    description:
      "Developed a secure and transparent land registry system using Ethereum blockchain and smart contracts.",
    skills: ["Solidity", "Ethereum", "Truffle", "Ganache", "Web3.py", "Streamlit"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/blockchain-land-registry" },
    ],
  },
  {
    title: "Subway Surfers AI Agent",
    company: "Self Project",
    description:
      "Trained a reinforcement learning agent using Deep Q-Networks (DQN) to play Subway Surfers, integrating screen capture and CNN-based game-over detection.",
    skills: ["Reinforcement Learning", "Stable-Baselines3", "OpenCV", "PyAutoGUI", "PPO"],
    links: [
      { name: "GitHub", url: "https://github.com/Hiteshydv001/subway-surfers-ai" },
    ],
  },
];

export function Projects() {
  return (
    <Center flex="1" p="10" bg={useColorModeValue("gray.50", "gray.900")}>
      <MotionVStack
        w="full"
        maxW="6xl"
        align="center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Heading */}
        <MotionBox variants={fadeInUp}>
          <Heading size="2xl" color={useColorModeValue("teal.600", "teal.300")}>
            Projects
          </Heading>
        </MotionBox>

        {/* Project Cards */}
        <VStack w="full" alignItems="center">
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="lg"
              rounded="lg"
              p="6"
              w="full"
              maxW="800px"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VStack align="start">
                <Heading size="md" color={useColorModeValue("teal.600", "teal.300")}>
                  {project.title}
                </Heading>
                <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                  {project.company}
                </Text>
                <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>
                  {project.description}
                </Text>

                {/* Skills */}
                <HStack wrap="wrap">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} colorScheme="teal" px="3" py="1" rounded="full">
                      {skill}
                    </Badge>
                  ))}
                </HStack>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <VStack align="start" mt="4">
                    {project.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.400"
                        _hover={{ color: "teal.300" }}
                      >
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

export default Projects;
