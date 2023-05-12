/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/hote1.jpeg'
import informatica2 from '../assets/hote2.jpeg'
import informatica3 from '../assets/hote3.jpeg'
import informatica4 from '../assets/hote4.jpeg'
import informatica5 from '../assets/hote5.jpeg'
// import informatica6 from '../assets/incote.jpeg'


const Informatica = () => {

    return (


        <div className="Listas" >
            <div className='Lista4'></div>
            <div className="Lista2" style={{ position: 'absolute', }}></div>
            <img src={logo2} style={{
                width: '250px',
                position: 'relative',
                top: '-30px',
                zIndex: '2'
            }} />

            <div>
                <img src={informatica} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '-50px',
                    zIndex: '2',
                    height: '600px',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia34' >
                        <p className='parrafo' style={{ fontSize: "120%", }}>
                            Pizzeria Suanny<br />
                            Direccion: Av. Anacaona, San Juan de la Maguana<br />
                            De lunes a viernes 18:00pm a 23:00 pm Martes Cerrado<br />
                            Sábado 18:00–23:00 y Domingo 18:00- 23:00<br />
                            Página web: http://pizzeriasuanny.blogspot.com/<br />
                            Teléfono: +18095572704<br />
                            Cantidad de pasantes: 4<br />


                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica2} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '300px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia35' >
                        <p className='parrafo2' style={{ fontSize: "120%", }}>
                            Lua Restaurant, Bar & Grill<br />
                            Direccion: RQ4H+7HG, Av. Independencia, San Juan de la Maguana<br />
                            De lunes a viernes 9:00am a 23:00 pm<br />
                            Sábado 9:00–23:00 y Domingo 9:00- 23:00<br />
                            Teléfono: +18498859935<br />
                            Cantidad de pasantes: 4<br />
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica3} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '700px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia36' >
                        <p className='parrafo3' style={{ fontSize: "120%", }}>
                            Coco Restaurant and Grill<br />
                            Direccion: 19 De marzo, San Juan de la Maguana<br />
                            De lunes a viernes 10:00am a 00:00 am<br />
                            Sábado 10:00–00:00 y Domingo 10:00- 00:00<br />
                            Teléfono: +18095578649<br />
                            Cantidad de pasantes: 4<br />

                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica4} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '1080px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia37' >
                        <p className='parrafo4' style={{ fontSize: "120%", }}>
                            Restaurant El Bohio<br />
                            Direccion: RQ4C+Q7R, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 23:55 pm<br />
                            Sábado 8:00–23:55 y Domingo 8:00- 23:55<br />
                            Pagina: https://es.restaurantguru.com/Restaurant-El-Bohio-San-Juan-de-la-Maguana<br />
                            Teléfono: +18095574632<br />
                            Cantidad de pasantes: 4<br />
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica5} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '1450px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia38' >
                        <p className='parrafo5' style={{ fontSize: "120%", }}>
                            Restaurante El Gran Cacique<br/>
                            Direccion: RQ4J+74V, Calle Activo 20-30, Padre Las Casas, San Juan de la Maguana<br/>
                            De lunes a viernes 8:00am a 00:00 am<br/>
                            Sábado 8:00–00:00 y Domingo 8:00- 00:00<br/>
                            Teléfono: +18095575488<br/>
                            Cantidad de pasantes: 4<br/>

                        </p>
                    </div>
                </div>
            </div>

            <div className='footer bg-dark bg-opacity-25  ' style={{ position: 'relative', top: '1300px' }}>
                <div className='footerbg'></div>
                <div className='liceo'>
                    <img className='img11' src={logo2} />
                    <h6>Liceo Politécnico Pedro Henriquez Ureña</h6>
                <h6>, Km. 27, PCSD, La Caleta, Boca Chica 11606</h6>
                <h6>809-738-4852 / 809-793-2557</h6>
                <h6>pedrohenriquez@gmail.com</h6>
                <h6>TÉRMINOS DE USO | POLÍTICAS DE PRIVACIDAD | PREGUNTAS FRECUENTES</h6>
                <h6>© 2023 TODOS LOS DERECHOS RESERVADOS</h6>
                </div>
            <p>© 2023 Liceo Politécnico Pedro Henriquez Ureña</p>
            </div>

        </div>
    )
}

export default Informatica
