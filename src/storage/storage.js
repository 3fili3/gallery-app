import { app } from "../config";
const storage = app.storage();
//nombreRuta = await respuestaStore.ref.getDownloadURL();
export const storageImages = async (objectImage) => {
    const nameImage = (((objectImage.name).split('.')[0]).split(' ')).join('-');
    const typeImagen = ((objectImage.type).split('/'))[1]
    const routeImage = storage.ref('/images/'+nameImage+'.'+typeImagen);
    return (await routeImage.put(objectImage)).ref.getDownloadURL();
};