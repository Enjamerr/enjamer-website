import { useCallback, useState } from 'react';
import { AppPresentationContext } from './AppPresentationContext.js';

export default function AppPresentationProvider({ children }) {
  const [navigationReady, setNavigationReady] = useState(false);
  const revealNavigation = useCallback(() => setNavigationReady(true), []);

  return (
    <AppPresentationContext.Provider value={revealNavigation}>
      <div className="app-shell" data-navigation-ready={navigationReady}>
        {children}
      </div>
    </AppPresentationContext.Provider>
  );
}
