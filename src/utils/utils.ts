import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { ForecastWeather } from "./types";

export const Drawer = createDrawerNavigator();

export const screenOptions: DrawerNavigationOptions = {
    headerTransparent: true,
    headerTitleAlign: "center",
    headerTintColor: "#0051BB",
    headerTitleStyle: {
        fontFamily: "Ubuntu-M"
    },
    drawerLabelStyle: {
        fontFamily: "Ubuntu-M"
    },
    headerBackgroundContainerStyle: {
        backgroundColor: "#EFFFFF",
        borderBottomWidth: 0.2,
        borderBottomColor: "#D1D1D1"
    },
    drawerActiveBackgroundColor: "#0074D9",
    drawerActiveTintColor:"#FFF",
    drawerStyle: {
        backgroundColor: '#EFFFFF',
        width: "50%",
    }
}

export function resolveBgColorCard(currently: string): string[] {
    return currently === "dia" ? ["#31CEF5", "#0074D9"] : ["#108AA8", "#05235A"];
}

export function resolveEmoji(conditionSlug: string) {
    return String.fromCodePoint(Number.parseInt(ForecastWeather[conditionSlug]));
}