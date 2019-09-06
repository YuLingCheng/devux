# DevUx

Based on [Gatsby Starter Mate](https://gatsby-starter-mate.netlify.com/) (Licence MIT)

## Features 🛠

- [Gatsby v2](https://www.gatsbyjs.org/)
- [Rebass 3.0 🎉](https://rebassjs.org/): styled component system
- [React Reveal](https://www.react-reveal.com/)
- Dynamic content from [Contentful](https://contentful.com)
- Offline support
- PWA ready
- SEO
- Responsive design
- Icons from [font-awesome](https://fontawesome.com/)
- Social sharing (Twitter, Facebook, Google, LinkedIn)
- Developer tools:
  - eslint
  - prettier
- Google Analytics
- Restrore to the start point by running `yarn setup`

## Building the static site 📦

As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to deploy the website you have to send `SPACE_ID` and `ACCESS_TOKEN` with the `build` command.

```bash
SPACE_ID=xxxxx ACCESS_TOKEN=yyyyy yarn build
```

The result will be stored inside the `public` folder, so you can upload to your webhost.

## Managing content with Contentful 📝

Content are managed via [Contentful](https://app.contentful.com/spaces/gztnd65xpj3c).

## Continous deployment

This site is automatically deployed via [Netlify](https://www.netlify.com/). Manage config [here](https://app.netlify.com/sites/devux/deploys).

A webhook is set to rebuild and update this static site whenever (un)publishing content. More about it [here](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/).

## Configurating single page navigation 👷‍♂️

The default structure for pages is the following:

```javascript
<Layout>
  <Header />
  <Landing />
  <Ideas />
  <About />
  <Footer />
</Layout>
```

`Layout` is the core of the application, it manages the theme for the application, the navigation between sections, also it defines the `header`.

All the components inside `Layout` are `Section` components. A section can have a link inside the `Header` or not, in order to add you need to wrapped the exported `Section` with `withNavigation` HOC and it will be automatically registered (Context magic ✨).

## Tracking with Google Analytics 📈

This starter has the analytics plugin inside the `gatsby-config`, so the only need to do in order to enable it is to provide the `Tracking Id` for your site (starts with `UA-`). Just set a new variable inside your `.env` file called `ANALYTICS_ID` and analytics wil be turn on automatically 😄
