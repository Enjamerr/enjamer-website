import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import useNavigationDropdown from '../hook/useNavigationDropdown.js';

export default function NavigationDropdown({
  options,
  link,
  inline = false,
  onNavigate,
  onMouseMove,
}) {
  const {
    open,
    id,
    root,
    toggle,
    navigate,
    handleMouseEnter,
    handleMouseLeave,
    handleBlur,
    handleKeyDown,
    toggleOpen,
  } = useNavigationDropdown({ inline, onNavigate });
  const Icon = link.icon;
  return (
    <div
      className="dropdown dropdown--navigation"
      data-open={open}
      data-inline={inline}
      ref={root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className="dropdown-navigation-trigger">
        <NavLink
          to={link.to}
          onClick={navigate}
          className={inline ? undefined : 'glow-link'}
          onMouseMove={onMouseMove}
        >
          {inline && <Icon aria-hidden="true" />}
          <span className="glow-label">{link.label}</span>
        </NavLink>
        <button
          ref={toggle}
          type="button"
          className="dropdown-navigation-toggle"
          aria-label={`${open ? 'Contraer' : 'Expandir'} ${link.label}`}
          aria-expanded={open}
          aria-controls={id}
          onClick={toggleOpen}
        >
          <ChevronDown className="dropdown-icon" aria-hidden="true" />
        </button>
      </div>
      <div className="dropdown-navigation-bridge">
        <div id={id} className="dropdown-menu" inert={!open}>
          {options.map((option) => (
            <NavLink
              className="dropdown-option"
              key={option.id}
              to={option.to}
              onClick={navigate}
              onMouseMove={onMouseMove}
            >
              <span className="glow-label">{option.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
