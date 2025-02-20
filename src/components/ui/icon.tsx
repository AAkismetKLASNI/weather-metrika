import type { LucideIcon } from 'lucide-react';

interface Props {
  Icon: LucideIcon;
  size: string;
  extra?: string;
}

export function Icon({ Icon, size, extra }: Props) {
  return (
    <Icon
      className={extra}
      size={size}
    />
  );
}
