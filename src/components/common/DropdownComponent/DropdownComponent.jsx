import NavigationDropdown from './utils/NavigationDropdown.jsx';
import SelectionDropdown from './utils/SelectionDropdown.jsx';

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
 * @param {Object} [props.navigation] - Link and interaction settings for the navigation variant.
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
  navigation,
}) {
  if (navigation) {
    return <NavigationDropdown options={options} {...navigation} />;
  }
  return (
    <SelectionDropdown
      {...{
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
      }}
    />
  );
}
