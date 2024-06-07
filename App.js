import React from "react";
import { Amplify } from "aws-amplify";
import awsConfig from "./config/aws-config";
import {AppNavigator} from "./navigation/AppNavigator";
import HideBottomTabProvider from "./context/HideBottomTabProvider";
import store from "./redux/store";
import { Provider } from 'react-redux';


Amplify.configure(awsConfig);

function App() {
  return (
    <Provider store={store}>
      <HideBottomTabProvider>
        <AppNavigator />
      </HideBottomTabProvider>
    </Provider>
  );
}

export default App;
