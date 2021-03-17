import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetSeries() {
    const SeriesDB = []
    const db = firebase.firestore()
    return db.collection("listOfBLs").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const { name, age, country, description, full, link, stars, timestamp, tocry, year, favs, category } = doc.data()
            let serie = {
                id: doc.id,
                nameSerie: name,
                age: age,
                country: country,
                description: description,
                full: full,
                link: link,
                stars: stars,
                timestamp: timestamp,
                tocry: tocry,
                year: year,
                favs: favs,
                category: category
            }
            SeriesDB.push(serie)
        })
        sessionStorage.setItem('seriesDB', JSON.stringify(SeriesDB))
    })
}
