import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import covidImage from './images/images.png'

 
export default class App extends Component {

    state = {
        data: {},
        country: '',
    }



    async componentDidMount(){
        const fetchingData = await fetchData();
        this.setState({data: fetchingData})
    }

    handleCountryChange = async(country) => {
        
        const fetchingData = await fetchData(country);
        this.setState({ data: fetchingData , country: country });
    }



    render() {

        const {data, country} = this.state;

        return (
            <div className={styles.container}>
           <h1 className={styles.title}>C <img className ={styles.covidImage} src={covidImage}  alt="c-19"/> vid -19 </h1>
                <Cards data= {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart country={country} data= {data} />
            </div>
        )
    }
}
