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

export default function Bienvenida() {
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
        <IonImg src="/images/portada.png" alt="hongos bioluminiscentes" className="banner-img" />

        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenido al Mundo Fungi</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div className="card">
              <p>Los hongos son un reino de organismos fascinantes y diversos que a menudo se confunden con las plantas. Sin embargo, no son ni animales ni plantas, sino que forman su propio reino: el reino Fungi.</p>
            </div>
            <div className='card'>
              <figure>
                <IonImg src="/images/estructura.png" alt="estructura de un hongo" className="card-img" />
                <figcaption>Estructura del hongo</figcaption>
              </figure> 
            </div>
            <div className="card">
              <p><b>Son heterótrofos:</b> Esto significa que, al igual que los animales, no producen su propio alimento a través de la fotosíntesis. En su lugar, obtienen nutrientes de su entorno, descomponiendo materia orgánica.</p>
            </div>
            <div className="card">
              <p><b>Tienen quitina en su pared celular:</b> La quitina es un carbohidrato resistente que también se encuentra en el exoesqueleto de insectos y crustáceos. Las plantas, en cambio, tienen celulosa.</p>
            </div>
            <div className='card'>
              <figure>
              <IonImg src="/images/animales.png" alt="tienen cosas en común" className="card-img" />  
                <figcaption>Tienen en cómun con los animales</figcaption>
              </figure>
            </div>
            <div className="card">
              <p><b>Son sésiles:</b> La mayoría de los hongos, al igual que las plantas, no se mueven por sí mismos. Permanecen fijos en un solo lugar.</p>
            </div>
            <div className="card">
              <p><b>Tienen pared celular:</b> Aunque la composición sea diferente (quitina en lugar de celulosa), la presencia de una pared celular es una característica compartida con las plantas que les da soporte y estructura.</p>
            </div>
            <div className='card'>
              <figure>
                <IonImg src="/images/plantas.jpg" alt="tienen cosas en común" className="card-img" />
                <figcaption>Tienen en común con las plantas</figcaption>
              </figure>
                
            </div>
          </ion-card-content>
      </ion-card>

      </IonContent>
    </IonPage>
  );
}