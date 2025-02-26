import { Box, Flex, Stack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'; // Import routing components
import { BottomSection } from './bottom-section';
import { Sidebar } from './sidebar';
import { TopSection } from './top-section';
import { Home } from './pages/Home'; // Import new components
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';

function App() {
  return (
    <Flex minH='100dvh'>
      <Sidebar /> {/* Sidebar is always visible */}

      <Box flex='1'>
        <Stack h='full'>
          <TopSection />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
          <BottomSection />
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;