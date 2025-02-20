import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonMenu, 
      IonMenuButton, 
      IonMenuToggle, 
      IonPage, 
      IonRouterOutlet, 
      IonSplitPane, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react'
  import {homeOutline, informationOutline, logOutOutline, rocketOutline} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import About from './About';
import Details from './details';


  const Menu: React.FC = () => {
    const path = [
        {name:'Home', url: '/ionic-app/app/home', icon: homeOutline},
        {name:'About', url: '/ionic-app/app/about', icon: rocketOutline},
        {name:'Details', url: '/ionic-app/app/details', icon: informationOutline},

    ]

    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((item,index) =>(
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                        {/*Logout Button*/}
                        <IonButton routerLink="/ionic-app" routerDirection="back" expand="full">
                            <IonIcon icon={logOutOutline} slot="start"> </IonIcon>
                        Logout
                        </IonButton>
                        
                    </IonContent>
                </IonMenu>
                
                <IonRouterOutlet id="main">
                    <Route exact path="/ionic-app/app/home" component={Home} />
                    <Route exact path="/ionic-app/app/about" component={About} />
                    <Route exact path="/ionic-app/app/details" component={Details} />

                    <Route exact path="/ionic-app/app">
                        <Redirect to="/ionic-app/app/home"/>
                    </Route>
                </IonRouterOutlet>

            </IonSplitPane>
        </IonPage>
    );
  };
  
  export default Menu;