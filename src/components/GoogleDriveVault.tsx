import React, { useState, useEffect } from 'react';
import {
  FolderOpen,
  Search,
  ExternalLink,
  Download,
  FileText,
  Image as ImageIcon,
  CheckCircle,
  X,
  LogOut,
  RefreshCw,
  Eye,
  Lock,
  Sparkles,
} from 'lucide-react';
import { CERTIFICATES, CertificateDoc } from '../data/portfolioData';
import { signInWithGoogle, logOutGoogle, initAuth, getAccessToken } from '../services/auth';
import { listGoogleDriveFiles, DriveFileItem } from '../services/googleDrive';
import { User } from 'firebase/auth';

export const GoogleDriveVault: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [driveFiles, setDriveFiles] = useState<DriveFileItem[]>([]);
  const [isSearchingDrive, setIsSearchingDrive] = useState(false);
  const [driveSearchQuery, setDriveSearchQuery] = useState('');
  const [driveError, setDriveError] = useState<string | null>(null);

  // Local certificate category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Modal viewer state
  const [activeDoc, setActiveDoc] = useState<CertificateDoc | null>(null);

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        if (token) {
          setAccessToken(token);
          loadDriveFiles(token);
        }
      },
      () => {
        setUser(null);
        setAccessToken(null);
        setDriveFiles([]);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    setDriveError(null);
    try {
      const result = await signInWithGoogle();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        await loadDriveFiles(result.accessToken);
      }
    } catch (err: any) {
      console.error('Google Sign In failed:', err);
      setDriveError(
        err.message || 'Google Sign-in was cancelled or encountered an error. Please try again.'
      );
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logOutGoogle();
    setUser(null);
    setAccessToken(null);
    setDriveFiles([]);
  };

  const loadDriveFiles = async (token: string, query?: string) => {
    setIsSearchingDrive(true);
    setDriveError(null);
    try {
      const res = await listGoogleDriveFiles(token, {
        query: query || 'Certificate',
        pageSize: 15,
      });
      setDriveFiles(res.files || []);
    } catch (err: any) {
      console.error('Drive query error:', err);
      setDriveError(err.message || 'Could not fetch files from Google Drive.');
    } finally {
      setIsSearchingDrive(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessToken) {
      loadDriveFiles(accessToken, driveSearchQuery);
    }
  };

  const filteredLocalCerts = CERTIFICATES.filter((cert) => {
    if (selectedCategory === 'all') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="credentials" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              <span>Verified Documents & Credentials</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Google Drive API v3</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-display">
              Credentials & Google Drive Vault
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Inspect verified citations, academic transcripts, olympiad trophies, and leadership
              appointments—or connect Google Drive with read-only permission to explore files live.
            </p>
          </div>

          {/* Drive Auth State / Status */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-[150px]">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title="Sign out of Google Drive"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* Google Sign In Button formatted to standard design */
              <button
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{isSigningIn ? 'Connecting...' : 'Connect Google Drive'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Google Drive Search & List (When Authenticated) */}
        {user && accessToken && (
          <div className="mt-8 p-6 bg-blue-50/50 dark:bg-slate-850/80 rounded-2xl border border-blue-200/80 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Live Google Drive Explorer
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  ({driveFiles.length} files found)
                </span>
              </div>

              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search your Drive..."
                    value={driveSearchQuery}
                    onChange={(e) => setDriveSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearchingDrive}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  {isSearchingDrive ? 'Searching...' : 'Search'}
                </button>
              </form>
            </div>

            {driveError && (
              <p className="text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900">
                {driveError}
              </p>
            )}

            {/* Drive Files Grid */}
            {isSearchingDrive ? (
              <div className="py-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-blue-500" />
                <span>Reading files from Google Drive...</span>
              </div>
            ) : driveFiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {driveFiles.map((file) => (
                  <div
                    key={file.id}
                    className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-2xs hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                          {file.name}
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          {file.size ? `${(Number(file.size) / 1024).toFixed(0)} KB` : 'Google Doc'}
                        </p>
                      </div>
                    </div>

                    {file.webViewLink && (
                      <a
                        href={file.webViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                        title="Open file in Google Drive"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-500">
                No matching files found in your Google Drive. Try searching for specific filenames.
              </div>
            )}
          </div>
        )}

        {/* Informational Banner when not connected */}
        {!user && (
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Google Drive API Connected:
                </span>{' '}
                Recruiters and Sachin can click <strong className="font-medium text-slate-800 dark:text-slate-200">Connect Google Drive</strong> above to query live drive folders, or browse the 12 pre-loaded official credentials and attachments below.
              </div>
            </div>
          </div>
        )}

        {/* Pre-Loaded Verified Credentials Archive */}
        <div className="mt-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-850 rounded-xl mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Documents ({CERTIFICATES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('competition')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'competition'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Olympiads & Case Competitions
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'academic'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Academic & Transcripts
            </button>
            <button
              onClick={() => setSelectedCategory('leadership')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'leadership'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Leadership & Gymkhana
            </button>
            <button
              onClick={() => setSelectedCategory('internship')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'internship'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Internships & Research
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocalCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
              >
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.category}
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    {cert.fileType.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveDoc(cert)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Proof</span>
                    </button>
                    <a
                      href={cert.filePath}
                      download
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Download file directly"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Proof Modal Viewer */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setActiveDoc(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
                  Verified Proof Citation
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {activeDoc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {activeDoc.issuer} · {activeDoc.date}
                </p>
              </div>
              <button
                onClick={() => setActiveDoc(null)}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Viewer Content */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2 overflow-auto flex items-center justify-center min-h-[480px]">
              {activeDoc.fileType === 'pdf' ? (
                <iframe
                  src={`${activeDoc.filePath}#toolbar=0`}
                  title={activeDoc.title}
                  className="w-full h-full min-h-[500px] rounded-lg border border-slate-300 dark:border-slate-800 bg-white"
                />
              ) : (
                <img
                  src={activeDoc.filePath}
                  alt={activeDoc.title}
                  className="max-h-[520px] max-w-full object-contain rounded-lg shadow-md"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">
                {activeDoc.filePath}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={activeDoc.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Screen</span>
                </a>
                <a
                  href={activeDoc.filePath}
                  download
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
