import { auth, db } from './firebase'
import {
    doc,
    addDoc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    collection,
    query,
    orderBy,
} from 'firebase/firestore'
import { parsePath } from 'react-router-dom'

export const addTask = async (taskName, completed, priority) => {
    try {
        // NOTE TO SELF: EACH PARAMETER IS A STEP DOWN THE FILE HIERARCHY CHAIN
        await addDoc(collection(db, 'users', auth.currentUser.email, 'tasks'), {
            taskName: taskName,
            completed: completed,
            priority: priority,
        })
    } catch (e) {
        console.log(e)
    }
}

export const updateTaskName = async (taskName, taskId) => {
    try {
        await updateDoc(doc(db, 'users', auth.currentUser.email, 'tasks', taskId), {
            taskName: taskName,
        })
    } catch (e) {
        console.log(e)
    }
}

export const updateTaskStatus = async (taskCompleted, taskId) => {
    try {
        await updateDoc(doc(db, 'users', auth.currentUser.email, 'tasks', taskId), {
            completed: taskCompleted,
        })
    } catch (e) {
        console.log(e)
    }
}

export const updateTaskPriority = async (taskPriority, taskId) => {
    try {
        await updateDoc(doc(db, 'users', auth.currentUser.email, 'tasks', taskId), {
            priority: taskPriority,
        })
    } catch (e) {
        console.log(e)
    }
}

export const getTasks = async () => {
    // Ref == Reference
    const tasksRef = collection(db, 'users', auth.currentUser.email, 'tasks')

    // q == query in firebase usually
    const q = query(tasksRef, orderBy('priority'))
    // Snap == Snapshot of data
    const tasksSnap = await getDocs(q)

    // Key value store
    const tasks = new Map()

    // forEach applies the doc arrow function to every value in tasksSnap
    tasksSnap.forEach((doc) => {
        // doc.id is the key, doc.data is the value associated with the key
        tasks.set(doc.id, doc.data())
    })

    // This is what actually fetches the data
    return tasks
}

// food for thought:
/*
Think about reordering priorities.
Need to update everything after the one deleted to keep priorities consistent.
*/
export const deleteTask = async (taskId) => {
    try {
        await deleteDoc(doc(db, 'users', auth.currentUser.email, 'tasks', taskId))
    } catch (e) {
        console.log(e)
    }
}
