
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from '../screens/Landing'
import Registrasi from '../screens/Registrasi'
import ShareOffers from '../screens/ShareOffers'

const StackNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    Registrasi: {
      screen: Registrasi
    },
    ShareOffers: {
      screen: ShareOffers
    }
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)