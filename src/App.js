import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
    const [times, setTimes] = useState([
        {
            nome: 'Programação',
            cor: '#57C278',
        },
        {
            nome: 'Front-End',
            cor: '#82CFFA',
        },
        {
            nome: 'Data Science',
            cor: '#A6D157',
        },
        {
            nome: 'DevOps',
            cor: '#E06869',
        },
        {
            nome: 'UX e Design',
            cor: '#DB6EBF',
        },
        {
            nome: 'Mobile',
            cor: '#FFBA05',
        },
        {
            nome: 'Inovação e Gestão',
            cor: '#FF8A29',
        },
    ]);

    const inicial = [
        // Programação
        {
            nome: 'FABIO FARIA',
            cargo: 'Programador',
            imagem: 'https://randomuser.me/api/portraits/men/85.jpg',
            time: times[0].nome,
        },
        {
            nome: 'CAROLINA MELO',
            cargo: 'Desenvolvedora Back-End',
            imagem: 'https://randomuser.me/api/portraits/women/65.jpg',
            time: times[0].nome,
        },
        {
            nome: 'MARCELO NUNES',
            cargo: 'Engenheiro de Software',
            imagem: 'https://randomuser.me/api/portraits/men/15.jpg',
            time: times[0].nome,
        },
        // Front-End
        {
            nome: 'LUCAS OLIVEIRA',
            cargo: 'Desenvolvedor Front-End',
            imagem: 'https://randomuser.me/api/portraits/men/45.jpg',
            time: times[1].nome,
        },
        {
            nome: 'JULIA COSTA',
            cargo: 'UI Designer',
            imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
            time: times[1].nome,
        },
        {
            nome: 'ANA MORAES',
            cargo: 'Tester',
            imagem: 'https://randomuser.me/api/portraits/women/16.jpg',
            time: times[1].nome,
        },
        // Data Science
        {
            nome: 'CARLOS SILVA',
            cargo: 'Cientista de Dados',
            imagem: 'https://randomuser.me/api/portraits/men/56.jpg',
            time: times[2].nome,
        },
        {
            nome: 'FERNANDA LIMA',
            cargo: 'Analista de Dados',
            imagem: 'https://randomuser.me/api/portraits/women/66.jpg',
            time: times[2].nome,
        },
        {
            nome: 'RAFAEL BARBOSA',
            cargo: 'Engenheiro de Machine Learning',
            imagem: 'https://randomuser.me/api/portraits/men/33.jpg',
            time: times[2].nome,
        },
        // DevOps
        {
            nome: 'BRUNO MARTINS',
            cargo: 'Engenheiro DevOps',
            imagem: 'https://randomuser.me/api/portraits/men/88.jpg',
            time: times[3].nome,
        },
        {
            nome: 'VITORIA PEREIRA',
            cargo: 'Analista de Infraestrutura',
            imagem: 'https://randomuser.me/api/portraits/women/11.jpg',
            time: times[3].nome,
        },
        {
            nome: 'RODRIGO GONÇALVES',
            cargo: 'Engenheiro de Automação',
            imagem: 'https://randomuser.me/api/portraits/men/99.jpg',
            time: times[3].nome,
        },
        // UX e Design
        {
            nome: 'CAROLINA ROCHA',
            cargo: 'Designer UX/UI',
            imagem: 'https://randomuser.me/api/portraits/women/77.jpg',
            time: times[4].nome,
        },
        {
            nome: 'GABRIELA SOUZA',
            cargo: 'Designer Gráfico',
            imagem: 'https://randomuser.me/api/portraits/women/15.jpg',
            time: times[4].nome,
        },
        {
            nome: 'FELIPE RAMOS',
            cargo: 'Desenvolvedor Front-End',
            imagem: 'https://randomuser.me/api/portraits/men/24.jpg',
            time: times[4].nome,
        },
        // Mobile
        {
            nome: 'RICARDO LOPES',
            cargo: 'Desenvolvedor Mobile',
            imagem: 'https://randomuser.me/api/portraits/men/44.jpg',
            time: times[5].nome,
        },
        {
            nome: 'PRISCILA CASTRO',
            cargo: 'QA Mobile',
            imagem: 'https://randomuser.me/api/portraits/women/33.jpg',
            time: times[5].nome,
        },
        {
            nome: 'LUANA NUNES',
            cargo: 'Designer Mobile',
            imagem: 'https://randomuser.me/api/portraits/women/55.jpg',
            time: times[5].nome,
        },
        // Inovação e Gestão
        {
            nome: 'MATEUS RIBEIRO',
            cargo: 'Gestor de Projetos',
            imagem: 'https://randomuser.me/api/portraits/men/11.jpg',
            time: times[6].nome,
        },
        {
            nome: 'NATHALIA FERREIRA',
            cargo: 'Analista de Inovação',
            imagem: 'https://randomuser.me/api/portraits/women/88.jpg',
            time: times[6].nome,
        },
        {
            nome: 'JOÃO VIEIRA',
            cargo: 'Coordenador de Gestão',
            imagem: 'https://randomuser.me/api/portraits/men/22.jpg',
            time: times[6].nome,
        },
    ];

    const [colaboradores, setColaboradores] = useState(inicial);

    const aoAdicionarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    function deletarColaborador() {
        console.log('deletando colaborador');
    }

    function mudarCorDoTime(cor, nome) {
        setTimes(
            times.map((time) => {
                if (time.nome === nome) {
                    time.cor = cor;
                }

                return time;
            })
        );
    }

    return (
        <div className="App">
            <Banner />
            <Formulario
                aoCadastrarColaborador={(colaborador) => aoAdicionarColaborador(colaborador)}
                times={times.map((time) => time.nome)}
            />
            <section className='times'>
                <h1>Minha Organização</h1>
                {times.map((time, indice) => (
                    <Time
                        mudarCor={mudarCorDoTime}
                        key={indice}
                        time={time}
                        colaboradores={colaboradores.filter(
                            (colaborador) => colaborador.time === time.nome
                        )}
                        aoDeletar={deletarColaborador}
                    />
                ))}
            </section>
            <Rodape />
        </div>
    );
}

export default App;
