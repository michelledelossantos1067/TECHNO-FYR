/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/Hospital IDEN san juan.jpeg'
import informatica2 from '../assets/Centro de gastroenterologia cegaNUTRI.jpeg'
import informatica3 from '../assets/Centro medico edif profesiona.jpeg'
import informatica4 from '../assets/COPCENTRAL.jpeg'
import informatica5 from '../assets/Clinica cristiana asepsis.jpeg'


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
                    height: '610px',
                    position: 'relative',
                    left: '25%',
                    top: '-50px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia6' >
                        <p className='parrafo6' style={{ fontSize: "120%", }}>
                            Hospital IDEN San Juan<br />
                            Direccion : Km 1, Entrada San Juan, Carr. Sánchez, San Juan de la Maguana, RQ2P+48
                            De lunes a viernes 8:00am-16:00pm<br />
                            Sábado y Domingo Cerrado<br />
                            Teléfono: +18095571162<br />
                            Cantidad de pasantes: 5<br />

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
                    <div className='lugarPasantia7' >
                        <p className='parrafo7' style={{ fontSize: "120%", }}>
                            Centro de Gastroenterología, nutrición y especialidades, CEGANUTRI<br />
                            Direccion : Pedro Henriquez Urena 31, San Juan de la Maguana 72000, RQ29+RP<br />
                            De lunes a viernes 7:00am-14:00pm<br />
                            Sábado y Domingo Cerrado<br />
                            Teléfono: +18095578228<br />
                            Cantidad de pasantes: 5<br />


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
                    <div className='lugarPasantia8' >
                        <p className='parrafo8' style={{ fontSize: "120%", }}>
                            Centro De Atención Primaria<br />
                            Direccion : QQXH+C58, San Juan de la Maguana<br />
                            De lunes a viernes 8:300am-16:00pm<br />
                            Sábado y Domingo Cerrado<br />
                            Cantidad de pasantes: 5<br />


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
                    <div className='lugarPasantia9' >
                        <p className='parrafo9' style={{ fontSize: "120%", }}>
                            Clinica Cristiana Asepsis<br />
                            Direccion : RQ65+9H4, Sanchez, San Juan de la Maguana<br />
                            De lunes a viernes 9:00am-17:00pm<br />
                            Sábado y Domingo Cerrado<br />
                            Teléfono: +18095574230<br />
                            Cantidad de pasantes: 5<br />


                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src={informatica5} style={{
                    width: '50%',
                    height:'530px',
                    position: 'relative',
                    left: '25%',
                    top: '1450px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia10' >
                        <p className='parrafo10' style={{ fontSize: "120%", }}>
                            Clínica Odontológica Dental Dr Wilson Herrera<br/>
                            Direccion : Club De Leones 15, San Juan de la Maguana, RQ5G+68<br/>
                            De lunes a viernes 8:00am-22:00pm<br/>
                            Sábado 8:00–22:00 y Domingo 8:00-22:00<br/>
                            Cantidad de pasantes: 5<br/>


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

        </div>
    )
}

export default Informatica
