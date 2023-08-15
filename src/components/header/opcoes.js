import './opcoes.css'


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];


function opcoes() {
    return (
        <div className='opcoes-div'>
            <ul className='opcoes'>
                { textoOpcoes.map( (texto) => (
                    <li className='opcao'><p>{texto}</p></li>
                ) ) } 
            </ul>
        </div>  
    )
}

export default opcoes