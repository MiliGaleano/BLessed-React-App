import firebase from 'firebase/app'
import firebaseConfig from '../config/config'

export default function GetPoster(id) {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);}
    let storage = firebase.storage();
    let gsReference = storage.refFromURL('gs://blessed-e4d26.appspot.com/'+id.id+'.jpg');
    return gsReference.getDownloadURL()
    .then(url => {
        return url
    }).catch(function(error) {
    console.log("Error: ", error);
    })
    }
