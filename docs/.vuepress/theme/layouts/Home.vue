<script setup lang="ts">
import { computed } from "vue";
import { Content, usePageFrontmatter, withBase } from "vuepress/client";
import { useLocale } from "../composables/useLocale";

interface LinkItem {
  label: string;
  href: string;
}

interface TimelineItem {
  period: string;
  title: string;
  org?: string;
  desc?: string;
}

interface BioSegment {
  type: "text" | "link";
  text: string;
  href?: string;
}

interface Profile {
  name?: string;
  englishName?: string;
  role?: string;
  affiliation?: string;
  location?: string;
  email?: string;
  github?: string;
  avatar?: string;
  bio?: string;
  links?: LinkItem[];
}

interface ContactLink {
  label: string;
  href: string;
  icon: "github" | "email";
  external?: boolean;
}

interface HomeFrontmatter {
  profile?: Profile;
  interests?: string[];
  education?: TimelineItem[];
  internships?: TimelineItem[];
}

const frontmatter = usePageFrontmatter<HomeFrontmatter>();
const { t } = useLocale();

const profile = computed<Profile>(() => ({
  name: "Zirno_81",
  avatar: "/avatar.jpg",
  links: [],
  ...frontmatter.value.profile,
}));

const interests = computed(() => frontmatter.value.interests ?? []);
const education = computed(() => frontmatter.value.education ?? []);
const internships = computed(() => frontmatter.value.internships ?? []);
const bioSegments = computed(() => parseInlineLinks(profile.value.bio ?? ""));
const contactLinks = computed<ContactLink[]>(() => {
  const links: ContactLink[] = [];

  if (profile.value.github) {
    links.push({
      label: "GitHub",
      href: profile.value.github,
      icon: "github",
      external: true,
    });
  }

  if (profile.value.email) {
    links.push({
      label: "Email",
      href: `mailto:${profile.value.email}`,
      icon: "email",
    });
  }

  return links;
});

function parseInlineLinks(text: string): BioSegment[] {
  const segments: BioSegment[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        text: text.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: "link",
      text: match[1],
      href: match[2],
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      text: text.slice(lastIndex),
    });
  }

  return segments;
}

function isExternalLink(href?: string) {
  return Boolean(href && /^https?:/.test(href));
}
</script>

<template>
  <div class="home-layout academic-home">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero-media">
        <div class="avatar-frame">
          <img
            class="avatar"
            :src="withBase(profile.avatar || '/avatar.jpg')"
            :alt="`${profile.name || 'avatar'} avatar`"
          />
        </div>

        <div v-if="contactLinks.length" class="avatar-contact-links">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            class="avatar-contact-link"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
          >
            <svg
              v-if="link.icon === 'github'"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
              />
            </svg>
            <svg
              v-else
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M1.75 2h12.5A1.75 1.75 0 0 1 16 3.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.78.78 2 1.75 2Zm0 1.5a.25.25 0 0 0-.25.25v.3l6.5 3.72 6.5-3.72v-.3a.25.25 0 0 0-.25-.25H1.75Zm12.75 2.3-6.31 3.61a.75.75 0 0 1-.76 0L1.5 5.8v6.45c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.8Z"
              />
            </svg>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>

      <div class="home-hero-copy">
        <p v-if="profile.englishName" class="home-eyebrow">
          {{ profile.englishName }}
        </p>
        <h1 id="home-title">{{ profile.name }}</h1>
        <p v-if="profile.role" class="home-role">{{ profile.role }}</p>
        <p v-if="profile.affiliation" class="home-affiliation">
          {{ profile.affiliation }}
        </p>
        <p v-if="profile.bio" class="home-bio">
          <template
            v-for="(segment, index) in bioSegments"
            :key="`${segment.type}-${index}`"
          >
            <a
              v-if="segment.type === 'link'"
              :href="segment.href"
              :target="isExternalLink(segment.href) ? '_blank' : undefined"
              :rel="isExternalLink(segment.href) ? 'noopener' : undefined"
            >
              {{ segment.text }}
            </a>
            <span v-else>{{ segment.text }}</span>
          </template>
        </p>

        <div v-if="profile.links?.length" class="home-links">
          <a
            v-for="link in profile.links"
            :key="link.label"
            class="home-link"
            :href="link.href"
            :target="isExternalLink(link.href) ? '_blank' : undefined"
            :rel="isExternalLink(link.href) ? 'noopener' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </section>

    <section v-if="interests.length" class="home-section home-section-wide">
      <div class="section-heading">
        <p v-if="t.sections.researchEyebrow">{{ t.sections.researchEyebrow }}</p>
        <h2>{{ t.sections.researchTitle }}</h2>
      </div>
      <ul class="interest-list">
        <li v-for="interest in interests" :key="interest">
          {{ interest }}
        </li>
      </ul>
    </section>

    <section v-if="education.length" class="home-section home-section-wide">
      <div class="section-heading">
        <p v-if="t.sections.educationEyebrow">{{ t.sections.educationEyebrow }}</p>
        <h2>{{ t.sections.educationTitle }}</h2>
      </div>
      <div class="timeline-list">
        <article
          v-for="item in education"
          :key="`${item.period}-${item.title}`"
          class="timeline-item"
        >
          <span class="timeline-period">{{ item.period }}</span>
          <h3>{{ item.org || item.title }}</h3>
          <p v-if="item.org" class="timeline-title">{{ item.title }}</p>
          <p v-if="item.desc" class="timeline-desc">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section v-if="internships.length" class="home-section home-section-wide">
      <div class="section-heading">
        <p v-if="t.sections.experienceEyebrow">{{ t.sections.experienceEyebrow }}</p>
        <h2>{{ t.sections.experienceTitle }}</h2>
      </div>
      <div class="timeline-list">
        <article
          v-for="item in internships"
          :key="`${item.period}-${item.title}`"
          class="timeline-item"
        >
          <span class="timeline-period">{{ item.period }}</span>
          <h3>{{ item.org || item.title }}</h3>
          <p v-if="item.org" class="timeline-title">{{ item.title }}</p>
          <p v-if="item.desc" class="timeline-desc">{{ item.desc }}</p>
        </article>
      </div>
    </section>

    <section class="home-section home-section-wide home-content">
      <Content />
    </section>
  </div>
</template>
