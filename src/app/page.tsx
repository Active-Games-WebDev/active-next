import React from "react";


//next.js imports
import Image from 'next/image';

//css imports

//html imports

export default function LandingPage(){
    return(
    <>
        <section id="hero">
            <h1>Compra aqui<br/>Todos los singles</h1>
            <button>Buscar!</button>
            <h2>BANNER</h2>
        </section>
        <section id="mas vendidos">
            <div className="container">
                <h2>Los mas vendidos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, repellat blanditiis corporis nesciunt beatae minima
                    officia at accusamus quo. Quidem exercitationem sequi in id aliquam error eligendi? Mollitia, odio animi!</p>
            </div>
        </section>

        <section id="Nuestros productos">
            <div className="container">
                <h2>Nuestros productos</h2>
                <div className="productos">Pokémon JCC</div>
                <button>Ver más</button>
                <div className="productos">Pokémon Center</div>
                <button>Ver más</button>
                <div className="productos">Star wars unlimited</div>
                <button>Ver más</button>
                <div className="productos">One Piece TCG</div>
                <button>Ver más</button>
                <div className="productos">Magic the Gatering</div>
                <button>Ver más</button>
                <div className="productos">Otros TCG</div>
                <button>Ver más</button>
                <div className="productos">Accesorios</div>
                <button>Ver más</button>
            </div>
        </section>

        <section id="calendario de torneos">
            <div className="container">
                <h2>Proximos torneos</h2>
                <div className="fecha">torneo 1</div>
                <button>inscripcion</button>
                <div className="fecha">torneo 2</div>
                <button>inscripcion</button>
                <div className="fecha">torneo 3</div>
                <button>incripcion</button>
                <div className="fecha">torneo 4</div>
                <button>inscripcion</button>
            </div>
        </section>
    </>
    )
}