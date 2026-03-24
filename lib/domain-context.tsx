'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

export type Domain = 'vision' | 'language' | 'applied-ai';

interface DomainContextValue {
  domain: Domain;
  setDomain: (d: Domain) => void;
  showPicker: boolean;
  closePicker: () => void;
}

const DomainContext = createContext<DomainContextValue | null>(null);

const STORAGE_KEY = 'vla-domain';

export function DomainProvider({ children }: { children: ReactNode }) {
  const [domain, setDomainState] = useState<Domain>('vision');
  const [showPicker, setShowPicker] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Domain | null;
    if (stored && ['vision', 'language', 'applied-ai'].includes(stored)) {
      setDomainState(stored);
    } else {
      setShowPicker(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute('data-domain', domain);
  }, [domain, mounted]);

  const setDomain = useCallback((d: Domain) => {
    setDomainState(d);
    localStorage.setItem(STORAGE_KEY, d);
  }, []);

  const closePicker = useCallback(() => {
    setShowPicker(false);
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, domain);
    }
  }, [domain]);

  return (
    <DomainContext.Provider value={{ domain, setDomain, showPicker, closePicker }}>
      {children}
    </DomainContext.Provider>
  );
}

export function useDomain() {
  const ctx = useContext(DomainContext);
  if (!ctx) throw new Error('useDomain must be used within DomainProvider');
  return ctx;
}
