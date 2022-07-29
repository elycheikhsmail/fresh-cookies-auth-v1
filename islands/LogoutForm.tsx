/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  return (
    <form method="POST">
      <input type="submit" value="logout" />
    </form>
  );
}
