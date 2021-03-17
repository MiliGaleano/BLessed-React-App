import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetWatchedList(usermail){
const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
const watchedList = []
const db = firebase.firestore()

return db.collection("users").doc(usermail).collection('watched').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        watchedList.push(doc.id);
        })
    })
    .then(function() {
        let printWatchedList = seriesDB.filter(function(x) {
            return watchedList.includes(x.id); 
        })
        return printWatchedList
        }
    )
    .then(function(printWatchedList) {
        sessionStorage.setItem('searchWatchedList', JSON.stringify(printWatchedList))
        return printWatchedList
    }
    )
    .catch(function(error) {
    console.error(error);
    })
}