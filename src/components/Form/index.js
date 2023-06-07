import { useState } from 'react';

import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido => ' + nome, cargo, imagem, time)
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onTypeded={value => setNome(value)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onTypeded={value => setCargo(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    onTypeded={value => setImagem(value)}
                />
                <DropdownList
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    onTypeded={value => setTime(value)}
                />
                <Button text="Criar Card" />
            </form>
        </section>
    )
}

export default Form