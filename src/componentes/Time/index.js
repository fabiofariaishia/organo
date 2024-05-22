import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 && (
            <section className="time" style={{ backgroundColor: time.corSecundaria }}>
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
