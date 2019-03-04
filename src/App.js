import React, { useState } from "react";
import styled from "styled-components";
import PrettyInput from "./PrettyInput";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 250, 250);
`;

const ContentBox = styled.div`
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
  background-color: white;
  width: 50%;
  max-width: 400px;
  min-width: 310px;
`;

const Title = styled.h4`
  text-align: center;
  display: block;
  font-size: 20px;
  margin: 0 0 20px 0;
  color: rgb(30, 30, 30);
`;

const createValueParser = (setValue, radix) => {
  return x => {
    const v = Math.min(parseInt(x, radix), 0xFF);
    return setValue(isNaN(v) ? '' : v);
  }
};

const formatValue = (value, radix, length) => {
  const str = value.toString(radix);
  if (str !== '') {
    return str.padStart(length, '0');
  }
  return '';
};

const App = () => {
  const [ value, setValue ] = useState('');
  return (
    <AppWrapper>
      <ContentBox>
        <Title>Octet format converter</Title>
        <PrettyInput
          label="BIN"
          value={formatValue(value, 2, 8)}
          onChange={createValueParser(setValue, 2)}
          placeholder="Binary"
        />
        <PrettyInput
          label="HEX"
          value={formatValue(value, 16, 2)}
          onChange={createValueParser(setValue, 16)}
          placeholder="Hexadecimal"
        />
        <PrettyInput
          label="DEC"
          value={formatValue(value, 10, 2)}
          onChange={createValueParser(setValue, 10)}
          placeholder="Decimal"
        />
      </ContentBox>
    </AppWrapper>
  );
}

export default App;
