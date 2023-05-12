/* eslint-disable jsx-a11y/anchor-is-valid */
import logo2 from '../assets/logo2.png'
import './Navbar.css'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm  bg-dark">

                <div class="container">
                    {/* <img src={logo2} style={
                            {
                                width: '150px',
                                zIndex: '2',
                                position: 'absolute',
                                top: '-15px',
                                left: '12%'
                            }} /> */}

                    <button class="navbar-toggler d-lg-none" style={{ border: '1px solid white', zIndex: '2' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse   text-light" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0" style={{ fontSize: '20px', position: 'relative' }}>
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="/" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/form3">Admision</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/cali">Calificaciones</a>
                            </li>
                            
                            <li class="nav-item dropdown text-light">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pasantias</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="/hoteleria">Informatica</a>
                                    <a class="dropdown-item" href="/informatica">Hotereria y turismo</a>
                                    <a class="dropdown-item" href="/artes">Arte ecenicas y visuales</a>
                                    <a class="dropdown-item" href="/contabilidad">Contabilidad</a>
                                    <a class="dropdown-item" href="/mueble">Muebles</a>
                                    <a class="dropdown-item" href="/mecanica">Mecanica</a>
                                    <a class="dropdown-item" href="/refrigeracion">Refrigeracion</a>
                                    <a class="dropdown-item" href="/enfermeria">Enfermeria</a>
                                </div>
                            </li>
                        </ul>
                        <a href='/login' className=' w-50'><button className="p-2 bg-dark text-white border-white rounded col-2 m-2">Ingresar</button></a>
                        <button to='./register' className="p-2 bg-warning border-0 rounded col-2">Registrate</button>
                    </div>
                </div>

            </nav>

            
        </div>
    )
}