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
 
export const handler: Handlers<boolean> = {
  async GET(req, ctx) {
    let resp = await ctx.render(true);
    const cookies = getCookies(req.headers);
     if("username" in cookies && users.includes(cookies.username) ){
      // can access protect ressources
     }else{
      // it can't access protect ressouces
      resp = await ctx.render(false);
     }
    return resp;
  },
 
};

export default function Login(data: PageProps) {
  if(data.data){
    return(
      <div>
      <Nav />
      <div>
        <h1>
          congratulation
        </h1>
        now you can read protected ressouces
      </div>
      
    </div>
    )
  }
  return (
    <div>
      <Nav />
      <div>
        <h1> you not auth</h1>
      </div>
      
    </div>
  );
}
