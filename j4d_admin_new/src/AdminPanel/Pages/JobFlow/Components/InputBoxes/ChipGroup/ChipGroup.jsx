import ChipButtonGroup from "./Chip";

const ChipGroup =({options,setFormData, name }) =>{
    const handleOptionChange = (selectedOptions) => {
        console.log('Selected options:', selectedOptions);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: selectedOptions,
      }));
    };
    
    return(
      <div className="ChipGroup">
        <ChipButtonGroup options={options} onChange={handleOptionChange} />
      </div>
    )
}
export default ChipGroup