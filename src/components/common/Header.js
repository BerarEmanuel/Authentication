//Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,

  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export { Header };
