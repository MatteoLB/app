import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import R from '../res/R';

interface ButtonProps {
    onPress: () => void ,
    title: string
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
                <Text style={styles.text}>{ this.props.title }</Text>
            </TouchableHighlight>
        );
    }
}

const styles = {
    button: {
        backgroundColor: R.colors.gold,
        padding: 20,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
};