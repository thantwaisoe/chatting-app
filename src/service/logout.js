import {auth, signOut} from '../firebase/config'
import {ref} from 'vue'
const userLogout = async() =>{
    let error = ref(null)
    try {
        await signOut(auth)
        console.log('Log out success')
    } catch (err) {
        error.value = err.code
        console.log(err.code)
    }
}

export {userLogout}