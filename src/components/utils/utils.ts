import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";

export const Drawer = createDrawerNavigator();

export const screenOptions: DrawerNavigationOptions = {
    headerTransparent: true,
    headerTitleAlign: "center",
    headerTintColor: "#0051bb",
    headerTitleStyle: {
        fontFamily: "Ubuntu-M"
    },
    drawerLabelStyle: {
        fontFamily: "Ubuntu-M"
    },
    headerBackgroundContainerStyle: {
        backgroundColor: "#effffb",
        borderBottomWidth: 0.2,
        borderBottomColor: "#d1d1d1"
    },
    drawerActiveBackgroundColor: "#0074D9",
    drawerActiveTintColor:"#fff",
    drawerStyle: {
        backgroundColor: '#effffb',
        width: "50%",
    }
}

export enum EnumEmoji {
    SUN_BEHIND_CLOUD = 0x26C5,
    SUNRISE = 0x1F304,
    SUNSET = 0x1F307,
    WIND = 0x1F4A8,
}