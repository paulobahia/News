import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Live, Promotions, News, Settings } from '../screens'
import { BottomTab } from '../components/BottomTab';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {

    return (
        <Tab.Navigator tabBar={props => <BottomTab {...props} />} screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Promotions" component={Promotions} />
            <Tab.Screen name="Live" component={Live} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default Navigation;