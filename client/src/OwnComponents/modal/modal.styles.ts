import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    overflow: 'hidden',
    $nest: {
      '& > .ant-modal-content': {
        overflow: 'hidden'
      }
    }
  }
})
