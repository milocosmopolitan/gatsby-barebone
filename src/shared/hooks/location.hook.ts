import { useState, useEffect } from 'react'
import { globalHistory, HistoryLocation, NavigateFn } from '@reach/router'

interface LocationHookState {
  location: HistoryLocation;
  navigate: NavigateFn;
}

type UseLocationHook = () => LocationHookState;

export const useLocation: UseLocationHook = () => {
  const initialState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate,
  }
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const removeListener = globalHistory.listen(params => {
      const { location } = params
      const newState = { ...initialState, location }
      setState(newState)
    })
    return () => {
      removeListener()
    }
  }, [])
  return state
}
