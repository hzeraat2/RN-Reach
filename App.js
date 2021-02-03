import { createStackNavigator, createAppContainer } from "react-navigation";
import {} from "@react-navigation/stack"
import Home from './components/Home';
import NewsArticle from './components/NewsArticle';

const AppNavigator = createStackNavigator(
  {
    MainScreen: Home,
    NewsArticle: NewsArticle
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