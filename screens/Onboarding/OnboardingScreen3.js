import React from 'react';
import { View, Button } from 'react-native';
import Onboarding from './Onboarding';
import { OnboardingData } from './OnboardingData';

const OnboardingScreen3 = props => {
    return (
        <View>
            <Onboarding imageLink={OnboardingData[2].imageLink} title={OnboardingData[2].title} description={OnboardingData[2].description} />
            <Button title="Next" onPress={() => {
                props.navigation.navigate('Home')
            }} />
        </View>
    )
}

export default OnboardingScreen3;