import { horizontallySpaced } from 'csstips'
import { important } from 'csx'
import { palette } from '../../core/styles/palette'
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    backgroundColor: palette.orange,
    color: '#fff',
    padding: '2rem 6rem',
    $nest: {
      '.ant-alert-close-icon .anticon-close': {
        color: '#fff',
        marginTop: '1.5rem'
      },
      '.ant-alert-close-icon': {
        color: '#fff'
      },
      '&.info': {
        backgroundColor: palette.primary
      },
      '&.success': {
        backgroundColor: palette.availableGreen
      },
      '&.warning': {
        backgroundColor: palette.orange
      },
      '&.error': {
        backgroundColor: palette.red
      },
      '.ant-alert-message': {
        color: '#fff'
      }
    }
  },
  icon: {
    color: important('#fff'),
    fontSize: '2.5rem',
    top: '1.815rem'
  },
  actionsContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    ...horizontallySpaced('2rem')
  }
})
