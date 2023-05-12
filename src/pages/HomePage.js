/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react"
import logo2 from '../assets/logo2.png'
import styled from "styled-components"
import Burger from './Burger'
import slider from '../assets/slider-1.jpeg'
import pc from '../assets/pc.png'
import libro from '../assets/libro.png'
import ins from '../assets/universidad.png'
import registro from '../assets/registro.png'
import educacion from '../assets/educacion.png'
import liceo from '../assets/PHU-3.jpeg'
import foto1 from '../assets/foto1.avif'
import gra from '../assets/siluetas-de-estudiantes-con-gorros-graduado-en-fila-al-atardecer-banner-web-la-ceremonia-graduación-un-universidad-173007714.jpeg'
import hote from '../assets/hote.png'
import conta from '../assets/contabi.jpeg'
import info from '../assets/info.webp'




export default function HomePage() {






    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <NavContainer>

            <div >

                <div id="carouselId" class="carousel slide mb-5" data-bs-ride="carousel">
                    <ol class="carousel">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src={liceo} class="img w-100 d-block" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img src={foto1} class="img w-100 d-block" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img src={gra} class="img w-100 d-block" alt="Third slide" />
                        </div>
                    </div>
                    <button class="" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span class="" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span class="" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>





                <div className='burguer'>
                    <Burger clicked={clicked} handleClick={handleClick} />

                </div>

                <div className="Seccion2">
                    <div className="apartado1">

                    </div>
                </div>
                <div className="">
                    <div className="button mb-5 ">
                        <div className="botones ">
                            <a href="/areas"><button type="button" class="btn bg-white bg-opacity-75 shadow p-5 w-25 mb-3 m-2 border col-1  border-dark rounded-1"><img src={pc} className="w-50"/><hr />Areas</button></a>
                            <a href="/form"><button type="button" class="btn bg-white bg-opacity-75 shadow p-5 w-25 m-2 border border-dark rounded-1"><img src={ins} className="w-50" /><hr />INF Pasantia</button></a>
                            <a href="/form3"><button type="button" class="btn bg-white bg-opacity-75 shadow p-5 w-25 m-2 border border-dark rounded-1"><img src={registro} className="w-50" /><hr />Registro</button></a>

                        </div>

                    </div>
                </div>
                <div className="introduccion">
                    <div className="conocernos">
                        <div class="card w-50 container-fluid shadow bg-primary bg-opacity-25 text-dark  ">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p class="">Techno FYR es un sitio web que proporciona información sobre el ámbito educativo a nivel secundario, mas concretamente del Politécnico Pedro Henrique Ureña con el objetivo de brindar información útil y actualizada sobre diversos topicos.<cite title="Source title"></cite></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="botones2">
                        <a href="/hoteleria"><button type="button" class="btn text-dark shadow-lg p-3 mb-5 bg-light  p-5 w-25 mb-3 m-2 border border-secondary border-opacity-50 rounded-1"><img src={hote} className="w-75" /><hr /><h2>Hoteleria y Turismo</h2> </button></a>
                       <a href="/contabilidad"><button type="button" class="btn shadow-lg p-3 mb-5 bg-light text-dark p-5 w-25 m-2 border border-secondary border-opacity-50 rounded-1"><img src={conta} className="w-75" /><hr /><h2>Contabilidad</h2></button></a>
                        <a href="/informatica"><button type="button" class="btn shadow-lg p-3 mb-5 bg-light text-dark p-5 w-25 m-2 border border-secondary border-opacity-50  rounded-1"><img src={info} className="w-75" /><hr /> <h2>Informatica</h2></button></a>
                    </div>
                </div>



                <div className="inf container-fluid">
                    <div className="informacion container-fluid">
                        <div class="card w-25 container-end shadow">
                            <div class="card-body">
                                <h4 class="card-title">Departamento de Inscripciones</h4>
                                <a href="#" className="mb-5">liceopedrohenriquesureña@gmail.com</a>
                                <br />
                                <a href="#" className="text-decoration-none mb-3">809-906-6054 <samp className="text-dark text-decoration-none ">Exts. 379 / 380 / 381 / 321</samp></a>
                                <br />
                                <a href="#" className="text-decoration-none mb-3">WhatsApp <br /><samp className="text-primary text-decoration-none ">
                                    829-451-4237</samp></a>
                                <hr />
                                <h5>Dirigido a:</h5>
                                <p className="text-primary">Según calendario de admisión</p>
                                <hr />
                                <h5>Tiempo de realización:</h5>
                                <p className="text-primary">Público general, jóvenes y adultos con grado de bachiller y/o bachiller técnico, interesados en realizar alguna de nuestras carreras tecnológicas de 2 años.</p>
                                <hr />
                                <h5>Canal de Prestación:</h5>
                                <p className="text-primary">Presencial, Web y Telefónica</p>
                                <hr />
                                <h5>Horario de prestación:</h5>
                                <p className="text-primary">Lunes - viernes │ 8:00 a. m. - 4:00 p. m.</p>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
            <div className='footer bg-dark bg-opacity-25  ' style={{position:'relative',top:'-450px'}}>
                <div className='footerbg'></div>
                <div className='liceo'>
                    <img className='img11' src={logo2}/>
                <h6>Liceo Politécnico Pedro Henriquez Ureña</h6>
                <h6>, Km. 27, PCSD, La Caleta, Boca Chica 11606</h6>
                <h6>809-738-4852 / 809-793-2557</h6>
                <h6>pedrohenriquez@gmail.com</h6>
                <h6>TÉRMINOS DE USO | POLÍTICAS DE PRIVACIDAD | PREGUNTAS FRECUENTES</h6>
                <h6>© 2023 TODOS LOS DERECHOS RESERVADOS</h6>
                </div>
            <p>© 2023 Liceo Politécnico Pedro Henriquez Ureña</p>
            </div>
        </NavContainer>

    )

}
const NavContainer = styled.nav`


.burguer{
    @media(min-width:768px){
        display:none;     }
}
`