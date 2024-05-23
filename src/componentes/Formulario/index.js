import './Formulario.css';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({ aoCadastrarColaborador, times, aoCadastrarTime }) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoCadastrarColaborador({ nome, cargo, imagem, time });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={(valor) => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={(valor) => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterar={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={times}
                    label="Time"
                    valor={time}
                    aoAlterar={(valor) => setTime(valor)}
                />
                <Botao texto="Criar Card" />
            </form>
            <form
                className="formulario"
                onSubmit={(evento) => {
                    evento.preventDefault();
                    aoCadastrarTime({ nome: nomeTime, cor: corTime });
                }}
            >
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={(valor) => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar={(valor) => setCorTime(valor)}
                />

                <Botao texto="Criar novo time" />
            </form>
        </section>
    );
};

export default Formulario;
