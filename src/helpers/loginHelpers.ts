const shouldButtonDisable = (email: string, password: string): boolean => {
  if (email && password && password.length >= 6) {
    return false;
  }
  return true;
};
const loginAuth = (email: string, password: string, firebaseConfig: any) => {
  return firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential: object) => {
      return true;
    })
    .catch((error: Error) => {
      console.log(error.message);
      return false;
    });
};
export { shouldButtonDisable, loginAuth };
