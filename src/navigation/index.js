
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Landing from '../screens/Landing'
import SignUp from '../screens/SignUp'
import ShareOffers from '../screens/ShareOffers'
import DownloadVoucher from '../screens/DownloadVoucher'

const StackNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
    },
    SignUp: {
      screen: SignUp
    },
    ShareOffers: {
      screen: ShareOffers
    },
    DownloadVoucher: {
      screen: DownloadVoucher
    }
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)