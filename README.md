# Habit Tracker!

This is a relatively simple app to practice using **Remix**.

- 📖 [Remix docs](https://remix.run/docs)

## 🧗‍♀️Issues encountered

### Upgrading to TailwindCSS v4 🛠️

First, I was happy to discover the command `pnpm dlx create-remix@latest` for the _batteries-included_ configuration comes with **TypeScript** pre-installed. However, it also came with **Tailwind v3** rather than the most up-to-date version.

So I needed to upgrade the package.

```sh
pnpm dlx @tailwindcss/upgrade
```

removed the `tailwind.config.ts` file. Then, I just needed to update the `tailwind.css` file with

```css
@import "tailwindcss";
```

### Using a dynamic hex value with Tailwind 🎨

I spent more time than I would've wished going down rabbit-holes here!

**Problem:** I wanted to display each habit the user entered along with their chosen color, stored in the database. While the value showed up in DevTools, I could not get it to apply! I thought Tailwind might be purging my artibitrary values.

**What I tried:**
- I used `@config` to try to `safelist` values using a regex pattern.
- Also tried `@source inline` as seen in the docs.
- I even had my friendly neighbourhood AI generate a giant list of possible values.
- I found out that Tailwind wouldn't be able to read the regex.
- Also found out that it possibly could...

Before I investigated *that* more, I came to the obvious solution!

**Solution:** Tailwind must know the values at build time!  I would need to override Tailwind with **inline styles**.

## 🧑‍💻 Development

Run the dev server:

```shellscript
pnpm run dev
```

## 📲 Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
