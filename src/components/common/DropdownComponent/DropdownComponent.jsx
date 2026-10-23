
import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import './DropdownComponent.css';

/**
 * Representa una opción disponible en el menú desplegable.
 *
 * @typedef {Object} DropdownOption
 * @property {string} id - Identificador único de la opción.
 * @property {string} label - Texto visible de la opción.
 * @property {import('react').ReactNode} [icon] - Ícono opcional.
 */

/**
 * Muestra un menú desplegable reutilizable y accesible.
 *
 * Permite seleccionar opciones mediante clic o teclado, buscar por
 * la primera letra, mostrar íconos y gestionar estados de validación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {DropdownOption[]} [props.options=[]] - Opciones disponibles.
 * @param {string} [props.value=''] - ID de la opción seleccionada.
 * @param {(value: string) => void} [props.onChange] - Función que recibe el ID seleccionado.
 * @param {string} [props.id] - ID HTML del botón desplegable.
 * @param {string} [props.name] - Nombre del campo oculto del formulario.
 * @param {string} [props.label='Opciones'] - Nombre accesible de la lista.
 * @param {string} [props.placeholder='Selecciona una opción'] - Texto mostrado sin selección.
 * @param {boolean} [props.required=false] - Indica si el campo es obligatorio.
 * @param {boolean} [props.invalid=false] - Indica un error de validación.
 * @param {string} [props.describedBy] - ID del elemento que describe el campo.
 * @param {boolean} [props.fullWidth=false] - Activa el atributo de ancho completo para CSS.
 * @returns {import('react').ReactElement} Elemento del menú desplegable.
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
