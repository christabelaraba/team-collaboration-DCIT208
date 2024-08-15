import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = (options,callback=null) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)
    const callBackFunction = (entries) => {
        const [entry] = entries
        // console.log(entries,entry);
        setIsVisible(entry.isIntersecting)
        if (callback && typeof callback == "function" && entry.isIntersecting) callback();
    }
    useEffect(() => {
      const observer = new IntersectionObserver(callBackFunction,options)
      if (containerRef.current) observer.observe(containerRef.current)
      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef,options])
    
  return {containerRef,isVisible}
}