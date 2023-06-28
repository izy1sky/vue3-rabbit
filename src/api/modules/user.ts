import request from '@/utils/request'
import type { LoginResponseData } from '../types/user'
enum USER {
    LOGIN_API = '/login'
}

export const reqLogin = (account:string, password:string) => request.post<any, LoginResponseData>(USER.LOGIN_API, {
    account,
    password
})