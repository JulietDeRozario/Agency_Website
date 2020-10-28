import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';


const Works = () => {
  return (
    <>
    <h1>
      <FormattedMessage id="works.title"/>
    </h1>
    <p>
      <FormattedMessage id="works.text"/>
    </p>
    <section>
      <div className="card" onClick={() => window.location.href += "/platon-study-case" }>
        <FormattedMessage id="platon.title" />
      </ div>
      <div className="card" onClick={() => window.location.href += "/sedal-study-case" }>
        <FormattedMessage id="sedal.title" />
      </ div>
      <div className="card" onClick={() => window.location.href += "/solane-study-case" }>
        <FormattedMessage id="solane.title" />
      </ div>
    </section>
    </>
  )
}

export default Works;