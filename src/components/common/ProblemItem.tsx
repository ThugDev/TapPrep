import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import LoadingScreen from './LoadingScreen';
import { useNavigation } from '@react-navigation/native';
import { InterviewStackParamList } from '../navigation/type';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProblemItemProps } from './type';

const ProblemItem = ({ problem, handleEndReached, isFetchingNextPage }: ProblemItemProps) => {
    const navigation = useNavigation<StackNavigationProp<InterviewStackParamList, 'ProblemDetailScreen'>>();

    const handleProblemDetail = (problemId: number) => {
        navigation.navigate('ProblemDetailScreen', { problemId });
    };

    return (
        <View className="w-full flex-1 pb-40 relative ">
            <FlatList
                data={problem}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleProblemDetail(item.problem_id)}
                        className="w-full flex-row justify-center items-center py-4 my-2 border-b-[1px] border-gray-400"
                    >
                        <Text className="flex justify-center absolute items-center">{item.title}</Text>
                        <View className="left-36">
                            {item.isSolved === true && <View className="w-3 h-3 bg-green-500 rounded-full" />}
                            {item.isSolved === false && <View className="w-3 h-3 bg-gray-300 rounded-full" />}
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.problem_id.toString()}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.8}
                ListFooterComponent={isFetchingNextPage ? <LoadingScreen /> : null}
            />
        </View>
    );
};
export default ProblemItem;
