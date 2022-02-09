import { useEffect, useRef, useState } from 'react'

export function usePromiseMemo(callback, deps = []) {
  const [state, setState] = useState({
    pending: true,
    fulfilled: false,
    rejected: false,
    state: 'pending',
    result: undefined,
  })
  const savedHandler = useRef()
  savedHandler.current = callback

  useEffect(() => {
    setState({
      pending: true,
      fulfilled: false,
      rejected: false,
      state: 'pending',
      result: undefined,
    })

    let aborted = false
    const controller = new AbortController()
    controller.signal.addEventListener('abort', () => {
      aborted = true
    })
    if (savedHandler.current) {
      const promise = savedHandler.current()
      if (promise && promise instanceof Promise) {
        promise
          .then((result) => {
            if (!aborted) {
              setState({
                result,
                state: 'fulfilled',
                fulfilled: true,
                rejected: false,
                pending: false,
              })
            }
          })
          .catch((result) => {
            if (!aborted) {
              setState({
                result,
                state: 'rejected',
                fulfilled: false,
                rejected: true,
                pending: false,
              })
            }
          })
      }
    }

    return (): void => {
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
