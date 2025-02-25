import { Text, View } from 'react-native';

export type LevelVeiwProps = {
    level: {
        img: string;
        title: string;
        rank: string;
    };
    nickName?: string;
};

const LevelView = ({ level, nickName }: LevelVeiwProps) => {
    return (
        <View className="w-full h-[80px] flex flex-row justify-start items-center  bg-white px-10 shadow-md rounded-md">
            {/* 추후 이미지로 변경 해야함 */}
            <Text className="text-4xl mr-2">{level.img}</Text>
            <View>
                <Text className="text-[10px] font-light">{level.title}</Text>
                <Text className="text-lg">
                    {nickName || '알수없음'} 님은 <Text className="text-[#0F99E4]">{level.rank}</Text> 이에요
                </Text>
            </View>
        </View>
    );
};
export default LevelView;
