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

const eventCollectionRef = collection(db, "skill-home");
class SkillHomeDataService {
    addSkill = (newSkill) => {
        console.log(newSkill);
        return addDoc(eventCollectionRef, newSkill);
    };

    updateSkill = (id, updatedSkill) => {
        const eventDoc = doc(db, "skill-home", id);
        return updateDoc(eventDoc, updatedSkill);
    };

    deleteSkill = (id) => {
        const eventDoc = doc(db, "skill-home", id);
        return deleteDoc(eventDoc);
    };

    getAllSkill = () => {
        return getDocs(eventCollectionRef);
    };

    getSkill = (id) => {
        const eventDoc = doc(db, "skill-home", id);
        return getDoc(eventDoc);
    };
}

export default new SkillHomeDataService();
