import { type PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: true }}>
      <div className="mf-chat__root">
        <div className="mf-chat__content">
          <section>{props.name} is mounted!</section>
          {props.children}
        </div>
      </div>
    </ConfigProvider>
  );
}
