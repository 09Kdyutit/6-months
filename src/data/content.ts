export type IconName =
  | "Smile"
  | "Heart"
  | "Sparkles"
  | "Laugh"
  | "HandHeart"
  | "Infinity";

export type FavoriteCard = {
  icon: IconName;
  title: string;
  message: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  body: string;
};

export type GalleryItem = {
  image?: string;
  caption: string;
  label: string;
};

export type LoveVaultNote = {
  tag: string;
  title: string;
  body: string;
};

export type PromiseItem = {
  title: string;
  body: string;
};

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const content = {
  name: "Vanika",
  loading: "Creating a little universe for Vanika...",
  secretMessage:
    "You found the hidden note: I would choose you in every universe.",
  hero: {
    eyebrow: "For Vanika",
    subtext: "A little universe I made just for you.",
    headline: "Happy Girlfriend Day, my love.",
    line: "Every pixel here has a reason. You.",
    cta: "Open your surprise",
  },
  favoriteSection: {
    eyebrow: "Why you are my favorite person",
    title: "The little things about you that make my whole world softer.",
    cards: [
      {
        icon: "Smile",
        title: "Your smile",
        message:
          "It makes ordinary days feel like something I want to remember.",
      },
      {
        icon: "Heart",
        title: "Your heart",
        message: "You make love feel calm, safe, and real.",
      },
      {
        icon: "Sparkles",
        title: "Your presence",
        message: "Somehow everything feels better when you are around.",
      },
      {
        icon: "Laugh",
        title: "Your laugh",
        message: "It is my favorite sound in the world.",
      },
      {
        icon: "HandHeart",
        title: "Your kindness",
        message: "You make people feel seen without even trying.",
      },
      {
        icon: "Infinity",
        title: "You",
        message: "Not one version of you. Every version.",
      },
    ] satisfies FavoriteCard[],
  },
  orbit: {
    eyebrow: "A tiny galaxy",
    title: "Some names become gravity.",
    center: "Vanika",
    words: ["Love", "Home", "Smile", "Forever", "Magic", "Peace", "My favorite"],
    caption: "Some people become your whole sky without even trying.",
  },
  timeline: {
    eyebrow: "Little moments, big feelings",
    title: "A timeline of tiny moments that still feel huge.",
    items: [
      {
        date: "Memory 01",
        title: "The day we started talking",
        body: "The first conversation that made an ordinary day feel like it had a secret.",
      },
      {
        date: "Memory 02",
        title: "The moment I realized you were special",
        body: "There was a small moment where everything about you felt brighter than before.",
      },
      {
        date: "Memory 03",
        title: "Our funniest memory",
        body: "The laugh that still replays in my head because it was ours.",
      },
      {
        date: "Memory 04",
        title: "The day I knew I was lucky",
        body: "A quiet look, a small feeling, and one more reason to be grateful you are mine.",
      },
      {
        date: "Today",
        title: "Because you deserve to feel celebrated",
        body: "Today is here because love should not only be saved for anniversaries.",
      },
    ] satisfies TimelineItem[],
  },
  letter: {
    eyebrow: "A love letter",
    title: "I wrote this slowly, because you deserve every word.",
    replay: "Read it again",
    body: `My Vanika,

I wanted to make you something that felt different from a normal message. Something that could hold even a small part of how special you are to me.

You make my life softer, brighter, funnier, and more beautiful in ways I do not always know how to explain. There are so many little things about you that stay in my head - your smile, your voice, your energy, the way you make everything feel less heavy.

This is my small way of saying: I appreciate you. I adore you. I am so lucky to have you.

Happy Girlfriend Day, my love.

Always yours.`,
  },
  loveVault: {
    eyebrow: "Things you should never forget",
    title: "A little vault full of the ways you are loved.",
    body:
      "Not just when the day is easy. Not just when everything feels perfect. You are loved in every version of the day.",
    notes: [
      {
        tag: "Chosen",
        title: "You are chosen.",
        body:
          "I do not love you by accident. I choose you with intention, with softness, and with all the certainty I have.",
      },
      {
        tag: "Safe",
        title: "You can be fully yourself.",
        body:
          "You do not have to perform or be perfect here. I love the real you, the soft you, the silly you, every you.",
      },
      {
        tag: "Beautiful",
        title: "You are so beautiful to me.",
        body:
          "In the obvious ways, yes. But also in the way you care, laugh, think, feel, and make everything warmer.",
      },
      {
        tag: "Proud",
        title: "I am proud of you.",
        body:
          "For what you carry, what you keep becoming, and the way you keep showing up even when no one sees the whole story.",
      },
      {
        tag: "Home",
        title: "You feel like home.",
        body:
          "Some people make the world louder. You make it gentler. Being close to you feels like peace finding me.",
      },
      {
        tag: "Always",
        title: "My heart keeps picking you.",
        body:
          "In the tiny moments, in the quiet ones, in the ordinary middle of the day, it is still you.",
      },
    ] satisfies LoveVaultNote[],
  },
  constellation: {
    eyebrow: "Reasons I love you",
    title: "Tap a star. Every one has something true inside it.",
    reasons: [
      "You make me feel at home.",
      "You make even simple moments feel special.",
      "You are beautiful in ways words struggle with.",
      "You have my favorite smile.",
      "You make me want to be better.",
      "You are my peace.",
      "You are effortlessly special.",
      "You make my heart feel full.",
      "You are the person I want to tell everything to.",
      "You make love feel easy.",
      "You are my favorite notification.",
      "Because you are Vanika.",
    ],
  },
  gallery: {
    eyebrow: "My favorite view",
    title: "A luxury scrapbook for the photos that matter.",
    items: [
      {
        image: assetPath("photos/p01.webp"),
        caption: "This smile.",
        label: "Vanika smiling",
      },
      {
        image: assetPath("photos/p03.webp"),
        caption: "This moment.",
        label: "A favorite moment",
      },
      {
        image: assetPath("photos/p06.webp"),
        caption: "This memory.",
        label: "A saved memory",
      },
      {
        image: assetPath("photos/p08.jpg"),
        caption: "This feeling.",
        label: "A soft feeling",
      },
      {
        image: assetPath("photos/p10.jpg"),
        caption: "This laugh.",
        label: "A favorite laugh",
      },
      {
        image: assetPath("photos/p14.jpg"),
        caption: "This is us.",
        label: "Us",
      },
    ] satisfies GalleryItem[],
  },
  promiseGarden: {
    eyebrow: "Promises",
    title: "A garden of promises I mean with my whole heart.",
    body:
      "I wanted this part to feel like something alive, because loving you is something I want to keep growing.",
    promises: [
      {
        title: "I will notice you.",
        body:
          "The little changes, the quiet moods, the things you do without asking for attention. I want to keep seeing you.",
      },
      {
        title: "I will protect your softness.",
        body:
          "Your heart is one of my favorite things. I never want to make you feel like you have to hide it from me.",
      },
      {
        title: "I will celebrate you.",
        body:
          "For the big wins, the small steps, the brave days, and the days where simply getting through is enough.",
      },
      {
        title: "I will keep choosing us.",
        body:
          "Not only when it is easy. I want to keep choosing patience, honesty, effort, and love with you.",
      },
      {
        title: "I will make room for joy.",
        body:
          "For more laughs, more silly moments, more memories, and more reasons for you to feel deeply loved.",
      },
    ] satisfies PromiseItem[],
  },
  portal: {
    eyebrow: "A little more magic",
    title: "I built one more corner of the universe for you.",
    body:
      "A place where the whole sky looks like it is quietly choosing your name.",
    button: "Make the universe blush",
    revealed: "Every universe finds its way back to you.",
  },
  final: {
    eyebrow: "One more thing",
    title:
      "Vanika, you are my today, my favorite thought, and the prettiest part of my world.",
    button: "One last thing",
    reveal: [
      "I love you so much.",
      "Thank you for being mine.",
      "Happy Girlfriend Day, beautiful.",
    ],
  },
  music: {
    src: assetPath("music/song.mp3"),
    label: "Background music",
  },
} as const;
