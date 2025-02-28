import { Image, Text, View } from 'react-native';
import { LevelVeiwProps } from './type';
import { LevelList } from '../../constants/levelList';

const LevelView = ({ level, nickName }: LevelVeiwProps) => {
    const currentLevel = LevelList.find((item) => item.level === Number(level));

    return (
        <View className="w-full h-[80px] flex flex-row justify-start items-center  bg-white px-10 shadow-md rounded-md">
            <Image source={currentLevel?.image} className="w-10 h-10" />
            <View className="ml-2">
                <Text className="text-[10px] font-light">{currentLevel?.title}</Text>
                <Text className="text-lg">
                    {nickName || '알수없음'} 님은 <Text className="text-[#0F99E4]">{currentLevel?.rank}</Text> 이에요
                </Text>
            </View>
        </View>
    );
};
export default LevelView;
