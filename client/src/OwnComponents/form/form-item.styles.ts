import { palette } from '../../core/styles/palette'
import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    marginBottom: '1.5rem',
    $nest: {
      '.ant-legacy-form-item-label': {
        fontWeight: 600
      },
      '.ant-legacy-form-item-control-wrapper .ant-legacy-form-item-control': {
        lineHeight: 'inherit'
      },
      '.ant-legacy-form-extra': {
        fontSize: '1.5rem'
      },
      '.ant-legacy-form-item-label label': {
        fontSize: '1.5rem',
        color: palette.mediumGray
      },
      '.ant-legacy-form-item, .ant-legacy-form label': {
        fontSize: '1.5rem'
      },
      '&.full-width .ant-legacy-form-item-control-wrapper': {
        width: '100%'
      }
    }
  }
})
