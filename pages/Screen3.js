//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import LocationCard from "./components/LocationCard";

const ALL_LOCATIONS_URL = "https://ghibliapi.herokuapp.com/locations";


export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            locations: null,
        }
    }

    fetchData = () => {
        fetch(ALL_LOCATIONS_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    locations: data
                }, () => {
                    console.log(this.state.locations)
                })
            })
            .done();
    }

    componentDidMount = () => {
        this.fetchData();
    }
    renderLoadingView = () => {
        return (
            <View style={styles.MainContainer}>
                <Spinner />
            </View>
        )
    }

    renderFilms = () => {
        return (
            <ScrollView styles={styles.MainContainer}>
                {this.state.locations.map((place, i) => {
                    return (
                        <View key={i}>
                            <LocationCard
                                name={place.name}
                                climate={place.climate}
                                terrain={place.terrain}
                                surface_water={place.surface_water} />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        if (!this.state.locations) {
            return this.renderLoadingView();
        }
        else {
            return this.renderFilms();
        }
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});
