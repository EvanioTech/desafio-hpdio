import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';


function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' bgGradient='linear(to-l, #7928CA, #FF0080)' padding='25px'>
        <Center>
        <Header></Header>
        </Center>
      
        
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onClick={login} colorScheme='cyan' size='sm' width='100%' marginTop='5px'>
              Button
            </Button>
          </Center>
        </Box>
        
      </Box>
    
    </ChakraProvider>
  );
}

export default App;
