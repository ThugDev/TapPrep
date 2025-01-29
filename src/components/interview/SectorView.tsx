import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SectorViewProps } from './type';
import { SectorData } from '../../constants/sectorData';

const SectorView = ({ setSelectedSector, handleOnPress }: SectorViewProps) => {
  const handlePress = (sectorName: string) => {
    handleOnPress();
    setSelectedSector(sectorName);
  };

  return (
    <View className="w-full h-screen flex-wrap flex-row justify-center py-16 gap-4">
      {SectorData.map((sector) => (
        <TouchableOpacity
          key={sector.name}
          onPress={() => handlePress(sector.name)}
          className="w-[150px] h-[150px] justify-center items-center rounded"
          style={{ backgroundColor: sector.color }}
        >
          <Text
            style={{ color: sector.color === '#000000' ? 'white' : 'black' }}
            className="font-bold text-xl"
          >
            {sector.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default SectorView;
