import { client } from "..";
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
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const query = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;
    const res = await client.query(query, [userId, title, description]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}
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
export async function updateTodo(todoId: number) {
  try {
    const query = `UPDATE todos
    set done = true
    where id = $1
    returning title, description, done, id`;
    const res = await client.query(query, [todoId]);
    return res.rows[0];
  } catch (e) {
    console.log(e);
  }
}

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
export async function getTodos(userId: number) {
  try {
    const getQuery = `select * from todos 
          where user_id=$1`;
    const id = [userId];
    const result = await client.query(getQuery, id);
    return [...result.rows];
  } catch (err) {
    console.error(err);
  }
}
