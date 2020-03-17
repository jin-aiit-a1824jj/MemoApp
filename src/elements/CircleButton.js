import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as  Font  from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

import { createIconSet } from '@expo/vector-icons';

const glyphMap = { pencil: '\uf303', plus: '\uf067', check:'\uf00c',};
const expoAssetId = require('../../assets/fonts/fa-solid-900.ttf');
const CustomIcon = createIconSet(glyphMap, 'FontAwesome', expoAssetId);

class CircleButton extends React.Component {
    
    state = {
        fontLoaded: false,
    }

    async componentDidMount(){
        await Font.loadAsync({
            'FontAwesome': expoAssetId//fontAwesome,
        });
        this.setState({fontLoaded: true})
    }  

    render() {
        const { name, style, color, onPress } = this.props;
        let bgColor = '#e31676'
        let textColor = '#fff'

        if (color === 'white'){
            bgColor = '#fff'
            textColor = '#e31676'
        }
        
        return(
            <TouchableHighlight style={styles.container} onPress={onPress} underlayColor="transparent">
                <View style={[styles.circleButton, {backgroundColor: bgColor}]}>
                    {
                        this.state.fontLoaded ? (
                                    <CustomIcon name={name} style={styles.circleButtonTitle, {color: textColor}}></CustomIcon>
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: 48,
        width: 48,
        position: 'absolute',
        bottom: 32,
        right: 32,
    },
    circleButton: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
      },
      circleButtonTitle:{
        fontFamily: 'FontAwesome',
        fontSize: 32,
        lineHeight: 32,
      }
});

export default CircleButton;