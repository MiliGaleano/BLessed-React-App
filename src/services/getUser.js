import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetUser(usermail) {

    const UserWatchlist = []
    const UserWatched = []
    const db = firebase.firestore()

    return db.collection('users').doc(usermail).collection('watched').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const { stars, fav } = doc.data()
            let seriesWatched = {
                id: doc.id,
                stars: stars,
                fav: fav
            }
            UserWatched.push(seriesWatched)
        })
        sessionStorage.setItem('seriesWatched', JSON.stringify(UserWatched))
    }).then(() => {
        db.collection('users').doc(usermail).collection('watchlist').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                UserWatchlist.push(doc.id)
            })
        sessionStorage.setItem('seriesWatchlist', JSON.stringify(UserWatchlist))
        })
    })
    .catch((error) => {
        console.log(error)
    })
}
