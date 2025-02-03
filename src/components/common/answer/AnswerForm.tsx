import { Text, View } from 'react-native';
import ProblemAnswerText from '../ProblemAnswerText';
import ProblemAnswerOX from '../ProblemAnswerOX';
import { AnswerFormProps } from './type';

const AnswerForm = ({ problemType, formData, setAnswerText, setAnswerOX }: AnswerFormProps) => {
    return (
        <View className="w-full">
            <Text className="mb-2">답안 작성</Text>
            {problemType === 3 ? (
                <ProblemAnswerText answerText={formData.answerText} setAnswerText={setAnswerText} />
            ) : (
                <ProblemAnswerOX answerOX={formData.answerOX} setAnswerOX={setAnswerOX} />
            )}
        </View>
    );
};
export default AnswerForm;
