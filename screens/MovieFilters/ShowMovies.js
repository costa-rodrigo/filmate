import React from 'react';
import { Text, View, Dimensions, Alert, Animated, PanResponder, Button, StyleSheet, Modal, Pressable } from 'react-native';
import Heart from '../../svgs/swipe/Heart';
import ThumbsDown from '../../svgs/swipe/ThumbsDown';
import Star from '../../svgs/swipe/Star';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ShowMovies extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY()
        this.state = {
            genreId: this.props.route.params.genreId,
            posters: this.props.route.params.posters,
            // titles: this.props.route.params.titles,
            // everything: this.props.route.params.everything,
            allData: this.props.route.params.allData,
            newPoster: '',
            currentTitle: '',
            currentEverything: '',
            currentIndex: 0,
            currentOverview: '',
            resultsArray: [],
            liked: true,
            disliked: false,
            modalVisible: false
        };

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
        ]
        }

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

    
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    UNSAFE_componentWillMount() {
        console.log("elephant", this.state.allData.allData)
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
                        })

                        this.setState({ newPoster: this.state.newPoster })
                        this.setState({ resultsArray: [...this.state.resultsArray, this.state.liked] })
                        console.log("Results ", this.state.resultsArray)
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
                        
                        this.setState({ resultsArray: [...this.state.resultsArray, this.state.disliked]})
                        console.log("results ", this.state.resultsArray)
                    })
                }
                // if the user has not swiped enough - snaps image back to its original position!
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
        const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
       
        const { posters } = this.state;
        // const { titles } = this.state;
            return posters.map((poster, index) => {
               
                if (index < this.state.currentIndex) {
                    return null
                } 
                else if (index == this.state.currentIndex) {
                    return (
                        <Animated.View 
                            {...this.PanResponder.panHandlers}
                            style={[this.rotateAndTranslate, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                           <View>{poster}</View>
                            <Animated.View style={{opacity: this.likeOpacity ,transform: [{rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                                {/* <Text 
                                    style={{borderWidth: 1, 
                                    borderColor: 'green',
                                    color: 'green',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10}}>LIKE</Text> */}
                                    <Heart />
                            </Animated.View>
                            <Animated.View style={{opacity: this.dislikeOpacity, transform: [{rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                                {/* <Text 
                                    style={{borderWidth: 1, 
                                    borderColor: 'red',
                                    color: 'red',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10}}>NOPE</Text> */}
                                    <ThumbsDown />
                            </Animated.View>
                        </Animated.View>
                    )
                }
                else {
                    return (
                        <Animated.View 
                        style={[ { opacity: this.nextCardOpacity, transform: [{scale: this.nextCardScale}], height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                        <View>{poster}</View>
                        </Animated.View>
                    )
                }
            }).reverse()
                  
    }

    renderEverything = () => {
        const { modalVisible } = this.state;
        // const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
      
        const { allData } = this.state;
       
            return allData.allData.map((details, index) => {
                if (index < this.state.currentIndex) {
                    console.log("if current index", this.state.currentIndex)
                    return null
                } 
                else if (index == this.state.currentIndex) {
                    console.log(allData)
                    // console.log("detailsDATA: ", details)
                    return (
                        <View style={{position: 'absolute', marginVertical: 550}}>
                                <View style={styles.centeredView}>
                                <Text style={{ color: 'white', width: SCREEN_WIDTH, textAlign: 'center', marginBottom: 20}}>{details[0]}</Text>
                                

                                    <Star />
                                    <Text style={{ color: 'white', width: SCREEN_WIDTH, textAlign: 'center', marginBottom: 20}}> IMDb {details[2]}/10</Text>
                                
                                    <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                        this.setModalVisible(!modalVisible);
                                    }}
                                    >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                        <Text style={styles.modalText}>{details[0]}</Text>
                                        <Text style={styles.modalText}>{details[1]}</Text>
                                        <Text style={styles.modalText}>{details[3]}</Text>
                                        
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => this.setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Done</Text>
                                        </Pressable>
                                        </View>
                                    </View>
                                    </Modal>
                                    <Pressable
                                    style={[styles.button, styles.buttonOpen]}
                                    onPress={() => this.setModalVisible(true)}
                                    >
                                    <Text style={styles.textStyle}>Show Details</Text>
                                    </Pressable>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{marginRight: 5}}>
                                            <ThumbsDown/>   
                                        </View>
                                        <View style={{marginLeft: 5}}>
                                            <Heart />
                                        </View>
                                    </View>
                                </View>
                            </View>   
                    )
                }
                else {
                    return (
                        <View style={ { position: 'absolute', }}>
                        {/* <Text style={{
                            color: 'yellow',
                            opacity: 0
                        }}>{details[0]}</Text> */}
                        </View>
                    )
                }
            }).reverse()
                  
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{height: 60}}>
                </View>
                <View style={styles.card}>
                    {this.renderPosters()}
                    {this.renderEverything()}
                </View>
                <View style={{height: 60}}>
                </View>
            </View>
        )
    }
}  

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    card: {
        flex: 1, 
        position: 'absolute', 
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})
