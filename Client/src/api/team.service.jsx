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

const eventCollectionRef = collection(db, "team");
class TeamDataService {
    addEvent = (newEvent) => {
        console.log(newEvent);
        return addDoc(eventCollectionRef, newEvent);
    };

    updateEvent = (id, updatedEvent) => {
        const eventDoc = doc(db, "team", id);
        return updateDoc(eventDoc, updatedEvent);
    };

    deleteEvents = (id) => {
        const eventDoc = doc(db, "team", id);
        return deleteDoc(eventDoc);
    };

    getAllEvents = () => {
        return getDocs(eventCollectionRef);
    };

    getEvent = (id) => {
        const eventDoc = doc(db, "team", id);
        return getDoc(eventDoc);
    };
}

export default new TeamDataService();
