import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "../../../screens/HelpScreens/HelpScreen";
import React from "react";
import HelpTripScreen from "../../../screens/HelpScreens/HelpTripScreen";
import TrackingAcceptanceScreen from "../../../screens/HelpScreens/TrackingAcceptanceScreen";
import AccountAppScreen from "../../../screens/HelpScreens/AccountAppScreen";
import ChangeAccountSettingScreen from "../../../screens/HelpScreens/ChangeAccountSettingScreen";
import DeleteDriverAccountScreen from "../../../screens/HelpScreens/DeleteDriverAccountScreen";
import DeleteAccountHereScreen from "../../../screens/HelpScreens/DeleteAccountHereScreen";
import DeleteConfirmScreen from "../../../screens/HelpScreens/DeleteConfirmScreen";
import DeleteSuccessScreen from "../../../screens/HelpScreens/DeleteSuccessScreen";
import RemoveVehicleScreen from "../../../screens/HelpScreens/RemoveVehicleScreen";
import RemoveVehicleConfirm from "../../../screens/HelpScreens/RemoveVehicleConfirm";
import RemoveVehicleSuccessScreen from "../../../screens/HelpScreens/RemoveVehicleSuccessScreen";

const HelpStack = createStackNavigator();

const HelpNavigator = () => {
  return (
    <HelpStack.Navigator screenOptions={{ headerShown: false }}>
      <HelpStack.Screen name="Helproute" component={HelpScreen} />
      <HelpStack.Screen name="Help-Trip" component={HelpTripScreen} />
      <HelpStack.Screen
        name="Tracking-Acceptance"
        component={TrackingAcceptanceScreen}
      />
      <HelpStack.Screen name="Account-App" component={AccountAppScreen} />
      <HelpStack.Screen
        name="ChangeAcc-Setting"
        component={ChangeAccountSettingScreen}
      />
      <HelpStack.Screen
        name="DeleteDriver-Acc"
        component={DeleteDriverAccountScreen}
      />
      <HelpStack.Screen
        name="Delete-Here"
        component={DeleteAccountHereScreen}
      />
      <HelpStack.Screen name="Delete-Confirm" component={DeleteConfirmScreen} />
      <HelpStack.Screen name="Delete-Success" component={DeleteSuccessScreen} />
      <HelpStack.Screen name="Remove-Vehicle" component={RemoveVehicleScreen} />
      <HelpStack.Screen
        name="Remove-Confirm"
        component={RemoveVehicleConfirm}
      />
      <HelpStack.Screen
        name="Remove-Success"
        component={RemoveVehicleSuccessScreen}
      />
    </HelpStack.Navigator>
  );
};

export default HelpNavigator;
