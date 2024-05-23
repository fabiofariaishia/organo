import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';
import { BsBuildingFillAdd } from 'react-icons/bs';

function App() {
    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57C278',
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA',
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157',
        },
        {
            id: uuidv4(),
            nome: 'DevOps',
            cor: '#E06869',
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            cor: '#DB6EBF',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29',
        },
    ]);

    const inicial = [
        // Programação
        {
            id: uuidv4(),
            favorito: false,
            nome: 'FABIO FARIA',
            cargo: 'Programador',
            imagem: 'https://randomuser.me/api/portraits/men/85.jpg',
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'CAROLINA MELO',
            cargo: 'Desenvolvedora Back-End',
            imagem: 'https://randomuser.me/api/portraits/women/65.jpg',
            time: times[0].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'MARCELO NUNES',
            cargo: 'Engenheiro de Software',
            imagem: 'https://randomuser.me/api/portraits/men/15.jpg',
            time: times[0].nome,
        },
        // Front-End
        {
            id: uuidv4(),
            favorito: false,
            nome: 'LUCAS OLIVEIRA',
            cargo: 'Desenvolvedor Front-End',
            imagem: 'https://randomuser.me/api/portraits/men/45.jpg',
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JULIA COSTA',
            cargo: 'UI Designer',
            imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
            time: times[1].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'ANA MORAES',
            cargo: 'Tester',
            imagem: 'https://randomuser.me/api/portraits/women/16.jpg',
            time: times[1].nome,
        },
        // Data Science
        {
            id: uuidv4(),
            favorito: false,
            nome: 'CARLOS SILVA',
            cargo: 'Cientista de Dados',
            imagem: 'https://randomuser.me/api/portraits/men/56.jpg',
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'FERNANDA LIMA',
            cargo: 'Analista de Dados',
            imagem: 'https://randomuser.me/api/portraits/women/66.jpg',
            time: times[2].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'RAFAEL BARBOSA',
            cargo: 'Engenheiro de Machine Learning',
            imagem: 'https://randomuser.me/api/portraits/men/33.jpg',
            time: times[2].nome,
        },
        // DevOps
        {
            id: uuidv4(),
            favorito: false,
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
            id: uuidv4(),
            favorito: false,
            nome: 'RODRIGO GONÇALVES',
            cargo: 'Engenheiro de Automação',
            imagem: 'https://randomuser.me/api/portraits/men/99.jpg',
            time: times[3].nome,
        },
        // UX e Design
        {
            id: uuidv4(),
            favorito: false,
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
            id: uuidv4(),
            favorito: false,
            nome: 'FELIPE RAMOS',
            cargo: 'Desenvolvedor Front-End',
            imagem: 'https://randomuser.me/api/portraits/men/24.jpg',
            time: times[4].nome,
        },
        // Mobile
        {
            id: uuidv4(),
            favorito: false,
            nome: 'RICARDO LOPES',
            cargo: 'Desenvolvedor Mobile',
            imagem: 'https://randomuser.me/api/portraits/men/44.jpg',
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'PRISCILA CASTRO',
            cargo: 'QA Mobile',
            imagem: 'https://randomuser.me/api/portraits/women/33.jpg',
            time: times[5].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'LUANA NUNES',
            cargo: 'Designer Mobile',
            imagem: 'https://randomuser.me/api/portraits/women/55.jpg',
            time: times[5].nome,
        },
        // Inovação e Gestão
        {
            id: uuidv4(),
            favorito: false,
            nome: 'MATEUS RIBEIRO',
            cargo: 'Gestor de Projetos',
            imagem: 'https://randomuser.me/api/portraits/men/11.jpg',
            time: times[6].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'NATHALIA FERREIRA',
            cargo: 'Analista de Inovação',
            imagem: 'https://randomuser.me/api/portraits/women/88.jpg',
            time: times[6].nome,
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'JOÃO VIEIRA',
            cargo: 'Coordenador de Gestão',
            imagem: 'https://randomuser.me/api/portraits/men/22.jpg',
            time: times[6].nome,
        },
    ];

    const [colaboradores, setColaboradores] = useState(inicial);

    const [formVisivel, setFormVisivel] = useState(false)

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
    }

    function mudarCorDoTime(cor, id) {
        setTimes(
            times.map((time) => {
                if (time.id === id) {
                    time.cor = cor;
                }

                return time;
            })
        );
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }]);
    }

    function resolverFavorito(id) {
        setColaboradores(
            colaboradores.map((colaborador) => {
                if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
                return colaborador;
            })
        );
    }

    function toggleFormulario() {
        setFormVisivel(!formVisivel)
    }

    return (
        <div className="App">
            <Banner />
            <Formulario
                aoCadastrarTime={cadastrarTime}
                aoCadastrarColaborador={(colaborador) =>
                    setColaboradores([...colaboradores, colaborador])
                }
                times={times.map((time) => time.nome)}
                visivel={formVisivel}
            />
            <section className="times">
                <div style={{ position: 'relative' }}>
                    <h1>Minha Organização</h1>
                    <div className='btnForm' style={{position: 'absolute', top: '50px', right: '50px'}}>
                        <BsBuildingFillAdd  size={30} onClick={toggleFormulario} />
                    </div>
                </div>
                {times.map((time, indice) => (
                    <Time
                        aoFavoritar={resolverFavorito}
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
