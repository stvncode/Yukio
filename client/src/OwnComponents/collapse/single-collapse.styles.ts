import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  collapse: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  panel: {
    width: '100%',
    $nest: {
      '&.ant-collapse-item': {
        borderBottom: 'none'
      },
      '&.ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box': {
        padding: 0,
        marginTop: '1rem'
      },
      '&.ant-collapse-item > .ant-collapse-header': {
        lineHeight: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        color: 'inherit',
        width: '100%',
        cursor: 'initial'
      },
      '&.ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow': {
        position: 'relative',
        left: 0,
        lineHeight: 0,
        fontSize: '1.5rem',
        transform: 'translate(-50%, -10%)',
        width: 'fit-content',
        padding: 0,
        display: 'flex',
        alignItems: 'center'
      },
      '&.ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header': {
        paddingLeft: 0
      }
    }
  },
  innerDiv: {
    width: '100%'
  },
  clickableHeader: {
    cursor: 'pointer',
    width: 'fit-content'
  }
})
