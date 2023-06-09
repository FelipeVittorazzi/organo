import './Time.css'

const Time = (props) => {
    return ( 
        <section className="time" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
        </section>
    )
}
 
export default Time