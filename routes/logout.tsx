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
import Logout from "../islands/LogoutForm.tsx"; 

export const handler: Handlers<Response|null> = {
  async GET(_req, ctx) {
    const resp = await ctx.render(null);
    return resp;
  },
  async POST(_req, ctx) {
    // you must remove user token from db too
    const resp = await ctx.render(null);
    deleteCookie(resp.headers, "username");
    return resp;
  },
};

export default function Login(_data: PageProps) {
  return (
    <div>
      <Nav />
      <div>
        <h1>logout</h1>
      </div>
      <Logout />
    </div>
  );
}
