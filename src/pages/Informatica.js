/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/informatica.jpeg'
import informatica2 from '../assets/Banco popular.jpeg'
import informatica3 from '../assets/Banreservas.jpeg'
import informatica4 from '../assets/coop aspire.jpeg'
import informatica5 from '../assets/Lachapelle.jpeg'
// import informatica6 from '../assets/incote.jpeg'


const Informatica = () => {

    return (


        <div className="Listas" style={{position:'relative',top:'200px'}}>
            <div className='Lista4'></div>
            <div className="Lista2" style={{ position: 'absolute', }}></div>
            

            <div>
                <img src={informatica} style={{
                    width: '50%',
                    position: 'relative',
                    left: '25%',
                    top: '-50px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia' >
                        <p className='parrafo' style={{ fontSize: "120%", }}>
                            Banco BHD león<br />
                            Direccion: RQ49+HXQ, 2, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 17:00 pm<br />
                            Sábado 8:00–13:00 y Domingo 8:00–13:00<br />
                            Teléfono: (809) 243-5000<br />
                            Cantidad de pasantes: 3<br />
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
                    <div className='lugarPasantia2' >
                        <p className='parrafo2' style={{ fontSize: "120%", }}>
                            Banco Banco Popular<br />
                            Direccion: Av. Anacaona 49, San Juan de la Maguana 72000<br />
                            De lunes a viernes 8:00am a 16:00 pm<br />
                            Sábado 9:00–13:00 y Domingo Cerrado<br />
                            Teléfono: (809) 557-2370<br />
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
                    <div className='lugarPasantia3' >
                        <p className='parrafo3' style={{ fontSize: "120%", }}>
                            Banco BanReservas <br />
                            Direccion: 27 De Febrero 19, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 16:00 pm<br />
                            Sábado 9:00–13:00 y Domingo Cerrado<br />
                            Teléfono: (809) 557-2230<br />
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
                    <div className='lugarPasantia4' >
                        <p className='parrafo4' style={{ fontSize: "120%", }}>
                            Banco COOP-ASPIRE San Juan<br />
                            Direccion: Av. Independencia No. 55, Centro de la Ciudad, San Juan de la Maguana 72000<br />
                            De lunes a viernes 8:00am a 22:00 pm<br />
                            Sábado 9:00–12:00 y Domingo Cerrado<br />
                            Teléfono: (809) 557-8753<br />
                            Cantidad de pasantes: 3<br />

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
                    <div className='lugarPasantia5' >
                        <p className='parrafo5' style={{ fontSize: "120%", }}>
                            LACHAPELLE Electrodomesticos<br/>
                            Direccion: RQ48+HW San Juan de la Maguana<br/>
                            De lunes a viernes 8:00am a 18:00 pm<br/>
                            Sábado Cerrado y Domingo 8:00-19:00<br/>
                            Teléfono: +18095577100<br/>
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
