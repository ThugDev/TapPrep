import { Text, View } from 'react-native';
import { AnswerExplanationProps } from './type';

const AnswerExplanation = ({ isCorrect, explanation, reference }: AnswerExplanationProps) => {
    return (
        <View className="w-full">
            {isCorrect === true && (
                <View className="w-full">
                    <View className="flex-row items-center py-2">
                        <Text className="text-lg font-bold">정답 여부 : </Text>
                        <Text className="text-green-500 font-bold text-2xl">O</Text>
                    </View>
                    <View>
                        <View className="py-2">
                            <Text className="text-lg font-bold">정답 해설</Text>
                            <Text>{explanation}</Text>
                        </View>
                        <View className="py-2">
                            <Text className="text-lg font-bold">참고 사항</Text>
                            <Text>{reference}</Text>
                        </View>
                    </View>
                </View>
            )}
            {isCorrect === false && (
                <View className="w-full">
                    <View className="flex-row items-center">
                        <Text className="text-lg font-bold">정답 여부 : </Text>
                        <Text className="text-red-500 font-bold text-2xl">X</Text>
                    </View>
                    <View>
                        <View className="py-2">
                            <Text className="text-lg font-bold">정답 해설</Text>
                            <Text>{explanation}</Text>
                        </View>
                        <View className="py-2">
                            <Text className="text-lg font-bold">참고 사항</Text>
                            <Text>{reference}</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};
export default AnswerExplanation;
