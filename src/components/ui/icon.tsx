import type { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon;
  size: string;
  extra?: string;
  onClick?: () => void;
}

export function Icon({ Icon, size, extra, onClick }: Props) {
  if (!Icon) return;

  return (
    <Icon
      onClick={onClick}
      className={extra}
      size={size}
    />
  );
}
