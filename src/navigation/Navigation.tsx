import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTab } from '../components/BottomTab';
import { Home, Live, Promotions, Search, Settings, SheetNews } from '../screens'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tab.Navigator tabBar={props => <BottomTab {...props} />} screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Promotions" component={Promotions} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

const Navigation: React.FC = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MainScreen' component={TabsNavigation} />
            <Stack.Screen name='SheetNews' component={SheetNews} />
        </Stack.Navigator>
    )
}

export default Navigation;