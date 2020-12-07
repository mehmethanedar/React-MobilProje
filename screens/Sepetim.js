import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default class Sepetim extends React.Component {

    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Sepetim sayfası</Text>
                <Button onPress={() => navigation.goBack()} title="Ana Sayfa" />
            </View>
        );
    }
}