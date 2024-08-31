import React from 'react';
import LoginForm from './components/LoginForm';
import styles from './App.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <LoginForm />
      <div className={styles.adContainer}>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-YOUR_ADSENSE_CLIENT_ID"
             data-ad-slot="YOUR_AD_SLOT_ID"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
}

export default App;