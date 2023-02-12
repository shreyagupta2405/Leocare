import {db} from "../firebaseConfig.js";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const eventCollectionRef = collection(db, "journey2");
class JourneyDataService {
    addText = (newEvent) => {
        console.log(newEvent);
        return addDoc(eventCollectionRef, newEvent);
    };

    updateText = (id, updatedEvent) => {
        const eventDoc = doc(db, "journey2", id);
        return updateDoc(eventDoc, updatedEvent);
    };

    deleteText = (id) => {
        const eventDoc = doc(db, "journey2", id);
        return deleteDoc(eventDoc);
    };

    getAllText = () => {
        return getDocs(eventCollectionRef);
    };

    getText = (id) => {
        const eventDoc = doc(db, "journey2", id);
        return getDoc(eventDoc);
    };
}

export default new JourneyDataService();
