import Synthesizer from './synthesizer';
import { Notes } from './types';

export const createSynthesizer = (notes?: Notes) => {
  const audioContext = new AudioContext();
  return new Synthesizer(audioContext, notes || []);
};
