// src/components/Tabs.jsx

import {
IonTabs,
IonTabBar,
IonTabButton,
IonLabel,
IonIcon,
IonRouterOutlet,
IonFab,
IonFabButton,
IonFabList,
IonContent
} from '@ionic/react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Bienvenida from './Bievenida';
import Peligro from './Peligro';
import Capturas from './Capturas';
import Musica from './Musica';
import Recetas from './Recetas';
import Medicina from './Medicina';


import { add, home, warning, camera, disc, pizza, medical  } from 'ionicons/icons';

export default function Tabs() {
const navigate = useNavigate();

const navigateTo = (path) => {
  navigate(path);
};

return (
<IonContent>
    <IonTabs>
    <IonRouterOutlet>
      <Routes>

        <Route path="*" element={<Navigate to="bienvenida" />} />

        <Route path="bienvenida" element={<Bienvenida />} />

        <Route path="peligro" element={<Peligro />} />

        <Route path="capturas" element={<Capturas />} />

        <Route path="musica" element={<Musica />} />

        <Route path="recetas" element={<Recetas />} />

        <Route path="medicina" element={<Medicina />} />

      </Routes>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">

      <IonTabButton tab="bienvenida" href="/tabs/bienvenida">
        <IonIcon icon={home} />
        <IonLabel>Inicio</IonLabel>
      </IonTabButton>

      <IonTabButton tab="peligro" href="/tabs/peligro">
        <IonIcon icon={warning} />
        <IonLabel>Peligro!</IonLabel>
      </IonTabButton>

      {/*<IonTabButton tab="capturas" href="/tabs/capturas">
        <IonIcon icon={camera} />
        <IonLabel>Capturas</IonLabel>
      </IonTabButton>*/}

      <IonTabButton tab="musica" href="/tabs/musica">
        <IonIcon icon={disc} />
        <IonLabel>Musica</IonLabel>
      </IonTabButton>

      <IonTabButton tab="recetas" href="/tabs/recetas">
        <IonIcon icon={pizza} />
        <IonLabel>Recetas</IonLabel>
      </IonTabButton>

      <IonTabButton tab="medicina" href="/tabs/medicina">
        <IonIcon icon={medical} />
        <IonLabel>Medicina</IonLabel>
      </IonTabButton>

    </IonTabBar>
  </IonTabs>

      <IonFab vertical="top" horizontal="end" slot="fixed">
      
      <IonFabButton>
        <IonIcon icon={add}/>
      </IonFabButton>

      <IonFabList side="center">

        <IonFabButton onClick={() => navigateTo('/tabs/bienvenida')}>
          <IonIcon icon={home} />
        </IonFabButton>

        <IonFabButton onClick={() => navigateTo('/tabs/peligro')}>
          <IonIcon icon={warning} />
        </IonFabButton>

        {/*
        <IonFabButton onClick={() => navigateTo('/tabs/capturas')}>
          <IonIcon icon={camera} />
        </IonFabButton>
        */}

        <IonFabButton onClick={() => navigateTo('/tabs/musica')}>
            <IonIcon icon={disc} />
        </IonFabButton>

        <IonFabButton onClick={() => navigateTo('/tabs/recetas')}>
            <IonIcon icon={pizza} />
        </IonFabButton>

        <IonFabButton onClick={() => navigateTo('/tabs/medicina')}>
            <IonIcon icon={medical} />
        </IonFabButton>

      </IonFabList>
    </IonFab>

</IonContent>
);
}