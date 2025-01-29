import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ProblemItemProps } from './type';
import LoadingScreen from '../common/LoadingScreen';
import { useNavigation } from '@react-navigation/native';
import { InterviewStackParamList } from '../navigation/type';
import { StackNavigationProp } from '@react-navigation/stack';

const ProblemItem = ({
  problem,
  handleEndReached,
  isFetchingNextPage,
}: ProblemItemProps) => {
    const navigation = useNavigation<StackNavigationProp<InterviewStackParamList, "ProblemDetailScreen">>()

    const handleProblemDetail = (problemId: number) => {
        navigation.navigate("ProblemDetailScreen", {problemId})
    }

  return (
    <View className="w-full flex-1 pb-40">
      <FlatList
        data={problem}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProblemDetail(item.problem_id)} className="flex justify-center items-center py-4 my-2 border">
            <Text className="flex justify-center items-center">
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.problem_id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.8}
        ListFooterComponent={isFetchingNextPage ? <LoadingScreen /> : null}
      ></FlatList>
    </View>
  );
};
export default ProblemItem;
