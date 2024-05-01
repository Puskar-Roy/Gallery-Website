import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connect from "@/lib/db";
import UserModel from "@/models/userSchema";

const handeler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(params) {
      const { user, account } = params;
      if (account?.provider == "google") {
        await connect();
        try {
          const existingUser = await UserModel.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new UserModel({
              email: user.email,
              name: user.name,
              image: user.image,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
      return false;
    },
  },
});

export { handeler as GET, handeler as POST };
