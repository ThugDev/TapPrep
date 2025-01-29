import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import { SectorData } from '../../constants/sectorData';

const DetailedStatistics = () => {
  

  const screenWidth = Dimensions.get('window').width;

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">세부 통계</Text>
      <PieChart
        data={SectorData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: 'transparent',
          backgroundGradientTo: 'transparent',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};
export default DetailedStatistics;
