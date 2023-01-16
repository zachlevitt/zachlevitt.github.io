import { docToArchieML } from '@newswire/doc-to-archieml';
import { google } from 'googleapis';
import * as fs from 'fs';

function callback() {
    console.log('saved src/doc.json')
}

async function main() {
  // this method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
  // environment variables to establish authentication

  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/documents','https://www.googleapis.com/auth/drive'],
  });

  // console.log(auth)
  // pass in the valid authentication and ID of the document you want to process
  const results = await docToArchieML({ documentId: '1GFXvkgO4XMFIstoXgYHb7eLtNSrV4CsiZ2FMSwJ1LKE', auth });
  var json = JSON.stringify(results);
  fs.writeFile('./src/doc.json', json, 'utf8', callback);
  //console.log(results); // `results` is your ArchieML-produced JavaScript object
}

main().catch(console.error);
