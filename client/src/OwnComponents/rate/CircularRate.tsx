import React from 'react'
import { classNames } from './circular-rate.styles'
import { joinClasses, toggleClass } from '../../core/styles/classUtils'
import { range } from 'fp-ts/lib/Array'

interface Props {
  count: number | undefined
  total: number
}

export const CircularRate: React.FC<Props> = ({ count, total }) => {
  const circleMap = range(1, total)
  return (
    <div className={classNames.container}>
      {circleMap.map(val => (
        <div key={val} className={classNames.circleContainer}>
          <div
            className={joinClasses(classNames.circle, toggleClass(val <= (count || 0), 'filled'))}
          />
        </div>
      ))}
    </div>
  )
}
