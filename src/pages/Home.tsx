import { 
    IonButton,
      IonButtons,
        IonContent, 
        IonHeader, 
        IonIcon, 
        IonLabel, 
        IonMenuButton, 
        IonPage, 
        IonRouterOutlet, 
        IonTabBar, 
        IonTabButton, 
        IonTabs, 
        IonTitle, 
        IonToolbar 
    } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Favorites from './home-tabs/Favorites';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';
import { bookOutline, search, star } from 'ionicons/icons';
    
    const Home: React.FC = () => {
       const tabs=[
        {name:'Feed',tab:'feed',url:'/ionic-app/app/home/feed',icon:bookOutline},
        {name:'Seach',tab:'search',url:'/ionic-app/app/home/search',icon:search},
        {name:'Favorites',tab:'favorites',url:'/ionic-app/app/home/favorites',icon:star}
       ]
      return (
        <IonReactRouter>
          <IonTabs>
            <IonTabBar slot="bottom">
            {tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}

            </IonTabBar>
            <IonRouterOutlet>
              <Route exact path="/ionic-app/app/home/feed" render={Feed}/>
              <Route exact path="/ionic-app/app/home/search" render={Search}/>
              <Route exact path="/ionic-app/app/home/favorites" render={Favorites}/>
              <Route exact path="/ionic-app/app/home">
                <Redirect to="/ionic-app/app/home/feed"/>
              </Route>
            </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
      );
    };
    
    export default Home;