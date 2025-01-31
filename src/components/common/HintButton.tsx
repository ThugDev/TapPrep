import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HintView from './HintView';
import { HintButtonProps } from './type';

const HintButton = ({ hint }: HintButtonProps) => {
    const [clickHint, setClickHint] = useState<boolean>(false);

    return (
        <View className="w-[80%] h-12 flex justify-center items-end mb-12">
            <TouchableOpacity
                onPress={() => setClickHint(!clickHint)}
                className="p-2 bg-gray-300 rounded"
            >
                <Text>힌트</Text>
            </TouchableOpacity>
            {clickHint && <HintView setClickHint={setClickHint} hint={hint} />}
        </View>
    );
};
export default HintButton;
