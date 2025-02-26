import { Box, Flex, Stack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { BottomSection } from './bottom-section';
import { Sidebar } from './sidebar';
import { TopSection } from './top-section';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Projects } from './pages/Projects';
import Experience from './pages/Experience';
import { Skills } from './pages/Skills';

function App() {
  return (
    <Flex minH="100dvh" overflow="hidden">
      <Sidebar /> {/* Sidebar stays fixed */}

      <Box flex="1" display="flex" flexDirection="column" overflow="hidden">
        <TopSection />
        
        {/* Scrollable Content */}
        <Box flex="1" overflowY="auto" maxH="calc(100vh - 120px)" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Box>

        <BottomSection />
      </Box>
    </Flex>
  );
}

export default App;
