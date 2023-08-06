//import './Toggle.scss'

const Toggle =(props,{handlePrefChange})=>{
    return (
        <div className='ToggleSwitch'>
            <label htmlFor={props.id}>{props.label}</label>
            <label id={props.id} className="switch">
                <input type="checkbox" name={props.name} value={props.value} onChange={props.handlePrefChange}/>
                <span className="slider round"></span>
            </label>

        </div>
    )
}
export default Toggle