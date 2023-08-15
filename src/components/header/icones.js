import './icones.css'
import perfil from '../../image/perfil.svg'
import sacola from '../../image/sacola.svg'

const icones = [perfil, sacola];

function IconesHeader() {
    return(
        <div>
             <ul className='icones'>
                {icones.map( (icone) => (
                <li className='icone'><img src={icone}></img></li>
            ))}
            </ul> 
        </div>
    )
}

export default IconesHeader