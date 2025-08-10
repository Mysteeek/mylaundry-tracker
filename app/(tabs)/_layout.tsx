import { Tabs } from "expo-router"

export default function _Layout () {
    return (
        <Tabs>
            <Tabs.Screen
            name="Home"
            options={{
                headerShown: false,
            }}/>

            <Tabs.Screen
            name="Track"
            options={{
                headerShown: false,
            }}/>

          <Tabs.Screen
            name="More"
            options={{
                headerShown: false,
            }}/>
        </Tabs>
    );
}
