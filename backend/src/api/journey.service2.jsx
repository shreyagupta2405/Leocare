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
    addEvent = (newEvent) => {
        console.log(newEvent);
        return addDoc(eventCollectionRef, newEvent);
    };

    updateEvent = (id, updatedEvent) => {
        const eventDoc = doc(db, "journey2", id);
        return updateDoc(eventDoc, updatedEvent);
    };

    deleteEvents = (id) => {
        const eventDoc = doc(db, "journey2", id);
        return deleteDoc(eventDoc);
    };

    getAllEvents = () => {
        return getDocs(eventCollectionRef);
    };

    getEvent = (id) => {
        const eventDoc = doc(db, "journey2", id);
        return getDoc(eventDoc);
    };
}

export default new JourneyDataService();
