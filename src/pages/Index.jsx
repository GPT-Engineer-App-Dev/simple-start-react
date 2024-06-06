import { Container, Text, VStack, Box, Flex, Spacer, Button, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>About</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">Contact</Button>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton aria-label="Menu" icon={<FaBars />} />
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with a responsive navigation bar.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;