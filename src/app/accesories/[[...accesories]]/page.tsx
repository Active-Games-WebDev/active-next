import React from "react";

//next.js imports
import Image from 'next/image';

//css imports



export default function AccesoriesPage({params}: {params: {accesories:string}}){
    return(
        <h1>Active Games accesories  {params.accesories}</h1>
    )
}