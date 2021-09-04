import React, {useEffect, useState} from 'react';
import { StyleSheet,Text, View, Image, ScrollView, } from 'react-native';
import {Picker} from '@react-native-community/picker';
//@ts-ignore
import * as prova from './prova.tsx'

let NationalData: String[] = [];

let regions = [
    "Abruzzo",
    "Basilicata",
    "Calabria",
    "Campania",
    "Emilia Romagna",
    "Friuli Venezia Giulia",
    "Lazio",
    "Liguria",
    "Lombardia",
    "Marche",
    "Molise",
    "Bolzano",
    "Trento",
    "Piemonte",
    "Puglia",
    "Sardegna",
    "Sicilia",
    "Toscana",
    "Umbria",
    "Valle d'Aosta",
    "Veneto"
];

function get(url: string) {
  return new Promise<string>((accept, reject) => {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "text";

      req.onload = function(event) {
          var resp = req.response;
          if(resp) {
              accept(resp);
          }
      };

      req.send(null);
  });
}

async function GetNationalData(){

    NationalData = [];
    let data = await get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni-latest.csv');
    const list = await data.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    list.forEach(element => {
      NationalData.push(element);
    });
}

function Page() {
  const [regionID, setRegionID] = useState(1);
  const [regionName, setRegionName] = useState('');


  function calculateOffset(): number{
    if(regionID == 1){
      return 0
    }else if(regionID > 1){
      return (29 * (regionID - 2));
    }

    return 0;    
  }

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width:'100%', height: '100%', }}>
      
        <View>
          <Image
            style={{marginTop: -30, marginBottom: 10, height: 380, width: 380}}
            source={require('../../assets/img/health-sick.png')}
          />
        </View>

        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Picker style={{width: '100%', height: 65}} mode='dropdown' selectedValue={regionName} onValueChange={(itemValue, itemIndex) => { setRegionID(itemIndex + 1); setRegionName(itemValue.toString())}}>
              <Picker.Item label='Seleziona Regione' value='Regione non Selezionata' />
              <Picker.Item label='Abruzzo' value='Abruzzo' />
              <Picker.Item label='Basilicata' value='Basilicata' />
              <Picker.Item label='Calabria' value='Calabria' />
              <Picker.Item label='Campania' value='Campania' />
              <Picker.Item label='Emilia Romagna' value='Emilia Romagna' />
              <Picker.Item label='Friuli Venezia Giulia' value='Friuli Venezia Giulia' />
              <Picker.Item label='Lazio' value='Lazio' />
              <Picker.Item label='Liguria' value='Liguria' />
              <Picker.Item label='Lombardia' value='Lombardia' />
              <Picker.Item label='Marche' value='Marche' />
              <Picker.Item label='Molise' value='Molise' />
              <Picker.Item label='Bolzano' value='Bolzano' />
              <Picker.Item label='Treno' value='Trento' />
              <Picker.Item label='Piemonte' value='Piemonte' />
              <Picker.Item label='Puglia' value='Puglia' />
              <Picker.Item label='Sardegna' value='Sardegna' />
              <Picker.Item label='Sicilia' value='Sicilia' />
              <Picker.Item label='Toscana' value='Toscana' />
              <Picker.Item label='Umbria' value='Umbria' />
              <Picker.Item label="Valle d'Aosta" value="Valle d'Aosta" />
              <Picker.Item label='Veneto' value='Veneto' />
            </Picker>
          </View>
          
          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Positivi</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[28 + 11 + calculateOffset()]}</Text>
            </View>
          </View>


          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Nuovi Positivi</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[28 + 13 + calculateOffset()]}</Text>
            </View>
          </View>



          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Ospedalizzati</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[28 + 9 + calculateOffset()]}</Text>
            </View>
          </View>



          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Terapia Intensiva</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[28 + 8 + calculateOffset()]}</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}

export default class InfoRegione extends React.Component {

  componentDidMount(){
    GetNationalData();
  }

  render() {
    return(
      <Page></Page>
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
          borderColor: '#fab451',
          backgroundColor:'#fab451',
          
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

    