import { Text, View } from 'react-native';
import { FallbackProps } from 'react-error-boundary';

const FallbackComponent = ({ error }: FallbackProps) => {
    return (
        <View className="p-5">
            <Text>문제가 발생했습니다: {error.message}</Text>
        </View>
    );
};
export default FallbackComponent;
