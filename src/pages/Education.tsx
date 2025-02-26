import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useColorModeValue } from "@/components/ui/color-mode";
import { motion } from "framer-motion";

// Motion-enabled components
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Education() {
  const educationData = [
    {
      title: "B.Tech (Hons) in CSE (AI/ML)",
      institution: "Chandigarh University, Mohali, Punjab",
      duration: "Sept 2022 - Sept 2026",
      details: "CGPA: 7.87",
      coursework:
        "Relevant Coursework: OOP, Databases, Data Structures, ML, Image Processing.",
    },
    {
      title: "Senior Secondary",
      institution: "Pathfinder Global School, Gurugram",
      duration: "2020 - 2022",
      details: "Percentage: 88%",
    },
    {
      title: "Secondary",
      institution: "Pathfinder Global School",
      duration: "2018 - 2020",
      details: "Percentage: 91.4%",
    },
  ];

  return (
    <Center flex="1" p="10" bg={useColorModeValue("gray.50", "gray.900")}>
      <MotionVStack
        w="full"
        maxW="5xl"
        align="center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Section Heading */}
        <MotionBox variants={fadeInUp}>
          <Heading size="2xl" color={useColorModeValue("teal.600", "teal.300")}>
            Education
          </Heading>
        </MotionBox>

        {/* Cards */}
        <VStack w="full">
          {educationData.map((edu, index) => (
            <MotionBox
              key={index}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="lg"
              rounded="lg"
              p="6"
              w="full"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VStack align="start">
                {/* Title */}
                <Heading size="md" color={useColorModeValue("teal.600", "teal.300")}>
                  {edu.title}
                </Heading>

                {/* Institution and Duration */}
                <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                  {edu.institution}
                </Text>
                <Text fontSize="sm" fontWeight="bold" color={useColorModeValue("gray.700", "gray.300")}>
                  {edu.duration}
                </Text>

                {/* Details */}
                <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>
                  {edu.details}
                </Text>

                {/* Coursework (if available) */}
                {edu.coursework && (
                  <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>
                    {edu.coursework}
                  </Text>
                )}
              </VStack>
            </MotionBox>
          ))}
        </VStack>
      </MotionVStack>
    </Center>
  );
}

export default Education;
