import { useEffect } from 'preact/hooks';

export const useStyleObserver = () => {
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
