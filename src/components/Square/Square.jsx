import React from 'react';
import './Square.css';

export default function Square({ value, onClick, label, disabled }) {
  return (
    <button
      className={`square${value ? ` square-${value.toLowerCase()}` : ''}`}
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
