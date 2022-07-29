/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">login</a>
        </li>

        <li>
          <a href="/logout">logout</a>
        </li>

        <li>
          <a href="/protected">protected</a>
        </li>
      </ul>
    </nav>
  );
}
