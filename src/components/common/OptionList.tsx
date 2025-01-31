import { Text, TouchableOpacity, View } from 'react-native';

export type OptionListProps = {
  options?: { [key: string]: string }[];
  selectedOption: string | null;
  onSelect: (key: string) => void;
};

const OptionList = ({ options, selectedOption, onSelect }: OptionListProps) => {
  return (
    <View className="w-[80%] flex flex-row justify-between">
      {options?.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        return (
          <TouchableOpacity
            key={key || index}
            className={`p-2 rounded ${selectedOption === key ? 'bg-blue-500' : 'bg-gray-400'}`}
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
