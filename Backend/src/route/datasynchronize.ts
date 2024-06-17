import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
require("dotenv").config()

export async function authenticate() {
  try{

    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
const authClient = await auth.getClient() as OAuth2Client
return authClient;
}catch(e){
  
  throw new Error("Error during authentication")
}
  }

