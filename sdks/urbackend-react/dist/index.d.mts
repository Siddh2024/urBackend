import React from 'react';
import * as _urbackend_sdk from '@urbackend/sdk';
import { UrBackendClient, AuthModule, DatabaseModule, StorageModule, AuthUser, LoginPayload, SignUpPayload, VerifyEmailPayload, ChangePasswordPayload, RequestPasswordResetPayload, ResetPasswordPayload } from '@urbackend/sdk';
export * from '@urbackend/sdk';

interface UrContextValue {
    client: UrBackendClient | null;
    auth: AuthModule | null;
    db: DatabaseModule | null;
    storage: StorageModule | null;
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
    isInitializing: boolean;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}
interface UrProviderProps {
    apiKey: string;
    baseUrl?: string;
    children: React.ReactNode;
}
declare const UrProvider: React.FC<UrProviderProps>;
declare const useUrContext: () => UrContextValue;

declare const useAuth: () => {
    user: _urbackend_sdk.AuthUser | null;
    isInitializing: boolean;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    login: (payload: LoginPayload) => Promise<void>;
    signUp: (payload: SignUpPayload) => Promise<_urbackend_sdk.AuthUser>;
    logout: () => Promise<void>;
    socialLogin: (provider: "google" | "github") => void;
    verifyEmail: (payload: VerifyEmailPayload) => Promise<{
        message: string;
    }>;
    changePassword: (payload: ChangePasswordPayload) => Promise<{
        message: string;
    }>;
    requestPasswordReset: (payload: RequestPasswordResetPayload) => Promise<{
        message: string;
    }>;
    resetPassword: (payload: ResetPasswordPayload) => Promise<{
        message: string;
    }>;
    clearError: () => void;
    authApi: _urbackend_sdk.AuthModule;
};
declare const useUser: () => {
    user: _urbackend_sdk.AuthUser | null;
    isInitializing: boolean;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
};
declare const useDb: () => _urbackend_sdk.DatabaseModule;
declare const useStorage: () => _urbackend_sdk.StorageModule;

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
    fallback?: React.ReactNode;
    onRedirect?: () => void;
}
/**
 * A wrapper component that requires the user to be authenticated.
 * If the user is not authenticated after initialization, they will be redirected,
 * or the fallback will be rendered (or nothing if fallback is not provided and no window redirect occurs).
 */
declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
interface GuestRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
    fallback?: React.ReactNode;
    onRedirect?: () => void;
}
/**
 * A wrapper component that requires the user to NOT be authenticated (e.g. for Login pages).
 * If the user IS authenticated, they will be redirected to the specified route.
 */
declare const GuestRoute: React.FC<GuestRouteProps>;

interface UrAuthProps {
    providers?: ('google' | 'github')[];
    theme?: 'light' | 'dark';
    onSuccess?: () => void;
}
declare const UrAuth: React.FC<UrAuthProps>;

export { GuestRoute, type GuestRouteProps, ProtectedRoute, type ProtectedRouteProps, UrAuth, type UrAuthProps, UrProvider, type UrProviderProps, useAuth, useDb, useStorage, useUrContext, useUser };
