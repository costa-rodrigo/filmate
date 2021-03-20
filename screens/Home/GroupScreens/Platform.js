import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MainButton from '../../../components/MainButton';
import Checkmark from '../../../svgs/icons/Checkmark';
import GreyCircle from '../../../svgs/icons/GreyCircle';
import style from '../../../Styles';

export default class Platform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            platformArray: [
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-netflix.png')} />, 'netflix'],
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-prime.png')} />, 'prime'],
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-crave.png')} />, 'crave'],
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-hulu.png')} />, 'hulu'],
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-hbo.png')} />, 'hbo'],
                [<Image style={styles.image} source={require('../../../assets/platforms/stream-disney.png')} />, 'disney']
            ],
            platformBoxPressed: false,
            platformName: ''
        }
    }
   
    platformPressed = (platform) => {
        let platformBoxPressed = true;
        this.setState({platformBoxPressed});
        let platformName = [platform];
        this.setState({ platformName })
    }

  render() {
      const platforms = this.state.platformArray.map((platform, index) => {
          return (
            <View>
              <TouchableOpacity 
                  key={platform[1]}
                    style={this.state.platformName.includes(platform[0])
                        ? {
                            width: 168,
                            height: 128,
                            borderRadius: 20,
                            paddingHorizontal: 30,
                            paddingVertical: 60,
                            margin: 5,
                            borderWidth: 1.5, 
                            borderColor: '#56e6a5', 
                            backgroundColor: '#1E1E1E',
                            position: 'relative'
                        }
                        : {
                            width: 168,
                            height: 128,
                            borderWidth: 1,
                            borderRadius: 20,
                            paddingHorizontal: 30,
                            paddingVertical: 60,
                            margin: 5,
                            backgroundColor: '#1E1E1E',
                            position: 'relative'
                        }
                        
                    }
                  onPress={() => this.platformPressed(platform[0])}>
                <View style={styles.checkmark_grid}>
                    <View>{platform[0]}</View>
                    {
                        this.state.platformName.includes(platform[0])
                        ? (
                            <View style={styles.circle}>
                            <Checkmark />
                            </View>
                        )
                        : (
                            <View style={styles.circle}>
                            <GreyCircle />
                            </View>
                        )
                    }
                </View>
              </TouchableOpacity>
          </View>
          )
      })

    return (
     <View style={style.screen}>
         <Text style={style.h3_heading}>Filter streaming platform for the group</Text>
            <Text style={{marginLeft: 'auto', marginRight: 'auto'}}>
                {platforms}
            </Text>
            <MainButton style={styles.fixedButton} title="Filter"  onPress={() => {
                    this.props.navigation.navigate('NewGroupName')
                }} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
       width: 100, 
       height: 60,
       marginTop: 'auto',
    },
    checkmark_grid: {
        flexDirection: 'column',
        
    },
    circle: {
        marginLeft: 100,       
    }
});