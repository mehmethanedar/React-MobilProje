import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

export default class Iletisim extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('../images/logo.png')} style={{ height: 76, width: 200 }} />
                </View>
                <View style={styles.row}>
                    <FontAwesome5 name='map-marker-alt' size={40} style={styles.awesome} />
                    <Text style={styles.txt}>
                        Uğurmumcu Mh. N Cd. No:55/57A Sultangazi/İstanbul
                    </Text>
                </View>
                <View style={styles.row}>
                    <FontAwesome5 name='map-marked-alt' size={40} style={styles.awesome} />
                    <TouchableOpacity>
                        <Text style={styles.txt}>
                            Haritada Göster
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <FontAwesome5 name='phone' size={40} style={styles.awesome} />
                    <Text style={styles.txt}>
                        Notifications Screen
                    </Text>
                </View>
                <View style={styles.row}>
                    <FontAwesome5 name='whatsapp' size={40} style={styles.awesome} />
                    <Text style={styles.txt}>
                        Notifications Screen
                    </Text>
                </View>
                <Button onPress={() => navigation.goBack()} title="Ana Sayfa" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' },
    row: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', height: 300 },
    awesome: { flexDirection: 'row', width: 50, margin: 10, backgroundColor: 'blue' },
    txt: { margin: 10, width: 200, backgroundColor: 'green' },
});