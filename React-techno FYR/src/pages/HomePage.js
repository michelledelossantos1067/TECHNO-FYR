/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import logo2 from '../assets/logo2.png'
import Videobh from '../assets/Videobh.mp4'

export default function HomePage() {
    return (
        <div>
            <div className="Listas" >
                <div className="Lista2"></div>
                <div className="Lista3"></div>

                <ol>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/users" >User</a>
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
                        <a href="/users" >Pasantias</a>
                    </li>
                    <li>
                        <a href="/cali" >Calificaciones</a>
                    </li>
                    <li>
                        <a href="/ayuda" >Ayuda</a>
                    </li>

                </ul>
            </div>
            <div className="main">
                <video src={Videobh} autoplay loop muted />
                <img src={logo2} style={
                    {
                        width: '250px',
                        zIndex: '2',
                        position: 'absolute',
                        top: '-10px'
                    }} />
            </div>
        </div>
    )
}