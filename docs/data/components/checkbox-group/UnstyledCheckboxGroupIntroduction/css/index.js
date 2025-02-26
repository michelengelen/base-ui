'use client';

import * as React from 'react';
import * as Checkbox from '@base_ui/react/Checkbox';
import * as CheckboxGroup from '@base_ui/react/CheckboxGroup';
import * as Field from '@base_ui/react/Field';

export default function UnstyledCheckboxIndeterminateGroup() {
  return (
    <Field.Root>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CheckboxGroup.Root defaultValue={['red']}>
          <Field.Label className="CheckboxGroup-label">Colors</Field.Label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Field.Root>
              <Checkbox.Root className="Checkbox" name="red">
                <Checkbox.Indicator className="Checkbox-indicator">
                  <CheckIcon className="Check" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Field.Label className="Checkbox-label">Red</Field.Label>
            </Field.Root>
            <Field.Root>
              <Checkbox.Root className="Checkbox" name="green">
                <Checkbox.Indicator className="Checkbox-indicator">
                  <CheckIcon className="Check" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Field.Label className="Checkbox-label">Green</Field.Label>
            </Field.Root>
            <Field.Root>
              <Checkbox.Root className="Checkbox" name="blue">
                <Checkbox.Indicator className="Checkbox-indicator">
                  <CheckIcon className="Check" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Field.Label className="Checkbox-label">Blue</Field.Label>
            </Field.Root>
          </div>
        </CheckboxGroup.Root>
        <Styles />
      </div>
    </Field.Root>
  );
}

const grey = {
  100: '#E5EAF2',
  300: '#C7D0DD',
  500: '#9DA8B7',
  600: '#6B7A90',
  800: '#303740',
  900: '#1C2025',
};

function Styles() {
  return (
    <style>
      {`
      .Check {
        height: 100%;
        width: 100%;
      }

      .CheckboxGroup-label {
        display: flex;
        font-weight: bold;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 17px;
      }

      .Checkbox-label {
        display: flex;
        font-weight: 500;
        gap: 8px;
        margin-bottom: 8px;
      }

      .Checkbox {
        all: unset;
        box-sizing: border-box;
        text-align: center;
        width: 24px;
        height: 24px;
        padding: 0;
        border-radius: 4px;
        border: 2px solid ${grey[600]};
        background: none;
        transition-property: background, border-color;
        transition-duration: 0.15s;
      }

      .Checkbox[data-disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .Checkbox:focus-visible {
        outline: 2px solid ${grey[500]};
        outline-offset: 2px;
      }

      .Checkbox[data-state="checked"] {
        border-color: ${grey[800]};
        background: ${grey[800]};
      }

      .Checkbox-indicator {
        height: 100%;
        display: inline-block;
        visibility: hidden;
        color: ${grey[100]};
      }

      .Checkbox-indicator[data-state="checked"] {
        visibility: visible;
      }

      .Checkbox-icon {
        width: 100%;
        height: 100%;
      }

      @media (prefers-color-scheme: dark) {
        .Checkbox {
          border-color: ${grey[500]};
        }

        .Checkbox:focus-visible {
          outline: 2px solid ${grey[600]};
          outline-offset: 2px;
        }

        .Checkbox[data-state="checked"] {
          border-color: ${grey[300]};
          background: ${grey[300]};
        }

        .Checkbox:hover:not([data-disabled]) {
          border-color: ${grey[100]};
        }

        .Checkbox-indicator {
          color: ${grey[900]};
        }
      }
    `}
    </style>
  );
}

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}
