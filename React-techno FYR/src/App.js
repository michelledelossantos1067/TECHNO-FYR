import { BrowserRouter,Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import UsersPage from "./pages/UsersPage"
import NotFountPage from "./pages/NotFountPage"
import Navbar from "./components/Navbar"
import FormPage from "./pages/FormPage"
import EstudiantesForm from "./pages/EstudiantesForm"

export default function App() {
  return (
    <BrowserRouter>

<Navbar/>

    <Routes>
      <Route path="/" element={ <HomePage />}/>
      <Route path="/about" element={ <AboutPage />}/>
      <Route path="/users" element={ <UsersPage />}/>
      <Route path="/form" element={ <FormPage />}/>
      <Route path="/form3" element={ <EstudiantesForm />}/>
      <Route path="*" element={ <NotFountPage />}/>

    </Routes>
    </BrowserRouter>
  )
}