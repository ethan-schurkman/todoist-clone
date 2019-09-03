import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCpykoUahuA14hN36PmL2tFkNTPIBmVrNY",
    authDomain: "todoist-clone-c92c5.firebaseapp.com",
    databaseURL: "https://todoist-clone-c92c5.firebaseio.com",
    projectId: "todoist-clone-c92c5",
    storageBucket: "todoist-clone-c92c5.appspot.com",
    messagingSenderId: "406607800725",
    appId: "1:406607800725:web:b83849ab8a216e7a"
});

export { firebaseConfig as firebase };