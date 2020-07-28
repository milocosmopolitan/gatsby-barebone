import { useEffect, useState } from "react";

interface ScrollAnimationOptions {
  start: number;
  end: number;
  transform: {
    from: number;
    to?: number;
    change?: number;
    limit?: number;
  }
}

class ScrollAnimation {
  private _scrollHeight: number;
  public _totalChange: number;
  public _rateOfChange: number;
  // current frame starts from 0 + a
  // 0 is where animation starts at.
  public _currentFrame: number = 0;
  public _currentValue: number = 0;

  constructor(public option: ScrollAnimationOptions) {
    this._scrollHeight = option.end - option.start;
    this._totalChange = option.transform.change || (option.transform.to && option.transform.to - option.transform.from) || 0;
    this._currentValue = option.transform.from;
    this._rateOfChange = this._totalChange / this._scrollHeight;
  }

  calculatePosition(scrollY: number = 0) {
    const { start, transform } = this.option;
    if (scrollY > start) {
      this._currentFrame = scrollY - start;
      const changes = this._currentFrame * this._rateOfChange;

      if (Math.abs(changes) <= Math.abs(this._totalChange)) {
        this._currentValue = transform.from + changes
      } else {

        if (transform.to || transform.to === 0) {
          this._currentValue = transform.to;
        } else if ((transform.change && ((transform.from + transform.change) || (transform.from + transform.change) === 0))) {
          this._currentValue = (transform.from + transform.change);
        }
      }
    }

    return this._currentValue;
  }
}

// tslint:disable-next-line
class ScrollAnimationList {

  private _currentValue: number = 0;
  private _orderedQueues: ScrollAnimation[];

  get initialValue() {
    return this._orderedQueues[0].option.transform.from;
  }

  constructor(public queues: ScrollAnimation[]) {
    this._orderedQueues = this.queues.sort((a, b) => a.option.start - b.option.start);
  }

  calculatePosition(scrollY: number = 0): number {

    return this._orderedQueues.reduce((total, queue) => {
      const { start, transform } = queue.option;
      if (scrollY > start) {
        queue._currentFrame = scrollY - start;
        const changes = queue._currentFrame * queue._rateOfChange;

        if (Math.abs(changes) <= Math.abs(queue._totalChange)) {
          // queue._currentValue = transform.from + changes
          total = total + changes;
        } else {

          if (transform.to || transform.to === 0) {
            total = transform.to;
          } else if ((transform.change && ((transform.from + transform.change) || (transform.from + transform.change) === 0))) {
            total = (transform.from + transform.change);
          }

          // total = transform.to || transform.change || this._currentValue;
        }
      }

      return total;
    }, Number(this._orderedQueues[0].option.transform.from))
  }
}

export function useScrollAnimation(
  queues: ScrollAnimationOptions[],
  scrollY: number
) {

  if (!Array.isArray(queues)) {
    queues = [queues];
  }

  const animationList = new ScrollAnimationList(queues.map(queue => new ScrollAnimation(queue)))
  const [value, setValue] = useState<number>(animationList.initialValue);

  let tick = false;

  const updatePosition = () => {
    let newValue = value;
    if (!tick) {
      newValue = animationList.calculatePosition(scrollY);
      tick = false;
    }
    return newValue;
  }

  useEffect(() => setValue(() => updatePosition()), [scrollY]);

  return value;
}
