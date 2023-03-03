import { ref } from 'vue';
import {auth,createUserWithEmailAndPassword,updateProfile} from '../firebase/config'

let error = ref(null)
const createAccount = async(email, password, displayName) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email, password)
        if(!res) throw new Error('Could not create user')
        await updateProfile(auth.currentUser,{displayName})
        return res
      } catch (err) {
        error.value = err.message 
      }
};

export {
createAccount, error
}