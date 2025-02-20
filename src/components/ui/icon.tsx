import type { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon;
  size: string;
  color?: string;
  extra?: string;
  onClick?: () => void;
}

export function Icon({ Icon, size, extra, onClick, color }: Props) {
  if (!Icon) return;

  return (
    <Icon
      color={color}
      onClick={onClick}
      className={extra}
      size={size}
    />
  );
}
