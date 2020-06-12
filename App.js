
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  Linking,
  FlatList
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// Impporting the QRcodeScanner
import QRCodeScanner from 'react-native-qrcode-scanner';

class App extends React.Component {
 
  constructor() {
    super()
    this.state = {
      isPermited : false,
      barcode : ''
    } 
  }

// on success Event setting up the state 
  success = e => {
    this.setState({
      isPermited : false, 
      barcode : e.data
    })
  } 

  onPressEvent = () => {
    
    // Checking for the Android Camera Permission 

    if(Platform.OS == 'android') {
      async function requestCameraPermission() {
        try {
             const granted = await PermissionsAndroid.request(
                   PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Scanner App camera Permission',
              message: 'Scanner App needs access to your camera ',
            }
          );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            //Calling the WRITE_EXTERNAL_STORAGE permission function
            requestExternalWritePermission();
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
    }
    this.setState({
      isPermited: true
    })
}
  render () {
    if(this.state.isPermited) {
      return (
        <View style ={{flex:1}}>
           <QRCodeScanner
              onRead = {this.success.bind(this)}
              //reactivate = {true}
              // reactivateTimeout = {1000}
                topContent= {
                    <Text style = {styles.TextCenter}> 
                         Go to {''}
                           <Text style = {styles.TextBold} > https://www.google.com/ </Text> on your computure to scan QR_code 
                    </Text>
              }
         />
        </View>

        )
    } else {
    return (
          
        <View style = {styles.container}>
            <View>
               <TouchableOpacity activeOpacity = {0.1} style = {styles.buttonCss} onPress = {this.onPressEvent.bind(this)}>
                  <Text style = {styles.TextAlignCss}> Open Scanner </Text>
               </TouchableOpacity>
            </View> 
            <View  style= {styles.barcodeView}  >
              <Text> Barcode </Text>
                   <Text style= {styles.barcodeCss} > {this.state.barcode}</Text>
            </View>
        </View>

      )
    }
  }
}

const styles = StyleSheet.create({
 container : {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#DCDCDC'
 }, 
 barcodeView : {
   marginTop: 30,
   width: 360,
   height: 50,
   backgroundColor: 'white',
   textAlign: 'center',
   justifyContent: 'center',
   alignItems : 'center',
   borderBottomColor: 'red'
 },
 barcodeCss : {
   fontSize: 25,
 },
 TextBold: {
  fontWeight: '500',
  color: '#000'
 },
 TextCenter: {
  flex: 1,
  fontSize: 18,
  padding: 32,
  color: '#777'
 },
 buttonCss : { 
   width: 180,
   height: 40,
   backgroundColor: '#2455ab',
   textAlign: 'center',
   borderRadius: 25
 }, 
 TextAlignCss : {
  textAlign: 'center',
  marginTop: 5,
  fontWeight: 'bold',
  fontSize: 20
 }
})

export default App;
