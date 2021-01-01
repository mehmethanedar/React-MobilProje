import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import Layout from '../components/Layout.js'
import Slider from '../components/Slider.js'
import Swiper from "react-native-web-swiper";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Kur: null,
        };
    };
    componentDidMount() {
        this.KurCek();
    }
    KurCek = async () => {
        try {
            var self = this;
            const parseString = await require('react-native-xml2js').parseString;
            const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
            let responseXml = await response.text();
            await parseString(responseXml, function (err, result) {
                self.setState({ Kur: result });
            });

        } catch (error) {
            console.log('fetch', err)
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Layout param={navigation} />

                <View style={{ flexDirection: 'row', height: 50 }}>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>USD/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "USD")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>EURO/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "EUR")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={styles.DovizView}>
                        <Text style={styles.DovizBaslik}>STERLİN/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "GBP")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                    <View style={[styles.DovizView, { borderRightWidth: 0 }]}>
                        <Text style={styles.DovizBaslik}>RİYAL/TRY</Text>
                        <Text style={styles.Doviz}>{this.state.Kur != null ? this.state.Kur.Tarih_Date.Currency.filter(x => x.$.Kod == "SAR")[0].ForexBuying[0] : 'veri yok'}</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ height: 250 }}>
                        <Slider />

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20, width: '100%' }}>
                            <View style={{ flex: 2, width: '100%' }}>
                                <Image
                                    source={require('../images/urun1.jpg')}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, alignItems: "center",width: '100%' }}>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>76 ₺</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ERKEK 4'LÜ TAKIM </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",width: '100%' }}>

                                    <View style={{marginLeft:8}}>
                                        <Text style={{ fontSize: 15 }}>4-8 YAŞ</Text>
                                    </View>
                                    <View>
                                        <Image
                                            source={require('../images/sepetAdd.png')}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                margin: 8
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20 }}>
                            <Text>asfasf</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20 }}>
                            <Text>asfasf</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20 }}>
                            <Text>asfasf</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20 }}>
                            <Text>asfasf</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)", height: 400, margin: 20 }}>
                            <Text>asfasf</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    DovizView: {
        flex: 1, borderRightWidth: 1, borderColor: 'grey', justifyContent: 'center'
    },
    DovizBaslik: {
        fontSize: 10, textAlign: 'center'
    },
    Doviz: {
        fontSize: 14, textAlign: 'center', fontWeight: 'bold'
    }
})