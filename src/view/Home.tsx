import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import Button from '../component/Button';
import R from '../res/R';


interface LogoutProps {
    logout: () => void;
}

export default class Logout extends React.Component<LogoutProps> {
    render() {
        return ( 
            <>
                <Text>Logout</Text>
                <Button title={R.i18n.t('logout')} onPress={this.props.logout}/>
            </>
        );
    }
}