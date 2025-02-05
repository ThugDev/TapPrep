import { Text, TouchableOpacity, View } from 'react-native';
import { OptionListProps } from './type';

const OptionList = ({ options, selectedOption, onSelect }: OptionListProps) => {
    return (
        <View className="w-[80%] flex flex-col justify-between">
            {options?.map((item, index) => {
                const [key, value] = Object.entries(item)[0];
                return (
                    <TouchableOpacity
                        key={key || index}
                        className={`p-2 my-1 rounded ${selectedOption === key ? 'bg-blue-500' : ' border-b-[1px] border-gray-400'}`}
                        onPress={() => onSelect(key)}
                    >
                        <Text>
                            {index + 1}. {value}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
export default OptionList;
