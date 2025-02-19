import { useRef } from 'react';

export function useDebounce(callback: () => void, timer: number) {
  const timeoutId = useRef<Timer>(null);

  return () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => callback(), timer);
  };
}
