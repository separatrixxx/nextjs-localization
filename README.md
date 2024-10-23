# Next.js Localization by separatrix

**Next.js Localization** is a setup script and package to create a new Next.js project with built-in localization support. This setup includes a powerful context API for managing multiple locales and additional configurations to streamline development.

## Usage

### Step 1: Installation

To install the Next.js localization library, open your terminal and run one of the following commands:

```bash
npm install -D nextjs-localization

# or with yarn

yarn add -D nextjs-localization
```

### Step 2: Configuration

Wrap your Next.js app with the `LocaleProvider` to manage locales throughout your application:

```tsx
import { LocaleProvider } from 'nextjs-localization';
import { useRouter } from 'next/router';
import { en, ru } from '../locales';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <LocaleProvider localesArray={[en, ru]} router={router}>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
```

### Step 3: Import Functions

You can now import and use functions from `nextjs-localization` as needed.

## Available Functions

### `changeLocale(router: NextRouter, locale: string)`

Changes the current locale and reloads the page with the new locale.

```tsx
import { changeLocale } from 'nextjs-localization';
import { useRouter } from 'next/router';

const router = useRouter();
changeLocale(router, 'ru'); // Switches the locale to Russian
```

### `setLocale(key: string, value?: string): string`

Fetches the localized string based on the current locale and replaces a placeholder `$$$` with a provided value (if any).

```tsx
import { setLocale } from 'nextjs-localization';

const message = setLocale('welcome_message', 'user'); // Returns "Welcome, user" in the current locale

<h1>{message}</h1> // Displays: Welcome, user
```

### `getCurrentLocale(): string`

Fetches the current locale from the router or returns the default locale ('en').

```tsx
import { getCurrentLocale } from 'nextjs-localization';

const currentLocale = getCurrentLocale(); // Returns the current locale (default is 'en')
```

### `getAvailableLocales(): string[]`

Gets a list of all available locales in the current context.

```tsx
import { getAvailableLocales } from 'nextjs-localization';

const availableLocales = getAvailableLocales(); // Returns an array of all available locale codes
```

### `getAllGlobalLocales(): GlobalLocale[]`

Gets a list of all global locales with their codes, languages, countries, and flags.

```tsx
import { getAllGlobalLocales } from 'nextjs-localization';

const allLocales = getAllGlobalLocales(); // Returns an array of GlobalLocale objects
```

### `getLocaleData(locale: string): GlobalLocale | undefined`

Fetches detailed information for a specific locale by its code.

```tsx
import { getLocaleData } from 'nextjs-localization';

const localeData = getLocaleData('en_US'); // Returns GlobalLocale object for 'en_US' or undefined if not found

console.log(localeData?.country); // Output: ["United States"]
```

## Localization Files

It is recommended to create JSON or TypeScript files for each locale (e.g., `en.ts`, `ru.ts`) in the `locales` folder. Here is an example:

```ts
// locales/en.ts
export const en = {
  locale: "en",
  language: "English",
  welcome_message: "Welcome to our website",
  error404: "Page not found, 404 error",
};

// locales/ru.ts
export const ru = {
  locale: "ru",
  language: "Русский",
  welcome_message: "Добро пожаловать на наш сайт",
  error404: "Страница не найдена, ошибка 404",
};
```

## License

This project is licensed under the MIT License.
