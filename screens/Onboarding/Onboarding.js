import React from 'react';
import { Button } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import Onboarding1 from '../../svgs/onboarding/Onboarding1';
import Onboarding2 from '../../svgs/onboarding/Onboarding2';
import Onboarding3 from '../../svgs/onboarding/Onboarding3';
import { useNavigation } from '@react-navigation/native';

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => {
    const navigation = useNavigation();
    return (
      <Button
        title={'Done'}
        buttonStyle={{
          backgroundColor: 'transparent',
          marginRight: 10
        }}

        textStyle={{ color: color(isLight) }}
        {...props}
        onPress={() => {
            navigation.replace('GroupScreen')}}
      />
    )

    };

const CustomButtons = () => (
  <Onboarding
    showSkip={false}
    bottomBarHighlight={false}
    DoneButtonComponent={Done}
    imageContainerStyles={{paddingBottom: 10}}

    pages={[
      {
        backgroundColor: '#121212',
        image: <Onboarding1 />,
        title: 'Create Groups',
        subtitle: 'Invite friends and add them to your movie night groups.',
        titleStyles: { fontFamily: 'Nunito-ExtraBold', color: 'white', fontSize: 28},
        subTitleStyles: { fontFamily: 'Nunito-Regular', fontSize: 18, color: 'white', marginHorizontal: 20} 
      },
      {
        backgroundColor: '#121212',
        image: <Onboarding2 />,
        title: 'Endless picks',
        subtitle: 'Select from over 1000+ movies available in our library.',
        titleStyles: { fontFamily: 'Nunito-ExtraBold', color: 'white', fontSize: 28},
        subTitleStyles: { fontFamily: 'Nunito-Regular', fontSize: 18, color: 'white', marginHorizontal: 20} 
      },
      {
        backgroundColor: '#121212',
        image: <Onboarding3 />,
        title: 'Swipe & match',
        subtitle: "Celebrating your movie picks in a fun, non-compromising way!",
        titleStyles: { fontFamily: 'Nunito-ExtraBold', color: 'white', fontSize: 28},
        subTitleStyles: { fontFamily: 'Nunito-Regular', fontSize: 18, color: 'white', marginHorizontal: 20} 
      },
    ]}
  />
);

export default CustomButtons;
