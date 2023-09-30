import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonInput, IonCardContent, IonButton } from '@ionic/react';
import React from 'react';

const Signup: React.FC = () => {

    const handleSignUp = (e: any) => {
        e.preventDefault()
        console.log("Signup clicked...")
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Ionic App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <IonCard>
                    <IonCardHeader className='ion-padding'>Join our community!</IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={handleSignUp}>

                            <IonInput fill='outline' labelPlacement='floating' type='text' label='Name' ></IonInput>

                            <IonInput fill='outline' labelPlacement='floating' type='email' label='Email' className='ion-margin-top'></IonInput>

                            <IonInput fill='outline' labelPlacement='floating' type='number' label='Number' className='ion-margin-top'></IonInput>

                            <IonInput fill='outline' labelPlacement='floating' type='password' label='Password' className='ion-margin-top'></IonInput>

                            <IonButton type='submit' expand='block' className='ion-margin-top'> Back In!</IonButton>

                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Signup;