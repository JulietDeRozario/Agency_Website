import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import textFr from './translation/fr';
import textEn from './translation/en';

const text = {
  fr: textFr,
  en: textEn,
}

const App = () => {
  const [language, setLanguage] = useState('fr');

  return (
    <IntlProvider locale={language} messages={text[language]}>
      <h1>Hello World</h1>
    </IntlProvider>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));