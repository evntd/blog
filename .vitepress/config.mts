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
        text: "Evntd",
        items: [
          { text: "About", link: "/about" },
          { text: "Book", link: "/books/understanding-eventsourcing" }
        ]
      },
      {
        text: "Building Blocks",
        items: [
          { text: "Events", link: "/events" },
          { text: "Commands", link: "/commands" },
          { text: "Models", link: "/models" },
          { text: "Interfaces", link: "/interfaces" }
        ]
      },
      {
        text: "Event Stores",
        items: [
          { text: "Kurrent", link: "/kurrent" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/evntd/blog' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jakebruun/'}
    ]
  }
})
