import Collaborator from '../Collaborator'
import './Time.css'

const Time = (props) => {
    return ( 
        (props.collaborators.length > 0) && <section className="time" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator 
                    background={props.primaryColor}
                    key={collaborator.nome}
                    nome={collaborator.nome}
                    imagem={collaborator.imagem}
                    cargo={collaborator.cargo}
                />)}
            </div>
        </section>
    )
}
 
export default Time