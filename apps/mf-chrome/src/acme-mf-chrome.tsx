import * as preact from 'preact';
import singleSpaPreact from 'single-spa-preact';
import Root from './root.component';

const lifecycles = singleSpaPreact({
  preact,
  rootComponent: Root,
});

export const { bootstrap, mount, unmount } = lifecycles;
