import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout.js';

export default class Cart extends React.Component {

    render() {
        const {navigation} = this.props;
        return (
            <View >
                <Layout param={navigation} />
                <Text>Sepetim sayfası</Text>
            </View>
        );
    }
}