import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens, valor, obrigatorio = false, aoAlterar}) => {
    
    
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterar(evento.target.value)}>
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa