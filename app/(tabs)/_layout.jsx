import React from "react";
import { Colors } from "./../../constants/Colors";
import { Tabs } from "expo-router";

import HomeIcon from "./../../assets/icons/Home.svg";
import FavIcon from "./../../assets/icons/Heart.svg";
import CartIcon from "./../../assets/icons/Bag.svg";
import NotifIcon from "./../../assets/icons/Notification.svg";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" hidden={false} translucent={true} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.BROWN,
          tabBarInactiveTintColor: Colors.WHITE,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            tabBarIcon: ({ color }) => <FavIcon fill={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color }) => <CartIcon fill={color} />,
          }}
        />
        <Tabs.Screen
          name="notif"
          options={{
            tabBarIcon: ({ color }) => <NotifIcon fill={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
