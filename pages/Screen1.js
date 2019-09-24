//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import FilmCard from "./components/FilmCard";

const ALL_FILMS_URL = "https://ghibliapi.herokuapp.com/films";


export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            films: null,
        }
    }

    fetchData = () => {
        fetch(ALL_FILMS_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    films: data
                }, () => {
                    console.log(this.state.films)
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
                {this.state.films.map((film, i) => {
                    return (
                        <View key={i}>
                            <FilmCard
                                title={film.title}
                                description={film.description}
                                director={film.director}
                                producer={film.producer}
                                year={film.release_date}
                                score={film.rt_score}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        if (!this.state.films) {
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
