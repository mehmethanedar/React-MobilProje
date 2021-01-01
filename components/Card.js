import * as React from 'react';
import { useState } from 'react';
import { firebase } from '../firebase.js';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
  {
    id: '1-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'birim 1',
  },
  {
    id: '2-c605-48d3-a4f8-fbd91aa97f63',
    title: 'birim 2',
  },
  {
    id: '3-3da1-471f-bd96-145571e29d72',
    title: 'birim 3',
  },
  {
    id: '4-3da1-471f-bd96-145571e29d72',
    title: 'birim 3',
  },
  {
    id: '5-3da1-471f-bd96-145571e29d72',
    title: 'birim 3',
  },
];

export default function Card(props) {

  const [products, setUsers] = useState([])

  const usersRef = firebase.firestore().collection('products')
  usersRef
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        products.push(documentSnapshot.data())
      });

    });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", height: '100%', margin: 7, width: '100%' }}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => { item.id }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={{
            height: 300, backgroundColor: "rgba(236,236,236,0.1)", marginHorizontal: 15, marginVertical: 20, padding: 15, flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
            <View style={{ width: '100%', height: 180, marginTop: 15 }}>
              <TouchableOpacity onPress={() => props.param.navigate('Product')} style={{ width: '100%', height: 80, flex: 1 }}>
                <Image
                  source={require('../images/urun1.jpg')}
                  style={{
                    width: 180,
                    height: 180,
                    
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.productPrice} ₺</Text>
            </View>
            <View style={{ justifyContent: 'center', marginTop: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.productName}</Text>
            </View>
            <View style={{ height: 1,marginBottom:5, width: '100%', backgroundColor: 'black', opacity: .2 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: '100%' }}>
              <View style={{ marginLeft: 8 }}>
              
                <Text style={{ fontSize: 15 }}>{item.productAge} YAŞ</Text>
              </View>
              <View style={{ alignItems: "center", width: '100%' }}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/sepetAdd.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 30
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}