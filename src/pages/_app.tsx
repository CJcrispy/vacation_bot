import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;