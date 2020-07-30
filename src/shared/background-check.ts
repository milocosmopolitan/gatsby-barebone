import { useEffect, useState } from "react";
import { useScrollContext } from "./scroll/scroll.provider";
import { useDebounce } from "./hooks/debounce.hook";

// /*
//   * Throttle events
//   */
// function throttle(callback) {

//   if (throttleDelay) {
//     clearTimeout(throttleDelay);
//   }

//   throttleDelay = setTimeout(callback, 200);
// }
function parseColor(input: string) {
  if (input.substr(0,1)==="#") {
    const collen=(input.length-1)/3;
    const fact=[17,1,0.062272][collen-1];
    return [
        Math.round(parseInt(input.substr(1,collen),16)*fact),
        Math.round(parseInt(input.substr(1+collen,collen),16)*fact),
        Math.round(parseInt(input.substr(1+2*collen,collen),16)*fact)
    ];
    }
    else return input.split("(")[1].split(")")[0].split(",").map(x=>+x);
}

/*
  * Check for String, Element or NodeList
  */
function getElements(selector: string|any, convertToImages?: boolean) {
  const elements = document.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}


function isInside<T extends HTMLBaseElement>(ref: React.RefObject<T>, b: any) {
  if (!ref.current) { return false; }
  const a = ref.current.getBoundingClientRect();
  b = (b.nodeType ? b : b.el).getBoundingClientRect();
  return !(a.right < b.left || a.left > b.right || a.top > b.bottom || a.bottom < b.top);
}


export function useBackgroundDarkness<T extends HTMLBaseElement> (
  self: React.RefObject<T>,
  targets: string[],
  initialValue: number
) {
  
  let tick = false;
  
  const {scrollY} = useScrollContext();
  const elements = getElements(targets);

  function check() {
    const currentAnchor: HTMLBaseElement = elements.find((elem: HTMLBaseElement) => isInside(self, elem));
    if (currentAnchor) {
      const backgroundColor = window.getComputedStyle(currentAnchor).backgroundColor;
      const parsedColor = parseColor(backgroundColor);
      return (parsedColor[0]/255 + parsedColor[1]/255 + parsedColor[2]/255) / 3;
    }

    return initialValue;
  }

  let throttleDelay: any;
   /*
   * Throttle events
   */
  function throttle(callback: () => void) {

    if (throttleDelay) {
      clearTimeout(throttleDelay);
    }

    throttleDelay = setTimeout(callback, 200);
  }

  const [status, setStatus] = useState(initialValue);

  function checkBackground() {
    if(!tick) {
      setStatus(check());
      tick = false;
    }
  }
  useEffect(() => throttle(checkBackground), [scrollY]);

  return status;
}
