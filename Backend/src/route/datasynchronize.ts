import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
require("dotenv").config()

export async function authenticate() {
  try{

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
const authClient = await auth.getClient() as OAuth2Client
return authClient;
}catch(e){
  
  throw new Error("Error during authentication")
}
  }

