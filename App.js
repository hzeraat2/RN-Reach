import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './components/Home';
import NewsArticles from './components/NewsArticles';

const AppNavigator = createStackNavigator(
  {
    MainScreen: Home,
    NewsArticles: NewsArticles
  },
  {
    initialRouteName: "MainScreen"
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    },
    transitionConfig: () => fadeIn()
  }
);

export default createAppContainer(AppNavigator);