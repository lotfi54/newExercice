import { useEffect, useRef } from "react";
const useWithFirstMountEffect = (fInitialRender, fNotInitialRender, deps) => {
  const initialEffect = useRef(false);

  useEffect(() => {
    if (initialEffect.current) {

      fNotInitialRender();
    } else {
     
      fInitialRender();
      initialEffect.current = true;
    }
  }, deps);
};

export default useWithFirstMountEffect;
