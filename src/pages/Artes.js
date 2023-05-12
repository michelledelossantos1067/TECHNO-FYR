/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/Escuela Cristo rey.jpeg'
import informatica2 from '../assets/Escuela de bellas artes.jpeg'
import informatica3 from '../assets/Escuela sector sureste.jpeg'
import informatica4 from '../assets/Colegio Adventista Juan Pablo Duarte.jpeg'
import informatica5 from '../assets/Pinturas montana.jpeg'


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
                    height: '550px',
                    position: 'relative',
                    left: '25%',
                    top: '-50px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia16' >
                        <p className='parrafo16' style={{ fontSize: "120%", }}>
                            Escuela Cristo Rey<br/>
                            Direccion: QQW9+FJ2, San Juan de la Maguana<br/>
                            De lunes a viernes 7:00am-16:00pm<br/>
                            Sábado y Domingo Cerrado<br/>
                            Cantidad de pasantes: 3<br/>



                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica2} style={{
                    width: '50%',
                    height: '520px',
                    position: 'relative',
                    left: '25%',
                    top: '300px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia17' >
                        <p className='parrafo17' style={{ fontSize: "120%", }}>
                            Centro Cultural Monina Campora, Escuela de Bellas Artes<br/>
                            Direccion : RQ49+Q6X, Esquina, Av. Juan Pablo Duarte & Calle San Juan de la Maguana<br/>
                            De lunes a viernes 8:00am-22:00pm<br/>
                            Sábado 8:00–22:00 y Domingo 8:00-22:00<br/>
                            Pagina web: http://www.cultura.gob.do/<br/>
                            Teléfono: +18099037074<br/>
                            Cantidad de pasantes: 5<br/>




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
                    <div className='lugarPasantia18' >
                        <p className='parrafo18' style={{ fontSize: "120%", }}>

                            Escuela Sector Sureste<br/>
                            Direccion: QQWF+MW9, San Juan de la Maguana<br/>
                            De lunes a viernes 7:00am-16:00pm<br/>
                            Sábado  y Domingo Cerrado<br/>
                            Teléfono: +18095571040<br/>
                            Cantidad de pasantes: 3<br/>




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
                    <div className='lugarPasantia19' >
                        <p className='parrafo19' style={{ fontSize: "120%", }}>
                            Colegio Adventista Juan Pablo Duarte<br/>
                            Direccion: RQ59+CMP, San Juan de la Maguana<br/>
                            De lunes a viernes 7:00am-16:00pm<br/>
                            Sábado  y Domingo Cerrado<br/>
                            Teléfono: +18095572157<br/>
                            Cantidad de pasantes: 3<br/>




                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica5} style={{
                    width: '50%',
                    height: '530px',
                    position: 'relative',
                    left: '25%',
                    top: '1450px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia20' >
                        <p className='parrafo20' style={{ fontSize: "120%", }}>
                            Pinturas Montana<br/>
                            Direccion: RQ5C+543, San Juan de la Maguana<br/>
                            De lunes a viernes 8:00am-18:00pm<br/>
                            Sábado 8:00–18:00 y Domingo Cerrado<br/>
                            Cantidad de pasantes: 3<br/>




                        </p>
                    </div>
                </div>
            </div>

            <div className='footer bg-dark bg-opacity-25  ' style={{position:'relative',top:'1300px'}}>
                <div className='footerbg'></div>
                <div className='liceo'>
                    <img className='img11' src={logo2}/>
                    <h6>Liceo Politécnico Pedro Henriquez Ureña</h6>
                    <h6>Liceo Politécnico Pedro Henriquez Ureña</h6>
                <h6>, Km. 27, PCSD, La Caleta, Boca Chica 11606</h6>
                <h6>809-738-4852 / 809-793-2557</h6>
                <h6>pedrohenriquez@gmail.com</h6>
                <h6>TÉRMINOS DE USO | POLÍTICAS DE PRIVACIDAD | PREGUNTAS FRECUENTES</h6>
                <h6>© 2023 TODOS LOS DERECHOS RESERVADOS</h6>
                </div>
            <p>© 2023 Liceo Politécnico Pedro Henriquez Ureña</p>
            </div>

            <div className='informatica'>


            </div>

        </div>
    )
}

export default Informatica
