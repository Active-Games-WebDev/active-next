import React from "react";
import Image from "next/image";

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

          <link href="./stylesheets/globalGrid.css" rel="stylesheet"/>

      </head>

      <body>
      {/*header*/}
      <div className="comingSoon" id="comingSoon">
          <link href="./stylesheets/comingSoon.css" rel="stylesheet"/>
          <img className="pageHeaderIcon1080" src="/resources/active-proximamente-@1080.png" alt="active-comingSoon"/>
          <img className="pageHeaderIconPhone" src="/resources/active-proximamente-phone-size.png"
               alt="active-comingSoon"/>

          <div className="row1">
              <div className="col-5">
                  <a className="wspButton" href="https://api.whatsapp.com/send?phone=56927428466">
                      <img className="wspButtonImage" src="/resources/wspSvg.png" alt="wspButton"/>
                  </a>
              </div>
          </div>

      </div>

      </body>
      </html>
  )
}

