import React from "react";

//next.js imports
import Image from 'next/image';

//css imports

export default function PokemonPage(){
    return(
        <>
            <div className="galleryTopSell">
                <h1>Productos más vendidos</h1>
                {/*map generated dynamic gallery here*/}
            </div>

            <div className="galleryCompleteSealed">
                <h1>Todos los productos</h1>
                {/*map generated static gallery here*/}
            </div>

        </>
    )
}