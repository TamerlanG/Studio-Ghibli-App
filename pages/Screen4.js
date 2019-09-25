//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import SpeciesCard from "./components/SpeciesCard";

const ALL_SPECIES_URL = "https://ghibliapi.herokuapp.com/species";


export default class Screen4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            species: null,
        }
    }

    fetchData = () => {
        fetch(ALL_SPECIES_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    species: data
                }, () => {
                    console.log(this.state.species)
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
                {this.state.species.map((animal, i) => {
                    return (
                        <View key={i}>
                            <SpeciesCard
                                name={animal.name}
                                classification={animal.classification}
                                eye_colors={animal.eye_colors}
                                hair_colors={animal.hair_colors} />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        if (!this.state.species) {
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
