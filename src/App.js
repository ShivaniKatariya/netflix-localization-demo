import React from "react";
import './i18n';
import {useTranslation} from 'react-i18next';

function App() {
  const {t} =useTranslation();
  
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>{t('welcome')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}

export default App;
