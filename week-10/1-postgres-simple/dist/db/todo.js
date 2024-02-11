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
exports.getTodos = exports.updateTodo = exports.createTodo = void 0;
const __1 = require("..");
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;
            const res = yield __1.client.query(query, [userId, title, description]);
            return res.rows[0];
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.createTodo = createTodo;
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
function updateTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `UPDATE todos
    set done = true
    where id = $1
    returning title, description, done, id`;
            const res = yield __1.client.query(query, [todoId]);
            return res.rows[0];
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.updateTodo = updateTodo;
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const getQuery = `select * from todos 
          where user_id=$1`;
        const id = [userId];
        const result = yield __1.client.query(getQuery, id);
        return [...result.rows];
    });
}
exports.getTodos = getTodos;
