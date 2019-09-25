import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const People = (props) => {
    return (
        <Card
            title={props.name}
        >
            <Text>Climate: {props.climate} </Text>
            <Text>Terrain: {props.terrain} </Text>
            <Text>Surface Water: {props.surface_water} </Text>
        </Card>
    )
}

export default People
