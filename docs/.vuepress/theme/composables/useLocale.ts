import { computed } from "vue";
import { usePageData } from "vuepress/client";

export type Locale = "zh" | "en";

const ENGLISH_PATH_PATTERN = /^\/en(\/|$)/;

const messages = {
  zh: {
    homePath: "/",
    nav: {
      home: "主页",
      archive: "归档",
      friends: "友链",
    },
    languageSwitch: {
      label: "EN",
      title: "Switch to English",
    },
    sections: {
      researchEyebrow: "Research",
      researchTitle: "研究方向",
      educationEyebrow: "Education",
      educationTitle: "教育经历",
      experienceEyebrow: "Experience",
      experienceTitle: "实习经历",
    },
  },
  en: {
    homePath: "/en/",
    nav: {
      home: "Home",
      archive: "Archive",
      friends: "Friends",
    },
    languageSwitch: {
      label: "中文",
      title: "切换到中文",
    },
    sections: {
      researchEyebrow: "Focus",
      researchTitle: "Research Interests",
      educationEyebrow: "Background",
      educationTitle: "Education",
      experienceEyebrow: "Experience",
      experienceTitle: "Internships",
    },
  },
} as const;

export function useLocale() {
  const page = usePageData();

  const locale = computed<Locale>(() =>
    ENGLISH_PATH_PATTERN.test(page.value.path) ? "en" : "zh",
  );
  const isEnglish = computed(() => locale.value === "en");
  const t = computed(() => messages[locale.value]);
  const homePath = computed(() => t.value.homePath);
  const switchPath = computed(() => (isEnglish.value ? "/" : "/en/"));

  return { locale, isEnglish, t, homePath, switchPath };
}
