/* eslint-disable jsx-a11y/alt-text */
import logo2 from '../assets/logo2.png'
import { useForm } from 'react-hook-form'
import { edadValidator } from './validators';


const EstudiantesForm = () => {

    const { register, formState: { errors },watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        

        <div className="Listas" >
            <div className='Lista4'></div>
            <img src={logo2} style={{
                width: '250px',
                position: 'relative',
                top: '-50px',
                zIndex: '2'

            }} />

            <div><ol>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/users" >User</a>
                </li>
                <li>
                    <a href="/about">About</a>

                </li>
            </ol>
            </div>
            <h1 style={{
                position: 'absolute',
                overflow: 'hidden',
                left: '15%',
                top: '200px',
                fontSize: '35px'
            }}>INICIA TU PROCESO DE ADMISIÓN COMPLETANDO ESTE FORMULARIO</h1>

            <hr className='hr' />
            <form className='form' onSubmit={handleSubmit(onSubmit)}>


                <button type='submit'>
                    Enviar
                </button>

                <div className="input" style={{
                    position: 'relative',
                    top: '100px'
                }}>
                    <label htmlFor="primer_nombre">Primer Nombre:</label>
                    <input type="text" id="primer_nombre" name="primer_nombre" placeholder='Primer Nombre'
                        {...register('primer_nombre'
                            , {
                                required: true,
                                maxLength: 10
                            })} />
                            <p> Nombre: {watch('primer_nombre')}</p>
                    {errors.primer_nombre?.type === 'required' && <p>El campo nombre es requerido</p>}



                    <label htmlFor="segundo_nombre">Segundo Nombre:</label>
                    <input type="text" id="segundo_nombre" name="segundo_nombre" placeholder='Segundo Nombre'  {...register('segundo_nombre', {
                        required: true,
                        maxLength: 10
                    })} />

                    {errors.segundo_nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    <label htmlFor="Primer_apellido">Primer Apellido:</label>
                    <input type="text" id="Primer_apellido" name="Primer_apellido" placeholder='Primer Apellido' {...register('primer_apellido', {
                        required: true,
                        maxLength: 10
                    })} />
                    {errors.primer_apellido?.type === 'required' && <p>El campo apellido es requerido</p>}

                    <label htmlFor="Segundo_apellido">Segundo Apellido:</label>
                    <input type="text" id="Segundo_apellido" name="Segundo_apellido" placeholder='Segundo Apellido'  {...register('segundo_apellido', {
                        required: true,
                        maxLength: 10
                    })} />
                    {errors.segundo_apellido?.type === 'required' && <p>El campo apellido es requerido</p>}

                    <label htmlFor="Edad" style={{ position: 'relative', left: '270px', top: '45px' }}>Edad:</label>
                    <input type="number" name="Edad" id="Edad" style={{ width: '130px' }} {...register('edad', 
                        {
                            validate: edadValidator
                        })} />

                    {errors.edad?.type === 'required' && <p>La edad requerida es de 12 a 17 años</p>}

                    <label htmlFor="primer_nombre" style={{ position: 'relative', left: '30px' }}>Fecha de Nacimiento:</label>
                    <input type="date" id="primer_nombre" name="primer_nombre" placeholder='Primer Nombre'  {...register('fecha_de_nacimiento',
                        {
                            required: true,
                            maxLength: 10
                        })}
                    />
                    {errors.fecha_de_nacimiento?.type === 'required' && <p>El campo fecha es requerido</p>}

                    <label htmlFor="segundo_nombre">Telefono:</label>
                    <input type="text" id="numero_tel" name="numero_tel" placeholder='Numero Telefonico'  {...register('numero_telefonico',
                        {
                            maxLength: 10
                        })} />
                    {errors.numero_telefonico?.type === 'required' && <p>El campo nombre es requerido</p>}

                    <label htmlFor="Dirección">Dirección:</label>
                    <input type="text" id="dirección" name="dirección" placeholder='(Calle/Avenida y Sector/Barrio)'  {...register('dirección',
                        {
                            require: true,
                            maxLength: 20
                        })} />
                    {errors.dirección?.type === 'required' && <p>El campo nombre es requerido</p>}

                    <label htmlFor="email" style={{ position: 'relative', left: '30px' }}>Correo electrónico:</label>
                    <input type="email" id="email" name="email" placeholder='Corre' {...register('email',
                        {
                            pattern:/^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/,
                            require: true,
                            maxLength: 25
                        })} />
                    {errors.email?.type === 'pattern' && <p>El campo email es incorrecto</p>}

                    <label htmlFor="number-id" style={{ position: 'relative', left: '17px' }}>Número de identificación:</label>
                    <input type="number" name="-numberid" id="number-id"  {...register('numero_de_identidad',
                        {
                            require: true,
                            maxLength: 10
                        })} />
                    {errors.numero_de_identidad?.type === 'required' && <p>El campo es requerido</p>}

                    <div id='Conten'></div>

                </div>
                <div>


                </div>
            </form>
        </div>
    )
}

export default EstudiantesForm