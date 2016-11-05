/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import * as types from './mutation-types'
import authApi from '../api/auth'

export const userLogin = ({commit}, {phone, password}) => {
    return new Promise((resolve, reject) => {
        authApi.login(phone, password,
            token => {
                console.log(token)
                if (token) {
                    commit(types.USER_LOGIN_SUCCESS, {phone, token})
                    resolve()
                }
            },
            error => {
                console.log(error)
                reject(error)
            }
        );
    })
}