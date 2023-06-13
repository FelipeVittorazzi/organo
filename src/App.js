import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {

  const times = [
    {
      nome:'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      nome: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([]);

  const onCollaboratorAdd = (collaborator) => {
    debugger
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
        <Banner />
        <Form times={times.map(time => time.nome)} onCollaboratorRegistered={collaborator => onCollaboratorAdd(collaborator)} />
        {times.map(time => <Time 
          key={time.nome}
          nome={time.nome}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
        />)}
        <Footer />
    </div>
  );
}

export default App;