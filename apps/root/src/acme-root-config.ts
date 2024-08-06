import { registerApplication, start, LifeCycles } from 'single-spa';

export const initialize = async () => {
  // eslint-disable-next-line
  console.log('Launching the app...');

  registerApplication({
    name: '@acme/mf-chrome',
    app: () => System.import<LifeCycles>('@acme/mf-chrome'),
    activeWhen: () => true,
    customProps: {
      registerChatMfe: () => {
        registerApplication({
          name: '@acme/mf-chat',
          app: () => System.import<LifeCycles>('@acme/mf-chat'),
          activeWhen: () => true,
        });
      },
    },
  });

  registerApplication({
    name: '@acme/mf-about',
    app: () => System.import<LifeCycles>('@acme/mf-about'),
    activeWhen: ['/about'],
  });

  start({
    urlRerouteOnly: true,
  });
};
