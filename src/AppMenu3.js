import React from 'react';

// Import the quiz and styles
import { Quiz } from './components';
import styles from './AppMenu3.module.css';

// Returns information about the covid from the source
// Also returns
class AppMenu3 extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>What are the symptoms of the coronavirus?</h3>
                    The new coronavirus causes a sudden respiratory infection. Symptoms may vary from almost none to a serious disease, and they may also change as the disease progresses.
                    <br></br><br></br>
                    Many people with more severe symptoms also had some other underlying condition, such as diabetes, cardiovascular disease or lung disease. 
                    <h3>Clinical picture has included</h3>
                    <ul>
                    <li>Headache</li>
                    <li>Loss of smell or taste</li>
                    <li>Cough, blocked nose, Sore throat</li>
                    <li>Shortness of breath</li>
                    <li>Loss of energy, fatigue</li>
                    <li>Muscle aches</li>
                    <li>Fever</li>
                    <li>Nausea, vomiting, diarrhea</li>
                    </ul>
                    Based on symptoms alone, you cannot determine whether the cause of your respiratory tract infection is due to coronavirus or another virus or bacterium.
                    <br></br><br></br>
                    <a href="https://thl.fi/en/web/infectious-diseases-and-vaccinations/what-s-new/coronavirus-covid-19-latest-updates/symptoms-and-treatment-coronavirus#symptoms">Source</a>
                </div>
                <Quiz/>
            </div>
        )
    }
}

export default AppMenu3;