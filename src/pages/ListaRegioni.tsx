import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//@ts-ignore
import * as regione from './InfoRegione.tsx'

function showRegionalInfo(ID: number) {
  regione.setID(ID);
}
export default class ListaRegioni extends React.Component {
    
    render() {
      
      return (
        <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width:'100%', height: '100%', }}>

          <View>
            <Image
              style={{ marginBottom: 10, height: 355, width: 365}}
              source={require('../../assets/img/health-doctor-vaccine.png')}
            />
          </View>

          <View style={styles.wrapper}>
            
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 25, marginTop: 10 , fontWeight: '600'}}>Lista Regioni</Text>
            </View>
               

            <TouchableHighlight onPress={() => showRegionalInfo(1)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Abruzzo</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => showRegionalInfo(2)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Basilicata</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(3)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Calabria</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => showRegionalInfo(4)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Campania</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(5)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Emilia Romagna</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(6)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Friuli Venezia Giulia</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(7)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Lazio</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => showRegionalInfo(8)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Liguria</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => showRegionalInfo(9)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Lombardia</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(10)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Marche</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(11)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Molise</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(12)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Bolzano</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(13)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Trento</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(14)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Piemonte</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(15)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Puglia</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(16)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Sardegna</Text>
              </View>
            </TouchableHighlight>

            
            <TouchableHighlight onPress={() => showRegionalInfo(17)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Sicilia</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(18)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Toscana</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(19)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Umbria</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(20)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Valle d'Aosta</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight onPress={() => showRegionalInfo(21)}>
              <View style={styles.textContainer}>
                <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>Veneto</Text>
              </View>
            </TouchableHighlight>

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
    