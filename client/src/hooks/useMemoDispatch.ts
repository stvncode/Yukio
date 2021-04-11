
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Actions, store } from '../store/store'

export const useSafeDispatch: () => typeof store['dispatch'] = useDispatch

export const useMemoDispatch = (action: Actions) => {
  const dispatch = useSafeDispatch()
  return useCallback(() => dispatch(action), [])
}