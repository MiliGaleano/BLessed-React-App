import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetFavList(usermail){
const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
const favList = []
const db = firebase.firestore()

return db.collection("users").doc(usermail).collection('watched').where('fav',"==","yes").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            favList.push(doc.id);
        })
    })
    .then(function() {
        let printfavList = seriesDB.filter(function(x) {
            return favList.includes(x.id); 
        })
        return printfavList
        }
    )
    .then(function(printfavList) {
        sessionStorage.setItem('searchFavList', JSON.stringify(printfavList))
        return printfavList
    }
    )
    .catch(function(error) {
    console.error(error);
    })
}