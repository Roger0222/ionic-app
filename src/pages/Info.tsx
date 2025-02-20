import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Info: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <h1>What Is Artificial Intelligence?</h1>
        <p>
        Before we jump on to the advantages and disadvantages of Artificial Intelligence, let us understand what AI is in the first place. From a bird's eye view, AI provides a computer program the ability to think and learn on its own. It is a simulation of human intelligence (hence, artificial) into machines to do things that we normally rely on humans. This technological marvel extends beyond mere automation, incorporating a broad spectrum of AI skills - abilities that enable machines to understand, reason, learn, and interact in a human-like manner.

Artificial intelligence enables machines to learn from experience, adapt to new information, and perform tasks that typically require human intelligence. Many contemporary AI applications, such as autonomous vehicles, smart home devices, and language translation tools, heavily depend on deep learning and natural language processing. By leveraging these technologies, computers can be trained to perform specific tasks by analyzing vast amounts of data and identifying patterns within that data.
        </p>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Info;