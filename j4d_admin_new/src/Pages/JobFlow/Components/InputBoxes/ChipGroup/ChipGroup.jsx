import ChipButtonGroup from "./Chip";

const ChipGroup =({options}) =>{
    const handleOptionChange = (selectedOptions) => {
        console.log('Selected options:', selectedOptions);
    };
    
    return(
      <div className="ChipGroup">
        <ChipButtonGroup options={options} onChange={handleOptionChange} />
      </div>
    )
}
export default ChipGroup