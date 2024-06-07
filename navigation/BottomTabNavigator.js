import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {
  blackColor,
  homeButtonBackGround,
  whiteColor,
} from "../constants/colors";
import { spacings } from "../shared/constants/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../utils";
import {
  ACCOUNT_OVERVIEW_SCREEN,
  ADD_GOAL_SCREEN,
  AI_SCREEN,
  ALL_GOAL_SCREEN,
  FIND_YOUR_BANK_SCREEN,
  GOAL_DETAILS_SCREEN,
  HOME_SCREEN,
  HOME_STACK_SCREEN,
  LOGIN_BANK_ACCOUNT_SCREEN,
  TAX_INFO_SCREEN,
  TAX_PREVIEW_SCREEN,
  TRANSACTIONS_HISTORY,
  TRANSSACTION_NEW_SCREEN,
} from "../constants/constants";
import ReportingScreen from "../screens/ReportingScreen";
import AddGoalScreen from "../screens/AddGoalScreen";
import AllGoalsScreen from "../screens/AllGoalsScreen";
import AccountOverviewScreen from "../screens/AccountOverViewScreen";
import GoalDetailScreen from "../screens/GoalDetailsScreen";
import { HideBottomTabContext } from "../context/HideBottomTabProvider";
import AIScreen from "../screens/AIScreen";
import TransactionsScreenNew from "../screens/TransactionsScreenNew";
import FindYourBankScreen from "../screens/FindYourBankScreen";
import LoginBankAcScreen from "../screens/LoginBankAcScreen";
import TaxInfoScreen from "../screens/TaxInfoScreen";
import TaxPreviewScreen from "../screens/TaxPreViewScreen";
import TransactionsHistory from "../screens/TransactionsHistory";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Reporting"
      component={ReportingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={ADD_GOAL_SCREEN}
      component={AddGoalScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={ALL_GOAL_SCREEN}
      component={AllGoalsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={GOAL_DETAILS_SCREEN}
      component={GoalDetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={TRANSACTIONS_HISTORY}
      component={TransactionsHistory}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={TAX_PREVIEW_SCREEN}
      component={TaxPreviewScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={TAX_INFO_SCREEN}
      component={TaxInfoScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AccountOverviewStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ACCOUNT_OVERVIEW_SCREEN}
      component={AccountOverviewScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={FIND_YOUR_BANK_SCREEN}
      component={FindYourBankScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={LOGIN_BANK_ACCOUNT_SCREEN}
      component={LoginBankAcScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = () => {
  const contextReciever = useContext(HideBottomTabContext);
  const TabScreenOptions = ({ route }) => {
    const focusedRoute = getFocusedRouteNameFromRoute(route);
    const hiddenRoutes = [
      ADD_GOAL_SCREEN,
      ALL_GOAL_SCREEN,
      GOAL_DETAILS_SCREEN,
      FIND_YOUR_BANK_SCREEN,
      LOGIN_BANK_ACCOUNT_SCREEN,
      TRANSACTIONS_HISTORY,
      TAX_INFO_SCREEN,
      TAX_PREVIEW_SCREEN
    ];
    const hidden = hiddenRoutes.includes(focusedRoute);
    return {
      tabBarStyle: {
        backgroundColor: blackColor,
        height: hp(10),
        paddingBottom: spacings.large,
        paddingTop: spacings.xxxxLarge,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        display: hidden || contextReciever?.drawerVisible ? "none" : undefined,
      },
      tabBarLabel:
        route.name === HOME_STACK_SCREEN
          ? HOME_STACK_SCREEN
          : route.name === ACCOUNT_OVERVIEW_SCREEN
            ? "Chart"
            : route?.name === AI_SCREEN
              ? "Goals"
              : "More",
      tabBarIcon: ({ color, size }) => {
        switch (route.name) {
          case HOME_STACK_SCREEN:
            return <Octicons name="home" size={size} color={color} />;
          case ACCOUNT_OVERVIEW_SCREEN:
            return <SimpleLineIcons name="chart" color={color} size={size} />;
          case AI_SCREEN:
            return <Feather name="target" color={color} size={size} />;
          default:
            return <Feather name="more-horizontal" color={color} size={size} />;
        }
      },
      headerShown: false,
    };
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: homeButtonBackGround,
        tabBarInactiveTintColor: whiteColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={TabScreenOptions}
      />
      <Tab.Screen
        name={ACCOUNT_OVERVIEW_SCREEN}
        component={AccountOverviewStackScreen}
        options={TabScreenOptions}
      />
      <Tab.Screen
        name={AI_SCREEN}
        component={AIScreen}
        options={TabScreenOptions}
      />
      <Tab.Screen
        name={TRANSSACTION_NEW_SCREEN}
        component={TransactionsScreenNew}
        options={TabScreenOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
