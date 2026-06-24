import React from 'react';
import PropTypes from 'prop-types';

/**
 * Field wrapper that renders a label, an optional leading icon and the child input/select.
 * Applies the design system: label uses the primary text color, icon is positioned
 * absolutely on the left, and the child receives the appropriate padding class.
 */
export default function Field({ id, label, icon: Icon, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-primary">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
        )}
        {/* Children are expected to be an <input> or <select> element. */}
        {React.cloneElement(children, {
          className: `input-field ${Icon ? 'pl-12' : 'pl-4'} ${children.props.className ?? ''}`,
        })}
      </div>
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};
