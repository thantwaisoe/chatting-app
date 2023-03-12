import { ref } from 'vue'
import {auth, onAuthStateChanged} from '../firebase/config'
const getUser = () =>{
    let user = ref(auth.currentUser)
    onAuthStateChanged(auth, (_user) => user.value = _user)
    return {user}
}

export default getUser