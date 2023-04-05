import React from "react"
import { NavLink } from "react-router-dom"

export default function UsersPage() {
    return (
        <div style={{background:'#7777'}}>
        <div class="Listas" >
            <div class="Lista2"></div>
            <div class="Lista3"></div>

            <ol>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" >User</NavLink>
                </li>
                <li>
                    <NavLink to="/users" >Form</NavLink>
                </li>
                <li>
                    <NavLink to="/users" >Pasantias</NavLink>
                </li>
                <li>
                    <NavLink to="/users" >About</NavLink>
                </li>
            </ol>
        </div>
        <div className="main">
        </div>
    </div>
    )
}