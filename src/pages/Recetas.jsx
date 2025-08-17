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

export default function Recetas() {
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
        
        <ion-card>
          
          <img src="/images/crema.png" alt="Crema de Champiñones casera" />

          <ion-card-header>
            <ion-card-title>Crema de Champiñones</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            
            <h3>Ingredientes</h3>
            <ul class="ingredientes-lista">
              <li>500g de champiñones frescos</li>
              <li>1 cebolla pequeña</li>
              <li>2 dientes de ajo</li>
              <li>1 litro de caldo de verduras o pollo</li>
              <li>200ml de crema para cocinar (o nata líquida)</li>
              <li>2 cucharadas de mantequilla o aceite de oliva</li>
              <li>Sal y pimienta al gusto</li>
              <li>Perejil fresco picado para decorar</li>
            </ul>

            <h3>Preparación</h3>
            <ol className='pasos-lista'>
              <li>
                Lava y lamina los champiñones. Pica finamente la cebolla y los ajos.
              </li>
              <li>
                En una olla grande, derrite la mantequilla a fuego medio. Sofríe la cebolla y el ajo hasta que estén transparentes.
              </li>
              <li>
                Añade los champiñones y cocina hasta que suelten su agua y se doren ligeramente.
              </li>
              <li>
                Vierte el caldo de verduras. Sube el fuego y lleva a ebullición, luego reduce y cocina a fuego lento durante 10 minutos.
              </li>
              <li>
                Retira del fuego y, con una batidora de mano, tritura la mezcla hasta obtener una crema suave y homogénea.
              </li>
              <li>
                Vuelve a colocar la olla en el fuego bajo. Agrega la crema, salpimienta al gusto y calienta sin que hierva.
              </li>
              <li>
                Sirve la crema caliente, decorando con perejil fresco picado.
              </li>
            </ol>
            
          </ion-card-content>

  </ion-card>

          <ion-card>

            <img src="/images/champiñones-salteados.png" alt="Champiñones salteados al ajillo" />

            <ion-card-header>
            <ion-card-title>Champiñones Salteados al Ajillo</ion-card-title>
            </ion-card-header>

            <ion-card-content>

            <h3>Ingredientes</h3>
            <ul class="ingredientes-lista">
              <li>500g de champiñones frescos</li>
              <li>4-5 dientes de ajo</li>
              <li>1 manojo de perejil fresco</li>
              <li>4 cucharadas de aceite de oliva virgen extra</li>
              <li>1/2 vaso de vino blanco (opcional)</li>
              <li>Sal y pimienta negra al gusto</li>
              <li>Una pizca de cayena (opcional)</li>
            </ul>

            <h3>Preparación</h3>
            <ol className='pasos-lista'>
              <li>
                Limpia los champiñones y córtalos en cuartos o rodajas.
              </li>
              <li>
                En una sartén grande, calienta el aceite de oliva a fuego medio-alto.
              </li>
              <li>
                Lamina los ajos y sofríelos en el aceite hasta que empiecen a dorarse. Si usas cayena, añádela ahora.
              </li>
              <li>
                Añade los champiñones a la sartén. Saltea a fuego vivo hasta que se doren y pierdan el agua.
              </li>
              <li>
                Si usas vino blanco, viértelo y deja que se evapore el alcohol.
              </li>
              <li>
                Pica el perejil y añádelo a los champiñones en el último minuto. Salpimenta al gusto y remueve bien.
              </li>
              <li>
                Sirve inmediatamente, preferiblemente con un poco de pan para mojar en el jugo.
              </li>
            </ol>
            </ion-card-content>

            </ion-card>
        
      </IonContent>
    </IonPage>
  );
}