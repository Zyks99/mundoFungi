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

export default function Peligro() {
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
        <IonImg src="/images/peligroportada.png" alt="Amanita Virosa - Angel Destructor" className="banner-img" />

        <ion-card>
          <ion-card-header>
            <ion-card-title>¡Atención, no ingerir!</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <div className="card">
              <p><b>¿Sabías que </b> existen más de 14,000 especies de hongos en el mundo, solo entre 70 y 80 especies son consideradas venenosas para los humanos?</p>
            </div>
            <div className="card">
              <p> De estas, un número aún menor es realmente letal si se ingiere, sin embargo, una vez ingeridos ya no hay manera de recuperarse, cuidate especialmente de:</p>
            </div>
            
            <ion-list>

              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Amanita virosa Bertill" src="/images/bertill.png" />
                </ion-thumbnail>
                <ion-label>Amanita virosa Bertill</ion-label>
              </ion-item>

              <ion-item>
                <p>También llamada amanita maloliente, cicuta fétida u oronja cheposa, es un hongo basidiomiceto, del orden Agaricales. Es muy venenosa y su ingestión puede provocar la muerte.</p>
              </ion-item>

                <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Amanita muscaria" src="/images/muscaria.png" />
                </ion-thumbnail>
                <ion-label>Amanita muscaria</ion-label>
              </ion-item>

              <ion-item>
                <p>LLamado también matamoscas o falsa oronja, es un hongo basidiomiceto muy común y popular, considerado venenoso y enteógeno (psicoactivo).</p>
              </ion-item>

              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Cortinarius orellanus" src="/images/orellanus.png" />
                </ion-thumbnail>
                <ion-label>Cortinarius orellanus</ion-label>
              </ion-item>

              <ion-item>
                <p>Comúnmente conocido como la gorra web de los tontos, es una especie de hongo mortal de la familia Cortinariaceae originaria de Europa.</p>
              </ion-item>

              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Amanita phalloides" src="/images/phalloides.png" />
                </ion-thumbnail>
                <ion-label>Amanita phalloides</ion-label>
              </ion-item>

              <ion-item>
                <p>También conocida  hongo de la muerte, oronja mortal y cicuta verde, es una especie altamente tóxica muy parecida a algunas que son comestibles, por lo que se han dado casos de envenenamiento accidental.</p>
              </ion-item>

              <br />  

            </ion-list>
            
            <div className="card">
              <p> En resumen, <b>¡nunca consumas hongos silvestres!</b> Si no se está absolutamente seguro de su identificación, consulta con expertos o utiliza guías de referencia confiables.</p>
            </div>

          </ion-card-content>
        </ion-card>
      
      </IonContent>
    </IonPage>
  );
}