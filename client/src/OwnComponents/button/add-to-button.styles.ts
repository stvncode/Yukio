import { horizontallySpaced } from 'csstips'
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '6rem',
    flex: 1,
    $nest: {
      '&.ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline):not(.ant-btn-icon-only)': {
        paddingLeft: '15px'
      },
      '&.ant-btn-loading > i': {
        position: 'absolute',
        right: '14px'
      }
    }
  },
  addText: {},
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.8rem',
    ...horizontallySpaced('1.5rem')
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  smallText: {
    fontSize: '1.2rem'
  }
})
