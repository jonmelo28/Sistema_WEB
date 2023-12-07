import { CredentialsProvider } from "next-auth/providers";

export const nextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [credentialsProvider({
        async authorize(credentials, request){
            const { email, password } = credentials;
        },
    })],
    
};