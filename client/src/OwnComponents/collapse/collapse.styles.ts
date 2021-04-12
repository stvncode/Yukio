import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    $nest: {
      '&.ant-collapse > .ant-collapse-item > .ant-collapse-header': {
        padding: '1rem 4rem'
      }
    }
  }
})
