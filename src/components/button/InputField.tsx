import React from 'react';
import { BtnProps } from '../../types/component';

export const InputField: React.FC<BtnProps> = (props) => {
  return (
    <div className="flex lg:justify-start justify-center">
      <button
        className={`${props.width} h-[47px] flex-shrink-0 bg-button  justify-center items-center`}>
        <h1 className="text-secondary text-[12px] font-normal lg:font-bold leading-normal uppercase ">
          {props.label}
        </h1>
      </button>
    </div>
  );
};
const InlineField: React.FC<BtnProps> = (props) => {
  return (
    <div className="flex lg:justify-start justify-center">
      <button
        className={`${props.width} h-[47px] flex-shrink-0 bg-button-inline justify-center items-center`}>
        <h1 className="text-primary text-[12px] font-normal lg:font-bold leading-normal uppercase">
          {props.label}
        </h1>
      </button>
    </div>
  );
};

export default InlineField;
