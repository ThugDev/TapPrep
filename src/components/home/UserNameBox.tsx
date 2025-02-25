import { Alert, Text, TouchableOpacity, View } from 'react-native';

const UserNameBox = ({ userName }: { userName?: string }) => {
    const handleClick = () => {
        Alert.alert('준비중입니다.');
    };

    return (
        <View className="w-full pt-2 flex flex-row gap-2 ">
            <View>
                <Text className="text-[10px] font-light">GitHub</Text>
                <Text className="text-[12px]">@{userName || '알 수 없음'}</Text>
            </View>
            <View className="pl-4">
                <Text className="text-[10px] font-light mb-[3px]">Velog</Text>
                <TouchableOpacity onPress={handleClick} className="px-2 py-[2px] rounded-[3px] bg-[#0F99E4]">
                    <Text className="text-[10px] text-white">연결하기</Text>
                </TouchableOpacity>
                {/* <Text className="text-[10px] font-light">Velog</Text>
                <Text className="text-[12px]">{userName || '알 수 없음'}</Text> */}
            </View>
        </View>
    );
};
export default UserNameBox;
