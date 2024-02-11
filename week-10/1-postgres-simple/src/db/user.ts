import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    // await client.connect();
    const query =
      "INSERT INTO USERS (username, password, name) VALUES ($1, $2, $3)";
    const res = await client.query(query, [username, password, name]);
    return res;
    // console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    // client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    // await client.connect();
    const query = "SELECT * FROM users where id = $1";
    const res = await client.query(query, [userId]);
    if (res.rows.length > 0) {
      return res.rows[0];
    }
  } catch (e) {
    console.log(e);
  } finally {
    // client.end();
  }
}
