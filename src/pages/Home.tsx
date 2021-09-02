import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (

      <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width:'100%', height: '100%', }}>

          <View>
            <Image
              style={{marginTop: -30, marginBottom: 10, height: 380, width: 380}}
              source={require('../../assets/img/health-covid-test.png')}
            />
          </View>

          <View style={styles.wrapper}>
                
            
            <View style={styles.textContainer}>
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Dati Nazionali</Text>
            </View>
            

            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Positivi</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>130000</Text>
              </View>
            </View>


            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Nuovi Positivi</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>6500</Text>
              </View>
            </View>



            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Ospedalizzati</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>510</Text>
              </View>
            </View>



            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Terapia Intensiva</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>100</Text>
              </View>
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
      
        container: {
          backgroundColor:'#fff',
          width: "100%",
          height: 130,
          marginBottom: 20,
      
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
          marginBottom: 20,
      
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
    