import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={style.containerStyle}>
        {props.children}
    </View>
);

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
