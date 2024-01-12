import React from 'react';
import { Box, Text, VStack, Divider, Heading } from '@chakra-ui/react';

interface CareerHistoryItem {
  company: string;
  position: string;
  date: string;
}

const careerHistoryData: CareerHistoryItem[] = [
  {
    company: 'Prezzee',
    position: 'Technical Lead',
    date: 'Jul 2020 - Present',
  },
  {
    company: 'SEEK',
    position: 'Principal Software Developer',
    date: 'Jan 2022 - Jun 2022',
  },
  {
    company: 'SEEK',
    position: 'Senior Software Developer',
    date: 'Jun 2019 - Jan 2022',
  },
  {
    company: 'SEEK',
    position: 'Software Developer',
    date: 'May 2016 - Jun 2019',
  },
  {
    company: 'Sportsbet',
    position: 'Software Developer in Test',
    date: 'Jun 2014 - May 2016',
  },
  {
    company: 'Suncorp Group',
    position: 'Software Engineer',
    date: 'Oct 2012 - Jun 2014',
  },
];

const sortCareerHistory = (
  data: CareerHistoryItem[]
): Record<string, CareerHistoryItem[]> => {
  const sortedData: Record<string, CareerHistoryItem[]> = {};

  data.forEach((item) => {
    const { company } = item;

    if (!sortedData[company]) {
      sortedData[company] = [];
    }

    sortedData[company].push(item);

    sortedData[company].sort((a, b) => a.position.localeCompare(b.position));
  });

  return sortedData;
};

const CareerHistorySection: React.FC = () => {
  const sortedCareerHistory = sortCareerHistory(careerHistoryData);

  return (
    <VStack align="start" spacing={4}>
      <SectionHeading>Career History</SectionHeading>
      {Object.entries(sortedCareerHistory).map(
        ([company, positions], index) => (
          <Box key={index}>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              {company}
            </Text>
            {positions.map((item, subIndex) => (
              <CareerItem key={subIndex} {...item} />
            ))}
          </Box>
        )
      )}
      <Divider />
    </VStack>
  );
};

const CareerItem: React.FC<CareerHistoryItem> = ({ position, date }) => (
  <Box>
    <Text fontSize="md" color="gray.600">
      {position}
    </Text>
    <Text fontSize="sm" color="gray.500" mb={2}>
      {date}
    </Text>
  </Box>
);

const SectionHeading: React.FC = ({ children }) => (
  <Heading color="black" as="h2" size="lg" mb={0}>
    {children}
  </Heading>
);

export default CareerHistorySection;
