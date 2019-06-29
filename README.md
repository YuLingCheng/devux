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
- [Netlify](https://www.netlify.com) Deployment Friendly
- Medium integration
- Social sharing (Twitter, Facebook, Google, LinkedIn)
- Developer tools:
  - eslint
  - prettier
- Google Analytics

## Building your site 📦

As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to deploy the website you have to send `SPACE_ID` and `ACCESS_TOKEN` with the `build` command.

```bash
SPACE_ID=xxxxx ACCESS_TOKEN=yyyyy yarn build
```

The result will be stored inside the `public` folder, so you can upload to your webhost.

## Adding your information 📝

All the text of this starter live inside Contentful, more spefically inside the Content of `About`. In order to change it, just go to `Content` section and change the entity of About with the information you want.

Regarding the projects and social links the process is the same! Contentful is really easy to learn so don't be afraid of breaking everything, remember that you can restore to the start point by running `yarn setup` 😄

## Configuration (Optional) 👷‍♂️

The default structure for pages is the following:

```javascript
<Layout>
  <Landing />
  <About />
  <Projects />
  <Writing />
</Layout>
```

`Layout` is the core of the application, it manages the theme for the application, the navigation between sections, also it defines the `header`.

All the components inside `Layout` are `Section` components. A section can have a link inside the `Header` or not, in order to add you need to wrapped the exported `Section` with `withNavigation` HOC and it will be automatically registered (Context magic ✨).

## Tracking with Google Analytics (Optional) 📈

This starter has the analytics plugin inside the `gatsby-config`, so the only need to do in order to enable it is to provide the `Tracking Id` for your site (starts with `UA-`). Just set a new variable inside your `.env` file called `ANALYTICS_ID` and analytics wil be turn on automatically 😄

## Deployment Automation (Optional) ⚙️

Everytime you made a change in your Contentful data or you add a new post in Medium you need to trigger a manual deployment, which can be an annoying task. Therefore I found a nice way to make this process automatic and it is by using a tool called Zapier.

This tool will be watching for changes in Contentful and Medium and then trigger a new deploy in Netlify (or the service you are using). In summary, you don't need to care anymore about deploying your application and can focus on writting content or developing features!

In case you want to know more I wrote an article in Medium that explains the whole process especially for this starter 🙌 [Click here to read it.](https://medium.com/@emasuriano/make-any-static-site-dynamic-without-coding-9dde5673b1a)

**UPDATE:** Contentful added a feature to link it with Netlify as a built in option, but in case you are using another provider I recommend going with Zapier!
