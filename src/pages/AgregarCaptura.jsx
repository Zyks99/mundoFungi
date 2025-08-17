import { useState } from 'react';

import {
    IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonImg,
  IonAlert,
  IonButtons,
  IonMenuButton,
  IonIcon
} from '@ionic/react';
import '../../src/App.css';
import { camera  } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { useNavigate } from 'react-router-dom';

export default function AgregarCaptura({ onAdd }) {

  const navigate = useNavigate();
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showAlert, setShowAlert] = useState(false);

// Función para tomar foto (ahora correctamente definida)
  const tomarFoto = async () => {
    try {
      const imagen = await Camera.getPhoto({
        source: Camera.CameraSource.Camera, 
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      setFoto(imagen.dataUrl);
    } catch (error) {
      console.error('Error al tomar foto:', error);
      setShowAlert(true);
    }
  };

  const guardar = () => {
    if (!foto || !nombre || !descripcion) {
      setShowAlert(true);
      return;
    }
    
const nuevaCaptura = {
    nombre,
    descripcion,
    foto: foto.startsWith('data:image') ? foto : `data:image/jpeg;base64,${foto}`
  };

  console.log("Datos a enviar al componente padre:", nuevaCaptura);
  onAdd(nuevaCaptura);

   /* onAdd({
      nombre,
      descripcion,
      foto: foto.startsWith('data:image') ? foto : `data:image/jpeg;base64,${foto}`
    });*/

    // Limpiar y navegar
    setFoto(null);
    setNombre('');
    setDescripcion('');
    navigate('/capturas');
  };
  
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
        <IonImg src="/images/captura.png" alt="cacería de hongos" className="banner-img" />

        <ion-card>
          <ion-card-header>
            <ion-card-title></ion-card-title>
            <ion-card-subtitle>Captura</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>

              <IonInput
              placeholder="Nombre"
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value)}
              className="ion-margin-top"
            />

            <IonTextarea
              placeholder="Descripción"
              value={descripcion}
              onIonChange={(e) => setDescripcion(e.detail.value)}
              rows={2}
              className="ion-margin-top"
            />

            <IonButton expand="block" onClick={tomarFoto}>
              <IonIcon icon={camera}></IonIcon>
            </IonButton>

             {foto && (
              <IonImg
                src={foto}
              />
            )}

          <IonButton
            expand="block"
            onClick={guardar}
            style={{
              marginTop: '20px',
              position: 'sticky',
              bottom: '10px'
            }}
          >
            Guardar
          </IonButton>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Error"
            message={!foto ? "Debes tomar una foto" : "Completa todos los campos"}
            buttons={['OK']}
          />

          </ion-card-content>
        </ion-card>

      </IonContent>
    </IonPage>
  );
}