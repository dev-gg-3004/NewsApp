import {Image, StyleSheet, Text, TouchableOpacity, View,Linking, Share} from 'react-native';
import shareimg from '../../../assests/images/share.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import TouchableButton from '../TouchableButton/Index';

export default function NewsCards(props) {

  const navigation=useNavigation()
  const route=useRoute();

 
  function handleOnClickReadMore(){
    let temp=props.id;
    console.log(temp);
    let data=props.data
    console.log('=============>data=========>',data);
    
    // navigation.navigate('NewsDetails' ,{dataId:temp})
    navigation.navigate('NewsDetails' ,{ title: data?.title  })
  }

  function handleOnPressShare(){

    const message = `newsapp://${route.name}/:${props.id}`;
    const title = "Checkout  latest news";
    const options = {
      title,
      message,
    };

    Share.share(options).then(res=>{
      console.log(res)
  }).catch(e=> console.log(e))






    // buildLink()
    // console.log("generatedLink",generatedLink);
  }
  function renderNewsImage() {
    const defaultImage = require("../../../assests/images/defaultNewsimage.png");
    return (
      <View style={{ height: "60%", width: "100%" }}>
        <Image
          source={props.newsimg ? { uri: props.newsimg } : defaultImage}
          style={Style.imageStyle}
        />
      </View>
    );
  }

  function renderNewsContent() {
    return (
      <View style={Style.newsContent}>
        <Text style={{color:"black",fontSize:22}}>{props.newsTitle}</Text>
        <View style={Style.readmoreShareImgView}> 

          <TouchableButton buttonTitle="Read More" onPress={handleOnClickReadMore} touchableViewStyle={Style.readmoreViewStye} textStyle={Style.readMoreTextStyle}/>
          <TouchableOpacity style={{paddingRight:"5%"}} onPress={()=>handleOnPressShare()}>
            <Image source={shareimg} style={{height:25 ,width:25}} />  
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={Style.mainBody}>
        {renderNewsImage()}
        <View>

          {renderNewsContent()}
        </View>
    </View>
  );
}

const Style = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
    width:"100%",
    height:"100%"
  },
  newsContent:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5%"
  },
  mainBody:{
    height:550,
    width:"94%",
    borderRadius:25,
    backgroundColor:"white",
  },
  readmoreShareImgView:{
    // backgroundColor:"lightblue",
    height:"30%",
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
    paddingLeft:"30%"
  },
  readmoreViewStye:{
    width:"70%",
    bordercolor:"blue",
    borderWidth:1,
    backgroundColor:"royalblue",
    borderRadius:25
  },
  readMoreTextStyle:{
    color:"white",
    fontFamily:"Roboto-Regular",
    fontSize:20,
    padding:"3%",
    textAlign:"center"

  }



});


// Todays task
// ---> in zoom meeting --->
// ---> Rnd on error boundary--->1hrs
// ---> implementation and new screen for error boundary-->1.3
// --->Add Activity indicator ---->30min
// ---> news page card n screen  changing --->1hrs
// --->rnd on push notification --> 1hrs
// --->implementation and setup -->1.3hrs