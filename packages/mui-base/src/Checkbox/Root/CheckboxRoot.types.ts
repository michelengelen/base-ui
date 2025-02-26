import type * as React from 'react';
import type { BaseUIComponentProps } from '../../utils/types';
import type { FieldRootOwnerState } from '../../Field/Root/FieldRoot.types';

export interface CheckboxRootOwnerState extends FieldRootOwnerState {
  checked: boolean;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  indeterminate: boolean;
}

export interface CheckboxRootProps
  extends Omit<UseCheckboxRootParameters, 'setControlId' | 'descriptionId'>,
    Omit<BaseUIComponentProps<'button', CheckboxRootOwnerState>, 'onChange'> {}

export type CheckboxContextValue = CheckboxRootOwnerState;

export interface UseCheckboxRootParameters {
  /**
   * The id of the input element.
   */
  id?: string;
  /**
   * Name of the underlying input element.
   *
   * @default undefined
   */
  name?: string;
  /**
   * If `true`, the component is checked.
   *
   * @default undefined
   */
  checked?: boolean;
  /**
   * The default checked state. Use when the component is not controlled.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback fired when the checked state is changed.
   *
   * @param {boolean} checked The new checked state.
   * @param {Event} event The event source of the callback.
   */
  onCheckedChange?: (checked: boolean, event: Event) => void;
  /**
   * If `true`, the component is read only.
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * If `true`, the `input` element is required.
   *
   * @default false
   */
  required?: boolean;
  /**
   * If `true`, the checkbox is focused on mount.
   *
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If `true`, the checkbox will be indeterminate.
   *
   * @default false
   */
  indeterminate?: boolean;
  /**
   * The ref to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * If `true`, the checkbox is a parent checkbox for a group of child checkboxes.
   * @default false
   */
  parent?: boolean;
}

export interface UseCheckboxRootReturnValue {
  /**
   * If `true`, the checkbox is checked.
   */
  checked: boolean;
  /**
   * Resolver for the input element's props.
   * @param externalProps custom props for the input element
   * @returns props that should be spread on the input element
   */
  getInputProps: (
    externalProps?: React.ComponentPropsWithRef<'input'>,
  ) => React.ComponentPropsWithRef<'input'>;
  /**
   * Resolver for the button element's props.
   * @param externalProps custom props for the button element
   * @returns props that should be spread on the button element
   */
  getButtonProps: (
    externalProps?: React.ComponentPropsWithRef<'button'>,
  ) => React.ComponentPropsWithRef<'button'>;
}
