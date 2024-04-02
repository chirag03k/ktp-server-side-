import React from 'react';
import { StyleSheet } from 'react-native';

//Ignore this for now I tried to create a separate style sheet

const styles = StyleSheet.create({

    headerText: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: "#fffdf0",
    },
    headerTwoText: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: "black",
    },

    subheading: {
        fontWeight: 'bold',
        //backgroundColor: 'green',
        fontSize: 25,
        padding: 10
    },
    subheadingTwo: {
        fontWeight: 'bold',
        //backgroundColor: 'green',
        fontSize: 20,
        padding: 10
    },

    bodytext: {
        padding: 5,
        fontSize: 18,
        margin: 10
    },

    errortext: {
        padding: 5,
        fontSize: 18,
        margin: 10,
        color: "#FF0000",
    },

    //BUTTONS

    buttonContainer: {
        width: '40%', //probably need to adjust this
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    //Green button
    button: {
        backgroundColor: "#1D7151",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText:{
        color: "#fffdf0",
        fontWeight: "700",
        fontSize: 16,
    },

});

export default styles;