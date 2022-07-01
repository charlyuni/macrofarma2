import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import useCartContext from "../../store/CartContext"

const DaisyNavBar = () => {

  const {contextFunction} = useCartContext();
  contextFunction()

  return (
<>   
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'>Productos</Link>
      <li tabIndex="0">
      <Link to='/'>
          Categoria
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </Link>
        <ul className="p-2 bg-base-100">
        <Link to='/category/Hogar'>Hogar</Link>
        <Link to='/category/Tecno'>Tecno</Link>
        <Link to='/category/Electro'>Electro</Link>
        <Link to='/category/Indumentaria'>Indumentaria</Link>
        <Link to='/category/Calzados'>Calzados</Link>
        </ul>
      </li>
      <Link to='/cart' className="start" >Carrito</Link>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
<Link to='/' className="btn btn-ghost normal-case text-xl">Macrofarma</Link>
  </div>
  <div className="navbar-end ml-3	">

        <CartWidget/>

  </div>
</div>
</> 

    )
}
export default DaisyNavBar