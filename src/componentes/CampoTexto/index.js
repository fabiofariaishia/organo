import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    );
}

export default CampoTexto;