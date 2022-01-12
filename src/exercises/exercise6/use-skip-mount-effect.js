import { useEffect, useRef } from "react";
const useSkipMountEffect = (f, deps) => {
    const initialEffect = useRef(false) 

    useEffect(()=>
       {
           if(initialEffect.current){
               f()
           }else {
               initialEffect.current = true 
           }
     
},deps);

}

export default useSkipMountEffect;
