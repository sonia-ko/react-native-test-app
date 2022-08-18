import colors from '../../theme/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  task: {
    width: '20px',
    height: '20px',
    borderRadius: 12.5,
    border: '1px solid grey',
    position: 'absolute',
    right: '10px',
    top: '10px'
  },
  taskCompleted: {
    backgroundColor: colors.primary.main
  },
  taskNotCompleted: {
    backgroundColor: 'transparrent'
  },
  taskCard: {
    paddingRight: '50px',
    position: 'relative'
  }
})
