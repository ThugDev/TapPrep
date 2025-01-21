import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import UserDashBoard from '../components/UserDashboard';
import {postLogout} from '../apis/gitLogin';
import {RootStackPramList} from '../../type';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackPramList>>();

  const handleLogOut = async () => {
    const response = await postLogout();
    navigation.navigate('GitLoginScreen');
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('refreshToken');
    await AsyncStorage.removeItem('userName');
    return response;
  };

  return (
    <View className="py-4">
      <UserDashBoard />
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
