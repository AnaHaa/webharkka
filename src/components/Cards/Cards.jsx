import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
// Get the components
// Card is for the 4 cards, which are used to show covid data
// CardContent typography are being used to show the data in style
// Use grid to order the cards

// Import style for the cards
import styles from './Cards.module.css';

const Cards = ({ data: { data } }) => {
    // Check if the imported data is loaded
    if (!data) {
        return '. . .';
    } else { // Data loaded, make the divs
        // Make 4 Card items with the data
        // Add styling to the cards, loading times etc
        return (
            <div className={StylesProvider.container}>
                <Grid>
                    <Grid item component={Card} className={cx(styles.card, styles.conf)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Confirmed</Typography>
                            <Typography varaint="h5">
                                <CountUp
                                    end={data.cases}
                                    duration={2}
                                    separator=" "
                                />
                            </Typography>    
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} className={cx(styles.card, styles.reco)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                            <Typography varaint="h5">
                                <CountUp
                                    end={data.recovered}
                                    duration={2.5}
                                    separator=" "
                                />
                            </Typography> 
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} className={cx(styles.card, styles.curr)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Currently</Typography>
                            <Typography varaint="h5">
                                <CountUp
                                    end={data.cases - data.recovered}
                                    duration={3}
                                    separator=" "
                                />
                            </Typography> 
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} className={cx(styles.card, styles.deat)}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                            <Typography varaint="h5">
                                <CountUp
                                    end={data.deaths}
                                    duration={3.5}
                                    separator=" "
                                    />
                            </Typography>          
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Cards;