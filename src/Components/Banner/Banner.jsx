import React from 'react';
import NetfelixBannerLogo from '../../Assets/Images/netfelix-banner-logo.png';
import { Play, Info } from 'lucide-react'; 
import styles from './Banner.module.css';
function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* {netflix image} */}
        <img src={NetfelixBannerLogo} alt="Netfelix Banner Logo" />
        {/* {title} */}
        <h1 className={styles.title}>bridgerton</h1>
        {/* {description} */}
        <h1 className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as eight siblings seek their perfect match amid London's scandals and
          soirées.
        </h1>
        <div className={styles.buttonContainer}>
          {/* {play button} */}
          <button className={styles.Button}>
            <Play size={30 } />
            Play
          </button>
          {/* My list button} */}
          <button className={styles.Button}>
            <Info size={30} />
            My list
          </button>
        </div>
      </div>
      <div className={styles.fadeBottom}>
        {/* fading} */}

      </div>
    </div>
  );
}

export default Banner;
