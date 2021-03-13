// import React from 'react';
// import { View, Text, Button, StyleSheet, Image } from 'react-native';
// // import AddParticipant from './AddParticipant';
// import { CheckBox } from 'react-native-elements'
// import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'axios';

// export default class NewGroupAddMember extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       selectedLang1:false,
//       selectedLang2:false,
//       selectedLang3:false,
//       selectedLang4:false,
  
//     }
//   }

//   UNSAFE_componentWillMount() {
//     console.log("componentwillmount")
//     return new Promise ( async (resolve, reject) => {
//       try {
//           let storage = await AsyncStorage.getAllKeys((err, keys) => {
//               AsyncStorage.multiGet(keys, (error, stores) => {
//                 stores.map((result, i, store) => {
//                     console.log(store)
//                   //   console.log("result", result)
//                   // console.log("async", { [store[i][0]]: store[i][1] });
//                   let token = "Bearer " + store[0][1];
//                   setToken(token)
//                   console.log("token from handlesubmit", token)
//                   // setFriendEmail(friendEmail)
//                   // console.log(friendEmail)
//                   resolve(storage)
//                   handleToken(token)
                  
//                   return token;
//                 });
//               });
//             });

//       } catch(error) {
//           reject(new Error('Error getting storage from AsyncStorage: ' + error.message))

//       }
//   });

 

    

//   }

//   handleToken() {
//     console.log("handle token function")
//   }
  
//       // state = {
//       //   checked: false,
//       //   checkedId: -1,
//       //   checkboxes: [{id: 'kristen', title: 'Kristen'}, {id: 'mat', title: 'Mat'}, {id: 'rodrigo', title: 'Rodrigo'}]
//       // //  create an array of ids to map through to have multiple checkboxes
        
//       // }
      
//       // handleCheck = (checkedId) => {
//       //   this.setState({checkedId})
//       //   console.log(checkedId)
//       //   // this.setState({checked: !this.state.checked})
        
//       // }

//         render() {
//           // const {checkboxes, checkedId } = this.state
//           // const { selectedLang1, selectedLang2, selectedLang3, selectedLang4 } = this.state;
//           return (
//             <View>
//               <Text>add group members</Text>
//             </View>
//           //   <View>
//           //        <Text style={styles.title}>Add participant to group</Text>    
//           //      <View style={styles.item} >
//           //   <CheckBox checked={selectedLang1} color="#fc5185" onPress={()=>this.setState({selectedLang1:!selectedLang1} )} />
//           //   <Text style={
//           //     {...styles.checkBoxTxt,
//           //       color:this.state.selectedLang1?"#fc5185":"gray",
//           //       fontWeight:this.state.selectedLang1? "bold" :"normal"
//           //     }}
//           //     >Kristen</Text>
//           // </View>
//           //         <View style={styles.item} >
//           //         <CheckBox checked={selectedLang2} color="#fc5185" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
//           //         <Text style={
//           //           {...styles.checkBoxTxt,
//           //             color:this.state.selectedLang2?"#fc5185":"gray",
//           //             fontWeight:this.state.selectedLang2? "bold" :"normal"
//           //           }}
//           //           >Rod</Text>
//           //       </View>
//           //       <View style={styles.item} >
//           //         <CheckBox checked={selectedLang3} color="#fc5185" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
//           //         <Text style={
//           //           {...styles.checkBoxTxt,
//           //             color:this.state.selectedLang3?"#fc5185":"gray",
//           //             fontWeight:this.state.selectedLang3? "bold" :"normal"
//           //           }}
//           //           >Mat</Text>
//           //       </View>
//           //       {/* <Button title="Add Participant" /> */}
//           //       <Button  title="Add Participant" onPress={() => {
//           //           this.props.navigation.navigate('GroupCreated')
//           //       }} />

//           //   </View>
         
//             // <View style={styles.screen}>
//             //     <Text style={styles.title}>Add participant to group</Text>    
//             //     {checkboxes.map(checkbox => (
//             //       <CheckBox
//             //       // title='John Doe'
//             //       key={checkbox.id}
//             //       title={checkbox.title}
//             //       max={2}
//             //       checked={checkbox.id == checkedId}
//             //       checkedIcon={<Image style={styles.checkmark} source={require('./checked.png')} />}
//             //       //  uncheckedIcon={<Image source={require('../unchecked.png')} />}
//             //       // checked={this.state.checked}
//             //       // onPress={() => this.setState({checked: !this.state.checked})}
//             //       onPress={() => this.handleCheck(checkbox.id)}
//             //       />
                

//             //     ))}
                
//             //     <Button title="Add Participant" />
//             // </View>
//            );

//         }
//   }

// const styles = StyleSheet.create({
//     screen: {
//         paddingHorizontal: 20,
//         paddingTop: 50
//     },
//     title: {
//         fontSize: 20,
//         textAlign: 'center',
//         marginBottom: 60
//     },
//     checkmark: {
//       width: 20,
//       height: 20
//     }

// });
