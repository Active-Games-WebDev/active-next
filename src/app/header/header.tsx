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


      </head>



      <body>
      {/*header*/}
      <div className="topnavHeader" id="topnavHeader">
          {/*icon*/}
          <div className="icon" id="icon">
              <Image src="/resources/icons/logo-active-transp.svg"
                     width={500}
                     height={500}
                     alt="Active Games Logo"/>
          </div>

          {/*searchbar*/}
          <div className="searchBar" id="searchBar">
              <form>
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit">
                      <i className="" id="fa fa-search">
                          <Image src="/resources/icons/icons8-search.svg"
                                 width={30}
                                 height={30}
                                 alt="Active Games Logo"/>
                      </i>
                  </button>
              </form>
          </div>

          <div className="separator" id="separator">
          </div>

          {/*dropdowns*/}

          <div className="dropdown1" id="dropdown1">
              <button className="dropbtn1">
                  Pokémon
              </button>
              <div className="dropdown-content1" id="dropdown-content1">
                  <a href="#">Twilight Masquerade</a>{/*SV6*/}
                  <a href="#">Temporal Forces</a>{/*SV5*/}
                  <a href="#">Paldean Fates</a>{/*SV4.5*/}
                  <a href="#">Paradox Rift</a>{/*SV4*/}
                  <a href="#">151</a>{/*SV3.5*/}
                  <a href="#">Obsidian Flames</a>{/*SV3*/}
                  <a href="#">Paldea Evolved</a>{/*SV2*/}
                  <a href="#">Scarlet & Violet</a> {/*SV1*/}
              </div>
          </div>

      </div>

      </body>
      </html>
  )
}

