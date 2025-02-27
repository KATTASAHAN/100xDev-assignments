"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const __1 = require("..");
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function createUser(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await client.connect();
            const query = "INSERT INTO USERS (username, password, name) VALUES ($1, $2, $3)";
            const res = yield __1.client.query(query, [username, password, name]);
            return res;
            // console.log(res);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            // client.end();
        }
    });
}
exports.createUser = createUser;
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await client.connect();
            const query = "SELECT * FROM users where id = $1";
            const res = yield __1.client.query(query, [userId]);
            if (res.rows.length > 0) {
                return res.rows[0];
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            // client.end();
        }
    });
}
exports.getUser = getUser;
