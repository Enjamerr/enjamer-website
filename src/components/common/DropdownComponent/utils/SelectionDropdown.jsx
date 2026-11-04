import { Check, ChevronDown } from 'lucide-react';
import useSelectionDropdown from '../hook/useSelectionDropdown.js';

export default function SelectionDropdown({
  options,
  value,
  onChange,
  id,
  name,
  label,
  placeholder,
  required,
  invalid,
  describedBy,
  fullWidth,
}) {
  const {
    triggerId,
    listId,
    open,
    active,
    root,
    trigger,
    selected,
    toggle,
    choose,
    handleKeyDown,
    handleBlur,
    setActive,
  } = useSelectionDropdown({ options, value, onChange, id });

  return (
    <div
      className="dropdown"
      data-full-width={fullWidth}
      ref={root}
      data-open={open}
      onBlur={handleBlur}
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
