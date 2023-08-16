import Logo from '../Logo/logo'
import Opcoes from '../OpcoesHeader/opcoes';
import IconesHeader from '../IconesHeader/icones'

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <Opcoes/>
            <IconesHeader/>
        </header>
    )
}

export default Header