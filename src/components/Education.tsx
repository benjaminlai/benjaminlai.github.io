import React from 'react';
import { Box, Text, VStack, Divider, Heading } from '@chakra-ui/react';

const EducationSection: React.FC = () => (
  <VStack align="start" spacing={4}>
    <SectionHeading>Education</SectionHeading>
    <Box>
      <Text fontSize="lg" fontWeight="bold" color="gray.700">
        Monash University
      </Text>
      <Text fontSize="md" color="gray.600">
        Bachelor of Business Information Systems
      </Text>
      <Text fontSize="sm" color="gray.500">
        Graduation Year: 2012
      </Text>
    </Box>

    <Divider />
  </VStack>
);

const SectionHeading: React.FC = ({ children }) => (
  <Heading color="black" as="h2" size="lg" mb={0}>
    {children}
  </Heading>
);

export default EducationSection;
