import { atom } from 'jotai';
import type { IGeoLocation } from '../types/geo.location.types';

export const geoLocationAtom = atom<IGeoLocation | null>();
