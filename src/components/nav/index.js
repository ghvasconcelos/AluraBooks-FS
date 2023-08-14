import logo from '../../image/logo.svg'
import './style.css'

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt="Logo do site" className='logo-img'/>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo