import { Text, View } from 'react-native';

const UserNameBox = ({ userName }: { userName?: string }) => {
    return (
        <View className="w-full pt-2 flex flex-row gap-2 ">
            <View>
                <Text className="text-[10px] font-light">Nickname</Text>
                <Text className="text-[12px]">{userName || '알 수 없음'}</Text>
            </View>
            <View>
                <Text className="text-[10px] font-light">GitHub</Text>
                <Text className="text-[12px]">@{userName || '알 수 없음'}</Text>
            </View>
            <View>
                <Text className="text-[10px] font-light">Velog</Text>
                <Text className="text-[12px]">{userName || '알 수 없음'}</Text>
            </View>
        </View>
    );
};
export default UserNameBox;
