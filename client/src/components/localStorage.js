import CryptoJS from "crypto-js";

const secretKey = "qwerty";

export const loadState = () => {
  try {
    const encryptedState = localStorage.getItem("state");
    const bytes = CryptoJS.AES.decrypt(encryptedState, secretKey);
    const decryptedState = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedState === null) {
      return undefined;
    }
    return JSON.parse(decryptedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateString = JSON.stringify(state);
    const encryptedState = CryptoJS.AES.encrypt(
      stateString,
      secretKey
    ).toString();

    // const serializedState = JSON.stringify(state);
    localStorage.setItem("state", encryptedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
