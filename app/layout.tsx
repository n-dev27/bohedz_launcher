"use client";
import { ConfigProvider } from 'antd';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="">
        <ConfigProvider 
          theme={{
            components: {
              Switch: {
                handleSize: 20,
                trackHeight: 24,
              },
              Slider: {
                handleSize: 16,
                handleColor: '#2563EB'
              },
            }
          }}
        >
          {/* <div className="w-screen h-screen top-0 left-0 -z-10 fixed_background fixed" /> */}
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ConfigProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
