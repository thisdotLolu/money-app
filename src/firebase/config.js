import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyD1Aw7bcsaY8sXp1rg5kvgcFGuu2GIFHC8",
    authDomain: "my-moniiy.firebaseapp.com",
    projectId: "my-moniiy",
    storageBucket: "my-moniiy.appspot.com",
    messagingSenderId: "986207385975",
    appId: "1:986207385975:web:88b99c9ec0c62af0bec972"
};


firebase.initializeApp(firebaseConfig)


const projectFirestore=firebase.firestore()
const projectAuth=firebase.auth()


export {projectFirestore, projectAuth}

