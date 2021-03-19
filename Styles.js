import { StyleSheet } from 'react-native';


export default StyleSheet.create({  
  screen: {
    backgroundColor: '#0A0A0A',
    flex: 1,
    
  },
  header: {
    backgroundColor: '#121212',
    marginBottom: 20
  },
  h1_heading: {
      fontSize: 28,
      lineHeight: 34,
      fontFamily: 'Nunito-ExtraBold'
  },
  h2_heading: {
      fontSize: 24,
      lineHeight: 30
  },
  h3_heading: {
      fontSize: 20,
      lineHeight: 28,
      color: 'white',
  },
  title: {
      fontSize: 18,
      lineHeight: 24
  },
  paragraph_small: {
      fontSize: 12,
      lineHeight: 17,
      color: 'white',
      marginRight: 5
  },
  input: {
    backgroundColor: '#1E1E1E',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#8A8C90',
    fontSize: 14,
    lineHeight: 20,
    width: 343,
    height: 52,
    fontFamily: 'Nunito-Regular'
},
text: {
  color: 'pink',
  fontFamily: 'Nunito-SemiBold',
  fontSize: 40
}

});