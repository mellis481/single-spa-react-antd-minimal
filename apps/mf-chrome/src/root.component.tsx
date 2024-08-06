import { type PropsWithChildren } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <BrowserRouter>
      <div id="mf-chrome" tabIndex={-1}>
        <header>
          <Link to="/">Acme</Link>
          <Link to="/about">About</Link>
        </header>
        <section>{props.name} is mounted!</section>
        {props.children}
      </div>
    </BrowserRouter>
  );
}
