# react-template

Creates a react app with

- Typescript
- Tailwind
- MSW
- Axios, Formik, Yup, and Lodash installed
- ESLint and Prettier set up with pre-commit hooks
- GitHub Pages support

Note that `homepage` in `package.json` has been defined.

## GitHub Pages

The `public` folder contains a `404.html` page and the complementary script in `index.html` for static deployments to GitHub Pages. To deploy, simply run `npm run deploy`. The `404.html` file should not interfere with other deployments, but the script in `index.html` does run if the second character in `window.location.search` (first after the `?`) is `/`. Of course, it is safe to remove `404.html` and the `index.html` script if they are not needed.

If using GitHub Pages, note the comments in `404.html` concerning `pathSegmentsToKeep`. Also, if you're using a custom domain for GitHub Pages that is not the default for your account, change `scripts.deploy` in `package.json` to this, replacing `YOUR_CUSTOM_DOMAIN.com` with your domain:

```
echo YOUR_CUSTOM_DOMAIN.com > ./build/CNAME && gh-pages -d build
```
