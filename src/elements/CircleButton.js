import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as  Font  from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

import { createIconSet } from '@expo/vector-icons';

const glyphMap = { pencil: '\uf303', plus: '\uf607', check:'\uf00c',};
const expoAssetId = require('../../assets/fonts/fa-solid-900.ttf');
const CustomIcon = createIconSet(glyphMap, 'FontAwesome', expoAssetId);

class CircleButton extends React.Component {
    
    state = {
        fontLoaded: false,
    }

    async componentDidMount(){
        await Font.loadAsync({
            'FontAwesome': fontAwesome,
        });
        this.setState({fontLoaded: true})
    }  

    render() {
        const { name, style, color } = this.props;
        let bgColor = '#e31676'
        let textColor = '#fff'

        if (color === 'white'){
            bgColor = '#fff'
            textColor = '#e31676'
        }

        return(
            <View style={[styles.circleButton, style, {backgroundColor: bgColor}]}>
                {
                    this.state.fontLoaded ? (
                                <CustomIcon name={name} style={styles.circleButtonTitle, {color: textColor}}></CustomIcon>
                    ) : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 2,
        shadowRadius: 3,
        
      },
      circleButtonTitle:{
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 32,
      }
});

export default CircleButton;