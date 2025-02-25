import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { ProblemData } from '../../constants/solutionIconImages';
import { ToggleType } from './type';
import ToggleSwitch from './ToggleSwitch';

const MySolutions = () => {
    const [currentView, setCurrentView] = useState('FE');

    const handleToggle = (value: ToggleType) => {
        setCurrentView(value);
    };

    const iconsToDisplay = currentView === 'FE' ? ProblemData : ProblemData;

    return (
        <View className="pt-6 flex justify-center items-center rounded-full">
            <ToggleSwitch onToggle={handleToggle} />
            <View className="w-full px-8 py-4 flex flex-row flex-wrap">
                {iconsToDisplay.map((data, index) => {
                    const progressPercent = (data.currentProblem / data.totalProblem) * 100;
                    return (
                        <View key={index} className="w-1/4 p-2 flex justify-center items-center">
                            <Image source={data.image} className="w-16 h-16" />
                            <View className="w-[70%] bg-[#D9D9D9] h-1 mt-1 rounded">
                                <View className="bg-[#0F99E4] h-1 rounded" style={{ width: `${progressPercent}%` }} />
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default MySolutions;
