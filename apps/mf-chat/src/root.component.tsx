import { type PropsWithChildren } from 'react';
import { Button, ConfigProvider } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './root.component.css';

type RootProps = {
  name: string;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: true }}>
      <div className="mf-chat__root">
        <div className="mf-chat__content">
          <section>{props.name}</section>
          <Button icon={<DownloadOutlined />}></Button>
          <Button>
            <SearchOutlined />
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
}
