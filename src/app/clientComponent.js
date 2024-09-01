"use client"; // This is a client-side component

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { PreLoader } from "@/components/Loader";

export default function ClientWrapper({ children }) {
  

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <>
        {children}
       
      </>
    </ThemeProvider>
  );
}
