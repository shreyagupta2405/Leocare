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

const eventCollectionRef = collection(db, "volunteer");
class VolunteerDataService {
    addVolunteer = (newVolunteer) => {
        console.log(newVolunteer);
        return addDoc(eventCollectionRef, newVolunteer);
    };

    updateVolunteer = (id, updatedVolunteer) => {
        const eventDoc = doc(db, "volunteer", id);
        return updateDoc(eventDoc, updatedVolunteer);
    };

    deleteVolunteer = (id) => {
        const eventDoc = doc(db, "volunteer", id);
        return deleteDoc(eventDoc);
    };

    getAllVolunteer = () => {
        return getDocs(eventCollectionRef);
    };

    getVolunteer = (id) => {
        const VolunteerDoc = doc(db, "volunteer", id);
        return getDoc(VolunteerDoc);
    };
}

export default new VolunteerDataService();
