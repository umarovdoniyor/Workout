import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

const Btn = props => (
  <TouchableOpacity style={styles.btn} onPress={props.onPress}>
    <View style={styles.btnHeader}>
      <Text style={styles.btnTxt1}>{props.count}</Text>
    </View>
    <Text style={styles.btnTxt2}>{props.name}</Text>
  </TouchableOpacity>
)

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.imageBackground}>
          <Image
            style={styles.img}
            source={require('./assets/workout.jpg')}
          />
          <View style={styles.title}>
            <View style={styles.subTitle}>
              <Text style={styles.titleTxt}>{this.props.name}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.row}>
            {[this.props.exercises[0], this.props.exercises[1]].map((item, index) => (
                <Btn
                    key={item.name}
                    count={index + 1}
                    name={item.name}
                    onPress={() => this.props.navigate('Info', {...item, title: this.props.name})}
                />
            ))}
          </View>
          <View style={styles.row}>
            {[this.props.exercises[2], this.props.exercises[3]].map((item, index) => (
                <Btn
                    key={item.name}
                    count={index + 3}
                    name={item.name}
                    onPress={() => this.props.navigate('Info', {...item, title: this.props.name})}
                />
            ))}
          </View>
        </View>
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
    flex: 1,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
  },
  title: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    paddingHorizontal: 30,
    paddingVertical: 6,
    backgroundColor: '#676B47',
    borderRadius: 10,
  },
  titleTxt: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '800',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  btn: {
    width: '44%',
    height: '80%',
    backgroundColor: '#676B47',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
  },
  btnHeader: {
    backgroundColor: '#191919',
    width: '100%',
    alignItems:'center',
  },
  btnTxt1: {
    color: '#aaa',
    fontSize: 80,
    fontWeight: '900'
  },
  btnTxt2: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 10
  }
});
