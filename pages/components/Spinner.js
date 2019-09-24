import React from 'react'
import spinner from "./spinner.gif";
import { View, Text, Image } from 'react-native'

const Spinner = () => {
    return (
        <View>
            <Image source={spinner} style={{ width: 200, height: 200 }} />
        </View>
    )
}

export default Spinner