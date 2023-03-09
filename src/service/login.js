import { ref } from 'vue';
import { signInWithEmailAndPassword, auth } from '../firebase/config';

let error = ref(null);
const login = async (email, password) => {
   try {
      let res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
         return res.user
      } else {
         throw new Error('cannot login');
      }
   } catch (err) {
      error.value = err.code;
   
   }
};

export { login, error };
