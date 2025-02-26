'use client';

import * as React from 'react';
import * as RadioGroup from '@base_ui/react/RadioGroup';
import * as Radio from '@base_ui/react/Radio';
import { styled } from '@mui/system';

export default function UnstyledRadioGroupIntroduction() {
  return (
    <RadioGroup.Root name="root" style={{ display: 'flex', gap: 8 }}>
      <RadioItem value="light">
        <Indicator />
        Light
      </RadioItem>
      <RadioItem value="medium">
        <Indicator />
        Medium
      </RadioItem>
      <RadioItem value="heavy">
        <Indicator />
        Heavy
      </RadioItem>
    </RadioGroup.Root>
  );
}

const grey = {
  100: '#E5EAF2',
  200: '#D8E0E9',
  300: '#CBD4E2',
};

const blue = {
  400: '#3399FF',
  600: '#0072E6',
  800: '#004C99',
};

const RadioItem = styled(Radio.Root)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: ${grey[100]};
  color: black;
  outline: none;
  font-size: 16px;
  cursor: default;

  &:hover {
    background-color: ${grey[100]};
  }

  &:focus-visible {
    outline: 2px solid ${blue[400]};
    outline-offset: 2px;
  }

  &[data-radio='checked'] {
    background-color: ${blue[600]};
    color: white;
  }
`;

const Indicator = styled(Radio.Indicator)`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  outline: 1px solid black;

  &[data-radio='checked'] {
    background-color: white;
    border: none;
    outline: none;
  }
`;
