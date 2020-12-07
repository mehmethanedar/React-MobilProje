import * as React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ana sayfamız burası</Text>
      </View>
      /*
      <Button
            title="Open drawer"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Button
            title="Toggle drawer"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
      */
    );
  }
}