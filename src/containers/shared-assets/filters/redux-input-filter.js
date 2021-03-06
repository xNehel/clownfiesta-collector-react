import React from 'react';
import PropTypes from 'prop-types';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

const InputFilter = ({attribute, filter, multiple, handleSelect, value}) => {
  const Option = Select.Option;

  const options = attribute.map(a=> (
      <Option instancePrefix={a} optionIndex={a} option={a} value={a} key={a}>{a}</Option>
  ));


  const placeholder = attribute.slice(0,3).map(x=>x).join(", ").toLowerCase();
  return (
      <div className="input-filter-wrapper" id={filter}>
        <h4>{filter}</h4>
        <Select mode={multiple ? "multiple" : null}
                showSearch={multiple === false ? true : false}
                allowClear={multiple !== false ? true : false}
                style={{width: "100%"}}
                onChange={(e)=>handleSelect(e,filter)}
                value={value}
                placeholder={`${placeholder}...`}>
          {options}
        </Select>
      </div>
  );
};

InputFilter.propTypes = {
  attribute: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
      PropTypes.string, //if multiple == false
      PropTypes.array   //if multiple == true
  ])
};


export default InputFilter;