import Logo from '../../assets/Logo.png'
import busca from '../../assets/busca.png'
import { BrowserRouter, Routes,Link,Route } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/Querodoar/Querodoar'
import S from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.BoxLogo}>
                <img src={Logo} alt="Imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.BoxMenu}>
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/doados">Livros Doados</Link></li>
                <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder='O que você procura?'/>
                <img src={busca} alt="imagem de uma lupa" />
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/doados' element={<Doados/>}/>
            <Route path='/queroDoar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}