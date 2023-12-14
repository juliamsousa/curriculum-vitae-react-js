import React from 'react';

import "./header.css"
export default function Header() {

    return ( 
    /*SECAO DA PAGINA INICIAL COM LINKS DE REDES SOCIAIS E MENU DE NAVEGACAO*/
    <header id="home">
        <div className="menu">
                <h1 className='titulo'>JM.</h1>

            <nav className="navegacao">
                <ul>
                    <li className="referencia">
                        <a href="#experience-section">Currículo</a>
                    </li>

                    <li className="referencia">
                        <a href="#div-slider">Projetos</a>
                    </li>

                    <li className="referencia">
                        <a href="#div-slider">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
}