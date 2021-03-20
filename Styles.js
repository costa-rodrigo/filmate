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
      fontFamily: 'Nunito-ExtraBold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 8
  },
  h2_heading: {
      fontSize: 24,
      lineHeight: 30
  },
  h3_heading: {
      fontSize: 20,
      lineHeight: 28,
      color: 'white',
      fontFamily: 'Nunito-Bold',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 343,
  },
  title: {
      fontSize: 18,
      lineHeight: 24,
      color: 'white',
      fontFamily: 'Nunito-ExtraBold',

  },
  paragraph_small: {
      fontSize: 12,
      lineHeight: 17,
      color: 'white',
      // marginRight: 5,
      fontFamily: 'Nunito-Regular',
  },
  paragraph_medium: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Nunito-Regular',
    color: 'white',
    textAlign: 'center'
  },
  bold_medium: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: 'white'
  },
  bold_small: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  bold_med_small: {
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
    color: 'white',
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