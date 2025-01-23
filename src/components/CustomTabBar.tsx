import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          typeof options.tabBarLabel === 'function'
            ? options.tabBarLabel({
                focused: isFocused,
                color: isFocused ? 'black' : 'gray',
                position: 'below-icon',
                children: route.name,
              })
            : options.tabBarLabel ?? options.title ?? route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tabItem}>
            <Text
              className={`${
                isFocused ? 'text-black font-bold' : 'text-gray-500'
              }`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBar;
