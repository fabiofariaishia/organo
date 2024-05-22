import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({aoCadastrarColaborador, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrarColaborador({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)} />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)} />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={times} 
                    label="Time" 
                    valor={time}
                    aoAlterar={valor => setTime(valor)} />
                <Botao texto="Criar Card" />
            </form>
        </section>

    );
}

export default Formulario