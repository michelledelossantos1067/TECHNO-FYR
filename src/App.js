import { BrowserRouter,Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CalifiPage from "./pages/CalifiPage"
import NotFountPage from "./pages/NotFountPage"
import Navbar from "./components/Navbar"
import FormPage from "./pages/FormPage"
import EstudiantesForm from "./pages/EstudiantesForm"
import Informatica from "./pages/Hoteleria"
import Enfermeria from "./pages/enfermeria"
import Contabilidad from "./pages/Contabilidad"
import Artes from "./pages/Artes"
import Mecanica from "./pages/Mecanica"
import Refrigeracion from "./pages/Refrigeracion"
import Hoteleria  from "./pages/Informatica"
import Mueble  from "./pages/Mueble"
import Info6to  from "./pages/Info6to"
import Hote6to  from "./pages/Hote6to"
import Areas from"./pages/Areas"
import Art6to  from "./pages/Art6to"
import Enfer6to  from "./pages/Enfer6to"
import Mue6to  from "./pages/Mue6to"
import Conta6to  from "./pages/Conta6to"
import Danza6to  from "./pages/Danza6to"
import Refri6to  from "./pages/Refri6to"
import Meca6to  from "./pages/Meca6to"
import Login2  from "./pages/Login2"
import Login3  from "./pages/Login3"
import Login4  from "./pages/Login4"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from  "./pages/Login"


export default function App() {
  
  return (
    <BrowserRouter>

<Navbar/>

    <Routes>
      <Route path="/" element={ <HomePage />}/>
      <Route path="/about" element={ <AboutPage />}/>
      <Route path="/cali" element={ <CalifiPage />}/>
      <Route path="/login2" element={ <Login2 />}/>
      <Route path="/login3" element={ <Login3 />}/>
      <Route path="/login4" element={ <Login4 />}/>
      <Route path="/form" element={ <FormPage />}/>
      <Route path="/form3" element={ <EstudiantesForm />}/>
      <Route path="*" element={ <NotFountPage />}/>
      <Route path="/informatica" element={ <Informatica />}/>
      <Route path="/enfermeria" element={ <Enfermeria />}/>
      <Route path="/contabilidad" element={ <Contabilidad />}/>
      <Route path="/artes" element={ <Artes />}/>
      <Route path="/mecanica" element={ <Mecanica />}/>
      <Route path="/mueble" element={ <Mueble />}/>
      <Route path="/info6to" element={ <Info6to />}/>
      <Route path="/hote6to" element={ <Hote6to />}/>
      <Route path="/enfer6to" element={ <Enfer6to />}/>
      <Route path="/conta6to" element={ <Conta6to />}/>
      <Route path="/meca6to" element={ <Meca6to />}/>
      <Route path="/mue6to" element={ <Mue6to />}/>
      <Route path="/areas" element={ <Areas />}/>
      <Route path="/danza6to" element={ <Danza6to />}/>
      <Route path="/art6to" element={ <Art6to />}/>
      <Route path="/refri6to" element={ < Refri6to />}/>
      <Route path="/inicio" element={ <inicio />}/>
      <Route path="/refrigeracion" element={ <Refrigeracion />}/>
      <Route path="/hoteleria" element={ <Hoteleria />}/>
      <Route path="/login" element={ <Login />}/>

    </Routes>
  
    </BrowserRouter>
  );
}