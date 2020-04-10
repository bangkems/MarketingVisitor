
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from '../screens/Landing'

const StackNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    }
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)