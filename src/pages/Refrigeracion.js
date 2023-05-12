/* eslint-disable jsx-a11y/alt-text */

import logo2 from '../assets/logo2.png'
import informatica from '../assets/Refrigeracion refrisul.jpeg'
const Informatica = () => {

    return (


        <div className="Listas mb-5" >

            
            <div className='Lista4'></div>
            <div className="Lista2" style={{ position: 'absolute', }}></div>
            

            <div>
                <img src={informatica}  style={{
                    width: '50%',
                    height: '550px',
                    position: 'relative',
                    left: '25%',
                    top: '100px',
                    zIndex: '2',
                    borderRadius: '10px',
                    boxShadow: '0 10px 15px #000'
                }} />
                <div >
                    <div className='lugarPasantia21' >
                        <p className='parrafo21' style={{ fontSize: "120%", }}>
                            Refrisul.srl<br />
                            Direccion: Colon, San Juan de la Maguana, RQ4C+C7<br />
                            De lunes a viernes 8:00am-19:30pm<br />
                            Sábado 8:00-19:30 y Domingo Cerrado<br />
                            Teléfono: +18092236821<br />
                            Cantidad de pasantes: 3<br />


                        </p>
                    </div>
                </div>
            </div>
            <div>
            </div>

            <div className='footer bg-dark bg-opacity-25  ' style={{position:'relative',top:'80px'}}>
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
