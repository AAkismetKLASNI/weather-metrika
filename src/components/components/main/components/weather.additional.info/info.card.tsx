import type { LucideIcon } from 'lucide-react';
import { Icon } from '../../../../ui/icon';

interface Props {
  title: string;
  icon: LucideIcon;
  value: string | undefined;
}

export function InfoCard({ title, icon, value }: Props) {
  return (
    <div className='space-y-1'>
      <h4>{title}</h4>
      <div className='flex items-center gap-2'>
        <Icon
          Icon={icon}
          size='30'
        />
        <h3>{value}</h3>
      </div>
    </div>
  );
}
