import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import ButtonComponent from '../common/ButtonComponent/ButtonComponent';
import { NAV_CTA, NAV_DROPDOWN, NAV_LINKS } from './utils/navLinks.js';
import './NavbarComponent.css';

function trackGlow(event) {
  const link = event.currentTarget;
  const rect = link.getBoundingClientRect();
  link.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  link.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

function GlowLabel({ link }) {
  return <span className="glow-label">{link.label}</span>;
}

function TabIcon({ link }) {
  const Icon = link.icon;
  return <Icon className="drawer-item__icon" aria-hidden="true" />;
}

function DesktopDropdown({ link, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(closeTimer.current);
    },
    [],
  );

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setOpen(true);
  };

  const handleLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 160);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleLeave();
    }
  };

  return (
    <div
      className="dropdown"
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleBlur}
    >
      <NavLink
        to={link.to}
        onMouseMove={trackGlow}
        aria-expanded={open}
        aria-haspopup="true"
        className={({ isActive }) => {
          const classes = ['glow-link'];
          if (isActive) {
            classes.push('active');
          }
          if (open) {
            classes.push('open');
          }
          return classes.join(' ');
        }}
      >
        <GlowLabel link={link} />
        <ChevronDown className="dropdown__chevron" aria-hidden="true" />
      </NavLink>
      <div className={`dropdown__menu ${open ? 'open' : ''}`}>
        {items.map((item) => (
          <DropdownItem key={item.id} item={item} onSelect={() => setOpen(false)} />
        ))}
      </div>
    </div>
  );
}

function DropdownItem({ item, onSelect }) {
  const Icon = item.icon;
  return (
    <NavLink to={item.to} onMouseMove={trackGlow} onClick={onSelect} className="dropdown__link">
      <Icon className="dropdown__icon" aria-hidden="true" />
      <GlowLabel link={item} />
    </NavLink>
  );
}

function MobileDropdown({ link, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-dropdown" data-open={open}>
      <div className={`mobile-dropdown__trigger ${open ? 'open' : ''}`}>
        <NavLink
          to={link.to}
          onClick={(event) => {
            event.stopPropagation();
            onNavigate();
          }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <TabIcon link={link} />
          <span>{link.label}</span>
        </NavLink>
        <button
          type="button"
          className="mobile-dropdown__toggle"
          aria-expanded={open}
          aria-label={open ? `Contraer ${link.label}` : `Expandir ${link.label}`}
          onClick={(event) => {
            event.stopPropagation();
            setOpen((value) => !value);
          }}
        >
          <ChevronDown aria-hidden="true" />
        </button>
      </div>
      <div className={`mobile-dropdown__submenu ${open ? 'open' : ''}`}>
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            onClick={onNavigate}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <TabIcon link={item} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function DesktopNav({ links }) {
  return (
    <nav className="desktop-nav" aria-label="Navegación principal">
      {links.map((link) => {
        if (link.id === 'nosotros') {
          return <DesktopDropdown key={link.id} link={link} items={NAV_DROPDOWN} />;
        }
        return (
          <NavLink
            key={link.id}
            className={({ isActive }) => {
              if (isActive) {
                return 'glow-link active';
              }
              return 'glow-link';
            }}
            to={link.to}
            end={link.to === '/'}
            onMouseMove={trackGlow}
          >
            <GlowLabel link={link} />
          </NavLink>
        );
      })}
    </nav>
  );
}

function MobileMenu({ links, cta, open, onNavigate }) {
  return (
    <div className="mobile-menu" data-open={open} inert={!open}>
      <div className="brand drawer-brand">
        <img className="brand__imagotipo" src="/imagotipoClaro.svg" alt="Enjamer" />
      </div>
      <nav aria-label="Navegación móvil">
        {links.map((link) => {
          if (link.id === 'nosotros') {
            return (
              <MobileDropdown
                key={link.id}
                link={link}
                items={NAV_DROPDOWN}
                onNavigate={onNavigate}
              />
            );
          }
          return (
            <NavLink
              key={link.id}
              className={({ isActive }) => {
                if (isActive) {
                  return 'active';
                }
                return '';
              }}
              to={link.to}
              end={link.to === '/'}
              onClick={onNavigate}
            >
              <TabIcon link={link} />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
        <ButtonComponent text={cta.label} to={cta.to} onClick={onNavigate} />
      </nav>
    </div>
  );
}

function Navbar({ links = NAV_LINKS, cta = NAV_CTA, brandTo = '/' }) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to={brandTo} aria-label="Enjamer, inicio">
            <img className="brand__imagotipo" src="/imagotipoClaro.svg" alt="enjamer" />
          </Link>
          <DesktopNav links={links} />
          <ButtonComponent text={cta.label} to={cta.to} />
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={open}
            aria-controls="navbar-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => {
              setOpen((value) => !value);
            }}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="navbar-menu">
        <MobileMenu links={links} cta={cta} open={open} onNavigate={close} />
      </div>
      {open ? (
        <button type="button" className="menu-scrim" aria-label="Cerrar menú" onClick={close} />
      ) : null}
    </>
  );
}

export default Navbar;
