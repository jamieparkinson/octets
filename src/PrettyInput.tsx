import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  flex: 1 0 auto;
  height: 40px;
  outline: 0;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  background: white;
  border: 1px solid rgb(220, 220, 220);
  font-size: 18px;
  color: ${({ value }) => value ? 'rgb(30, 30, 30)' : 'rgb(220, 220, 220)'};
  
  &:focus {
    color: rgb(30, 30, 30);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
  font-weight: bold;
  color: rgb(120, 120, 120);
  font-size: 13px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid rgb(220, 220, 220);
  margin: 0 10px 0 0 ;
`;

const InputWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
`;

interface Props {
  value: string
  onChange: (s: string) => void;
  placeholder: string;
  label: string;
}

const PrettyInput: React.FC<Props> = ({ value, onChange = Function.prototype, placeholder = "", label = "" }) => (
  <InputWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type="text"
    />
  </InputWrapper>
);

export default PrettyInput;
