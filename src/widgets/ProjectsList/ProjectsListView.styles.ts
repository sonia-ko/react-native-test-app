import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  list: {
    backgroundColor: colors.background.contrast,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  selected: {
    border: ' 1px solid rgb(170, 170, 170)',
    backgroundColor: '#FEFEFE'
  }
})
