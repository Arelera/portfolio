import { useEffect, useRef, useState } from 'react';

export default function useScroll(behavior = 'smooth') {
  const ref = useRef();
  const [elementPosition, setElementPosition] = useState();
  const [offsetPosition, setOffsetPosition] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setElementPosition(
        ref.current?.getBoundingClientRect().top + window.pageYOffset
      );
      setOffsetPosition(elementPosition - 50);
    }
  });

  // if ref is not used, it will scroll to top
  const scroll = () => {
    ref.current
      ? scrollTo({ top: offsetPosition, behavior })
      : scrollTo({ top: 0, behavior });
  };

  return [ref, scroll];
}
// ref gets passed to the place you wanna scroll to
// scrollTo is the function that should be called to scroll there
