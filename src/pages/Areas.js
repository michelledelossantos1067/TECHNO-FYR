/* eslint-disable jsx-a11y/alt-text */
import inf from '../assets/inf.jpeg'
import logo2 from '../assets/logo2.png'
import cont from '../assets/conta.jpeg'
import enfer from '../assets/enfer.jpeg'
import art from '../assets/artes.jpeg'
import hote from '../assets/hote.jpeg'
import refri from '../assets/refri.jpeg'
const Areas = () => {

    return (


        <div className="Listas " style={{position:'relative',top:'-300px'}}>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={inf} alt="Title"/>
            <div class="card-body">
                
                <h4 class="card-title">Desarrollo y administración de aplicaciones informáticas</h4>
                <p class="card-text">Analizar, diseñar, desarrollar, administrar e implementar aplicaciones informáticas, sistemas de bases de datos, aplicaciones web y recursos de sistemas de información, a fin de apoyar las funciones productivas de las organizaciones.</p>
            </div>
        </div>
        <br/>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={cont} alt="Title"/>
            <div class="card-body">
                <h4 class="card-title">Departamento de administración o finanzas</h4>
                <p class="card-text">Al Departamento de Administración y Finanzas le corresponde la gestión y administración de los recursos financieros y materiales de la institución, para lo cual diseña y ejecuta en forma continua los procesos administrativos que permitan mantener la operatividad y el funcionamiento óptimo de la Superintendencia</p>
            </div>
        </div>
        <br/>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={enfer} alt="Title"/>
            <div class="card-body">
                <h4 class="card-title">Programas de formación en enfermería y cuidados de salud</h4>
                <p class="card-text">El Plan de Capacitación es un instrumento de gestión que contribuye al desarrollo de las estrategias del Hospital, la capacitación es un proceso de mejora continua, que utiliza la evaluación como elemento principal para retroalimentarse y adecuarse a las necesidades de cada proceso.</p>
            </div>
        </div>
        <br/>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={art} alt="Title"/>
            <div class="card-body">
                <h4 class="card-title">Diseño de Modas o Artes del Vestir</h4>
                <p class="card-text">El diseño de moda se encarga de la creación de ropa y de accesorios en función de las influencias culturales y sociales de un período específico. Representa el estilo e idea del creador, según su talento y sus conocimientos</p>
            </div>
        </div>
        <br/>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={hote} alt="Title"/>
            <div class="card-body">
                <h4 class="card-title">Hotelería y turismo y gastronomia hotelero</h4>
                <p class="card-text">
La carrera de Hotelería y Turismo tiene como objeto de estudio la administración, la gestión y la creación de empresas de servicios turísticos y hoteleros. Aquello abarca la capacidad de comprender, describir y analizar el entorno socioeconómico respecto a la actividad turística del país.</p>
            </div>
        </div>
        <br/>
        <div class="card w-50 container-fluid bg-info bg-opacity-50">
        <img class="card-img-top w-25" src={refri} alt="Title"/>
            <div class="card-body">
                <h4 class="card-title">Proceso de reducción y mantenimiento de la temperatura de un objeto o espacio</h4>
                <p class="card-text">Refrigeración se encarga de todo lo concerniente a los diseños de sistemas de refrigeración, así como la selección de los mejores procedimientos y  la articulación de construcciones frigoríficas y en la solución de los inconvenientes que se presenten relacionados al buen estado de de los sistemas de refrigeración.</p>
            </div>
        </div>
       
        <div className='footer bg-dark bg-opacity-25  ' style={{position:'relative',top:'100px'}}>
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

export default Areas
