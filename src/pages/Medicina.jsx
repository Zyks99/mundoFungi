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

export default function Medicina() {
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
        <IonImg src="/images/medicinaportada.png" alt="amanita muscaria" className="banner-img" />

        <ion-card>
          <ion-card-header>
            <ion-card-title>Descubre la micoterapia</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div className="card">
              <p>Todas las culturas conocidas han utilizado los hongos como alimento, como <b>estimulantes</b> o <b>alucinógenos</b> y hasta como arma mortal.</p>
            </div>
            <div className='card'>
              <figure>
                <IonImg src="/images/cordyceps.png" alt="Cordyceps el hongo de los emperadores y la longevidad" className="card-img" />
                <figcaption>Cordyceps el hongo de los emperadores y la longevidad</figcaption>
              </figure> 
            </div>
            <div className="card">
              <p>Existen infinidad de escritos donde se menciona el uso de diferentes variedades de hongos como remedios para tratar un sinnúmero de enfermedades, sobre todo en la cultura oriental; en China y Japón.</p>
            </div>
            <hr />
            <div className="card">
              <p>Los hongos son considerados <b>probióticos</b>, porque poseen la característica de combatir las enfermedades, haciendo que el sistema inmune funcione correctamente. Su variedad hace posible que puedan ser consumidos terapéuticamente, dentro de una serie de platos bastante agradables.</p>
            </div>
            <div className='card'>
              <figure>
              <IonImg src="/images/kefir.png" alt="Granos tíbicos" className="card-img" />  
                <figcaption>kéfir de agua, búlgaros de agua</figcaption>
              </figure>
            </div>
            <div className="card">
              <p>Los hongos de la pudrición blanca, (hongos que crecen en troncos de madera) a los que pertenecen los Pleurotus o setas, poseen sustancias con propiedades <b>antioxidantes</b></p>
            </div>
            <div className='card'>
              <figure>
                <IonImg src="/images/Sclerotinia .png" alt="Sclerotinia sclerotiorum" className="card-img" />
                <figcaption>Hongos de la pudrición blanca Sclerotinia sclerotiorum</figcaption>
              </figure>
                
            </div>
          </ion-card-content>
      </ion-card>

      </IonContent>
    </IonPage>
  );
}