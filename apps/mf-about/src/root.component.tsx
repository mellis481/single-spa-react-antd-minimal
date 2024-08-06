import { type PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: true }}>
      <div className="mf-about__root">
        <div className="mf-about__content">
          <section>{props.name}</section>
          {props.children}
        </div>
      </div>
    </ConfigProvider>
  );
}
