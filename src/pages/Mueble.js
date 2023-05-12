/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/mueble1.jpeg'
import informatica2 from '../assets/mueble2.png'
import informatica3 from '../assets/mueble3.jpeg'
import informatica4 from '../assets/mueble4.jpeg'

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
                    <div className='lugarPasantia30' >
                        <p className='parrafo21' style={{ fontSize: "120%", }}>
                            B & L Electromuebles<br />
                            Direccion : RQ59+R55, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am-18:00pm<br />
                            Sábado 8:00–18:00 y Domingo Cerrado<br />
                            Teléfono: +18095574900<br />
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
                    <div className='lugarPasantia31' >
                        <p className='parrafo22' style={{ fontSize: "120%", }}>
                            Electromuebles JEM<br />
                            Direccion : Casi esquina, RD-527 Carretera, San Juan de la Maguana, RQ88+RR<br />
                            De lunes a viernes 8:00am-19:00pm<br />
                            Sábado 8:00–19:00 y Domingo Cerrado<br />
                            Teléfono: +18095576717<br />
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
                    <div className='lugarPasantia32' >
                        <p className='parrafo23' style={{ fontSize: "120%", }}>
                            Electromuebles VIP<br />
                            Direccion : Av. Independencia 26, San Juan de la Maguana, RQ49+G8<br />
                            De lunes a viernes 8:00am-19:00pm<br />
                            Sábado 8:00–19:00 y Domingo Cerrado<br />
                            Teléfono: +18095577200<br />
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
                    <div className='lugarPasantia33' >
                        <p className='parrafo24' style={{ fontSize: "120%", }}>
                            Tapicería Fortuna<br/>
                            Direccion : RQ2G+GXG, San Juan de la Maguana<br/>
                            De lunes a viernes 8:00am-19:00pm<br/>
                            Sábado 8:00–19:00 y Domingo Cerrado<br/>
                            Teléfono: +18095572134<br/>
                            Cantidad de pasantes: 3<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='footer bg-dark bg-opacity-25  ' style={{ position: 'relative', top: '1000px' }}>
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



            <div className='informatica'>


            </div>

        </div>
    )
}

export default Informatica
