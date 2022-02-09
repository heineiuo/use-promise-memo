import { DependencyList } from 'react'

type PromiseValue<Result, Reason = any> =
  | {
      state: 'pending'
      rejected: false
      fulfilled: false
      pending: true
      result: undefined
    }
  | {
      state: 'fulfilled'
      rejected: false
      fulfilled: true
      pending: false
      result: Result
    }
  | {
      state: 'rejected'
      rejected: true
      fulfilled: false
      pending: false
      result: Reason
    }

export function usePromiseMemo<T = unknown>(
  callback: () => Promise<T> | void,
  deps?: DependencyList
): PromiseValue<T>
