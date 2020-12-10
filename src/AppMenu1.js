import React from 'react';

import { Cards, Chart } from './components';
import styles from './AppMenu1.module.css';
import { fetchData } from './api';

// AppMenu 1 => Graph of the situation
// Returns the Cards - and the Chart - components
// Gets the data from /api and imports the data into Cards and Chart
class AppMenu1 extends React.Component {
    // Check the data
    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( { data: fetchedData });
    }
    render() {
        // Check the data again
        const { data } = this.state;
        if (!data) {
            return '. . .';
        } else {
            return (
                <div className={styles.container}>
                    <Cards data={data}/>
                    <div className={styles.chart}>
                        <Chart data={data}/>
                    </div>
                    <div className={styles.text}>
                        <h3>These are the current global COVID-19 statistics</h3>
                        <ul>
                        <li>Confirmed is the total number of people, that have or had the virus</li>
                        <li>Recovered is the number of people, that  had the virus and recovered from it</li>
                        <li>Currently is the number of people, that have the virus</li>
                        <li>Deaths is the number of people, that have died because of the virus</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default AppMenu1;