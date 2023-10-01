import {Routes, Route} from 'react-router-dom'
import Login from './login'
import Home from "./home"


export default function MainRoutes () {
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}