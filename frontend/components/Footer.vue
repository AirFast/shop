<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";
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
  <footer class="flex justify-between items-center gap-4 my-6">
    <p class="text-xs">&copy; Shop, {{ year }}</p>

    <div class="flex items-center gap-4">
      <p class="text-xs font-medium">{{ $t(locale) }}</p>
      <ClientOnly>
        <template #default>
          <IconButton
            @click="toggleLang"
            :title="`${$t('switchTo')} ${$t(nextLangCode)}`"
          >
            <LanguageIcon class="w-5 h-5 md:w-6 md:h-6" />
          </IconButton>
        </template>
        <template #placeholder>
          <SkeletonLoader
            class="w-10 h-10 md:w-12 md:h-12 rounded-full ring-1 ring-indigo-500/5 shadow-md"
          >
            <LanguageIcon class="w-5 h-5 md:w-6 md:h-6" />
          </SkeletonLoader>
        </template>
      </ClientOnly>

      <ClientOnly>
        <template #default>
          <IconButton
            @click="toggleDark()"
            :title="`${$t('switchTo')} ${
              isDark ? $t('lightMode') : $t('darkMode')
            }`"
          >
            <SunIcon v-if="isDark" class="w-5 h-5 md:w-6 md:h-6" />
            <MoonIcon v-else class="w-5 h-5 md:w-6 md:h-6" />
          </IconButton>
        </template>
        <template #placeholder>
          <SkeletonLoader
            class="w-10 h-10 md:w-12 md:h-12 rounded-full ring-1 ring-indigo-500/5 shadow-md"
          >
            <MoonIcon class="w-5 h-5 md:w-6 md:h-6" />
          </SkeletonLoader>
        </template>
      </ClientOnly>
    </div>
  </footer>
</template>
