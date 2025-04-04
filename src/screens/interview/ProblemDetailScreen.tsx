import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { ProblemDetailScreenRouteProps } from './type';
import { useQuery } from '@tanstack/react-query';
import { getProblemDetail } from '../../apis/problem';
import LoadingScreen from '../../components/common/LoadingScreen';
import { ErrorScreen } from '../../components/common/ErrorScreen';
import ProblemContent from '../../components/common/ProblemContent';
import HintButton from '../../components/common/hint/HintButton';
import Answer from '../../components/common/answer/Answer';
import AnswerExplanation from '../../components/common/answer/AnswerExplanation';

const ProblemDetailScreen = () => {
    const route = useRoute<ProblemDetailScreenRouteProps>();
    const { problemId } = route.params;
    const { data, isLoading, isError } = useQuery({
        queryKey: ['problemDetail'],
        queryFn: () => getProblemDetail({ problemId }),
    });

    return (
        <View className="py-20 w-full h-screen">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="w-full">
                <View className="flex-1 justify-center items-center">
                    {data && (
                        <>
                            <ProblemContent
                                title={data?.problemData.title}
                                description={data?.problemData.description}
                            />
                            <HintButton hint={data?.problemData.hint} />
                            <Answer data={data} />
                        </>
                    )}
                </View>
                {data?.isSolved === true && (
                    <View className="w-full flex justify-center items-center">
                        <View className="w-[80%]">
                            <AnswerExplanation
                                isCorrect={data.problemData.isCorrect}
                                explanation={data.problemData.explanation}
                                reference={data.problemData.reference}
                            />
                        </View>
                    </View>
                )}
            </ScrollView>
            {isLoading && <LoadingScreen />}
            {isError && !data && <ErrorScreen errorMessage="문제를 불러오는데 실패했습니다." />}
        </View>
    );
};
export default ProblemDetailScreen;
