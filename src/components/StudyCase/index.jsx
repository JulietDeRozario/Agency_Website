import React from 'react';
import { useParams } from "react-router-dom";
import { injectIntl, FormattedMessage } from 'react-intl';


const StudyCase = () => {
  let study = useParams();
  study = study.studySlug.split('-');
  study = study[0];

  return (
    <div>
      <h1>
        <FormattedMessage id={study + ".title"}/>
      </h1>
      <p>
        <FormattedMessage id={study + ".text"}/>
      </p>
    </ div>
  )
}

export default StudyCase;