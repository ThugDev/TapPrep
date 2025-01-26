import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const DetailedStatistics = () => {
  const chartData = [
    {
      name: 'HTML',
      population: 20,
      color: '#E34F26',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'CSS',
      population: 15,
      color: '#1572B6',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'JavaScript',
      population: 30,
      color: '#F7DF1E',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'TypeScript',
      population: 10,
      color: '#3178C6',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'React',
      population: 15,
      color: '#61DAFB',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Next.js',
      population: 10,
      color: '#000000',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
  ];

  const screenWidth = Dimensions.get('window').width;

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">세부 통계</Text>
      <PieChart
        data={chartData}
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
