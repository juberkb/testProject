import React,{useState} from 'react';
import "./Home.css"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    GridItem,
    Button,
    Drawer,
    DrawerBody,
 
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    // DrawerFooter,
    // FormControl,
    // FormLabel,
    // Grid,
    // Select,
   
  } from '@chakra-ui/react';
import Myform from './Myform';
  
const Home = () => {
    const [students, setStudents] = useState([
      {
        studentName: '',
        fatherName: '',
        motherName: '',
        mobileNumber: '',
        altMobileNumber: '',
        address: '',
        class: '',
        stream: '',
        section: ''
      },
    ]);
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleInputChange = (index, field, value) => {
      const newStudents = [...students];
      newStudents[index][field] = value;
      setStudents(newStudents);
    };
  
    // const handleSubmit = () => {
    //   console.log(students);
    //   onClose();
    // };
  
    return (
      <TableContainer className='TableContainer'>
        <Table variant="striped" colorScheme="white" border="1px" borderColor="Black.200">
          <Thead>
            <Tr>
              <Th border="1px" borderColor="gray.200">Student Name</Th>
              <Th border="1px" borderColor="gray.200">Father's Name</Th>
              <Th border="1px" borderColor="gray.200">Mother's Name</Th>
              <Th border="1px" borderColor="gray.200">Mobile Number</Th>
              <Th border="1px" borderColor="gray.200">Alternative Mobile Number</Th>
              <Th border="1px" borderColor="gray.200">Address</Th>
              <Th border="1px" borderColor="gray.200">Class</Th>
              <Th border="1px" borderColor="gray.200">Stream</Th>
              <Th border="1px" borderColor="gray.200">Section</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.studentName}
                    onChange={(e) =>
                      handleInputChange(index, 'studentName', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.fatherName}
                    onChange={(e) =>
                      handleInputChange(index, 'fatherName', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.motherName}
                    onChange={(e) =>
                      handleInputChange(index, 'motherName', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.mobileNumber}
                    onChange={(e) =>
                      handleInputChange(index, 'mobileNumber', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.altMobileNumber}
                    onChange={(e) =>
                      handleInputChange(index, 'altMobileNumber', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.address}
                    onChange={(e) =>
                      handleInputChange(index, 'address', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.class}
                    onChange={(e) =>
                      handleInputChange(index, 'class', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.stream}
                    onChange={(e) =>
                      handleInputChange(index, 'stream', e.target.value)
                    }
                  />
                </Td>
                <Td border="1px" borderColor="gray.200">
                  <Input
                    value={student.section}
                    onChange={(e) =>
                      handleInputChange(index, 'section', e.target.value)
                    }
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <GridItem colSpan={2}>
          <Button colorScheme="blue" width="full" mt={20} onClick={onOpen}>
            Register Now
          </Button>
        </GridItem>
  
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader>Register Student</DrawerHeader>

    <DrawerBody>
      <Myform />
    </DrawerBody>

    {/* <DrawerFooter>
      <Button variant="outline" mr={7} onClick={onClose}>
        Cancel
      </Button>
      <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
    </DrawerFooter> */}
  </DrawerContent>
</Drawer>

      </TableContainer>
    );
  };
  
  export default Home;
  