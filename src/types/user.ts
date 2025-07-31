export interface UserProfile {
    id: string
    name: string
    email: string
    role: UserRole
    avatar?: string
    preferences: UserPreferences
    lastLogin: string
    createdAt: string
    updatedAt: string
}

export interface UserPreferences {
    theme: 'light' | 'dark' | 'system'
    language: string
    timezone: string
    notifications: NotificationSettings
}

export interface NotificationSettings {
    email: boolean
    push: boolean
    sms: boolean
    marketing: boolean
}

export type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer' 