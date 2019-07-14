import React, { Component } from 'react';
import { TextInput, View, Keyboard } from 'react-native';
import style from './styles';
import { Keyboard } from 'react-native';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={[style.border]}
                    onChangeText={(text) => this.setState({ text })}
                    onBlur={Keyboard.dismiss}
                    placeholder='marcelo'
                    maxLength={30}
                />
            </View>
        );
    }
}