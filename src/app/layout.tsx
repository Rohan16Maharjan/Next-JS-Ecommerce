import { Box } from '@chakra-ui/react';

import { Providers } from './providers';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <Box mx={10}>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
