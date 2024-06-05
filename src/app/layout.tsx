
import React from "react";
import HeaderComponent from '../../public/pageComponents/headerComponent'
import FooterComponent from "../../public/pageComponents/footerComponent";

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Active Games</title>
              {/**StylesheetLink**/}
          </head>
          <body>
              <HeaderComponent/>
              {children}
              <FooterComponent/>
          </body>

      </html>
  )
}
