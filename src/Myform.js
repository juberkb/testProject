import './App.css';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
  Select,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Myform = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    class: '',
    section: '',
    course: '',
    dob: '',
    mobileNumber: '',
    emailAddress: '',
    address: '',
  });

  const [validity, setValidity] = useState({
    mobileNumber: false,
    emailAddress: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    let isValid = false;

    if (id === 'mobileNumber') {
      const mobileRegex = /^[0-9]{10}$/;
      isValid = mobileRegex.test(value);
    }

    if (id === 'emailAddress') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    }

    setFormState({
      ...formState,
      [id]: value,
    });

    setValidity({
      ...validity,
      [id]: isValid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box maxW="100%" mx="auto" mt="2" p="8" mb="10" boxShadow="xl" borderRadius="md" bg="white">
      <Heading as="h2" size="lg" mb="2" textAlign="center">
        Admission Form
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={3}>
        <GridItem colSpan={[4, 4, 4]}>
          {/* Placeholder for image */}
        </GridItem>

        <GridItem colSpan={[2, 2, 4]}>
          <form onSubmit={handleSubmit}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <FormControl id="firstName" isRequired className="floating-label">
                <Input
                  placeholder=" "
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <FormLabel>First Name</FormLabel>
              </FormControl>

              <FormControl id="lastName" isRequired className="floating-label">
                <Input
                  placeholder=" "
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <FormLabel>Last Name</FormLabel>
              </FormControl>

              <FormControl id="gender" isRequired className="floating-label">
                <FormLabel>Gender</FormLabel>
                <Select
                  placeholder=" "
                  value={formState.gender}
                  onChange={handleChange}
                  mt={5}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </FormControl>

              <FormControl id="class" isRequired className="floating-label">
                <FormLabel>Select Class</FormLabel>
                <Select
                  placeholder=" "
                  value={formState.class}
                  onChange={handleChange}
                  mt={5}
                >
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </Select>
              </FormControl>

              <FormControl id="section" isRequired className="floating-label">
                <FormLabel>Select Section</FormLabel>
                <Select
                  placeholder=" "
                  value={formState.section}
                  onChange={handleChange}
                  mt={5}
                >
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                </Select>
              </FormControl>

              <FormControl id="course" isRequired className="floating-label">
                <FormLabel>Select Course</FormLabel>
                <Select
                  placeholder=" "
                  value={formState.course}
                  onChange={handleChange}
                  mt={5}
                >
                  <option value="pcm">PCM</option>
                  <option value="pcb">PCB</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </Select>
              </FormControl>

              <FormControl id="dob" isRequired className="floating-label">
                <FormLabel>Enter D.O.B</FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={formState.dob}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="mobileNumber" isRequired className="floating-label">
                <InputGroup>
                  <Input
                    placeholder=" "
                    value={formState.mobileNumber}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    {validity.mobileNumber ? (
                      <FaCheckCircle color="green" />
                    ) : formState.mobileNumber ? (
                      <FaExclamationCircle color="red" />
                    ) : null}
                  </InputRightElement>
                </InputGroup>
                <FormLabel>Mobile Number</FormLabel>
              </FormControl>

              <FormControl id="emailAddress" isRequired className="floating-label">
                <InputGroup>
                  <Input
                    placeholder=" "
                    value={formState.emailAddress}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    {validity.emailAddress ? (
                      <FaCheckCircle color="green" />
                    ) : formState.emailAddress ? (
                      <FaExclamationCircle color="red" />
                    ) : null}
                  </InputRightElement>
                </InputGroup>
                <FormLabel>Email Address</FormLabel>
              </FormControl>

              <GridItem colSpan={2}>
                <FormControl id="address" className="floating-label">
                  <Input
                    placeholder=" "
                    value={formState.address}
                    onChange={handleChange}
                  />
                  <FormLabel>Address</FormLabel>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2} className='ButtonStudentForm'>
                <Button colorScheme="blue" type="submit" width="full" mt={20}>
                  Submit
                </Button>
              </GridItem>
            </Grid>
          </form>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Myform;
