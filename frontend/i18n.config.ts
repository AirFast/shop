import { en, uk } from "./locales";

const {
  value: { lang },
} = useUserStorage();

export default defineI18nConfig(() => ({
  legacy: false,
  locale: lang,
  messages: {
    en,
    uk,
  },
}));
