import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import CreateUser from './screens/CreateUser';
import UsersList from './screens/UsersList';
import UpdateUser from './screens/UpdateUser';
import UserDetail from './screens/UserDetail';

const Stack = createStackNavigator()

const MyStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CreateUser" component={CreateUser}/>
        <Stack.Screen name="UsersList" component={UsersList}/>
        <Stack.Screen name="UserDetail" component={UserDetail}/>
        <Stack.Screen name="UpdateUser" component={UpdateUser}/>
      </Stack.Navigator>
    )
  }


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


