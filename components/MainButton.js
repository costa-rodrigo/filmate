import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const MainButton = props => {
    return (
        <View style={styles.bottom}>

        
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
        </View>
    //     <View style={styles.bottom}>
    //     <ImageButton
    //       style={styles.button}
    //       title={strings.onboarding.welcome.button} />
    //   </View>
     
 
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        // padding: 20,
        width: 343,
        height: 52,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
         bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
      }
});

export default MainButton;