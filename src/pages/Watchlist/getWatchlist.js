import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetWatchlist(usermail){
const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
const watchlist = []
const db = firebase.firestore()

return db.collection("users").doc(usermail).collection('watchlist').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        watchlist.push(doc.id);
        })
    })
    .then(function() {
        let printWatchlist = seriesDB.filter(function(x) {
            return watchlist.includes(x.id); 
        })
        return printWatchlist
        }
    )
    .then(function(printWatchlist) {
        sessionStorage.setItem('searchWatchlist', JSON.stringify(printWatchlist))
        return printWatchlist
    }
    )
    .catch(function(error) {
    console.error(error);
    })
}