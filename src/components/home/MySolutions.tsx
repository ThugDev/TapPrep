import React, { useMemo, useState } from 'react';
import { View, Image } from 'react-native';
import { BeProblemData, ProblemData } from '../../constants/solutionIconImages';
import { ToggleType } from './type';
import ToggleSwitch from './ToggleSwitch';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getStatBe, getStatFe } from '../../apis/stat';
import { MergedSector } from '../../utils/merged-sector';

const MySolutions = () => {
    const [currentView, setCurrentView] = useState('FE');

    const { data } = useSuspenseQuery({
        queryKey: currentView === 'FE' ? ['statFe'] : ['statBe'],
        queryFn: currentView === 'FE' ? getStatFe : getStatBe,
    });

    const handleToggle = (value: ToggleType) => {
        setCurrentView(value);
    };

    const iconsToDisplay = currentView === 'FE' ? ProblemData : BeProblemData;

    const mergedData = useMemo(() => {
        return MergedSector({ sectorData: iconsToDisplay, data });
    }, [iconsToDisplay, data]);

    return (
        <View className="pt-6 flex justify-center items-center rounded-full">
            <ToggleSwitch onToggle={handleToggle} />
            <View className="w-full px-8 py-4 flex flex-row flex-wrap">
                {mergedData.map((item, index) => {
                    const progressPercent = (item.correct / item.total) * 100;
                    return (
                        <View key={index} className="w-1/4 p-2 flex justify-center items-center">
                            <Image
                                source={item.image}
                                className={`w-16 h-16 ${item.correct === 0 ? 'opacity-50' : 'opacity-100'}`}
                            />
                            <View className="w-[70%] bg-[#D9D9D9] h-1 mt-1 rounded">
                                {item.correct !== 0 && (
                                    <View
                                        className="bg-[#0F99E4] h-1 rounded"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                )}
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default MySolutions;
