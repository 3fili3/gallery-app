import { db } from "../db/db";
import store from "../store/store";
export const modelGallery = db.collection('gallery');
const collectionGalary = store.state.collectionGalary;
modelGallery.onSnapshot(async (model) => {
    model.docs.forEach(collection => {
        const column = collection.data();
        const keyColum = collection.id;
        if(collectionGalary.get(keyColum) === undefined) {
            collectionGalary.set(keyColum, column)
            const gallary = {
                key: collection.id,
                data: collection.data()
            }
            store.state.publications.unshift(gallary);
        }     
    })
})