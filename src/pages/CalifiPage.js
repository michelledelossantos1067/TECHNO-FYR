import React from "react"

export default function UsersPage() {
    return (
        <div className="Botone-area-califi">
            
                <div className="Lista2"></div>
                <div className="Lista3"></div>

                {/* <ol>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/form" >Form</a>
                    </li>
                    <li>
                        <a href="/form2" >Pasantias</a>
                        
                    </li>
                    <li>
                        <a href="/users" >About</a>
                    </li>

                </ol>
                <ul className="segunda_lista">
                    <li>
                        <a href="form3">Admisiones</a>
                    </li>
                    <li>
                        <a href="/form" >Pasantias</a>
                    </li>
                    <li>
                        <a href="/cali" >Calificaciones</a>
                    </li>
                    <li>
                        <a href="/ayuda" >Ayuda</a>
                    </li>

                </ul> */}
            <div className="Botones-areas">
                <h2 className="sexto">Calificaciones de 6to</h2>
                <a href="/info6to"><button className="boton1-cali">Informatica</button></a>
                <a href="/enfer6to"><button className="boton2-cali">Enfermeria</button></a>
                <a href="/conta6to"><button className="boton3-cali">Contabilida</button></a>
               <a href="/hote6to"><button className="boton4-cali">Hoteleria</button></a> 
            </div>

            <div className="Botones-areas2">
                <a href="/meca6to"><button className="boton5-cali">Mecanica</button></a>
                <a href="/mue6to"><button className="boton6-cali">Mueble</button></a>
                <a href="/refri6to"><button className="boton7-cali">Refrigeración</button></a>
                <a href="/art6to"><button className="boton8-cali">Arte</button></a>
                <a href="/danza6to"><button className="boton9-cali">Danza</button></a>
            </div>
            <div className="Botones-areas3">
                <h2 className="sexto">Calificaciones de 5to</h2>
                <button className="boton1-cali">Informatica</button>
                <button className="boton2-cali">Enfermeria</button>
                <button className="boton3-cali">Contabilida</button>
                <button className="boton4-cali">Hoteleria</button>
            </div>

            <div className="Botones-areas4">
                <button className="boton5-cali">Mecanica</button>
                <button className="boton6-cali">Mueble</button>
                <button className="boton7-cali">Refrigeración</button>
                <button className="boton8-cali">Arte</button>
                <button className="boton9-cali">Danza</button>
            </div>
            <div className="Botones-areas5">
                <h2 className="sexto">Calificaciones de 4to</h2>
                <button className="boton1-cali">Informatica</button>
                <button className="boton2-cali">Enfermeria</button>
                <button className="boton3-cali">Contabilida</button>
                <button className="boton4-cali">Hoteleria</button>
            </div>

            <div className="Botones-areas6">
                <button className="boton5-cali">Mecanica</button>
                <button className="boton6-cali">Mueble</button>
                <button className="boton7-cali">Refrigeración</button>
                <button className="boton8-cali">Arte</button>
                <button className="boton9-cali">Danza</button>
            </div>

        </div>
    )
}