
import { useState } from "react";

function Login(props) {
    const [formvalue, setFormvalue] = useState({email: '', password: '' })
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
        <div className="login card  bg-light w-25 p-5 container-fluid ">


            <form className="form" onChange={handleFormsubmit}>
                <h2 class="container-fluid ">Inicio de sesión</h2>
            <hr />
            <label for="email" class="container-fluid ">Email:</label>
            <input type="email" name="username" id="" class="container-fluid p-lg-2 rounded-3 border-secondary  mb-3"/>
            <label for="password" class="container-fluid">Contraseña:</label>
            <input type="password" name="password" id="" class="container-fluid p-lg-2 rounded-3 border-secondary mb-3"/>
            <a href="https://docs.google.com/spreadsheets/d/1sR4-TMgLpck1GscNc85ZSG2FmMTUevwIEWIkUpl-kBI/edit#gid=0"><button type="button" value="Enviar" class="w-100 p-lg-2 text-light h5 border-1 bg-success rounded-2 mb-3">Entrar</button></a>
            <a href="#" class="text-secondary text-decoration-none mb-3">¿Olvidaste tu contraseña?<samp
                    class="text-danger m-1 mb-3">Solicitar</samp></a>
            <a href="#" class="text-secondary text-decoration-none mb-3"> ¿No tienes cuenta?<samp
                    class="text-danger m-1 mb-4">Registrate</samp></a>
                 </form>
         </div>
       

    );
}

export default Login;