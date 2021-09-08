import React, {useEffect, useState} from 'react';
import { StyleSheet,Text, View, Image, ScrollView, } from 'react-native';
import {Picker} from '@react-native-community/picker';


let NationalData: string[] = [];

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
    let data = await get('https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.csv');
    const list = await data.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    list.forEach(element => {
      NationalData.push(element);
    });
    console.log(NationalData);
}

function Page() {
  const [ageID, setAgeID] = useState(1);
  const [Age, setAgeName] = useState('');


  function calculateOffset(): number{
    if(ageID == 1){
      return 0
    }else if(ageID > 1){
      return (7 * (ageID - 2));
    }

    return 0;    
  }

  return (
    <View style={styles.background}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width:'100%', height: '100%', }}>
      
        <View>
          <Image
            style={{ marginBottom: 10, height: 380, width: 380}}
            source={require('../../assets/img/health-doctor-vaccine.png')}
          />
        </View>

        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Picker style={{width: '100%', height: 65}} mode='dropdown' selectedValue={Age} onValueChange={(itemValue, itemIndex) => { setAgeID(itemIndex + 1); setAgeName(itemValue.toString())}}>
              <Picker.Item label='Seleziona fascia di età' value='Regione non età non selezionata' />
              <Picker.Item label='12-19' value='12-19' />
              <Picker.Item label='20-29' value='20-29' />
              <Picker.Item label='30-39' value='30-39' />
              <Picker.Item label='40-49' value='40-49' />
              <Picker.Item label='50-59' value='50-59' />
              <Picker.Item label='60-69' value='60-69' />
              <Picker.Item label='70-79' value='70-79' />
              <Picker.Item label='80-89' value='80-89' />
              <Picker.Item label='90+' value='90+' />
            </Picker>
          </View>
          
          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Vaccinati</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{new Intl.NumberFormat('it-IT').format( parseInt(NationalData[7 + 1 + calculateOffset()]) )}</Text>
            </View>
          </View>


          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Vaccinati Sesso Femminile</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[7 + 3 + calculateOffset()]}</Text>
            </View>
          </View>



          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Vaccinati Sesso Maschile</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[7 + 2 + calculateOffset()]}</Text>
            </View>
          </View>



          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Prima Dose</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[7 + 4 + calculateOffset()]}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Seconda Dose</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[7 + 5 + calculateOffset()]}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Infezione Pregressa</Text>
            </View>
            
            <View>
              <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{NationalData[7 + 6 + calculateOffset()]}</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </View>
  );
}

export default class InfoVaccini extends React.Component {

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
          borderColor: '#f05d4b',
          backgroundColor:'#f05d4b',
          
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

    