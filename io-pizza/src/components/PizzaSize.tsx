import React, { useState } from 'react';
import { IonLabel, IonRange } from '@ionic/react';
import { RangeValue } from '@ionic/core';
import './PizzaSize.css'

function PizzaSize() {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>(20);
  return (
    <>
      <IonRange min={20} max={50}onIonChange={({ detail }) => setLastEmittedValue(detail.value)}></IonRange>
      <IonLabel>Taille de la pizza 🍕: {lastEmittedValue as number}</IonLabel>
    </>
  );
}
export default PizzaSize;