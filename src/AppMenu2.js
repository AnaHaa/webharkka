import React from 'react';

// Import the map component and the style
import { Map } from './components';
import styles from './AppMenu2.module.css';

// Returns the Google Map component
class AppMenu2 extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Map/>
            </div>
        );
    }   
}

export default AppMenu2;