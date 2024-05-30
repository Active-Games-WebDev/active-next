import React from "react";
import Header from "./header/header"



export default function App() {
  return (
      <html lang="en">
      <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          {
              //anton ttf
          }
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>

          {
              //avenir light
          }

          <link href="./src/app/resources/fonts/Avenir-Light.ttf" rel="font"/>

          <link href="./src/app/resources/fonts/Avenir-Light.ttf" rel="stylesheet"/>


          <link href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" rel="stylesheet"/>
          {/*pure responsive*/}
          <link href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css" rel="stylesheet"/>
          {/*pure grids responsive*/}


      </head>
      <body>
        <Header/>

      </body>
      </html>
  )
}

