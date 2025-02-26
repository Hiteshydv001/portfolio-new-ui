import { 
  Box, 
  Center, 
  Heading, 
  VStack, 
  Text, 
  HStack, 
  Badge, 
  Icon 
} from '@chakra-ui/react';

import { FaCode, FaBrain, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  useColorModeValue,
} from "@/components/ui/color-mode"

// Motion-enabled Box
const MotionBox = motion(Box);

// Skills Data
const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "C++"],
    icon: FaCode,
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning",
      "Deep Learning", "Generative AI", "NLP", "Computer Vision",
      "Time Series Analysis", "Recommendation Systems", "Anomaly Detection"
    ],
    icon: FaBrain,
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV",
      "Hugging Face", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Plotly", "Dask"
    ],
    icon: FaCode,
  },
  {
    category: "Data Science & Analytics",
    items: [
      "Statistical Analysis", "A/B Testing", "Hypothesis Testing",
      "Feature Engineering", "Data Wrangling", "Exploratory Data Analysis (EDA)",
      "Predictive Modeling", "Data Visualization"
    ],
    icon: FaBrain,
  },
  {
    category: "Big Data & Cloud Computing",
    items: ["Apache Spark", "Hadoop", "Google BigQuery", "AWS", "Azure", "Databricks"],
    icon: FaCloud,
  },
  {
    category: "Databases & Data Storage",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "NoSQL", "Snowflake"],
    icon: FaDatabase,
  },
  {
    category: "MLOps & Model Deployment",
    items: [
      "Model Training & Optimization", "ML Pipeline Automation",
      "Model Deployment using TensorFlow Serving", "Flask", "FastAPI",
      "Docker", "Kubernetes", "CI/CD for ML"
    ],
    icon: FaTools,
  },
  {
    category: "Development Tools & IDEs",
    items: ["Jupyter Notebook", "VS Code", "PyCharm", "Git", "GitHub", "GitLab", "Tableau", "Power BI"],
    icon: FaTools,
  },
];

export function Skills() {
  // Dynamic Colors for Light & Dark Mode
  const bgGradient = useColorModeValue("linear(to-b, gray.100, white)", "linear(to-b, gray.900, gray.800)");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const badgeColorScheme = useColorModeValue("blue", "cyan");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Center flex="1" py={8} bgGradient={bgGradient}>
      <VStack maxW="4xl" w="full">
        
        {/* Heading */}
        <Heading size="2xl" textAlign="center" color={headingColor} mb={6}>
          My Technical Skills
        </Heading>
        
        <Text fontSize="xl" textAlign="center" color={textColor} mb={12}>
          A comprehensive overview of my expertise in AI, ML, data science, and development!
        </Text>

        {/* Skill Cards */}
        <VStack w="full">
          {skills.map((skill, index) => (
            <MotionBox
              key={skill.category}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="lg"
              p={8}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              _hover={{ boxShadow: "2xl", transform: "translateY(-10px)" }}
              borderWidth="1px"
              borderColor={cardBorder}
              w="full"
            >
              <VStack align="start">
                
                {/* Category Title & Icon */}
                <HStack align="start">
                  <Icon as={skill.icon} boxSize={8} color="teal.500" />
                  <VStack align="start" flex={1}>
                    <Heading size="lg" color={headingColor}>
                      {skill.category}
                    </Heading>

                    {/* Skill Badges */}
                    <HStack wrap="wrap">
                      {skill.items.map((item, idx) => (
                        <Badge key={idx} colorScheme={badgeColorScheme} variant="solid" fontSize="md" p={2}>
                          {item}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </HStack>

              </VStack>
            </MotionBox>
          ))}
        </VStack>

      </VStack>
    </Center>
  );
}

export default Skills;
