import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

let DatiNazionali: String[] = [];

let ID: number = 3;

let offset = (29 * (ID-1));

let regioni = [
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

export function setID(Id: number) {
    ID = Id;
    console.log(ID);
}


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
  
  let data = await get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni-latest.csv');
  const list = await data.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  
  if(ID == 1){
    offset = 0;
   }else{
    offset = (29 * (ID-1));
   }

  DatiNazionali.push(list[28 + 11 + offset]);
  DatiNazionali.push(list[28 + 13 + offset]);
  DatiNazionali.push(list[28 + 9 + offset]);
  DatiNazionali.push(list[28 + 8 + offset]);

  return 'fatto';

}

export default class InfoRegione extends React.Component {
  
  state = {
    data: String,
    loading: true
  }

  componentDidMount() {

   GetNationalData().then((data) =>{
     this.setState({data, loading: false})
   });

   

 }

  render() {
    
    if(this.state.loading) {
      console.log("is Loading")
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
              <Text style={{fontSize: 25, marginTop: 15 , fontWeight: '600'}}>{regioni[ID-1]}</Text>
            </View>
            

            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Positivi</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{DatiNazionali[0]}</Text>
              </View>
            </View>


            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Nuovi Positivi</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{DatiNazionali[1]}</Text>
              </View>
            </View>



            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Totale Ospedalizzati</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{DatiNazionali[2]}</Text>
              </View>
            </View>



            <View style={styles.container}>
              <View>
                <Text style={{fontSize: 25, marginTop: 15, marginLeft: 15, fontWeight: '700' }}>Terapia Intensiva</Text>
              </View>
              
              <View>
                <Text style={{fontSize: 33, marginTop: 15, marginLeft: 25, color: '#ab1515', fontWeight: '600'}}>{DatiNazionali[3]}</Text>
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
    