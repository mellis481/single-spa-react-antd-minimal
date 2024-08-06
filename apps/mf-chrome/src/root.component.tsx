import { type PropsWithChildren } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import "./root.component.css";

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: true }}>
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
    </ConfigProvider>
  );
}
