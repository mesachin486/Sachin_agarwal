export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  createdTime?: string;
  modifiedTime?: string;
  webViewLink?: string;
  webContentLink?: string;
  iconLink?: string;
  thumbnailLink?: string;
  owners?: Array<{ displayName: string; emailAddress: string; photoLink?: string }>;
}

/**
 * Searches or lists files from Google Drive
 */
export async function listGoogleDriveFiles(
  accessToken: string,
  options?: {
    query?: string;
    folderId?: string;
    pageSize?: number;
  }
): Promise<{ files: DriveFileItem[]; nextPageToken?: string }> {
  const pageSize = options?.pageSize || 20;
  const queries: string[] = ['trashed = false'];

  if (options?.folderId) {
    queries.push(`'${options.folderId}' in parents`);
  }

  if (options?.query && options.query.trim()) {
    const q = options.query.trim().replace(/'/g, "\\'");
    queries.push(`(name contains '${q}' or fullText contains '${q}')`);
  }

  const qString = queries.join(' and ');
  const fields =
    'nextPageToken, files(id, name, mimeType, size, createdTime, modifiedTime, webViewLink, webContentLink, iconLink, thumbnailLink, owners)';

  const url = new URL('https://www.googleapis.com/drive/v3/files');
  url.searchParams.set('q', qString);
  url.searchParams.set('pageSize', pageSize.toString());
  url.searchParams.set('fields', fields);
  url.searchParams.set('orderBy', 'folder,modifiedTime desc');

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Google Drive API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Searches for a folder specifically named "Certificates" or "Certificate"
 */
export async function findCertificatesFolder(accessToken: string): Promise<DriveFileItem[]> {
  const qString =
    "mimeType = 'application/vnd.google-apps.folder' and trashed = false and (name contains 'Certificate' or name contains 'Certificates' or name contains 'Credentials' or name contains 'Awards')";
  const fields = 'files(id, name, mimeType, webViewLink, createdTime)';

  const url = new URL('https://www.googleapis.com/drive/v3/files');
  url.searchParams.set('q', qString);
  url.searchParams.set('fields', fields);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Failed to find folder: ${response.status}`);
  }

  const data = await response.json();
  return data.files || [];
}
