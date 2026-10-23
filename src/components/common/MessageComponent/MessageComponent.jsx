import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CircleAlert, CircleCheck } from 'lucide-react';
import './MessageComponent.css';

export default function MessageComponent({ message, onDismiss, duration = 6000 }) {
  useEffect(() => {
    if (!message) {
      return;
    }
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onDismiss]);

  if (!message) {
    return null;
  }
  const Icon = message.type === 'success' ? CircleCheck : CircleAlert;
  return createPortal(
    <div
      className="message"
      data-type={message.type}
      role={message.type === 'error' ? 'alert' : 'status'}
      aria-atomic="true"
    >
      <Icon className="message__icon" aria-hidden="true" />
      <p className="message__text">{message.message}</p>
      <div className="message__track" aria-hidden="true">
        <div className="message__progress" style={{ animationDuration: `${duration}ms` }} />
      </div>
    </div>,
    document.body,
  );
}
