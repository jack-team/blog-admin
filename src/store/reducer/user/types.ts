export type Role = 'user' | 'admin' | 'root';

export interface PhotoItem {
    id: string;
    url: string;
    status: number;
    isAvatar: boolean
}

export interface UserInfo {
    about: string;
    auth: string[];
    createdAt: string;
    loginAt: string;
    phone: string;
    photos: PhotoItem [];
    role: Role;
    status: number;
    updatedAt: string;
    userId: string;
    userName: string;
    __v: number;
    _id: string;
}

export interface InitState {
    userInfo: UserInfo | null;
}