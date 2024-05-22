import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, valor, aoAlterar, obrigatorio = false }) => {

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                value={valor}
                onChange={(evento) => aoAlterar(evento.target.value)}
                placeholder={placeholder}
                required={obrigatorio}
            />
        </div>
    );
};

export default CampoTexto;
