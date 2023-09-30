import { IonBackButton,IonButtons, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
    const handleLogin = (e:any) =>{
        e.preventDefault()
        console.log("Login clicked...")
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    {/* <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons> */}
                    <IonTitle>Ionic App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <IonCard>
                    <IonCardHeader className='ion-padding'>Welcome Back!</IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={handleLogin}>
                            <IonInput fill='outline' labelPlacement='floating' type='email' label='Email'></IonInput>

                            <IonInput fill='outline' labelPlacement='floating' type='password' label='Password' className='ion-margin-top'></IonInput>

                            <IonButton type='submit' expand='block' className='ion-margin-top'> Back In!</IonButton>
                            
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
                <IonFooter>
                    <IonToolbar className='ion-padding'>
                        Footer section
                    </IonToolbar>
                </IonFooter>
        </IonPage>
    );
};

export default Login;