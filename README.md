# React Barcode Scanner App

### About the Project
    1) Create a react-native client application. 
    2) Deployable in Android,iOS and Web.
    3) Demonstrate in Web in first place.
    4) Requirement: on Lunch the Application show the scan button. and when user click on scan buton scanner or camera view should be lunch and scan the barcodes. 
    5) Scanned barcode should be disaplyed on App UI.
	  

### Clonig the Project
          
           1) In your local system lunch the CMD (in windows ) and Command Prompt (In Ubuntu). 
           2) through CMD Open the folder where you want to clone the Project 
                   Ex: cd  /Desktoo/CloneProject
           3) Open the Github and click on clone select the clone with https and copy the gievn link. 
           4) Again, come tho the terminal enter the command 
                   i.e git  clone  https://github.com/Rameshzende/React-Timer.git
           5) clone will be successfull if there are no error  

### Running the Project 
            
	   Note : fo running react-native android app make sure Project is opened in Android Studio. 
           
           1) Open the cloned repository folder through the cmd 
               
              Enter into the Project folder by 
                      
		      cd /ProjectfolderName
               
               the Start the application           
               
	       npx run-android (To run on Android)
               npx run-ios (to run on iso Device)

### Creating a new application

You can use React Native's built-in command line interface to generate a new project. Let's create a new React Native project called "AwesomeProject":

Enter the following commndas 
                     
        npx react-native init AwesomeProject
        cd /AwesomeProject 
        npx run-android or npx react-native run-android (to run the android app)
        npx run-ios or npx react-native run-ios (to run the ios app)

### Android permission Access and Camera Depedence Importing 

In you Project you should add these two  "VIBRATION , CAMERA"  permission to your AndroidManifest.xml. Its found in you Project path 
         
	                           PATH : android/app/src/main/AndroidManifest.xml 
                                   
                                  <uses-permission android:name="android.permission.CAMERA"/>
                                  <uses-permission android:name="android.permission.VIBRATE"/>



You need to add the "missingDimensionStrategy" config for the 'react-native-camera' setting to 'general', this should be found in your android/app/build.gradle add the following:


                                    android {
                                         ...
                                     defaultConfig {
                                                ...
                                           missingDimensionStrategy 'react-native-camera', 'general'
                                            }
                                      }
            

### Importing React-native Camera , Scanner 
    
Importing React-native camrea and scanner depedences to in the Project Enter the following command 

                                  npm install react-native-camera --save
                                  react-native link react-native-camera or 
                                  npx react-native link react-native-camera

Scanner import
                                  
                                   npm install react-native-qrcode-scanner --save
                                   react-native link react-native-qrcode-scanner or 
                                   npx react-native link react-native-qrcode-scanner


### Importing a Camera permission 

To use Camera or scaner depedence in react you need to add the camera permission. TO handle the permission please neter the following commands 
                                
				npm install react-native-permissions --save
                                react-native link react-native-permissions  
				or npx  react-native link react-native-permissions  

