import React, { useEffect, useRef, useState } from 'react';
//import './Range.scss'


const DoubleRangeSlider = (props) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [offsetSliderWidth, setOffsetSliderWidth] = useState(0);
  const [min, setMin] = useState(props.minValue);
  const [max, setMax] = useState(props.maxValue);
  const [minValueBetween, setMinValueBetween] = useState(10);
  const [currentMin, setCurrentMin] = useState(55);
  const [inputMin, setInputMin] = useState(55);
  const [currentMax, setCurrentMax] = useState(100);
  const [inputMax, setInputMax] = useState(100);

  const minValueRef = useRef(null);
  const maxValueRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    minValueRef.current.style.width = `${((currentMin - min) * 100) / (max - min)}%`;
    maxValueRef.current.style.width = `${((currentMax - min) * 100) / (max - min)}%`;
    setMin(props.minValue); // Update the min state with the prop value
    setMax(props.maxValue); // Update the max state with the prop value
    setSliderWidth(sliderRef.current.offsetWidth);
    setOffsetSliderWidth(sliderRef.current.offsetLeft);
  }, [currentMin, currentMax, max, min]);

  const handleSetMin = (e) => {
    const inputMin = parseInt(e.target.value);

    setInputMin(inputMin);

    if (inputMin >= min && inputMin <= currentMax - minValueBetween) {
      setCurrentMin(inputMin);
      minValueRef.current.style.width = `${((inputMin - min) * 100) / (max - min)}%`;
      props.onMinChange(e);
    }
  };

  const handleSetMax = (e) => {
    const inputMax = parseInt(e.target.value);

    setInputMax(inputMax);

    if (inputMax >= currentMin + minValueBetween && inputMax <= max) {
      setCurrentMax(inputMax);
      maxValueRef.current.style.width = `${((inputMax - min) * 100) / (max - min)}%`;
      props.onMaxChange(e);
    }
  };

  const handleMinValueDrag = (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', handleMouseMoveMin);
    document.addEventListener('mouseup', handleMouseUpMin);

    document.addEventListener('touchmove', handleMouseMoveMin);
    document.addEventListener('touchend', handleMouseUpMin);
  };

  const handleMouseMoveMin = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = (dragedWidth * 100) / sliderWidth;
    const newCurrentMin = Math.abs(parseInt((dragedWidthInPercent * (max - min)) / 100) + min);

    if (newCurrentMin >= min && newCurrentMin <= currentMax - minValueBetween) {
      minValueRef.current.style.width = `${dragedWidthInPercent}%`;
      minValueRef.current.dataset.content = newCurrentMin;

      setCurrentMin(newCurrentMin);
      setInputMin(newCurrentMin);
    }
  };

  const handleMouseUpMin = () => {
    document.removeEventListener('mouseup', handleMouseUpMin);
    document.removeEventListener('mousemove', handleMouseMoveMin);

    document.removeEventListener('touchend', handleMouseUpMin);
    document.removeEventListener('touchmove', handleMouseMoveMin);
  };

  const handleMaxValueDrag = (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', handleMouseMoveMax);
    document.addEventListener('mouseup', handleMouseUpMax);

    document.addEventListener('touchmove', handleMouseMoveMax);
    document.addEventListener('touchend', handleMouseUpMax);
  };

  const handleMouseMoveMax = (e) => {
    const dragedWidth = e.clientX - offsetSliderWidth;
    const dragedWidthInPercent = (dragedWidth * 100) / sliderWidth;
    const newCurrentMax = Math.abs(parseInt((dragedWidthInPercent * (max - min)) / 100) + min);

    if (newCurrentMax >= currentMin + minValueBetween && newCurrentMax <= max) {
      maxValueRef.current.style.width = `${dragedWidthInPercent}%`;
      maxValueRef.current.dataset.content = newCurrentMax;
      setCurrentMax(newCurrentMax);
      setInputMax(newCurrentMax);
    }
  };

  const handleMouseUpMax = () => {
    document.removeEventListener('mouseup', handleMouseUpMax);
    document.removeEventListener('mousemove', handleMouseMoveMax);

    document.removeEventListener('touchend', handleMouseUpMax);
    document.removeEventListener('touchmove', handleMouseMoveMax);
  };

  const maxForMin = () => currentMax - minValueBetween;

  const minForMax = () => currentMin + minValueBetween;

  // const minFunc =()=>{
  //   handleSetMin();
  //   {props.MinChange}
  // }
  // const maxFunc =()=>{
  //   handleSetMax();
    
  // }
  return (
    <div className='Range'>
        <div className="cardRange">
      <div className="linear-horizontal-layout">
        
        <div id='minInp'>
        <label htmlFor="min-input">Min: </label>
        <input
          id="min-input"
          type="number"
          name='MinSalaryRange'
          onChange={handleSetMin}
          value={inputMin}
          min={min}
          max={maxForMin()}
        />
        </div>
        <div ref={sliderRef} id="slider">
          <div ref={minValueRef} id="min" data-content={currentMin}>
            <div id="min-drag" onMouseDown={handleMinValueDrag} onTouchStart={handleMinValueDrag}></div>
          </div>

          <div ref={maxValueRef} id="max" data-content={currentMax}>
            <div id="max-drag" onMouseDown={handleMaxValueDrag} onTouchStart={handleMaxValueDrag}></div>
          </div>
        </div>
        <div id='maxInp'>
        <label htmlFor="max-input">Max: </label>
        <input
          id="max-input"
          type="number"
          name='MaxSalaryRange'
          onChange={handleSetMax}
          value={inputMax}
          min={minForMax()}
          max={max}
        />
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default DoubleRangeSlider;