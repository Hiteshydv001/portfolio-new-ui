import { Box, Circle, Flex, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from './components/ui/tooltip';
import { NewChatIcon, SmallGPTIcon, UpgradeIcon } from './icons/sidebar-icons';

// Portfolio data with routes
const portfolioItems = [
  { id: 1, title: "About Me", description: "Hitesh Kumar, AI/ML Enthusiast", path: "/about" },
  { id: 2, title: "Education", description: "B.Tech CSE (AI/ML), Chandigarh University", path: "/education" },
  { id: 3, title: "Projects", description: "Gemini BlogBot & More", path: "/projects" },
  { id: 4, title: "Experience", description: "AAE, Think Blue Data, Code Clause", path: "/experience" },
  { id: 5, title: "Skills", description: "Python, React, ML, Web Dev", path: "/skills" },
];

export function Sidebar() {
  return (
    <Box
      bg="bg.muted"
      w="260px"
      overflow="hidden"
    >
      <Stack h="full" px="3" py="2">
        <Flex justify="flex-end">
          <Tooltip content="Home" showArrow>
            <NavLink to="/">
              <IconButton variant="ghost">
                <NewChatIcon fontSize="2xl" color="fg.muted" />
              </IconButton>
            </NavLink>
          </Tooltip>
        </Flex>

        {/* Dynamic Portfolio Items */}
        <Stack px="2" gap="0" flex="1">
          {portfolioItems.map((item) => (
            <HStack
              key={item.id}
              position="relative"
              className="group"
              _hover={{ layerStyle: "fill.muted", textDecor: "none" }}
              px="1"
              h="10"
              borderRadius="lg"
              w="100%"
              whiteSpace="nowrap"
            >
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  width: "100%",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
                })}
              >
                <HStack>
                  <Circle size="6" bg="bg" borderWidth="1px">
                    <SmallGPTIcon fontSize="md" />
                  </Circle>
                  <Stack gap="0">
                    <Text fontSize="sm" fontWeight="md">
                      {item.title}
                    </Text>
                    <Text fontSize="xs" color="fg.subtle">
                      {item.description}
                    </Text>
                  </Stack>
                </HStack>
              </NavLink>
            </HStack>
          ))}
        </Stack>

        {/* Use Chakra's Link instead of Box */}
        <Link
          href="mailto:hiteshofficial0001@gmail.com"
          _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
          borderRadius="lg"
          px="1"
          py="2"
        >
          <HStack whiteSpace="nowrap">
            <Circle size="8" fontSize="lg" borderWidth="1px">
              <UpgradeIcon />
            </Circle>
            <Stack gap="0" fontWeight="medium">
              <Text fontSize="sm">Contact Me</Text>
              <Text fontSize="xs" color="fg.subtle">
                +91-7206139480 | hiteshofficial0001@gmail.com
              </Text>
            </Stack>
          </HStack>
        </Link>
      </Stack>
    </Box>
  );
}