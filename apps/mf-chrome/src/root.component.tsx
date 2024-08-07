import { useEffect, useState } from 'preact/hooks';
import { BrowserRouter, Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';
import { Fragment, FunctionalComponent, h } from 'preact';
import './root.component.css';

type RootProps = ChromeProps & {
  registerChatMfe: () => void;
};

const Root: FunctionalComponent<RootProps> = (props) => {
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
    <Fragment>
      <ConfigProvider theme={{ cssVar: true, hashed: true }}></ConfigProvider>
      <div id="single-spa-application:@acme/mf-chat"></div>
    </Fragment>
  );
};

type ChromeProps = {
  name: string;
};

const Chrome: FunctionalComponent<ChromeProps> = (props) => {
  return (
    <BrowserRouter>
      <div id="mf-chrome" tabIndex={-1}>
        <header>
          <div>
            <Link to="/">Acme</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Button icon={<DownloadOutlined />}></Button>
          </div>
        </header>
        <section>{props.name}</section>
      </div>
    </BrowserRouter>
  );
};

export default Root;
