import React from 'react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel,
  IonCheckbox
} from '@ionic/react';
import './PizzaSelect.css';
import { Icon } from '@iconify/react';

function PizzaSelect() {
  return (
    <IonAccordionGroup expand="inset">
      <IonAccordion value="first">
        <IonItem slot="header" color="rose">
          <IonLabel>Viandes <Icon icon="fluent-emoji-flat:meat-on-bone" /></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Crocodile <Icon icon="fluent-emoji-flat:crocodile" /></IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Pigeon<Icon icon="fluent-emoji-flat:bird" /></IonLabel>
        </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="rose">
          <IonLabel>Légumes <Icon icon="fluent-emoji-flat:avocado" /></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Brocolis <Icon icon="fluent-emoji-flat:broccoli" /></IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Aubergines <Icon icon="fluent-emoji-flat:eggplant" /></IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Champignons <Icon icon="fluent-emoji-flat:mushroom" /></IonLabel>
        </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="rose">
          <IonLabel>Poisson <Icon icon="fluent-emoji-flat:fish" /></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Saumon <Icon icon="ion:fish" /></IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Daurade</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Panga</IonLabel>
        </IonItem>
        </div>
      </IonAccordion>
      <IonAccordion value="four">
        <IonItem slot="header" color="rose">
          <IonLabel>Topping<Icon icon="fluent-emoji-flat:olive" /></IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Olives</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Pesto</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Pignon de pin</IonLabel>
        </IonItem>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default PizzaSelect;