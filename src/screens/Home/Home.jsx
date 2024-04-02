import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const Home = ({navigation}) => {

    //define our count variable, we use useState so the variable can be changed
    const [count, setCount] = useState(0);

    //incremement "arrow" function, doesn't have inputs
    //for info about function syntax look up a tutorial on javascript
    const increment = () => {
        setCount(count + 1);
    };

    //below the return is what is rendered
    return (
        //Views are general containers, you can style many elements at once
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* You can have several different elements like text, button (touchable opacity) */}
            {/* Remember to import all elements at top */}
            <Text>
                Hello world!
            </Text>
            <TouchableOpacity style={homeStyles.button} onPress={increment}>
                <Text>Click to Increment</Text>
            </TouchableOpacity>

            {/* wrap all JS variables in curly brackets for rendering section */}
            <Text>{count}</Text>

        </View>
    );
}

//Alternative way to create styles
const homeStyles = StyleSheet.create({
    button:{
        backgroundColor: "#fffdf0",
        borderColor: "#1D7151",
        borderWidth: 1,
        width: "50%",
        height: "10%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        
    },
})

//To do: implement decrement, play around with styling, change stack navigator so that sign in screen is first