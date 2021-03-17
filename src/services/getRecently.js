import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetRecently() {
    const RecentlyAdded = []
    const db = firebase.firestore()
    return db.collection("listOfBLs").orderBy("timestamp", "desc").limit(10).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            RecentlyAdded.push(doc.id)
        })
        sessionStorage.setItem('RecentlyAdded', JSON.stringify(RecentlyAdded))
        return false
    })
}