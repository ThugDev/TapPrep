import { Text, TouchableOpacity } from 'react-native';

export type DashBoardButtonPorps = {
    text: string;
};

const DashBoardButton = ({ text }: DashBoardButtonPorps) => {
    // const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

    return (
        <TouchableOpacity className="border border-[#0F99E4] py-2 px-2 rounded-md mx-2">
            <Text className="text-[8px]">{text}</Text>
        </TouchableOpacity>
    );
};
export default DashBoardButton;
