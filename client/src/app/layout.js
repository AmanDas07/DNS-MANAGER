import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";
import { UserProvider } from "../../context/useContext";

export default function RootLayout({ children, title }) {
  return (
    <>
      <html>
        <UserProvider>
          <Head>

            <meta charSet="UTF-8" name="viewport" content="initial-scale=1.0 width=device-width" />
            <title>{title}</title>

          </Head>
          <body>
            <Header />
            <main style={{ minHeight: "79.7vh" }}>{children}</main>
            <Footer />
          </body>
        </UserProvider>
      </html>
    </>
  );
}
RootLayout.defaultProps = {
  title: "DNS MANAGER",
};