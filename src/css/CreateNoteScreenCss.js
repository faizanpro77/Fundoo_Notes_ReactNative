import { StyleSheet } from 'react-native';
//import { Button } from 'react-native-elements/dist/buttons/Button';
const EditeNoteScreenCss = StyleSheet.create({
container1:{
height:'100%',
width:'100%'
},
    container2:{
        flexDirection:'row',
        marginVertical: 20, 
        height:30,
     // borderWidth:1
        },
        backArrowpic:{
            height:25,
            width:25,
        marginLeft:14
},
        pinpic:{
            height:25,
            width:25,
            marginLeft:219 

            
        },
        reminderpluspic:{
            height:25,
            width:25,
           // left:240 
           marginLeft:22

            
        },
        archivepic:{
            height:25,
            width:25,
          marginLeft:22 

        },
      titleinputtxt:{
          
       // height:45,
        fontSize:22,
        width:'100%',
        paddingLeft:16
      },
      noteinputtext:{
       // height:40,
        fontSize:15,
        width:'100%',
        paddingLeft:16,
      } ,
      footerContainer:{

       width:'100%',
       position:'absolute',
       bottom:0

      },
      footer:{
       flexDirection:'row',
       height:50,
       alignItems:'center'
      },
      addfeaturemenue:{
          height:20,
          width:20,
          marginLeft:14          
      },
      addcolour:{
          height:25,
          width:25,
          marginLeft:28
      },
      threedotmenue:{
          height:25,
          width:25,
          marginLeft:'79%'
      }



})

export default EditeNoteScreenCss;