// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const Onboarding = props => {
//     return (
//         <View style={styles.screen}>
//             <Image style={styles.image} source={props.imageLink} />
//             <Text style={styles.title}>{props.title}</Text>
//             <Text style={styles.body}>{props.description}</Text>
//         </View>
//     )
// }



// export default Onboarding;
import { Alert, StatusBar, Image, StyleSheet } from 'react-native';
import React from 'react';

import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';



const WithCTA = props => {

    return(
        <Onboarding
    showDone={false}
    onSkip={() => Alert.alert('Skipped')}
    pages={[
      {
        title: 'hi',
        subtitle: 'Invite friends and add them to your movie night groups.',
        backgroundColor: '#121212',
        image: (
        <Image style={styles.image} source={require('./images/onboarding1.png')} />
        ),
      },
      {
        title: 'Endless picks',
        subtitle: 'Select from over 1000+ movies available in our library.',
        backgroundColor: '#121212',
        image: (
            <Image style={styles.image} source={require('./images/onboarding2.png')} />
 
        ),
      },
      {
        title: 'Swipe & match',
        subtitle: 'Celebrating your movie picks in a fun, non-compromising way!',
        backgroundColor: '#121212',
        image: (
            <Image style={styles.image} source={require('./images/onboarding3.png')} />
        
        ),
      },
      {
        title: "Get Started",
        subtitle: (
          <Button
            title={'Get Started'}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={'white'}
            borderRadius={5}
            textStyle={{ color: '#D2D5D5' }}
            onPress={() => {
                props.navigation.replace('Home', {
                    otherParam: 'anything you want here'
                })
              StatusBar.setBarStyle('default');
            }}
          />
        ),
        backgroundColor: '#121212',
        image: (
          <Icon name="rocket" type="font-awesome" size={100} color="white" />
        ),
      },
    ]}
  />


    )
  
};

export default WithCTA;

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        // marginTop: 100,
        marginBottom: 30
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    body: {
        fontSize: 18,
        paddingHorizontal: 15,
        marginBottom: 150
    }

});