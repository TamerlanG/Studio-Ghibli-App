import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const FilmCard = (props) => {
    return (
        <Card
            title={props.title}
        >
            <Text style={{ marginBottom: 10 }}>
                {props.description}
            </Text>
        </Card>
    )
}

export default FilmCard
