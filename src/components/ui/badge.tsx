import { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className='px-2 py-1 bg-primary/20 rounded-full cursor-pointer transition-all hover:scale-95'>
      {children}
    </span>
  );
}
