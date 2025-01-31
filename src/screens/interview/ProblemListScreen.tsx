import { Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DifficultyData } from '../../constants/difficultyData';
import { useProblemList } from '../../hooks/useProblemList';
import { useDifficulty } from '../../hooks/useDifficulty';
import ProblemListContext from '../../components/common/ProblemListContent';
import { ProblemListScreenRouteProps } from './type';

const ProblemListScreen = () => {
    const route = useRoute<ProblemListScreenRouteProps>();
    const { selectedSector } = route.params;
    const { selectedDifficulty, changeDifficulty } = useDifficulty();
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useProblemList({ selectedSector, selectedDifficulty });

    const handleEndReached = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    const problems =
        data?.pages.flatMap((page) =>
            page.problemList.map((item) => ({
                problem_id: item.problem_id,
                title: item.title,
            })),
        ) || [];

    return (
        <View className="py-12 h-full">
            <View className="flex justify-center items-center py-12">
                <Text className="font-bold text-2xl">{selectedSector}</Text>
            </View>
            <View className="flex flex-row justify-center items-center pb-12">
                {DifficultyData.map((difficulty) => (
                    <TouchableOpacity
                        key={difficulty.value}
                        onPress={() => changeDifficulty(difficulty.value)}
                        className={`px-4 mx-1 border rounded ${selectedDifficulty === difficulty.value ? 'bg-blue-500' : 'bg-gray-400'}`}
                    >
                        <Text className="px-4 py-1 font-bold">
                            {difficulty.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ProblemListContext
                isError={isError}
                isLoading={isLoading}
                problems={problems}
                handleEndReached={handleEndReached}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
            />
        </View>
    );
};

export default ProblemListScreen;
