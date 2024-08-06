import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@acme/navbar",
//   app: () => System.import("@acme/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@acme/mf-chrome",
  app: () => System.import<LifeCycles>("@acme/mf-chrome"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
