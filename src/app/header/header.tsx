import React from "react";

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
          <link href="/stylesheets/globalGrid.css" rel="stylesheet"/>

      </head>



      <body>
      {/*header*/}
      <div className="topnavHeader" id="topnavHeader">
          {/*icon*/}
          <div className="icon" id="icon">
            <img src="/resources/icons/logo-active-transp.png" alt ="Active Logo"/>
          </div>

          {/*searchbar*/}
          <div className="searchBar" id="searchBar">
              <form>
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit">
                      <i className="" id="fa fa-search">
                          <img src="/resources/icons/icons8-search.png" alt="SearchBarButton"/>
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

