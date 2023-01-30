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

const eventCollectionRef = collection(db, "edu");
class EduHomeDataService {
    addEdu = (newEdu) => {
        console.log(newEdu);
        return addDoc(eventCollectionRef, newEdu);
    };

    updateEdu = (id, updatedEdu) => {
        const eventDoc = doc(db, "edu", id);
        return updateDoc(eventDoc, updatedEdu);
    };

    deleteEdu = (id) => {
        const eventDoc = doc(db, "edu", id);
        return deleteDoc(eventDoc);
    };

    getAllEdu = () => {
        return getDocs(eventCollectionRef);
    };

    getEdu = (id) => {
        const eventDoc = doc(db, "edu", id);
        return getDoc(eventDoc);
    };
}

export default new EduHomeDataService();
