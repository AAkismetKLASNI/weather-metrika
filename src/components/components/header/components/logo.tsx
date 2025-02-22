import { useSetAtom } from 'jotai';
import { geoLocationAtom } from '../../../../store/geo.location';

export function Logo() {
  const setGeoLocation = useSetAtom(geoLocationAtom);

  return (
    <button
      onClick={() => setGeoLocation(null)}
      className='hidden md:flex rounded-full bg-secondary p-2 lg:p-4 justify-center items-center hover:opacity-70'
    >
      <img
        src='/logo.svg'
        className='w-10 h-10'
      />
    </button>
  );
}
