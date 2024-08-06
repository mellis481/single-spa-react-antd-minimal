import { useEffect, useState, type PropsWithChildren } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';
import './root.component.css';

type RootProps = {
  name: string;
  registerChatMfe: () => void;
};

export default function Root(props: PropsWithChildren<RootProps>) {
  const [hasRegisteredChat, setHasRegisteredChat] = useState(false);

  useEffect(() => {
    if (!hasRegisteredChat) {
      setTimeout(() => {
        props.registerChatMfe();
      }, 1000);
      setHasRegisteredChat(true);
    }
  }, []);

  return (
    <>
      <ConfigProvider theme={{ cssVar: true, hashed: true }}>
        <BrowserRouter>
          <div id="mf-chrome" tabIndex={-1}>
            <header>
              <div>
                <Link to="/">Acme</Link>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Button icon={<DownloadOutlined />}></Button>
              </div>
            </header>
            <section>{props.name}</section>
          </div>
        </BrowserRouter>
      </ConfigProvider>
      <div id="single-spa-application:@acme/mf-chat"></div>
    </>
  );
}
