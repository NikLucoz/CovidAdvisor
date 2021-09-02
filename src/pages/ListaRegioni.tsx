import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    render() {
      return (
        <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width:'100%', height: '100%', }}>

          <View>
            <Image
              style={{ marginBottom: 10, height: 300, width: 365}}
              source={require('../../assets/img/health-doctor-vaccine.png')}
            />
          </View>

          <View style={styles.wrapper}>
            
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 25, marginTop: 10 , fontWeight: '600'}}>Lista Regioni</Text>
            </View>
               

            
            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Marche</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Abruzzo</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Lazio</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Campania</Text>
            </View>
            
            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Campania</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Campania</Text>
            </View>

          </View>

        </ScrollView>
      </View>

    );
  }
}
    const styles = StyleSheet.create({

        background: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
        },
      
        wrapper: {
          width:'100%',
         
          padding: 20,
          flexDirection: "column",
      
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderWidth: 1,
          borderColor: '#aaddde',
          backgroundColor:'#aaddde',
          
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,

        },

        titleContainer: {
            backgroundColor:'#fff',
            width: "100%",
            height: 60,
            marginBottom: 25,
        
            textAlignVertical: 'center',
            alignItems: 'center',
            textAlign: 'center',
        
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#fff',
  
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
      
        textContainer: {
          backgroundColor:'#fff',
          width: "100%",
          height: 70,
          marginBottom: 10,
      
          textAlignVertical: 'center',
          alignItems: 'center',
          textAlign: 'center',
      
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#fff',

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
      
      });
    