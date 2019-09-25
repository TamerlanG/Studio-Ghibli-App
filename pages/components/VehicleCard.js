import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const VehicleCard = (props) => {
    return (
        <Card
            title={props.name}
        >
            <Text style={{ marginBottom: 10 }}>
                {props.description}
            </Text>
            <Text>Vehicle Class: {props.vehicle_class} </Text>
            <Text>Length: {props.length} </Text>
        </Card>
    )
}

export default VehicleCard
