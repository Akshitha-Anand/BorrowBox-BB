import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable input field following the BorrowBox design system.
 * Renders an optional leading icon and applies the "input-field" utility class.
 */
export default function Input({ id, name, type = 'text', placeholder, value, onChange, icon: Icon, className = '', ...props }) {
  return (
    <div className="relative w-full">
      {Icon && (
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${Icon ? 'pl-12' : 'pl-4'} pr-4 ${className}`}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};
