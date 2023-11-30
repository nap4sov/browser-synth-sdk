import Synthesizer from './synthesizer';
import { SynthConfig } from './types';

export const createSynthesizer = ({ notes }: SynthConfig) => {
  const audioContext = new AudioContext();

  return new Synthesizer({ audioContext, customNotes: notes || [] });
};
