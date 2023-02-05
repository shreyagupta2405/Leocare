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

const eventCollectionRef = collection(db, "care");
class ElderDataService {
    addElder = (newEvent) => {
        console.log(newEvent);
        return addDoc(eventCollectionRef, newEvent);
    };

    updateElder = (id, updatedEvent) => {
        const eventDoc = doc(db, "care", id);
        return updateDoc(eventDoc, updatedEvent);
    };

    deleteElder = (id) => {
        const eventDoc = doc(db, "care", id);
        return deleteDoc(eventDoc);
    };

    getAllElders = () => {
        return getDocs(eventCollectionRef);
    };

    getElder = (id) => {
        const eventDoc = doc(db, "care", id);
        return getDoc(eventDoc);
    };
}

export default new ElderDataService();
