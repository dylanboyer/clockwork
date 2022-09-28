import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const registerWithEmailAndPassword = async (email, password) => {
    let emailId = email.toLowerCase()
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    try {
        await setDoc(doc(db, 'users', emailId), {
            uid: user.uid,
            authProvider: 'local',
            email: emailId,
        })
        console.log('user information stored.')
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

export const logout = () => {
    signOut(auth)
        .then(() => {
            console.log("user signed out.")
        })
        .catch((error) => alert(error.message))
}