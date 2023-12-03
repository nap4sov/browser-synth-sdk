import Synthesizer from './synthesizer';
import { SynthConfig } from './types';
import { waveforms, filterTypes } from './constants';

const createSynthesizer = ({ notes }: SynthConfig) => {
  if (!AudioContext) {
    throw new Error('Web Audio Api is not supported');
  }

  const audioContext = new AudioContext();

  return new Synthesizer({ audioContext, customNotes: notes || [] });
};

export { createSynthesizer, Synthesizer, waveforms, filterTypes };
