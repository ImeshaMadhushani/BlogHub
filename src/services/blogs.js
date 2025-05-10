import { db } from '../config/firebase';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy
} from 'firebase/firestore';

const blogsCollectionRef = collection(db, 'blogs');

export const createBlog = (blogData) => {
    return addDoc(blogsCollectionRef, {
        ...blogData,
        createdAt: new Date()
    });
};

export const getAllBlogs = async () => {
    const q = query(blogsCollectionRef, orderBy('createdAt', 'desc'));
    const data = await getDocs(q);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserBlogs = async (userId) => {
    const q = query(blogsCollectionRef, where('authorId', '==', userId), orderBy('createdAt', 'desc'));
    const data = await getDocs(q);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getBlogById = async (id) => {
    const docRef = doc(db, 'blogs', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const updateBlog = (id, updatedBlog) => {
    const blogDoc = doc(db, 'blogs', id);
    return updateDoc(blogDoc, updatedBlog);
};

export const deleteBlog = (id) => {
    const blogDoc = doc(db, 'blogs', id);
    return deleteDoc(blogDoc);
};