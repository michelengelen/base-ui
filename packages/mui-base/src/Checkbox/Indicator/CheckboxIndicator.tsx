import * as React from 'react';
import PropTypes from 'prop-types';
import type { CheckboxIndicatorProps } from './CheckboxIndicator.types';
import { CheckboxContext } from '../Root/CheckboxContext';
import { useCheckboxStyleHooks } from '../utils';
import { resolveClassName } from '../../utils/resolveClassName';
import { evaluateRenderProp } from '../../utils/evaluateRenderProp';
import { useRenderPropForkRef } from '../../utils/useRenderPropForkRef';
import { useFieldRootContext } from '../../Field/Root/FieldRootContext';

function defaultRender(props: React.ComponentPropsWithRef<'span'>) {
  return <span {...props} />;
}

/**
 * The indicator part of the Checkbox.
 *
 * Demos:
 *
 * - [Checkbox](https://base-ui.netlify.app/components/react-checkbox/)
 *
 * API:
 *
 * - [CheckboxIndicator API](https://base-ui.netlify.app/components/react-checkbox/#api-reference-CheckboxIndicator)
 */
const CheckboxIndicator = React.forwardRef(function CheckboxIndicator(
  props: CheckboxIndicatorProps,
  forwardedRef: React.ForwardedRef<HTMLSpanElement>,
) {
  const { render: renderProp, className, keepMounted = false, ...otherProps } = props;
  const render = renderProp ?? defaultRender;

  const { ownerState: fieldOwnerState } = useFieldRootContext();

  const ownerState = React.useContext(CheckboxContext);
  if (ownerState === null) {
    throw new Error('Base UI: Checkbox.Indicator is not placed inside the Checkbox component.');
  }

  const extendedOwnerState = { ...fieldOwnerState, ...ownerState };

  const styleHooks = useCheckboxStyleHooks(extendedOwnerState);
  const mergedRef = useRenderPropForkRef(render, forwardedRef);

  if (!keepMounted && !ownerState.checked && !ownerState.indeterminate) {
    return null;
  }

  const elementProps = {
    className: resolveClassName(className, extendedOwnerState),
    ref: mergedRef,
    ...styleHooks,
    ...otherProps,
  };

  return evaluateRenderProp(render, elementProps, ownerState);
});

CheckboxIndicator.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Class names applied to the element or a function that returns them based on the component's state.
   */
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * If `true`, the indicator stays mounted when unchecked. Useful for CSS animations.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * A function to customize rendering of the component.
   */
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
} as any;

export { CheckboxIndicator };
