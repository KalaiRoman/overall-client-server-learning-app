// create
import bcrypt from "bcrypt";
const createPassword = async (params) => {
  try {
    const slat = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(params, slat);
    return hashed;
  } catch (error) {
    console.log("Password Bcrypt Error");
  }
};
// compare

const comparePassword = async (oldparams, newParams) => {

  try {
    return await bcrypt.compare(oldparams, newParams);
  } catch (error) {
    console.log("Password Bcrypt Error");
  }
};

export { createPassword, comparePassword };
