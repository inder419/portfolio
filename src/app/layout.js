import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ClientWrapper from "./clientComponent";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

// Define the metadata for the application
export const metadata = {
  title: "Portfolio | Inderjeet",
  description: "Hello! I'm Inderjeet, a passionate web developer and problem solver. Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  // Meta data properties
  const title = "Portfolio | Inderjeet";
  const description =
    "Hello! I'm Inderjeet, a passionate web developer and problem solver. Welcome to my portfolio";
  const avatar =
    "https://res.cloudinary.com/dyle3hnpw/image/upload/v1696091629/portfolio/WhatsApp_Image_2023-09-30_at_10.02.55_PM_jk44v9.jpg";
  const url = "https://Inderjeet-sharma-myportfolio.vercel.app/";

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={avatar} />
        <meta property="og:image:width" content="612" />
        <meta property="og:image:height" content="612" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta property="twitter:image" content={avatar} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Inderjeet_1_Sharma" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <link rel="canonical" href={url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/assets/icons/favicon/site.webmanifest"
        />
      </head>
      <body className={inter.className}>
      <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
