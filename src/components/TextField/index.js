import './TextField.css'

const TextField = (props) => {

    const onTyped = (event) => {
       props.onTypeded(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input 
                onChange={onTyped}
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField