import { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
}

export function Badge({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <span
      onClick={onClick}
      className='px-2 py-1 bg-primary/20 rounded-full cursor-pointer transition-all hover:scale-95'
    >
      {children}
    </span>
  );
}
