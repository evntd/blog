import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Evntd Blog++",
  description: "Model, build, and scale event-driven systems with practical guides on Event Modeling, Event Sourcing, and modern tooling.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: "Event Modeling",
        items: [
          { text: "Events", link: "/events" },
          { text: "Commands", link: "/commands" },
          { text: "Models", link: "/models" },
          { text: "Interfaces", link: "/interfaces" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/evntd/blog' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jakebruun/'}
    ]
  }
})
