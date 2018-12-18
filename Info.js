import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions } from 'react-native'

export default class Info extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.imageBackground}>
          <Image
            style={styles.img}
            source={params.image}
            resizeMode="contain"
          />
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View>
            <Text style={styles.header}>{params.title}</Text>
            <Text style={styles.equipment}>{params.equipment}</Text>
          </View>
          <Text style={styles.subHeader}>{params.name}</Text>
          <Text style={styles.description}>{params.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '40%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    // backgroundColor: 'white',
  },
  img: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  scroll: {
    flexGrow: 1,
    width: '96%',
    alignSelf: 'center',
  },
  header: {
    color: 'white',
    marginTop: 20,
    fontSize: 40,
    fontWeight: '800',
  },
  equipment: {
    color: '#aaa',
    fontSize: 18,
    fontWeight: '600',
  },
  subHeader: {
    color: '#ddd',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
  }
});
