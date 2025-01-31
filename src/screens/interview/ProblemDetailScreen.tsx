import { useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { ProblemDetailScreenRouteProps } from './type';
import { useQuery } from '@tanstack/react-query';
import { getProblemDetail } from '../../apis/problem';
import LoadingScreen from '../../components/common/LoadingScreen';
import { ErrorScreen } from '../../components/common/ErrorScreen';
import { useState } from 'react';
import InterviewAnswer from './InterviewAnswer';
import ProblemContent from '../../components/common/ProblemContent';
import HintButton from '../../components/common/HintButton';
import OptionList from '../../components/common/OptionList';

const ProblemDetailScreen = () => {
    const route = useRoute<ProblemDetailScreenRouteProps>();
    const { problemId } = route.params;
    const { data, isLoading, isError } = useQuery({
        queryKey: ['problemDetail'],
        queryFn: () => getProblemDetail({ problemId }),
    });
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectedOpion = (key: string) => {
        setSelectedOption(key);
    };

    return (
        <View className="py-20 w-full h-screen">
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                className="w-full"
            >
                <View className="flex-1 justify-center items-center">
                    <ProblemContent
                        title={data?.problemData.title}
                        description={data?.problemData.description}
                    />
                    <HintButton hint={data?.problemData.hint} />
                    <OptionList
                        options={data?.problemData.options}
                        selectedOption={selectedOption}
                        onSelect={handleSelectedOpion}
                    />
                    <InterviewAnswer data={data} />
                </View>
            </ScrollView>
            {isLoading && <LoadingScreen />}
            {isError && (
                <ErrorScreen errorMessage="문제를 불러오는데 실패했습니다." />
            )}
        </View>
    );
};
export default ProblemDetailScreen;
