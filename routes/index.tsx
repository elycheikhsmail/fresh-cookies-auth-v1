/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import {
  Cookie,
  deleteCookie,
  getCookies,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";
//
import Nav from "../islands/Nav.tsx";
import LoginForm from "../islands/LoginForm.tsx";
import { users } from "./db.ts";

export const handler: Handlers<Response | null> = {
  async GET(_req, ctx) {
    const resp = await ctx.render(null);
    return resp;
  },
  async POST(req, ctx) {
    // you must check user token db too
    const data = await req.formData();
    const username = String(data.get("username"));
    const resp = await ctx.render(null);

    if (username && users.includes(username)) {
      console.log(`welocome : ${username} `);
      // set username cookies cookie
      setCookie(resp.headers, { name: "username", value: username });
    } else {
      // remove
      console.log("username empty or not in our database");
      deleteCookie(resp.headers, "username");
    }
    return resp;
  },
};

export default function Login(_data: PageProps) {
  return (
    <div>
      <Nav />
      <div>
        <h1>login</h1>
      </div>
      <form method="POST">
      <label htmlFor="">username</label> <br />
      <input type="text" name="username" /> <br />
      <i>
        username must be of the following names :
        <br />
        mohamed, ely, sidi, james
      </i>
      <br />
      <input type="submit" value="login" />
    </form>
    </div>
  );
}
