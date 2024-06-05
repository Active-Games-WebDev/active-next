import React from 'react'

//imports to be

export default function HeaderComponent() {
    return(
            <header>
                <p className="logo">Active Games</p>
                <img src="#" alt="logo active"/>
                <div className="container">
                    <input type ="text" placeholder ="Search"/>
                    <button>Search</button>
                    <nav>
                        <a href="">Pokemon</a>
                        <a href="">Star Wars</a>
                        <a href="">One Piece</a>
                        <a href="">Magic</a>
                        <a href="">Accesorios</a>
                        <a href="">Pre-Ventas</a>
                        <a href="">Pokemon Center</a>
                        <a href="">Contacto</a>
                        <a href="">Cuenta</a>
                        <a href="">Carrito</a>
                    </nav>
                </div>
            </header>
    )
}