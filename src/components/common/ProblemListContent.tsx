import { TouchableOpacity, View } from 'react-native';
import LoadingScreen from './LoadingScreen';
import { ErrorScreen } from './ErrorScreen';
import ProblemItem from './ProblemItem';
import { Text } from 'react-native-gesture-handler';
import { ProblemListContentProps } from './type';

const ProblemListContext = ({
    isLoading,
    isError,
    problems,
    handleEndReached,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
}: ProblemListContentProps) => {
    return (
        <View className="h-full">
            {isLoading && <LoadingScreen />}
            {!isLoading && isError && <ErrorScreen errorMessage="문제 데이터가 없습니다." />}
            {!isLoading && !isError && (
                <ProblemItem
                    problem={problems}
                    handleEndReached={handleEndReached}
                    isFetchingNextPage={isFetchingNextPage}
                />
            )}
            {hasNextPage && !isFetchingNextPage && (
                <TouchableOpacity onPress={() => fetchNextPage()} className="mt-4">
                    <Text className="text-blue-500 text-center">더 보기</Text>
                </TouchableOpacity>
            )}
            {isFetchingNextPage && <LoadingScreen />}
        </View>
    );
};
export default ProblemListContext;
