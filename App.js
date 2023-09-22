const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StudentSignup from "./screens/StudentSignup";
import TagFlight from "./components/TagFlight";
import Property1READIconyes from "./components/Property1READIconyes";
import Sort1 from "./components/Sort1";
import SearchResult2 from "./screens/SearchResult2";
import SearchResult1 from "./screens/SearchResult1";
import StudentLogin from "./screens/StudentLogin";
import Student from "./screens/Student";
import DrawerMenu from "./components/DrawerMenu";
import SplashScreen from "./screens/SplashScreen";
import StudentLoginPersonalForm from "./screens/StudentLoginPersonalForm";
import StudentOtp from "./components/StudentOtp";
import StudentLoginAcedaicsForm from "./screens/StudentLoginAcedaicsForm";
import Search from "./components/Search";
import SearchTwoWay from "./components/SearchTwoWay";
import Certificates from "./screens/Certificates";
import Register from "./screens/Register";
import Passwod from "./components/Passwod";
import OnlineCourse from "./screens/OnlineCourse";
import Internship from "./screens/Internship";
import TechnicalCompetition from "./screens/TechnicalCompetition";
import PaperPresentation from "./screens/PaperPresentation";
import Webinar from "./screens/Webinar";
import ProjectPresentation from "./screens/ProjectPresentation";
import Description from "./components/Description";
import ProfilePhoto from "./components/ProfilePhoto";
import Profile from "./screens/Profile";
import BottomTab9 from "./components/BottomTab9";
import BottomTab8 from "./components/BottomTab8";
import BottomTab7 from "./components/BottomTab7";
import BottomTab6 from "./components/BottomTab6";
import BottomTab5 from "./components/BottomTab5";
import BottomTab4 from "./components/BottomTab4";
import BottomTab3 from "./components/BottomTab3";
import BottomTab2 from "./components/BottomTab2";
import BottomTab1 from "./components/BottomTab1";
import BottomTab from "./components/BottomTab";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Group410 from "./components/Group49";
import Header1 from "./components/Header1";
import Group4 from "./components/Group4";
import EventsTopBar1 from "./components/EventsTopBar1";
import EventsTopBar from "./components/EventsTopBar";
import Group49 from "./components/Group49";
import Group41 from "./components/Group41";
import Group42 from "./components/Group42";
import Group48 from "./components/Group48";
import Group47 from "./components/Group47";
import Group44 from "./components/Group44";
import Group43 from "./components/Group43";
import Group45 from "./components/Group45";
import Group46 from "./components/Group46";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 316 } }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <BottomTab8 />,
    <BottomTab6 />,
    <BottomTab4 />,
    <BottomTab2 />,
    <BottomTab />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <BottomTab9 />,
    <BottomTab7 />,
    <BottomTab5 />,
    <BottomTab3 />,
    <BottomTab1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.03)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 15,
              elevation: 15,
              shadowOpacity: 1,
              flexDirection: "row",
              padding: 16,
              alignItems: "center",
              justifyContent: "space-between",
              height: 85,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Student"
        component={Student}
        options={(props) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={(props) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={(props) => ({
          headerShown: true,
          header: () => <Group410 />,
        })}
      />
      <Tab.Screen
        name="Certificates"
        component={Certificates}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "JotiOne-Regular": require("./assets/fonts/JotiOne-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "AdventPro-Bold": require("./assets/fonts/AdventPro-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

              <Stack.Screen
                name="StudentSignup"
                component={StudentSignup}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group4 />,
                })}
              />
              <Stack.Screen
                name="SearchResult2"
                component={SearchResult2}
                options={(props) => ({
                  headerShown: true,
                  header: () => <EventsTopBar1 />,
                })}
              />
              <Stack.Screen
                name="SearchResult1"
                component={SearchResult1}
                options={(props) => ({
                  headerShown: true,
                  header: () => <EventsTopBar />,
                })}
              />
              <Stack.Screen
                name="StudentLogin"
                component={StudentLogin}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group49 />,
                })}
              />
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudentLoginPersonalForm"
                component={StudentLoginPersonalForm}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group41 />,
                })}
              />
              <Stack.Screen
                name="StudentLoginAcedaicsForm"
                component={StudentLoginAcedaicsForm}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group42 />,
                })}
              />
              <Stack.Screen
                name="OnlineCourse"
                component={OnlineCourse}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group48 />,
                })}
              />
              <Stack.Screen
                name="Internship"
                component={Internship}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group47 />,
                })}
              />
              <Stack.Screen
                name="TechnicalCompetition"
                component={TechnicalCompetition}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group44 />,
                })}
              />
              <Stack.Screen
                name="PaperPresentation"
                component={PaperPresentation}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group43 />,
                })}
              />
              <Stack.Screen
                name="Webinar"
                component={Webinar}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group45 />,
                })}
              />
              <Stack.Screen
                name="ProjectPresentation"
                component={ProjectPresentation}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Group46 />,
                })}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
