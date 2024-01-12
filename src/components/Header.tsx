import React from 'react';
import { Heading, Text, Divider, Avatar, VStack } from '@chakra-ui/react';

const Header: React.FC = () => (
  <VStack align="center" spacing={4}>
    {/* Avatar Section */}
    <Avatar size="xl" name="Benjamin Lai" src="url_to_your_image" />

    {/* Name and Title Section */}
    <VStack align="center" spacing={1}>
      <Heading color="black" as="h1" size="xl">
        Benjamin Lai
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Principal Engineer
      </Text>
    </VStack>

    {/* Divider */}
    <Divider color="red" mb={4} />
  </VStack>
);

export default Header;
