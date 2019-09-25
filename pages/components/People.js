import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const People = (props) => {
    return (
        <Card
            title={props.name}
        >
            <Text>Gender: {props.gender} </Text>
            <Text>Age: {props.age} </Text>
            <Text>Eye Color: {props.eye_color} </Text>
            <Text>Hair Color: {props.hair_color} </Text>
        </Card>
    )
}

export default People
