import React from 'react';
import { Alert } from 'react-native';
import { Text, View, Dimensions, Animated, PanResponder, Pressable, Button, StyleSheet, ScrollView } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ShowMovies extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY()
        this.state = {
            genreId: this.props.route.params.genreId,
            posters: this.props.route.params.posters,
            titles: this.props.route.params.titles,
            everything: this.props.route.params.everything,
            newPoster: '',
            currentTitle: '',
            currentEverything: '',
            currentIndex: 0,
            // likedMovies: 0,
            // dislikedMovies: 0,
            // likedArray: [],
            resultsArray: [],
            liked: true,
            disliked: false
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
                        })
                       
                        // this.setState({likedMovies: this.state.likedMovies + 1})
                        this.setState({ newPoster: this.state.newPoster })
                        console.log("pan responder ", this.state.newPoster)
                        // let i;
                        // console.log("all posters: ", this.state.posters[i])
                        this.setState({ resultsArray: [...this.state.resultsArray, this.state.liked] })
                        console.log("Results ", this.state.resultsArray)
                        console.log("titles[0]", this.state.titles[0].props.children) 
                        
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
                        // this.setState({dislikedMovies: this.state.dislikedMovies + 1})
                        // console.log("disliked movies:", this.state.dislikedMovies);
                        
                        this.setState({ resultsArray: [...this.state.resultsArray, this.state.disliked]})
                        console.log("results ", this.state.resultsArray)
                        // Alert.alert('swiped left')
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
        // const { moviePosters } = this.state; 
        const { posters } = this.state;
        const { titles } = this.state;
        
        // console.log(titles)
        // console.log(titles[0])
        // const { moviePosters}  = this.state;
            return posters.map((poster, index) => {
               
                if (index < this.state.currentIndex) {
                    // var index = index - 1
                    // console.log("poster", poster.props.source.uri)
                    // let index = index -1
                    // console.log("movie poster: ", poster.source.uri, "at index: ", index)
                   
                    return null
                } else if (index == this.state.currentIndex) {
                    // console.log("poster props ", poster.props.source.uri)
                    // console.log(poster)
                    this.state.newPoster = "else if" + poster.props.source.uri;
                    let i;
                    console.log("posters[i]", posters[i])
                    // if (posters[i] == poster) {
                    //     this.state.newPoster == posters[i] - 1
                    //     console.log("new poster", this.state.newPoster)
                    // }
                    // console.log(posters[])
                    // this.setState({ newPoster: poster.props.source.uri });
                    
                    // this.state.newTitle = title;
                    // let index = index -1;
                    // console.log(posters[2].props.source.uri)
                    console.log("new poster", this.state.newPoster)
                    // console.log("new title", this.state.newTitle)
                    // console.log("key:", parseInt(poster.key) + -1, poster.props.source.uri)
                    return (
                        <Animated.View 
                                {...this.PanResponder.panHandlers}
                                // {transform: this.position.getTranslateTransform()}
                                style={[this.rotateAndTranslate, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                            
                           <View>{poster}</View>
                            <Animated.View style={{opacity: this.likeOpacity ,transform: [{rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                                <Text 
                                    style={{borderWidth: 1, 
                                    borderColor: 'green',
                                    color: 'green',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10}}>LIKE</Text>
                            </Animated.View>

                            <Animated.View style={{opacity: this.dislikeOpacity, transform: [{rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                                <Text 
                                    style={{borderWidth: 1, 
                                    borderColor: 'red',
                                    color: 'red',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    padding: 10}}>NOPE</Text>
                            </Animated.View>
                        </Animated.View>
                    )
                }
                else {
                    return (
                        <Animated.View 
                        style={[ { opacity: this.nextCardOpacity, transform: [{scale: this.nextCardScale}], height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                        <View>{poster}</View>
                        {/* <Text>{title}</Text> */}
                        </Animated.View>
                    )
                }
            }).reverse()
                  
    }


    renderTitles = () => {
        const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
        // const { moviePosters } = this.state; 
        // const { posters } = this.state;
        const { titles } = this.state;
        // console.log(titles)
        // console.log(titles[0])
        // const { moviePosters}  = this.state;
            return titles.map((title, index) => {
               
                if (index < this.state.currentIndex) {
                    console.log("if current index", this.state.currentIndex)
                    // var index = index - 1
                    // console.log("poster", poster.props.source.uri)
                    // let index = index -1
                    // console.log("movie poster: ", poster.source.uri, "at index: ", index)
                   
                    return null
                } else if (index == this.state.currentIndex) {
                    console.log("title", title.props.children);
                    let currentTitle = title.props.children;
                    console.log(currentTitle)
                    // this.setState({ currentTitle: title.props.children})
                    console.log(this.state.currentTitle)
                    // this.state.newPoster = poster.props.source.uri;
                    // this.state.newTitle = title.props.
                    // this.state.newTitle = title;
                    // let index = index -1;
                    // console.log(posters[2].props.source.uri)
                    // console.log("new poster", this.state.newPoster)
                    // console.log("new title", this.state.newTitle)
                    // console.log("key:", parseInt(poster.key) + -1, poster.props.source.uri)
                    return (
                       
                        <View
                        style={{position: 'absolute', marginVertical: 720}}>
                           <Text
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',   
                                }}>{title}</Text>

                        <AnimatedPressable onPress={() => alert( `${currentTitle}`)}>    

                        {/* <AnimatedPressable onPress={() => alert( `${currentTitle}`)}>     */}
                        <Text>show more</Text>
                            {/* <Button title="see details" onPress={()=>alert('test')} style={{position: 'absolute'}}/> */}
                        </AnimatedPressable>
                        </View>
                    )
                }
                else {
                    return (
                        <View
                        style={ { position: 'absolute', }}>
                        
                        <Text style={{
                            color: 'yellow',
                            opacity: 0
                        }}>{title}</Text>
                        {/* <Text>{title}</Text> */}
                        </View>
                    )
                }
            }).reverse()
                  
    }

    renderEverything = () => {
        const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
        // const { moviePosters } = this.state; 
        // const { posters } = this.state;
        const { everything } = this.state;
        // console.log(titles)
        // console.log(titles[0])
        // const { moviePosters}  = this.state;
            return everything.map((details, index) => {
               
                if (index < this.state.currentIndex) {
                    console.log("if current index", this.state.currentIndex)
                    // var index = index - 1
                    // console.log("poster", poster.props.source.uri)
                    // let index = index -1
                    // console.log("movie poster: ", poster.source.uri, "at index: ", index)
                   
                    return null
                } else if (index == this.state.currentIndex) {
                    // console.log("else if", everything)
                    // console.log("everything", everything[0].props.children._owner.tag);
                    // console.log("everything", everything[0].props.children.props.children._owner.tag);
                    // let currentEverything = everything.props.children;
                    // console.log(currentEverything)
                    // this.setState({ currentTitle: title.props.children})
                    // console.log(this.state.currentEverything)
                    // this.state.newPoster = poster.props.source.uri;
                    // this.state.newTitle = title.props.
                    // this.state.newTitle = title;
                    // let index = index -1;
                    // console.log(posters[2].props.source.uri)
                    // console.log("new poster", this.state.newPoster)
                    // console.log("new title", this.state.newTitle)
                    // console.log("key:", parseInt(poster.key) + -1, poster.props.source.uri)
                    return (
                       
                        <View
                        style={{position: 'absolute', marginVertical: 720}}>
                           <Text
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',   
                                }}>{details}</Text>

                        <AnimatedPressable onPress={() => alert( `${currentTitle}`)}>    

                        {/* <AnimatedPressable onPress={() => alert( `${currentTitle}`)}>     */}
                        <Text>show more</Text>
                            {/* <Button title="see details" onPress={()=>alert('test')} style={{position: 'absolute'}}/> */}
                        </AnimatedPressable>
                        </View>
                    )
                }
                else {
                    return (
                        <View
                        style={ { position: 'absolute', }}>
                        
                        <Text style={{
                            color: 'yellow',
                            opacity: 0
                        }}>{details}</Text>
                        {/* <Text>{title}</Text> */}
                        </View>
                    )
                }
            }).reverse()
                  
    }

    render() {
        // const { posters } = this.state;
        return (
            <View style={{ flex: 1 }}>
            {/* <Text style={{color: 'red'}}>Disliked: {this.state.dislikedMovies}</Text>
            <Text style={{color: 'green'}}>Liked: {this.state.likedMovies}</Text> */}
            <View style={{height: 60}}>
            </View>
            <View style={styles.card}>
                {this.renderPosters()}
                {this.renderTitles()}
                {/* {this.renderEverything()} */}
                {/* {posters} */}
                {/* <Animated.View 
                {...this.PanResponder.panHandlers}
                style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
                   <View>{posters}</View>
                </Animated.View> */}
            </View>
           
            <View style={{height: 60}}>
                {/* {this.state.titles} */}
               
  
            </View>
           
            
        </View>
        )
    }
}  

const styles = StyleSheet.create({
    card: {
        flex: 1, 
        position: 'absolute', 
        marginTop: 30
    }

})
