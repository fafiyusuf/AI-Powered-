import bcrypt from "bcryptjs";

export const passwordUtils = {
  hashPassword: async (plain: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(plain, salt);
  },

  checkPassword: async (plain: string, hashed: string) => {
    return await bcrypt.compare(plain, hashed);
  },
};
