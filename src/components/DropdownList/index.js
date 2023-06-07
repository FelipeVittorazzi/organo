import './DropdownList.css'

const DropdownList = (props) => {

    const onTyped = (event) => {
        props.onTypeded(event.target.value)
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select
                onChange={onTyped}
                required={props.obrigatorio}
            >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList