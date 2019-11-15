class Timer {
  constructor(fn, t) {
    this._t = t;
    this._fn = fn;
    this._interval = null;
  }

  stop = () => {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  };

  // start timer using current settings (if it's not already running)
  start = () => {
    if (!this._interval) {
      this.stop();
      this._interval = setInterval(this._fn, this._t);
    }
  };

  // start with new interval, stop current interval
  reset = newT => {
    this._t = newT;
    this.stop();
    this.start();
  };
}

export default Timer;
