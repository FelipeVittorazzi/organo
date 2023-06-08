import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([]);

  const onCollaboratorAdd = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
        <Banner />
        <Form onCollaboratorRegistered={collaborator => onCollaboratorAdd(collaborator)} />
    </div>
  );
}

export default App;