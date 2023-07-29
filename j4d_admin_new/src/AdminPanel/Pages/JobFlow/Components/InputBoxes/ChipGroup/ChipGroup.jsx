import ChipButtonGroup from "./Chip";

const ChipGroup =({options,handleUpdateObject }) =>{
    const handleOptionChange = (selectedOptions) => {
        console.log('Selected options:', selectedOptions);
        handleUpdateObject((prevObject) => ({
          ...prevObject,
          ['Benefits']: selectedOptions,
      }));
    };
    
    return(
      <div className="ChipGroup">
        <ChipButtonGroup options={options} onChange={handleOptionChange} />
      </div>
    )
}
export default ChipGroup