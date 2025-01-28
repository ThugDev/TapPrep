import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../type';


export type useGitHubRedirectProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type UseProblemListProps = {
  selectedSector: string;
  selectedDifficulty: number;
}
