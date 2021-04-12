import React from 'react'
import { flow } from 'fp-ts/lib/function'
import { Omit } from '../../prelude/fp/object'
import { Page, PerPage } from '../../business/values/pagination'
import { Pagination as AntPagination } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'

interface Props extends Omit<PaginationProps, 'onChange' | 'pageSize' | 'current'> {
  current: Page
  pageSize: PerPage
  onChange: (page: Page) => void
}

export const Pagination: React.FC<Props> = ({ current, pageSize, onChange, ...props }) => (
  <AntPagination
    current={Page.unwrap(current)}
    pageSize={PerPage.unwrap(pageSize)}
    onChange={flow(
      Page.wrap,
      onChange
    )}
    {...props}
  />
)
