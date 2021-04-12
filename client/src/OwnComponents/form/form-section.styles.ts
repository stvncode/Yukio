import { stylesheet } from 'typestyle'

export const classNames = stylesheet({
  container: {
    border: `1px solid #d9d9d9`,
    borderRadius: '.5rem',
    margin: '2rem 0',
    color: 'gray'
  },
  contentContainer: {
    padding: '2rem'
  },
  titleContainer: {
    padding: '1rem 2rem',
    backgroundColor: '#fafafa',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottom: '1px solid #d9d9d9'
  },
  removeButton: {
    cursor: 'auto',
    opacity: 0,
    transition: 'opacity .2s ease',
    $nest: {
      '&.visible': {
        cursor: 'pointer',
        opacity: 1
      }
    }
  }
})
