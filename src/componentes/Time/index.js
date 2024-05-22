import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && (
            <section className="time" style={{ backgroundColor: time.corSecundaria }}>
                <input
                    value={time.corPrimaria}
                    type="color"
                    className="input-color"
                    onChange={(evento) => mudarCor(evento.target.value, time.nome)}
                />
                <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.corPrimaria}
                                aoDeletar={aoDeletar}
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Time;
