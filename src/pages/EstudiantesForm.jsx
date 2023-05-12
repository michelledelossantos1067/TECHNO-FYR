/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState} from 'react';
import logo2 from '../assets/logo2.png'
import '../components/Navbar.css'

function EstudiantesForm(props) {


    const [formvalue, setFormvalue] = useState({ name: '', email: '', password: '' })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
        //console.log(formvalue);
    }
    const handleFormsubmit = (e) => {
        e.preventDefault();
        console.log(formvalue);
    }
   
    return (


        <div className="Listas">

            <img src={logo2} style={{
                width: '250px',
                position: 'relative',
                top: '15px',
                zIndex: '2'

            }} />

            <h1 style={{
                position: 'absolute',
                overflow: 'hidden',
                left: '15%',
                top: '200px',
                fontSize: '35px'
            }}>INICIA TU PROCESO DE ADMISIÓN COMPLETANDO ESTE FORMULARIO</h1>

            <hr className='hr' />

            <form className='form  w-75  container-fluid' onChange={handleFormsubmit} style={{ position: "relative", top: "100%" }}>




                <div className="input">


                    <div class="mb-3">
                        <label for="" class="form-label">Primer Nombre:</label>
                        <input type="text" class="form-control w-50 bg-secondary bg-opacity-25 " name="primer_nombre" id="primer_nombre" required placeholder="" onChange={handleInput} value={formvalue.primer_nombre} />

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Segundo Nombre:</label>
                        <input type="text" class="form-control  w-50 bg-secondary bg-opacity-25" name="segundo_nombre" id="segundo_nombre" placeholder="" onChange={handleInput} value={formvalue.segundo_nombre} />

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Primer Apellido:</label>
                        <input type="text" class="form-control  w-50 bg-secondary bg-opacity-25" name="Primer_apellido" id="Primer_apellido" required placeholder="" onChange={handleInput} value={formvalue.Primer_apellido} />

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Segundo Apellido:</label>
                        <input type="text" class="form-control  w-50 bg-secondary bg-opacity-25" name="Segundo_apellido" id="Segundo_apellido" required placeholder="" onChange={handleInput} value={formvalue.Segundo_apellido} />

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Edad:</label>
                        {/* <input type="number" class="form-control  w-50 bg-secondary bg-opacity-25" name="Edad" id="Edad" placeholder="" required onChange={handleInput} value={formvalue.Edad} /> */}
                        <select className='selecedad form-control p-2 w-25 bg-light rounded bg-secondary bg-opacity-25' onChange={handleInput} value={formvalue.dirección}>
                        <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option selected value="16">16</option>
                            <option value="17">17</option>
                            <option selected value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>


                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Fecha de Nacimiento:</label>
                        <input type="date" class="form-control  w-25 bg-secondary bg-opacity-25" name="Fecha_de_Nacimiento" id="Fecha_de_Nacimiento" placeholder="" onChange={handleInput} value={formvalue.primer_nombre} />

                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">Telefono:</label>
                        <input type="number" class="form-control  w-25 bg-secondary bg-opacity-25" name="Telefono" id="Telefono" placeholder="" required onChange={handleInput} value={formvalue.numero_tel} />

                    </div>
                    <div class="mb-3">
                        <label for="" class=" form-label">Dirección:</label>
                    
                        <select className='form-control selec w-25 p-2 bg-light rounded bg-secondary bg-opacity-25' required onChange={handleInput} value={formvalue.dirección}>
                            <option value="grapefruit">Circunvalacion sur</option>
                            <option value="lime">Circunvalacion norte</option>
                            <option selected value="coconut">Dr. Cabral 7, San Juan de la Maguana</option>
                            <option value="mango">Av. Eusebio Puello Esq</option>
                            <option value="mango">Av. Anacaona</option>
                            <option value="mango">Barrio Villa Felicia</option>
                            <option value="mango">Barrio Ensanche la Fe</option>
                            <option value="mango">Barrio Gualey</option>
                            <option value="mango">Villa liberacion</option>
                            <option value="mango">Calle en Proyecto # 78</option>
                            <option value="mango">Residencial Paraíso</option>
                            <option value="mango">Diego De Velasquez</option>
                            <option value="mango">Frente al arco de triunfo</option>
                            <option value="mango">Av. Independencia 72</option>
                            <option value="mango">Sector El Lucero</option>
                            <option value="mango">Av. Circunvalación Norte casi esq,</option>
                            <option value="mango">Prolongacion Sanchez</option>
                            <option value="mango">Unnamed Road</option>
                            <option value="mango">Prolongación trinitaria número 8</option>
                            <option value="mango">Calle Santome esq</option>
                            <option value="mango">Barrio Guachupita</option>
                            <option value="mango">Barrio Los Mojados</option>
                            <option value="mango">Barrio Los Maestros</option>
                            <option value="mango">La Mesopotamia</option>
                            <option value="mango">Calle Sanchez</option>
                            <option value="mango">Calle Duarte</option>

                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Correo electrónico:</label>
                        <input type="email" class="form-control w-50 bg-secondary bg-opacity-25" name="email" id="email" required onChange={handleInput} value={formvalue.email} />

                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Número de identificación:</label>
                        <input type="number" class="form-control  w-25 bg-secondary bg-opacity-25" name="numberid" id="numberid" required placeholder="" value={formvalue.numberid} onChange={handleInput} />
                       
                    </div>
                    <button type="submit" className='submit btn btn-primary w-50 container-fluid'>
                        Enviar
                    </button>

                </div>
                <div>


                </div>
            </form>
            <div className='footer bg-dark bg-opacity-25  ' style={{ position: 'relative', top: '-350px' }}>
                <div className='footerbg'></div>
                <div className='liceo'>
                    <img className='img11' src={logo2} />
                    <h6>Instituto Tecnológico de Las Américas ITLA</h6>
                    <h6>Autopista Las Américas, Km. 27, PCSD, La Caleta, Boca Chica 11606</h6>
                    <h6>809-738-4852 / 809-793-2557</h6>
                    <h6>info@itla.edu.do</h6>
                    <h6>TÉRMINOS DE USO | POLÍTICAS DE PRIVACIDAD | PREGUNTAS FRECUENTES</h6>
                    <h6>© 2023 TODOS LOS DERECHOS RESERVADOS</h6>
                </div>
                <p>© 2023 ITLA Instituto Tecnológico de las Americas</p>
            </div>
        </div>
    )
}

export default EstudiantesForm