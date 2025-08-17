import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonText
} from '@ionic/react';
import '../../src/App.css';

export default function Musica() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mundo Fungi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        
        {/* Imagen de banner */}
        <IonImg src="/images/musicaportada.png" alt="hongos bioluminiscentes" className="banner-img" />

        <ion-card>

          <ion-card-header>
            <ion-card-title>Hongos y sintetizadores</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div class="video-responsive">
              <iframe width="1478" height="573" src="https://www.youtube.com/embed/OKAXtA7lnL8" title="Mind blowing mushroom plays synthesizer in the woods!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
          </ion-card-content>

        </ion-card>

        <ion-card>

          <ion-card-header>
            <ion-card-title>Infected Mushroom</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div class="video-responsive">
                <iframe width="1478" height="573" src="https://www.youtube.com/embed/P9i2fpw_jkk" title="Savant on Mushrooms (feat. Savant) (Original Mix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
          </ion-card-content>

        </ion-card>
      </IonContent>
    </IonPage>
  );
}