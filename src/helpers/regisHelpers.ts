const shouldRegisButtonDisable = (email: string, password: string): boolean => {
  if (email && password && password.length >= 6) {
    return false;
  }
  return true;
};
const regisFirebase = (
  email: string,
  password: string,
  firebaseConfig: any,
  setInst: any
) => {
  return firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential: any) => {
      const data = {
        uId: userCredential.user.uid,
        email: userCredential.user.email,
      };
      setInst(data);
    })
    .catch((error: any) => {
      console.log(error.message);
      return error.message;
    });
  // try {
  //   const result = await firebaseConfig
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password);
  //   if (result) {
  //     // setInst(result.user.uid, result.user.email);
  //     const data = { uId: result.user.uid, email: result.user.email };
  //     setInst(data);
  //   } else {
  //     throw new Error();
  //   }
  // } catch (error: any) {
  //   console.log(error.message);
  // }

  // if (result) {

  //   setInst(result.user.uid, result.user.email);
  // } else {
  //   console.log("555");
  // }
};

export { shouldRegisButtonDisable, regisFirebase };
