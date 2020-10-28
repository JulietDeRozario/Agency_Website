import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import Navbar from './components/Navbar';
import StudyCase from './components/StudyCase';
import textFr from './translation/fr';
import textEn from './translation/en';

const text = {
  fr: textFr,
  en: textEn,
}

const App = () => {
  const [language, setLanguage] = useState('fr');
  
  const changeLanguage = () => {
    if(language === 'fr'){
      setLanguage('en')
    }else {
      setLanguage('fr')
    }
    localStorage.clear();
  }

  localStorage.setItem("language", language);

  return (
    <IntlProvider locale={language} messages={text[language]}>
      <Navbar changeLanguage={changeLanguage}/>
    </IntlProvider>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));