export default class Gain {
  protected gainNode: GainNode;

  protected synthCtx: AudioContext;

  protected level: number;

  constructor(synthCtx: AudioContext, connectToCtxDestination?: boolean) {
    this.gainNode = synthCtx.createGain();
    this.synthCtx = synthCtx;

    this.gainNode.gain.setValueAtTime(0, synthCtx.currentTime);

    if (connectToCtxDestination) {
      this.gainNode.connect(synthCtx.destination);
    }
  }

  setLevel = (value: number) => {
    this.level = value;
    this.gainNode.gain.setTargetAtTime(value, this.synthCtx.currentTime, 0.02);
  };

  getLevel = () => {
    return this.level;
  };

  connectChildNode = (childNode: AudioNode) => {
    childNode.connect(this.gainNode);
  };

  connectParentNode = (parentNode: AudioNode) => {
    this.gainNode.disconnect();
    this.gainNode.connect(parentNode);
  };

  getGainNode = () => {
    return this.gainNode;
  };
}
