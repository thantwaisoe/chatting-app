import { ref } from 'vue';
import { db, addDoc, collection } from '../firebase/config';

const useCollection = () => {
   let error = ref(null);

   const addData = async (collectionName, message) => {
      try {
        const res = await addDoc(collection(db, collectionName), message)
        if(res){
            return res
        }else{
            throw new Error('fail to send messages')
        }
      } catch (err) {
        console.log(err.message)
        error.value = 'could not send the message'
      }
   };

   return {
      error,
      addData,
   };
};
export default useCollection
