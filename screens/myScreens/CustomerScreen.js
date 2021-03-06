import React from 'react';
import {StyleSheet,TextInput,View,Button,ScrollView,Text} from 'react-native';
// import {globalStyles} from '../styles/global';

export default function CustomerScreen(){
    return (
        <View style={globalStyles.containerForCustomer}>
          <ScrollView >
              <Text style={globalStyles.titleText}>
                Customer Registration Form
              </Text>
      
              <Text style={globalStyles.text1}>Name</Text>
                <TextInput style ={globalStyles.input}
                    placeholder = "Name"
                />
              <Text style={globalStyles.text1}>Email</Text>
                <TextInput style ={globalStyles.input}
                  placeholder = "Email"
                />
              <Text style={globalStyles.text1}>Mobile Number</Text>
                <TextInput style ={globalStyles.input}
                  keyboardType = 'numeric'
                  placeholder = "Mobile Number"
                />
              <Text style={globalStyles.text1}>Password</Text>
                <TextInput style ={globalStyles.input}
                  placeholder = "Password"
                />
             <Text style={globalStyles.text1}>Address</Text>
               <TextInput style ={globalStyles.input}
                 multiline
                 placeholder = "Address"
              />
              <Text style={globalStyles.text1}>Account Number</Text>
                <TextInput style ={globalStyles.input}
                   keyboardType = 'numeric'
                  placeholder = "Account Number"
               />
              
       <View style={globalStyles.containerForCustomer}>
          <Text style={globalStyles.otherText}>I accept the terms of the service.</Text>
       </View>
       
      <View style={globalStyles.containerForCustomer}>
          <Button  style ={globalStyles.button}
            
            title = "Submit"
            color = "purple"
          />
      </View>
       
      </ScrollView>  
       
    </View>
    
  );
}



export const globalStyles = StyleSheet.create({
  imgbackground:{
    width : '100%',
    height : '70%'
  },
  container: {
    paddingTop: 350,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
    
  },
  container1: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    
    
  },
  containerForCustomer: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10
      
    },
  titleText: {
    
    fontSize: 40,
    fontWeight: 'bold',
    textAlign:  'center',
    color:'#6E2C00'
  },
  text: {
    fontSize: 20,
    textAlign:  'center',
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#F4D03F'
 },
 otherText: {
  fontSize: 20,
  fontStyle : 'italic',
  fontWeight: 'bold'
},
input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1
},
button: {
 // color:'yellow'
},
text1: {
// fontSize: 20,
margin: 15,
// fontWeight: 'bold',
}
 
});


