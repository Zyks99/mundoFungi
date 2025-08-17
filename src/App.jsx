import React, { useState, useEffect } from 'react';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode (opcional) */
 import '@ionic/react/css/palettes/dark.always.css';
 import '@ionic/react/css/palettes/dark.class.css';
 import '@ionic/react/css/palettes/dark.system.css';

//importar vistas
import Tabs from './pages/Tabs';
import AgregarCaptura from './pages/AgregarCaptura';
import Capturas from './pages/Capturas';
setupIonicReact();

export default function App() {
  const [capturas, setCapturas] = useState([]);

  // Cargar datos al iniciar
  useEffect(() => {
    const capturasGuardadas = localStorage.getItem('capturas');
    if (capturasGuardadas) {
      setCapturas(JSON.parse(capturasGuardadas));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('capturas', JSON.stringify(capturas));
  // }, [capturas]);

  const agregarCaptura = (nuevo) => {
    // 1. Crea el nuevo array
    const nuevasCapturas = [...capturas, nuevo];
    // 2. Actualiza el estado de React
    setCapturas(nuevasCapturas);
    // 3. Guarda el array completo y actualizado en localStorage de forma síncrona
    localStorage.setItem('capturas', JSON.stringify(nuevasCapturas));
  };

  const eliminarCaptura = (index) => {
    // 1. Filtra para crear un nuevo array sin el elemento a eliminar
    const nuevasCapturas = capturas.filter((_, i) => i !== index);
    // 2. Actualiza el estado de React
    setCapturas(nuevasCapturas);
    // 3. Guarda el array completo y actualizado en localStorage de forma síncrona
    localStorage.setItem('capturas', JSON.stringify(nuevasCapturas));
  };
  return (
    <BrowserRouter>
      <IonApp>
        <IonSplitPane when="xl" contentId="main-content" >
          <IonMenu contentId="main-content">
            <IonHeader>
              <IonToolbar color="success">
                <IonTitle>Mundo Fungi</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>

                <IonItem routerLink="/tabs/bienvenida" routerDirection="none">Inicio</IonItem>

                <IonItem routerLink="/tabs/peligro" routerDirection="none">¡Hongos Peligrosos!</IonItem>

                <IonItem routerLink="/agregar">Agregar Capturas</IonItem>

                <IonItem routerLink="/capturas">Mi colección de hongos</IonItem>

                <IonItem routerLink="/tabs/musica" routerDirection="none">Musica de hongos</IonItem>

                <IonItem routerLink="/tabs/recetas" routerDirection="none">Recetas con hongos</IonItem>

                <IonItem routerLink="/tabs/medicina" routerDirection="none">Remedios con hongos</IonItem>

              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main-content">
            <Routes>

              <Route path="/" element={<Navigate to="/tabs/bienvenida" />} />

              <Route path="/tabs/*" element={<Tabs />} />

              <Route path="/agregar" element={<AgregarCaptura onAdd={agregarCaptura} />} />

              <Route path="/capturas" element={<Capturas capturas={capturas} onDelete={eliminarCaptura} />}/>

            </Routes>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonApp>
    </BrowserRouter>
  )
}


