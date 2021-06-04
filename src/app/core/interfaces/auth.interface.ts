export interface AuthInterface {
    loggedIn: boolean;
    accessToken: string;
    encryptedRefreshToken: string;
    expiresAt: number;
}
