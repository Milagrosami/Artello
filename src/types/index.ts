import { DrawerNavigationOptions, DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LayoutChangeEvent } from "react-native/types";

export type InitialRoutes = {
    Onboarding : undefined,
    HomeNavigator: undefined,
};

export type HomeRoutes = {
    DrawerNavigator: undefined,
    Details: undefined
};
export type DrawerRoutes = {
    HomeNavigator: undefined,
    Collection: undefined,
    Messages: undefined,
    Settings: undefined,
};

export interface InitialNavigationProps<RouteName extends keyof InitialRoutes> {
    navigation: StackNavigationProp<InitialRoutes, RouteName>;
    route: RouteProp<InitialRoutes, RouteName>;
  }
  
  export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: StackNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
  }

  export interface DrawerNavigationProps<RouteName extends keyof DrawerRoutes> {
    navigation: DrawerNavigationProp<DrawerRoutes, RouteName>;
    route: RouteProp<DrawerRoutes, RouteName>;
  }

  export type DrawerComponentProps = {
    active?: boolean;
    options: DrawerNavigationOptions;
    onLayout: (e: LayoutChangeEvent) => void;
    onPress: () => void;
  };