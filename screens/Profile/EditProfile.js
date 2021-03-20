import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import style from '../../Styles';

const EditProfile = props => {
    // const [userPassword, setUserPassword] = useState('');
    // const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
    return (

        <View style={style.screen}>
            {/* <RegisterMessage logoLink={RegisterData[2].logoLink} title={RegisterData[2].title} description={RegisterData[2].description} /> */}
            <View>
            {/* <Image style={styles.image} source={require('../Onboarding/images/moodImage.jpg')} /> */}
                <Text style={styles.text}>Change profile picture</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        textAlign: 'center'
    }
});

export default EditProfile;