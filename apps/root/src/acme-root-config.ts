import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@acme/mf-chrome",
  app: () => System.import<LifeCycles>("@acme/mf-chrome"),
  activeWhen: () => true,
});

registerApplication({
  name: "@acme/mf-about",
  app: () => System.import<LifeCycles>("@acme/mf-about"),
  activeWhen: ["/about"],
});

registerApplication({
  name: "@acme/mf-chat",
  app: () => System.import<LifeCycles>("@acme/mf-chat"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
