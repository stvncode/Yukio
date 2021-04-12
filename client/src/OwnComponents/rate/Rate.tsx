import React from 'react'
import { joinClasses } from '../../core/styles/classUtils'
import { palette } from '../../core/styles/palette'
import { Rate as AntRate } from 'antd'
import { RateProps } from 'antd/lib/rate'
import { stylesheet } from 'typestyle'

const classNames = stylesheet({
  container: {
    color: palette.primary,
    $nest: {
      '.ant-rate-star:not(:last-child)': {
        marginRight: '.125rem'
      }
    }
  }
})

export const Rate: React.FC<RateProps> = ({ className, ...props }) => (
  <AntRate {...props} className={joinClasses(classNames.container, className || '')} />
)
