export const checkValidData = (email, password, userName, isSignInForm) => {
  if (userName && !isSignInForm) {
    const isUserNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(userName);
    if(!isUserNameValid) return "User Name is not valid."
  }
  const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email Address is not valid.";
  if (!isPasswordValid) return "Password is not valid.";
  return null;
};
