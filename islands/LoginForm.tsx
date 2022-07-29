/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  return (
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
  );
}
