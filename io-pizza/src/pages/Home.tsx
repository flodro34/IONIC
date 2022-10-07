import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Icon } from '@iconify/react';
import BasePizza from '../components/BasePizza';
import PizzaSize from '../components/PizzaSize';
import PizzaSelect from '../components/PizzaSelect';
import React, { useState } from 'react';

const Home: React.FC < {data: string} >= () => {
  const coucou = 'flo';
  const [state, setState] = useState(false)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pizza Party <Icon icon="ion:pizza" /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
        <BasePizza data={coucou}/>
        <PizzaSize />
        <PizzaSelect />     
      </IonContent>
    </IonPage>
  );
};

export default Home;
