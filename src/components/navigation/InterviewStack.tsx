import { createStackNavigator } from '@react-navigation/stack';
import InterviewScreen from '../../screens/InterviewScreen';
import ProblemListScreen from '../../screens/ProblemListScreen';

const Stack = createStackNavigator();

const InterviewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InterviewScreen" component={InterviewScreen} />
      <Stack.Screen name="ProblemListScreen" component={ProblemListScreen} />
    </Stack.Navigator>
  );
};

export default InterviewStack;
