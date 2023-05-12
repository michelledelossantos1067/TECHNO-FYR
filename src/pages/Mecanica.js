/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/Taller el sammy.jpeg'
import informatica2 from '../assets/Taller francis radiadores.png'
import informatica3 from '../assets/Taller Principe de paz.jpeg'
import informatica4 from '../assets/Taller zabala.jpeg'
import informatica5 from '../assets/Gomera San Juan.jpeg'


const Informatica = () => {

    return (


        <div className="Listas" >
            <div className='Lista4'></div>
            <div className="Lista2" style={{ position: 'absolute', }}></div>
            <img src={logo2} style={{
                width: '250px',
                position: 'relative',
                top: '-20px',
                zIndex: '2'
            }} />

            <div>
                <img src={informatica} style={{
                    width: '50%',
                    height: '550px',
                    position: 'relative',
                    left: '25%',
                    top: '-40px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia21' >
                        <p className='parrafo21' style={{ fontSize: "120%", }}>
                            Taller El Sammy<br />
                            Direccion : RQ4F+G44, Dr. Cabral, San Juan de la Maguana<br />
                            De lunes a viernes Abierto 24 horas<br />
                            Sábado 8:00–14:00 y Domingo 8:00-14:00<br />
                            Teléfono: +18299420185<br />
                            Cantidad de pasantes: 3<br />




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
                    <div className='lugarPasantia22' >
                        <p className='parrafo22' style={{ fontSize: "120%", }}>
                            Taller Francis Radiadores<br />
                            Direccion : esquina, Dr. Cabral &, San Juan de la Maguana, RQ6F+C5 <br />
                            De lunes a viernes 8:00am-18:00pm<br />
                            Sábado 8:00–14:00 y Domingo 8:00-14:00<br />
                            Teléfono: +18096548334<br />
                            Cantidad de pasantes: 3<br />





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
                    <div className='lugarPasantia23' >
                        <p className='parrafo23' style={{ fontSize: "120%", }}>

                            Taller Principe de Paz<br />
                            Direccion: QQWF+8V9, C. Gastón Fernando Deligne, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 18:00 pm<br />
                            Sábado 9:00–18:00 y Domingo 9:00-18:00<br />
                            Teléfono: +18298569684<br />
                            Cantidad de pasantes: 3<br />

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
                    <div className='lugarPasantia24' >
                        <p className='parrafo24' style={{ fontSize: "120%", }}>
                            Taller Y Repuestos Zabala<br />
                            Direccion: QQW9+X9 San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 18:00 pm<br />
                            Sábado 8:00–18:00 y Domingo Cerrado<br />
                            Teléfono: +18292901416<br />
                            Cantidad de pasantes: 3<br />


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
                    <div className='lugarPasantia25' >
                        <p className='parrafo25' style={{ fontSize: "120%", }}>
                            Gomera San Juan<br />
                            Direccion : RQ3C+JXF, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 22:00 pm<br />
                            Sábado 8:00–22:00 y Domingo 8:00-22:00<br />
                            Teléfono: +18095575641<br />
                            Cantidad de pasantes: 3<br />

                        </p>
                    </div>
                </div>
            </div>
            <div className='footer bg-dark bg-opacity-25  ' style={{position:'relative',top:'1300px'}}>
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
        


            <div className='informatica'>


            </div>

        </div>
    )
}

export default Informatica
