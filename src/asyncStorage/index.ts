import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTokenInAsyncStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (e) {
    console.log(e);
  }
};

export const removeTokenFromAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (e) {
    console.log();
  }
};

export const getTokenFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("@token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
