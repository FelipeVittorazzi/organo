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

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropdownList obrigatorio={true} label="Time" itens={times}/>
                <Button text="Criar Card" />
            </form>
        </section>
    )
}

export default Form