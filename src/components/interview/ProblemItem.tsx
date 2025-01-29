import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ProblemItemProps } from './type';
import LoadingScreen from '../common/LoadingScreen';

const ProblemItem = ({
  problem,
  handleEndReached,
  isFetchingNextPage,
}: ProblemItemProps) => {
  return (
    <View className="w-full flex-1 pb-40">
      <FlatList
        data={problem}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex justify-center items-center py-4 my-2 border">
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
