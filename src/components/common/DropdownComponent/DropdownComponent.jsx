import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import './DropdownComponent.css';

/**
 * Represents an available option in the dropdown menu.
 *
 * @typedef {Object} DropdownOption
 * @property {string} id - Unique identifier of the option.
 * @property {string} label - Display text of the option.
 * @property {import('react').ReactNode} [icon] - Optional icon.
 */

/**
 * Renders a reusable and accessible dropdown menu.
 *
 * Supports option selection via mouse or keyboard, first-letter
 * searching, icons, and validation states.
 *
 * @param {Object} props - Component properties.
 * @param {DropdownOption[]} [props.options=[]] - Available options.
 * @param {string} [props.value=''] - ID of the selected option.
 * @param {(value: string) => void} [props.onChange] - Callback that receives the selected option ID.
 * @param {string} [props.id] - HTML ID of the dropdown trigger button.
 * @param {string} [props.name] - Name of the hidden form field.
 * @param {string} [props.label='Opciones'] - Accessible name of the options list.
 * @param {string} [props.placeholder='Selecciona una opción'] - Text displayed when no option is selected.
 * @param {boolean} [props.required=false] - Indicates whether the field is required.
 * @param {boolean} [props.invalid=false] - Indicates a validation error.
 * @param {string} [props.describedBy] - ID of the element describing the field.
 * @param {boolean} [props.fullWidth=false] - Enables the full-width attribute for CSS styling.
 * @returns {import('react').ReactElement} Dropdown menu element.
 */
export default function DropdownComponent({
  options = [],
  value = '',
  onChange,
  id,
  name,
  label = 'Opciones',
  placeholder = 'Selecciona una opción',
  required = false,
  invalid = false,
  describedBy,
  fullWidth = false,
}) {
  const triggerId = id;
  const listId = triggerId ? `${triggerId}-options` : undefined;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const trigger = useRef(null);
  const selectedIndex = options.findIndex((option) => option.id === value);
  const selected = options[selectedIndex];

  const toggle = () => {
    setActive(Math.max(0, selectedIndex));
    setOpen((previous) => !previous);
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOutside = (event) => {
      if (!root.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  useEffect(() => {
    if (open) {
      root.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
    }
  }, [active, open]);

  const choose = (index) => {
    if (!options[index]) {
      return;
    }

    onChange?.(options[index].id);
    setOpen(false);
    trigger.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (!options.length) {
      return;
    }

    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      setOpen(true);
      setActive((previous) => {
        if (event.key === 'Home') {
          return 0;
        }
        if (event.key === 'End') {
          return options.length - 1;
        }
        if (!open) {
          return Math.max(0, selectedIndex);
        }
        return (previous + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
      });
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (open) {
        choose(active);
      } else {
        toggle();
      }
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const index = options.findIndex((option) =>
        option.label.toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase()),
      );

      if (index >= 0) {
        event.preventDefault();
        setActive(index);
        setOpen(true);
      }
    }
  };

  return (
    <div
      className="dropdown"
      data-full-width={fullWidth}
      ref={root}
      data-open={open}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      {name && <input type="hidden" name={name} value={value} />}
      <button
        id={triggerId}
        type="button"
        role="combobox"
        ref={trigger}
        className="dropdown-trigger"
        disabled={!options.length}
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-required={required}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onKeyDown={handleKeyDown}
        onClick={toggle}
      >
        <span className={`dropdown-content${selected ? '' : ' dropdown-placeholder'}`}>
          {selected?.icon && (
            <span className="dropdown-option-icon" aria-hidden="true">
              {selected.icon}
            </span>
          )}
          {selected?.label || placeholder}
        </span>
        <ChevronDown className="dropdown-icon" aria-hidden="true" />
      </button>
      <div id={listId} role="listbox" aria-label={label} className="dropdown-menu" inert={!open}>
        {options.map((option, index) => (
          <div
            key={option.id}
            id={`${listId}-${index}`}
            role="option"
            aria-selected={option.id === value}
            data-index={index}
            data-active={active === index}
            className="dropdown-option"
            onPointerMove={() => setActive(index)}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => choose(index)}
          >
            <span className="dropdown-content">
              {option.icon && (
                <span className="dropdown-option-icon" aria-hidden="true">
                  {option.icon}
                </span>
              )}
              <span>{option.label}</span>
            </span>
            {option.id === value && <Check aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}
