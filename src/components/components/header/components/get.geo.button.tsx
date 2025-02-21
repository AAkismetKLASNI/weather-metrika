import { MapPinHouseIcon } from 'lucide-react';
import { Icon } from '../../../ui/icon';
import { useGeoHandlers } from '../hooks/use.geo.handlers';

export function GetGeoButton() {
  const { getGeoCurrentGeo } = useGeoHandlers();

  return (
    <button
      onClick={getGeoCurrentGeo}
      className='bg-secondary p-4 rounded-full flex justify-center items-center hover:opacity-70'
    >
      <Icon
        color='var(--color-accent)'
        Icon={MapPinHouseIcon}
        size='30'
      />
    </button>
  );
}
