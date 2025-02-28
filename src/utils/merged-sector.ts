import { GetStatFeResponse, statType } from '../apis/type';
import { SectorDataType } from '../constants/type';

export type MergedSectorProp = {
    sectorData: SectorDataType[];
    data: GetStatFeResponse;
};

export const MergedSector = ({ sectorData, data }: MergedSectorProp) => {
    const merged = sectorData.map((sector: SectorDataType) => {
        const matchingStat = data.stats.find(
            (stat: statType) => stat.sector_name.toLocaleLowerCase() === sector.name.toLocaleLowerCase(),
        );
        return {
            ...sector,
            correct: matchingStat?.correct ?? 0,
            total: matchingStat?.total ?? 0,
        };
    });
    return merged;
};
