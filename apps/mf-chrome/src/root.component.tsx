import { useEffect, useState } from 'preact/hooks';
import { BrowserRouter, Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';
import { Fragment, FunctionalComponent, h } from 'preact';
import './root.component.css';

export default function Root(props: any) {
  const [hasRegisteredChat, setHasRegisteredChat] = useState(false);

  useEffect(() => {
    if (!hasRegisteredChat) {
      setTimeout(() => {
        props.registerChatMfe();
      }, 1000);
      setHasRegisteredChat(true);
    }
  }, []);

  useStyleObserver();

  return (
    <>
      <ConfigProvider theme={{ cssVar: true, hashed: true }}>
        <BrowserRouter>
          <div id="mf-chrome" tabIndex={-1}>
            <header>
              <div>
                {/* <Link to="/">Acme</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}
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

const useStyleObserver = () => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLStyleElement) {
              // eslint-disable-next-line no-console
              console.log('STYLE-ADDED', mutation.type, node);
            }
          });
        }
        if (mutation.removedNodes.length > 0) {
          mutation.removedNodes.forEach((node) => {
            if (node instanceof HTMLStyleElement) {
              // eslint-disable-next-line no-console
              console.log('STYLE-REMOVED', mutation.type, node);
            }
          });
        }
      });
    });

    // eslint-disable-next-line no-console
    console.log('Style observer started');
    observer.observe(document.head, { childList: true });

    return () => {
      observer.disconnect();
    };
  }, []);
};
