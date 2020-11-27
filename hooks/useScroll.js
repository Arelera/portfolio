import { useEffect, useRef, useState } from 'react';

export default function useScroll(behavior = 'smooth') {
  const ref = useRef();
  const [elementPosition, setElementPosition] = useState();
  const [offsetPosition, setOffsetPosition] = useState();

  useEffect(() => {
    setElementPosition(ref.current?.getBoundingClientRect().top);
    setOffsetPosition(elementPosition - 50);
  });

  const scroll = () => {
    scrollTo({ top: offsetPosition, behavior });
  };

  return [ref, scroll];
}
// ref gets passed to the place you wanna scroll to
// scrollTo is the function that should be called to scroll there
