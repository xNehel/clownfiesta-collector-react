import React from 'react';
import {InputFilter, SliderFilter, IconFilter} from '../../filters';

const Sidebar = ({cards, allCards, info, filters, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick}) => {
  const toggleFamiliesFilter = () =>{
    if(filters.cardSet === "mean-streets-of-gadgetzan"){
      return <IconFilter header={true}
                         header_label="Family"
                         filter="multiClassGroup"
                         filters={filters}
                         wrapper_class="sidebar-icons"
                         handleIconClick={handleIconClick}/>
    }
  };

  return (
    <div className="sidebar__body">
      <InputFilter data={cards}    filter="name"     type="cards"      filters={filters} multiple={false} handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={info}     filter="race"     type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={info}     filter="faction"  type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={info}     filter="type"     type="gameInfo"   filters={filters} multiple={true}  handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>
      <InputFilter data={allCards} filter="mechanic" type="customInfo" filters={filters} multiple={true}  handleInputChange={handleInputChange} handleFilterReset={handleFilterReset}/>

      <SliderFilter filter="health"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 30]} max={50} marks={{0:0, 30:30, 50:50}} handleFilterReset={handleFilterReset}/>
      <SliderFilter filter="attack"     filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 5]}  max={30} marks={{0:0, 5:5, 30:30}}   handleFilterReset={handleFilterReset}/>
      <SliderFilter filter="durability" filters={filters} handleSliderClick={handleSliderClick} defaultValue={[0, 7]}  max={10} marks={{0:0, 7:7, 10:10}}   handleFilterReset={handleFilterReset}/>

      <IconFilter data={info} header={true} header_label="standard sets" filter="cardSet" filters={filters} wrapper_class="sidebar-icons" mode="standard" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset}/>
      {toggleFamiliesFilter()}
      <IconFilter data={info}  header={true} header_label="wild sets" filter="cardSet" filters={filters} wrapper_class="sidebar-icons" mode="wild" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset} />
      <IconFilter header={true} header_label="rarity" filter="rarity" filters={filters} wrapper_class="sidebar-icons" handleIconClick={handleIconClick} handleFilterReset={handleFilterReset}/>

      {/*<IsGoldenFilter/>*/}
    </div>
  );
};

export default Sidebar;