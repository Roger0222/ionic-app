import { 
    IonBackButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonCard, 
      IonCardContent, 
      IonCardHeader, 
      IonCardSubtitle, 
      IonCardTitle,
      useIonRouter,
  } from '@ionic/react';
  import {Route } from 'react-router';
  const Details: React.FC = () => {
    const navigation = useIonRouter();
    const goInfo = () => {
      navigation.push('/ionic-app/app/info','forward','replace');
  }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot='start'>
                <IonBackButton defaultHref='/ionic-app/app/home'></IonBackButton>
            </IonButtons>
            <IonTitle>Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
        <IonCard >
      <img alt="Silhouette of mountains" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg" onClick={() =>  goInfo()} />
      <IonCardHeader>
        <IonCardTitle>Advantages and Disadvantages of AI</IonCardTitle>
        <IonCardSubtitle>By Nikita Duggal</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Before we jump on to the advantages and disadvantages of Artificial Intelligence, let us understand what AI is in the first place.</IonCardContent>
       </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Details;