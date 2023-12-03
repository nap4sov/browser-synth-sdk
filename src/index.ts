import Synthesizer from './synthesizer';
import { SynthConfig } from './types';

export const createSynthesizer = ({ notes }: SynthConfig) => {
  if (!AudioContext) {
    throw new Error('Web Audio Api is not supported');
  }

  const audioContext = new AudioContext();

  return new Synthesizer({ audioContext, customNotes: notes || [] });
};
