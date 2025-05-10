/* import { auth } from '../config/firebase'; 
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
    return signOut(auth);
}; */



import { auth, db } from '../config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Add Firestore imports

export const registerUser = async (email, password, additionalData = {}) => {
    try {
        // 1. Create auth user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // 2. Store additional user data in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            email,
            createdAt: new Date(),
            ...additionalData
        });

        return userCredential;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

// Rest of your existing functions...
export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
    return signOut(auth);
};