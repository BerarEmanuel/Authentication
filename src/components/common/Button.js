import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#696969',
    fontSize: 16,
    fontWeight: '600'

  },
  buttonStyle: {
    width: '98%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'auto',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#696969',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
