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

const eventCollectionRef = collection(db, "empower");
class EmpowerDataService {
    addEmpower = (newEvent) => {
        console.log(newEvent);
        return addDoc(eventCollectionRef, newEvent);
    };

    updateEmpower = (id, updatedEvent) => {
        const eventDoc = doc(db, "empower", id);
        return updateDoc(eventDoc, updatedEvent);
    };

    deleteEmpower = (id) => {
        const eventDoc = doc(db, "empower", id);
        return deleteDoc(eventDoc);
    };

    getAllEmpower = () => {
        return getDocs(eventCollectionRef);
    };

    getEmpower = (id) => {
        const eventDoc = doc(db, "empower", id);
        return getDoc(eventDoc);
    };
}

export default new EmpowerDataService();
