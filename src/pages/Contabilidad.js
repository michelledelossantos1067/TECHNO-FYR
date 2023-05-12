/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import informatica from '../assets/Super annerys.jpeg'
import informatica2 from '../assets/super Digma.jpeg'
import informatica3 from '../assets/super el detallista.jpeg'
import informatica4 from '../assets/Super lucy.jpeg'
import informatica5 from '../assets/Super Marelys.jpeg'


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
                    <div className='lugarPasantia11' >
                        <p className='parrafo11' style={{ fontSize: "120%", }}>
                            Supermercado Annerys<br />
                            Direccion: RQ5C+JG6, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 21:00 pm<br />
                            Sábado 8:00–21:00 y Domingo 8:00- 14:00<br />
                            Teléfono: (809) 557-5071<br />
                            Cantidad de pasantes: 4<br />


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
                    <div className='lugarPasantia12' >
                        <p className='parrafo12' style={{ fontSize: "120%", }}>
                            Supermercado DIGMA ABASTECIMIENTOS<br />
                            Direccion: Av. Eusebio Puello Esq, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 18:30 pm
                            Teléfono: (809) 557-1884<br />
                            Sábado 8:00–18:30 y Domingo Cerrado<br />
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
                    <div className='lugarPasantia13' >
                        <p className='parrafo13' style={{ fontSize: "120%", }}>

                            Supermercado El Detallista 2do<br />
                            Direccion: RQ8G+85V, San Juan de la Maguana<br />
                            De lunes a viernes 8:00am a 21:00 pm<br />
                            Sábado 8:00–21:00 y Domingo 8:00- 14:00<br />
                            Teléfono: (809) 557-5210<br />
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
                    <div className='lugarPasantia14' >
                        <p className='parrafo14' style={{ fontSize: "120%", }}>
                            Supermercado Lucy y Ramos<br />
                            Direccion: Villa liberación, San Juan de la Maguana<br />
                            Abierto 24/7<br />
                            Pagina web: https://centraldelderecho.net/supermercado-lucy-y-ramos-15421014284768944587/<br />
                            Teléfono: 809-557-2229<br />
                            Cantidad de pasantes: 4<br />



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
                    <div className='lugarPasantia15' >
                        <p className='parrafo15' style={{ fontSize: "120%", }}>
                            Supermercado Marelys<br/>
                            Direccion: Wenceslao Ramirez, San Juan de la Maguana<br/>
                            De lunes a viernes 8:30am a 20:30 pm<br/>
                            Sábado 8:30–18:30 y Domingo 8:00- 14:00<br/>
                            Teléfono: (809) 557-9367<br/>
                            Cantidad de pasantes: 4<br/>
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
