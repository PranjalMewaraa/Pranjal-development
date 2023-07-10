import './Toggle.scss'

const Toggle = (props) =>{
    return(
        <div className='ToggleSwitch'>
            <label htmlFor="inpToggle">{props.label}</label>
            <label class="switch" id='inpToggle'>
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>
        </div>
    )
}
export default Toggle