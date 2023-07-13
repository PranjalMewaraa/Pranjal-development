//import './TextFieldPlain.scss'

const PlainInput = (props) =>{
    return(
        <div className='InputFieldPlain'>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} id={props.id} placeholder={props.placeholder}  className='textInput' />
        </div>
        )
}
export default PlainInput