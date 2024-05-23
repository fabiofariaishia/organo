import './Campo.css';

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterar, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={(evento) => aoAlterar(evento.target.value)}
                placeholder={placeholder}
                required={obrigatorio}
            />
        </div>
    );
};

export default Campo;
