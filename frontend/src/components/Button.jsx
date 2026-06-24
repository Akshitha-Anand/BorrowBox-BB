import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable button adhering to the BorrowBox design system.
 * Supports primary (default) and secondary variants.
 */
export default function Button({ children, onClick, disabled, variant = 'primary', type = 'button', className = '' }) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};
