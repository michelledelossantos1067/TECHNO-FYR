import React from "react"


export default function FormPage() {
    return (
        <body>
        
        <div className="Pasantia">
            <ol className="Areas" >
                <li><a href="/Informatica">Informatica </a></li>
                <li><a href="/enfermeria">Enfermeria</a></li>
                <li><a href="/contabilidad">Contabilidad</a></li>
                <li><a href="/artes">Arte</a></li>
                <li><a href="/hoteleria">Hoteleria</a></li>
                <li><a href="/mecanica">Mecanica</a></li>
                <li><a href="/refrigeracion">Refrigeración</a></li>
            </ol>
            <div className="info-pasantia">
                <div className="info-pasantia2">
                    <h2 className="h2-item">Información de pasantia</h2>
                </div>
                <div className="info-pasantia3"><h2>1</h2></div>
                <div className="info-pasantia5"><h2>2</h2></div>
                <div className="info-pasantia8"><h2>3</h2></div>
                <div className="info-pasantia4"> <h3>Solo los estudiantes de 6to pueden hacer la pasantia </h3></div>
                <div className="info-pasantia6"> <h3>La pasantia es obligatoria</h3></div>
                <div className="info-pasantia7"> <h3>Tienen que hacer 380 horas de pasantia</h3></div>

            </div>


        </div>
        </body>
    )
}