import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Text, View, Dimensions, Alert, Animated, PanResponder, Modal, Pressable } from 'react-native';
import Heart from '../../svgs/swipe/Heart';
import ThumbsDown from '../../svgs/swipe/ThumbsDown';
import PinkButton from '../../components/PinkButton';
import style from '../../Styles';
import modal from '../../Modal';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ShowMovies extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY()
        this.state = {
            genreId: this.props.route.params.genreId,
            posters: this.props.route.params.posters,
            allData: this.props.route.params.allData,
            currentIndex: 0,
            resultsArray: [],
            modalVisible: false,
            group_id: '',
            currentMoviePoster: '',
            token: '',
            currentMovieId: ''
        };
        this.handleToken = this.handleToken.bind(this);
        this.handleVote = this.handleVote.bind(this);

        // translations for swiping left and right (based on screen width)
        this.rotate = this.position.x.interpolate({
            // takes half of the screen width to the right and half to the left
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })
        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
        ]}
        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: [0,0,1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: [1,0,0],
            extrapolate: 'clamp'
        })
        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: [1,0,1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: [1,0.8,1],
            extrapolate: 'clamp'
        })
    }

    // pop up alert/modal
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        return new Promise ( async (resolve, reject) => {
            try {
                let storage = await AsyncStorage.getAllKeys((err, keys) => {
                    AsyncStorage.multiGet(keys, (error, stores) => {
                      stores.map((result, i, store) => {
                        let token = "Bearer " + store[0][1];
                        this.setState({ token: token })
                        resolve(storage)
                        this.handleToken(token)
                     });
                    });
                  });
            } catch(error) {
                reject(new Error('Error getting storage from AsyncStorage: ' + error.message))
            }
        });
    }

    handleToken  = async (token) => {
        await axios.get('https://filmate.ca/groups/', {
            headers: {
                'Authorization': `${token}`
            }
        })
        .then((res) => {
            const group = res.data[0].group_id
            this.setState({group_id: group});
            this.handleSwipeStart()
        })
        .catch((error) => {
            console.error(error)
        })
       }

       handleSwipeStart() {
           axios.post('https://filmate.ca/swap/', {
               group_id: this.state.group_id
           })
           .then((res) => {
               console.log("swiping session started.")
           })
           .catch((error) => {
               console.error(error)
           })
       }

       handleVote = async () => {
           const headers = {
               'Authorization': this.state.token
           }
           await axios.post('https://filmate.ca/vote/', {
            group_id: this.state.group_id,
            votes: this.state.resultsArray,
           }, 
           {
            headers: headers
           })
           .then((res) => {
                this.props.navigation.replace('IfMatch')
           })
           .catch((error) => {
               console.error(error)
           })
       }

    UNSAFE_componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                // sets x and y to setValue positions
                this.position.setValue({ x:gestureState.dx, y:gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                // if swipe to the right (LIKE!) if its more than 120deg
                if (gestureState.dx>120) {
                    Animated.spring(this.position, {
                        toValue:{x:SCREEN_WIDTH+100, y:gestureState.dy},
                        useNativeDriver: true
                    }).start(() => {
                        // once the card is off the screen - update the index
                        this.setState({currentIndex: this.state.currentIndex+1}, () => {
                            this.position.setValue({x: 0, y: 0})
                            // console.log("poster at current index", this.state.posters[this.state.currentIndex - 1])
                            this.setState({currentMoviePoster: this.state.posters[this.state.currentIndex - 1]})
                            this.setState({currentMovieId: this.state.allData.allData[this.state.currentIndex - 1][4]})
                            // console.log(this.state.currentMovieId);
                        })
                        this.setState({resultsArray: [...this.state.resultsArray, this.state.allData.allData[this.state.currentIndex -1][4]]})
                    })
                }
                // if swipe to the left (DISLIKE!) if its less that -120deg
                else if (gestureState.dx<-120) {
                    Animated.spring(this.position, {
                        toValue:{x:-SCREEN_WIDTH-100, y:gestureState.dy},
                        useNativeDriver: true
                    }).start(() => {
                        // once the card is off the screen - update the index
                        this.setState({currentIndex: this.state.currentIndex+1}, () => {
                            this.position.setValue({x: 0, y: 0})
                        })
                    })
                }
                // if the user has not swiped enough - snaps image back to its original position
                else {
                    Animated.spring(this.position, {
                        toValue:{ x:0, y: 0 },
                        friction: 4,
                        useNativeDriver: true
                    }).start()
                }
            }  
        })
    }
    renderPosters = () => {
        const { posters } = this.state;
        return posters.map((poster, index) => {
                if (index < this.state.currentIndex) {
                    return null
                } 
                else if (index == this.state.currentIndex) {
                    if (this.state.currentIndex >= 19) {
                        this.handleVote()
                    }
                    return (
                        <Animated.View 
                            key={poster}
                            {...this.PanResponder.panHandlers}
                            style={[this.rotateAndTranslate, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                           <View>{poster}</View>
                           <Animated.View style={{opacity: this.likeOpacity ,transform: [{rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                                <Heart />
                            </Animated.View>
                            <Animated.View style={{opacity: this.dislikeOpacity, transform: [{rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                                <ThumbsDown />
                            </Animated.View>
                        </Animated.View>
                    )
                }
                else {
                    return (
                        <Animated.View
                            key={index}
                            style={[ { opacity: this.nextCardOpacity, transform: [{scale: this.nextCardScale}], height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                            <View>{poster}</View>
                        </Animated.View>
                    )
                }
            }).reverse()     
    }

    renderEverything = () => {
        const { modalVisible } = this.state;      
        const { allData } = this.state;
            return allData.allData.map((details, index) => {
                if (index < this.state.currentIndex) {
                    return null
                } 
                else if (index == this.state.currentIndex) {
                    return (
                        <View key={details} style={{position: 'absolute', bottom: '10%'}}>
                                <View style={modal.centeredView}>
                                    <Text style={{ color: 'white', width: SCREEN_WIDTH, textAlign: 'center', marginTop: 0, fontFamily: 'Nunito-Bold', fontSize: 20}}>{details[0]}</Text>
                                    <Text style={{ color: '#737475', width: SCREEN_WIDTH, textAlign: 'center', marginBottom: 20, fontFamily: 'Nunito-Regular', fontSize: 16}}>⭐ IMDb {details[2]}/10</Text>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            this.setModalVisible(!modalVisible);
                                            }}>
                                        <View style={modal.centeredView}>
                                            <View style={modal.modalView}>
                                                <Text style={style.h1_heading}>{details[0]}</Text>
                                                <Text style={style.bold_medium}>({details[3]})</Text>
                                                <Text style={style.paragraph_medium}>{details[1]}</Text>
                                                <PinkButton title="Done" onPress={() => this.setModalVisible(!modalVisible)}/>
                                            </View>
                                        </View>
                                    </Modal>
                                    <Pressable
                                        style={[modal.button, modal.buttonOpen]}
                                        onPress={() => this.setModalVisible(true)}>
                                        <Text style={modal.textStyle}>Show Details</Text>
                                    </Pressable>
                                </View>
                            </View>   
                    )
                }
                else {
                    return (
                        <View key={index} style={ { position: 'absolute', }}></View>
                    )
                }
            }).reverse()     
    }

    render() {
        return (
            <View style={style.screen}>
                {this.renderPosters()}
                {this.renderEverything()}
            </View>
        )
    }
}  

