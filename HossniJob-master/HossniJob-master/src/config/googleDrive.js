import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

export const getAuthClient = async () => {
  const auth = await authenticate({
    keyfilePath: 'credentials.json',
    scopes: SCOPES,
  });
  return auth;
};

export const uploadToDrive = async (auth, fileName, fileContent) => {
  const drive = google.drive({ version: 'v3', auth });
  
  const fileMetadata = {
    name: fileName,
    mimeType: 'application/vnd.google-apps.spreadsheet',
  };

  const media = {
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    body: fileContent,
  };

  try {
    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });
    console.log('File uploaded:', file.data.id);
    return file.data.id;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}; 