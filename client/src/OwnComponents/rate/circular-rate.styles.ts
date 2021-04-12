import { horizontallySpaced } from 'csstips'
import { palette } from '../../core/styles/palette'
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    display: 'flex',
    alignItems: 'center',
    ...horizontallySpaced('.5rem'),
    padding: '0 .5rem'
  },
  circleContainer: {
    position: 'relative',
    padding: '.5rem 0'
  },
  circle: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    border: '2px solid white',
    boxShadow: `0 0 0 2px ${palette.primary}`,
    $nest: {
      '&.filled': {
        backgroundColor: palette.primary
      }
    }
  }
})
