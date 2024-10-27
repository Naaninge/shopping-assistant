import React from 'react'
import { Link } from 'react-router-dom';


import Guide from './Guide';

const PracticalGuide = () => {
  return (
    <div>
      <Guide
        title=" Praktiese Pryskonsultant"
        firstBtnTitle="Budget-Friendly Picks"
        secondBtnTitle="Eco Deals"
        language="Afrikaans"
        personality="practical price advisor"
        initialMessage="Welkom! Kom ek help jou om die beste pryse te vind vandag."
      ></Guide>
    </div>
  );
}

export default PracticalGuide
