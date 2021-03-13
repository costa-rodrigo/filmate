import { Alert, StatusBar, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import Onboarding1 from '../../svgs/onboarding/Onboarding1';
import Onboarding2 from '../../svgs/onboarding/Onboarding2';
import Onboarding3 from '../../svgs/onboarding/Onboarding3';

function WithCTA({ route, navigation, props }) {
  /* 2. Get the param */
  const { userUsername } = route.params;
  console.log("username", userUsername)
  console.log(route)
// const WithCTA = props => {

    return(
        <Onboarding
          // showDone={false}
          // onSkip={() => Alert.alert('Skipped')}
          pages={[
            {
              title: 'Create Groups',
              subtitle: 'Invite friends and add them to your movie night groups.',
              backgroundColor: '#121212',
              image:<Onboarding1 />,
      },
      {
        title: 'Endless picks',
        subtitle: 'Select from over 1000+ movies available in our library.',
        backgroundColor: '#121212',
        image: <Onboarding2 />,
      },
      {
        title: 'Swipe & match',
        subtitle: 'Celebrating your movie picks in a fun, non-compromising way!',
        backgroundColor: '#121212',
        image: <Onboarding3 />,
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
                navigation.replace('GroupScreen', {
                    userUsername: route.params.userUsername
                })
              StatusBar.setBarStyle('default');
            }}
          //   onPress={() => {
          //     navigation.replace('FriendTabButton', {
          //         userUsername: route.params.userUsername
          //     })
          //   StatusBar.setBarStyle('default');
          // }}
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