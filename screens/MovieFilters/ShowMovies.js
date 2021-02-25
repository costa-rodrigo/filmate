// // import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Animated, PanResponder } from 'react-native';
// // // import GenreFilter from './components/GenreFilter';
// // // import MovieSelection from './components/MovieSlections';
// // // https://snack.expo.io/@shrutigarg/touchableopacity-background-change-onclick
// // import GenreFilterScreen from './GenreFilterScreen';

import axios from 'axios';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ShowMovies extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY()
        this.state = {
            genreId: this.props.route.params.genreId,
            posters: this.props.route.params.posters,
            // moviePosters: [],
            // moviePosters: this.props.route.params.moviePosters,
            currentIndex: 0
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

    componentWillMount() {
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

    // handleSubmit(genreId) {
    //     axios.post(`http://localhost:8080/movies`, genreId)
    //     .then(res => {
    //       this.setState({genreId})
    //       // this.populateSelectedGenres()
    //       console.log("id from handleSubmit: ", genreId)
    //     //   const { navigate } = this.props.navigation;
    //       populateSelectedGenres();
    //     //   this.props.navigation.navigate('ShowMovies', { otherParam: genreId})
      
    //     })
    //   }
    
    // populateSelectedGenres() {
    //     axios.get(`http://localhost:8080/movies`)
    //     .then(res => {
    //       const moviePosters = res.data;
    //       this.setState({ moviePosters })
    //       console.log("its working!.......", moviePosters)
    //     })
    //   }  


    // handleSubmit()
    renderPosters = () => {
        // const { moviePosters } = this.state; 
        const { posters } = this.state;
        const { moviePosters}  = this.state;
        // const allPosters = [ posters[0], posters[1], posters[2]
        //     { poster: posters[0] },
        //     { poster: posters[1] },
        //     { poster: posters[2] },
        //     { poster: posters[3] },
        //     { poster: posters[4] },
        // ]

        // const allPosters = posters.map(poster);
        // console.log(allPosters)

            return posters.map((poster, index) => {
                if (index < this.state.currentIndex) {
                    return null
                } else if (index == this.state.currentIndex) {
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
                        </Animated.View>
                    )
                   

                }
            }).reverse()
            
          


        // create for loop to map through all posters??
        // return allPosters.map((item, i) => {
        //     if(i < this.state.currentIndex) {
        //         return null
        //     } else if (i == this.state.currentIndex) {
        //         return (
        //             // <View>{allPosters[2]}</View>
                //     <Animated.View 
                //         {...this.PanResponder.panHandlers}
                //         style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
                //    <View>{item}</View>
                // </Animated.View>
                    
        //         )

        //     } else {
        //         <Animated.View 
        //                 style={[{height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15, position: 'absolute'}]}>
        //            <View>{item}</View>
        //         </Animated.View>

        //     }
            

        // })
        
        // return allPosters.map((item, i) => {
            // <Animated.View 
            // {...this.PanResponder.panHandlers}
            // style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
            //    <View>{item.poster}</View>
            // </Animated.View>
        //     if (i < this.state.currentIndex) {
        //         return null
        //     }
        //     else if (i == this.state.currentIndex) {
        //         return (
        //             <Animated.View 
        //             {...this.PanResponder.panHandlers}
        //             style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
        //                <View>{item.poster}</View>
        //             </Animated.View>

        //         )
        //     }
        // })
        // console.log(posters[0])
        // const { moviePosters } = this.state;
    
        // return posters.map((item, i) => {
        //     if (i < this.state.currentIndex) {
        //         console.log(currentIndex)
        //         return null
        //     }
        //     else if (i == this.state.currentIndex) {
        //         return (
                    // <Animated.View 
                    // {...this.PanResponder.panHandlers}
                    // style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
                    //    <View>{posters}</View>
                    // </Animated.View>


        //         )
             
    
        //     }
        //     else {
        //         return(
        //             <Animated.View 
        //             style={[{height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
        //                <View>{posters}</View>
        //             </Animated.View>
        //         )
               
        //     }
        // })
        
        
        
    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <View style={{height: 60}}>
    //     <Text>{genreId}</Text>
    //       </View>
    //       <View style={{ flex: 1}}>
    //           <Animated.View 
    //           {...this.PanResponder.panHandlers}
    //           style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
    //              <View>{posters}</View>
    //           </Animated.View>
    //       </View>
    //       <View style={{height: 60}}>

    //       </View>
    //   </View>
    // )
        
        
    }

    render() {
        const { posters } = this.state;
        return (
            <View style={{ flex: 1 }}>
            <View style={{height: 60}}>
          {/* <Text>{genreId}</Text> */}
            </View>
            <View style={{ flex: 1, position: 'absolute'}}>
                {this.renderPosters()}
                {/* {posters} */}
                {/* <Animated.View 
                {...this.PanResponder.panHandlers}
                style={[{transform: this.position.getTranslateTransform()}, {height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}]}>
                   <View>{posters}</View>
                </Animated.View> */}
            </View>
            <View style={{height: 60}}>
  
            </View>
        </View>
            

        )
    }
}  
// const ShowMovies = ({ route, navigation }) => {

//     const SCREEN_HEIGHT = Dimensions.get('window').height;
//     const SCREEN_WIDTH = Dimensions.get('window').width;
    
//     const handleSubmit = (genreId) => {
//         axios.post(`http://localhost:8080/movies`, genreId)
//         .then(res => {
//           this.setState({genreId})
//           // this.populateSelectedGenres()
//           console.log("id from handleSubmit: ", genreId)
//           const { navigate } = this.props.navigation;
//           populateSelectedGenres();
//         //   this.props.navigation.navigate('ShowMovies', { otherParam: genreId})
      
//         })
//       }
    
//     const populateSelectedGenres = () => {
//         axios.get(`http://localhost:8080/movies`)
//         .then(res => {
//           const moviePosters = res.data;
//           this.setState({ moviePosters })
//           console.log("its working!")
//         })
//       }  
      
//      componentWillMount = () => {
//           this.PanResponder = PanResponder.create({
//               onStartShouldSetPanResponder:(evt, gestureState) => true,
//               onPanResponderMove:(evt, gestureState) => {

//               },
//               onPanResponderRelease:(evt, gestureState) => {

//               }
//           })

//       }


//     handleSubmit()
//     const { genreId } = route.params;
//     const { posters } =route.params;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <View style={{height: 60}}>

//           </View>
//           <View style={{ flex: 1}}>
//               <Animated.View style={{height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 15}}>
//                  <View>{posters}</View>


//               </Animated.View>


//           </View>
//           <View style={{height: 60}}>

//           </View>
//           <ScrollView>
//             {/* <Text>Details Screen</Text>
//             <Text>genreId: {genreId}</Text> */}
//             {/* <View>{posters[0]}</View> */}
//           </ScrollView>

//       </View>
//     );
//   }

//   export default ShowMovies;

// const styles = StyleSheet.create({
// })

