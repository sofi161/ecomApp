import { getAuth } from "@react-native-firebase/auth"
import { getFirestore, getDoc, updateDoc, setDoc, serverTimestamp } from "@react-native-firebase/firestore";

export const addToCart = async ({users.uid, productId}) => {
    const user = getAuth().currentUser;

    if(!user){
        console.log('user not logged in')
        return;
    }

    const cartRef = getFirestore().collection('users', users.uid,'cart', productId);
    const snap = await getDoc(cartRef);

    if(snap.exists()){
        await updateDoc(cartRef, {
            quantity: snap.data().quantity + 1,
        })
    } else{
        await setDoc(cartRef, {
            quantity: 1,
            addedAt: serverTimestamp(),
        })
    }
}