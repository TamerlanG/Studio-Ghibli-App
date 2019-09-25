//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import VehicleCard from "./components/VehicleCard";

const ALL_VEHICLES_URL = "https://ghibliapi.herokuapp.com/vehicles";


export default class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            vehicles: null,
        }
    }

    fetchData = () => {
        fetch(ALL_VEHICLES_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    vehicles: data
                }, () => {
                    console.log(this.state.vehicles)
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
                {this.state.vehicles.map((vehicle, i) => {
                    return (
                        <View key={i}>
                            <VehicleCard
                                name={vehicle.name}
                                description={vehicle.description}
                                vehicle_class={vehicle.vehicle_class}
                                length={vehicle.length}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        if (!this.state.vehicles) {
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
