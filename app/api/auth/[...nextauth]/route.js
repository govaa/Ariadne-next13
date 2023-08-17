import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser, getUserById, updateLastSigninTime } from "/app/hooks/auth.js";
import bcrypt from "bcrypt";

const env_secret = process.env.NEXTAUTH_SECRET;
const secret =
  env_secret ||
  "6092766a5ece0399baebd007d998d5d2a05f6ac2e5b082192eef4d22d0fdd5a5"; // Make sure to change this if it's in a public repo!

export const authOptions = {
  secret,
  pages: {
    signIn: "/cms-login",
  },
  debug: process.env.NODE_ENV !== "production",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        try {
          const { email, password } = credentials;
          const user = await findUser(email);
          if (!user) throw new Error("User not found");
          const compare_pws = await bcrypt.compare(password, user.password);
          if (!compare_pws) {
            const error = new Error("Invalid password");
            error.statusCode = 401;
            throw error;
          }
          if (user.isClient) {
            const error = new Error("Unauthorized");
            error.statusCode = 401;
            throw error;
          }
          return user;
        } catch (err) {
          console.error(err);
          throw err;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      if (token && session?.user) {
        const selected = { ...token };
        // Add further token manipulation here if needed
        session.user = { ...session.user, ...selected, uid: token?.sub };
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      try {
        if (user) {
          token.role = user.role;
        } else if (token?.sub) {
          const user = await getUserById(token.sub);
          token.role = user.role;
          // Add other properties as needed
        }
        return token;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
  events: {
    async signIn(_message) {},
    async signOut(_message) {},
    async createUser(_message) {},
    async updateUser() {},
    async linkAccount(_message) {},
    async session(obj) {
      try {
        if (process.env.NODE_ENV === "production" && obj?.token?.sub) {
          await updateLastSigninTime(obj.token.sub);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
