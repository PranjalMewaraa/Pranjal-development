//import './Toggle.scss'

const Toggle =(props)=>{
    return (
        <div className='ToggleSwitch'>
            <label htmlFor={props.id}>{props.label}</label>
            <label id={props.id} class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>

        </div>
    )
}
export default Toggle