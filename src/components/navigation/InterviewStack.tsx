import { createStackNavigator } from '@react-navigation/stack';
import InterviewScreen from '../../screens/interview/InterviewScreen';
import ProblemListScreen from '../../screens/interview/ProblemListScreen';
import ProblemDetailScreen from '../../screens/interview/ProblemDetailScreen';

const Stack = createStackNavigator();

const InterviewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InterviewScreen" component={InterviewScreen} />
      <Stack.Screen name="ProblemListScreen" component={ProblemListScreen} />
      <Stack.Screen name='ProblemDetailScreen' component={ProblemDetailScreen} />
    </Stack.Navigator>
  );
};

export default InterviewStack;
