import NextAuth, { User } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import providers from 'next-auth/providers/credentials'


const authOptions = {

    
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        providers({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: "email", placeholder: "jsmith@gmail.com" },
              },

              async authorize(credentials) {

                const user = {id: '1',
                        
                        email: credentials?.email,
                                
                }
                return user
              }
           
        }),

    ],
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }