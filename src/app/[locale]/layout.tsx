import { Box } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Providers } from "./providers";

export default async function RootLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Box mx={10}>
              <Navbar />
              {children}
              <Footer />
            </Box>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
