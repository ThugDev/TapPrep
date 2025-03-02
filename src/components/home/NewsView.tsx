import { Alert, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const NewsView = () => {
    const handlePress = () => {
        Alert.alert('준비 중입니다.');
    };

    return (
        <View
            onTouchStart={handlePress}
            className="w-full h-[50px] pl-4 relative mt-4 flex justify-center items-start rounded-md shadow-md bg-[#E1F2FF]"
        >
            <View>
                <Text>✨ Tap&Prep 새로운 소식 보러가기</Text>
            </View>
            <View className=" absolute right-4">
                <ChevronRight />
            </View>
        </View>
    );
};
export default NewsView;
