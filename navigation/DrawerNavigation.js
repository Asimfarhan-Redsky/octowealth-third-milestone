import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator, { TaxReportStackScreen } from "./BottomTabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";
import {
  blackColor,
  homeButtonBackGround,
  modalbackgroundColor,
} from "../constants/colors";
import TaxInfoScreen from "../screens/TaxInfoScreen";
import { TAX_REPORT_STACK_SCREEN } from "../constants/constants";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: modalbackgroundColor,
          borderTopRightRadius: 30,
        },
        drawerActiveTintColor: homeButtonBackGround,
        drawerLabelStyle: {
          color: blackColor,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name={TAX_REPORT_STACK_SCREEN}
        component={TaxReportStackScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
