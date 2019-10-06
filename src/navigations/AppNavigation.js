import React from 'react';
import { Image } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import BottomTabs from './BottomTabNavigation';
import Settings_Activity from '../screens/Settings_Activity';
import Details_Activity from '../screens/Details_Activity';
import Profile_Activity from '../screens/Profile_Activity';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen,
  Recipe: RecipeScreen,
  RecipesList: RecipesListScreen,
  Ingredient: IngredientScreen,
  Search: SearchScreen,
  IngredientsDetails: IngredientsDetailsScreen
}, {
  initialRouteName: 'Home',
  // headerMode: 'float',
  defaulfNavigationOptions: ({
    navigation
  }) => ({
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
      fontFamily: 'FallingSkyCond'
    }
  })
});
const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity ,
    Details: Details_Activity ,
    Profile: Profile_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);


const MainApp = createBottomTabNavigator(
  {
    Home: MainNavigator ,
    Settings: SettingsTab ,
    Cart: SettingsTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('../../assets/icons/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else if(routeName ==='Cart') {
          return (
            <Image
              source={ require('../../assets/icons/settings.png') }
              style={{ width: 20, height: 20 }} />
          );
        } else if(routeName ==='Settings'){
          return (
            <Image
              source={ require('../../assets/icons/settings.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
const DrawerStack = createDrawerNavigator({
  Main: MainApp,
}, {
  drawerPosition: 'left',
  initialRouteName: 'Main',
  drawerWidth: 250,
  contentComponent: DrawerContainer
});

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;