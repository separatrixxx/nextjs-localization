
# Next.js Localization by separatrix

**Next.js Localization** is a setup script and package to create a new Next.js project with built-in localization support. This setup includes a powerful context API for managing multiple locales and additional configurations to streamline development.

## Usage

Follow these steps to create and configure a new Next.js project with localization support:

### Step 1: Run the Setup Script

To create a new Next.js project with localization, open your terminal and run the following command, replacing `<project-name>` with your desired project name:

```bash
npx nextjs-localization <project-name>

# or

npm run build
npm run start <project-name>
```

The script will create a new Next.js project with the specified name and apply the localization configurations.

### Step 2: Install Dependencies

Once the project is created, navigate to the project directory and install the necessary dependencies:

```bash
cd <project-name>
npm install
```

This will install the required packages such as **Next.js**, **TypeScript**, **React**, **Redux Toolkit**, **axios**, **date-fns**, and others.

## Features

### 1. **Localization Support**
   - Includes `LocaleProvider` and `useLocale` hooks to easily manage multiple locales in your Next.js project.
   - Allows for dynamic language switching and easy integration with `next/router`.
   - Works seamlessly with your custom locale files.

### 2. **TypeScript and ESLint**
   - Sets up a project with TypeScript by default.
   - ESLint is pre-configured to help maintain clean and consistent code.

### 3. **Additional Packages**
   - **Redux Toolkit**: Pre-installed for state management.
   - **axios**: For making HTTP requests.
   - **date-fns**: For working with dates and times in your project.
   - **Stylelint**: Configured for managing CSS/SASS styles.

### 4. **Directory Structure**
   - Creates important directories for localization (`locales`), Redux store, and other utilities.
   - Provides a starting point for organizing your Next.js project.

### 5. **Custom Scripts**
   - Updates `package.json` with custom scripts for building, starting, and testing your project.

## Localization API

### 1. **`LocaleProvider`**

Wrap your Next.js app with the `LocaleProvider` to manage locales throughout your application.

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

### 2. **`useLocale` Hook**

This hook allows you to access the current locale and router within any component:

```tsx
import { useLocale, setLocale, changeLocale } from 'nextjs-localization';

function MyComponent() {
  const { locales, router } = useLocale();

  return (
    <div>
      <button onClick={() => changeLocale(router, 'ru')}>Change Locale</button>
      <h1>{setLocale('error404')}</h1>
    </div>
  );
}
```

### 3. **`setLocale(key: string)`**

Fetches the localized string based on the current locale:

```tsx
const message = setLocale('welcome_message'); // Will return a message based on the current locale
```

### 4. **`changeLocale(router: NextRouter, locale: string)`**

Changes the current locale and reloads the page with the new locale:

```tsx
changeLocale(router, 'ru'); // Switches the locale to Russian
```

### 5. **Localization Files**

Create JSON files for each locale (e.g., `en.ts`, `ru.ts`) in the `locales` folder. Here is an example:

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

## How to Add New Locales

1. Add new locale files in the `locales` directory (e.g., `fr.ts` for French).
2. Update the `localesArray` in your `_app.tsx` to include the new locales:

```tsx
import { LocaleProvider } from 'nextjs-localization';
import { useRouter } from 'next/router';
import { en, ru, fr } from '../locales';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <LocaleProvider localesArray={[en, ru, fr]} router={router}>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
```

## License

This project is licensed under the MIT License.
