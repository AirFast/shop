<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const { locale, locales, setLocale } = useI18n();
const { isDark, toggleDark } = useTheme();

const availableLocales = (locales.value as Array<LocaleObject>).map(
  ({ code }) => code
);

const year = new Date().getFullYear();

const nextLangCode = computed(
  () =>
    availableLocales[
      availableLocales.indexOf(locale.value) + 1 === availableLocales.length
        ? 0
        : availableLocales.indexOf(locale.value) + 1
    ]
);

const toggleLang = () => {
  setLocale(nextLangCode.value);
};
</script>

<template>
  <p class="text-xs">&copy; Shop, {{ year }}</p>

  <div class="flex items-center gap-4">
    <ClientOnly
      ><p class="text-xs font-medium">{{ $t(locale) }}</p>
      <IconButton
        @click="toggleLang"
        :title="`${$t('switchTo')} ${$t(nextLangCode)}`"
      >
        <LanguageIcon class="w-5 h-5 md:w-6 md:h-6" />
      </IconButton>
      <IconButton
        @click="toggleDark()"
        :title="`${$t('switchTo')} ${
          isDark ? $t('lightMode') : $t('darkMode')
        }`"
      >
        <SunIcon v-if="isDark" class="w-5 h-5 md:w-6 md:h-6" />
        <MoonIcon v-else class="w-5 h-5 md:w-6 md:h-6" />
      </IconButton>
    </ClientOnly>
  </div>
</template>
