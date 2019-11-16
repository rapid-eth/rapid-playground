/**
 * @name EntityFormEffects
 * @description Manage Effects of Creating Entities
 */

/* --- Global --- */
import { useEffect } from 'react';

/**
 * @name 
 */
export const useDeltaGenerateEffect = (deltaType) => useEffect( () => { 
  switch (deltaType) {
    case 'timestamp':
      return ()=>Date.now()
    default:
      return ()=> Date.now()
  }
})