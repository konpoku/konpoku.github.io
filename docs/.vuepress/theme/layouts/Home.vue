<script setup lang="ts">
import { computed } from "vue";
import { Content, usePageFrontmatter, withBase } from "vuepress/client";

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
  avatar?: string;
  bio?: string;
  links?: LinkItem[];
}

interface HomeFrontmatter {
  profile?: Profile;
  interests?: string[];
  education?: TimelineItem[];
  internships?: TimelineItem[];
}

const frontmatter = usePageFrontmatter<HomeFrontmatter>();

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
        <p>Research</p>
        <h2>研究方向</h2>
      </div>
      <ul class="interest-list">
        <li v-for="interest in interests" :key="interest">
          {{ interest }}
        </li>
      </ul>
    </section>

    <section v-if="education.length" class="home-section home-section-wide">
      <div class="section-heading">
        <p>Education</p>
        <h2>教育经历</h2>
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
        <p>Experience</p>
        <h2>实习经历</h2>
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
