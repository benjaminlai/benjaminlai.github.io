import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import EducationSection from './components/Education';
import CareerHistorySection from './components/CareerHistory';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Container
          maxW="container.md"
          bg="white"
          boxShadow="lg"
          p={6}
          borderRadius="lg"
        >
          <Header />
          <CareerHistorySection />
          <EducationSection />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
