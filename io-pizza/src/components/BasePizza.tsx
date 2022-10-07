import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import './BasePizza.css';

function BasePizza() {
  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton class="tomato" value="tomato">
          <IonLabel>Base tomate</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton class="bianco" value="bianco">
          <IonLabel>Base Blanche</IonLabel>
        </IonSegmentButton>
      </IonSegment>

    </>
  );
}
export default BasePizza;