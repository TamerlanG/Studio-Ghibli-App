import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const SpeciesCard = (props) => {
    return (
        <Card
            title={props.name}
        >
            <Text>Classification: {props.classification} </Text>
            <Text>Eye Colors: {props.eye_colors} </Text>
            <Text>Hair Colors: {props.hair_colors} </Text>
        </Card>
    )
}

export default SpeciesCard
