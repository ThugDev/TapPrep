import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SectorView from '../../components/common/SectorView';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InterviewStackParamList } from '../../components/navigation/type';

const InterviewScreen = () => {
    const [selectedSector, setSelectedSector] = useState<string>('');
    const navigation =
        useNavigation<
            StackNavigationProp<InterviewStackParamList, 'ProblemListScreen'>
        >();

    useEffect(() => {
        if (selectedSector) {
            navigation.navigate('ProblemListScreen', { selectedSector });
        }
    }, [selectedSector]);

    const handleSector = () => {
        if (selectedSector) {
            navigation.navigate('ProblemListScreen', {
                selectedSector: selectedSector,
            });
        } else {
            // 모달로 알림창 만들 예정
            console.error('selected sector 오류');
        }
    };

    return (
        <View className="py-4">
            <SectorView
                setSelectedSector={setSelectedSector}
                handleOnPress={handleSector}
            />
        </View>
    );
};
export default InterviewScreen;
