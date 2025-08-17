import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonText,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonIcon
} from '@ionic/react';
import '../../src/App.css';
import { trash  } from 'ionicons/icons';
export default function Capturas({ capturas, onDelete }) {
 console.log("Lista de capturas recibida :", capturas);
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
        <IonImg src="/images/maceta.png" alt="amanita muscaria" className="banner-img" />

        {/* Título centrado debajo del banner */}
        <IonText className="ion-text-center"><h2>Mis hongos capturados</h2></IonText>
        <hr ></hr>
        {capturas.length === 0 ? (
          <p className='card'>No hay hongos capturados aún.</p>
        ) : (
          <IonGrid>
            {capturas.map((captura, index) => (
              <IonCard key={index} style={{ margin: '10px 0' }}>
                <IonImg
                        src={captura.foto}
                        alt={captura.nombre}
                      />
                
                <IonCardHeader>
                  <IonCardTitle>{captura.nombre} </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                      <IonText><div className="desc">{captura.descripcion}</div></IonText>
                      
                      <IonButton color="tertiary" expand="block" onClick={() => onDelete(index)}>
                        <IonIcon icon={trash}></IonIcon>
                      </IonButton>

                </IonCardContent>
              </IonCard>
            ))}
          </IonGrid>
        )}

      </IonContent>
    </IonPage>
  );
}