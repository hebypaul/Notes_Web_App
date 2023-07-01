import React from 'react';
import { Client, Account, ID } from 'appwrite';




export const client = new Client()

const ApiURL = import.meta.env.VITE_APPWRITE_ENDPOINT_URL;
const ApiID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

client
  .setEndpoint(ApiURL) // Set your Appwrite endpoint
  .setProject(ApiID) // Set your Appwrite project ID
;


export const AppwriteContext = React.createContext(client);
