import { type PropsWithChildren } from 'react';
import { Button, ConfigProvider, Checkbox } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

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
          <Button icon={<DownloadOutlined />}></Button>
          <Button>
            <SearchOutlined />
          </Button>
          <Checkbox.Group options={['Apple', 'Pear', 'Orange']} onChange={() => {}} />
        </div>
      </div>
    </ConfigProvider>
  );
}
