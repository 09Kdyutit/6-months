const photos = [
  ["p01.webp", "Golden hour kept trying", "I love this because it feels like the world paused just to make you glow. You are the kind of pretty that makes me quiet for a second."],
  ["p02.webp", "The softest view", "This one reminds me that missing you is not empty. It is proof that someone matters enough to be felt from far away."],
  ["p03.webp", "My favorite us", "This is the kind of picture I would keep in every version of my life. You beside me feels like the point."],
  ["p04.webp", "Blue light, pretty girl", "Every color looks better around you. Even a random moment turns into something I want to save."],
  ["p05.webp", "Sunlit Vanika", "You make simple things feel cinematic. I look at this and immediately remember why I am so gone for you."],
  ["p06.webp", "Dinner table memory", "I love that you can turn a normal table into a memory just by sitting there and being yourself."],
  ["p07.webp", "Cozy proof", "This one feels like comfort. Like us. Like the kind of closeness I keep waiting to have again."],
  ["p08.jpg", "My prettiest distraction", "Your face is unfair, but it is your heart that keeps me attached."],
  ["p09.jpg", "That smile", "I hope you know your smile changes my whole mood faster than I can explain."],
  ["p10.jpg", "Little saved moment", "Even the small moments feel worth keeping when they have you in them."],
  ["p11.jpg", "Permanent file", "A photo is tiny, but the feeling behind it is not. I keep proof because I never want to forget how lucky I am."],
  ["p12.jpg", "Frame twelve", "Another reminder that my favorite person is real, beautiful, and somehow mine."],
  ["p13.jpg", "Frame thirteen", "I do not just miss the big moments. I miss the normal ones too."],
  ["p14.jpg", "Frame fourteen", "Sometimes I look at you and think, yes, that is my future looking back."],
  ["p15.jpg", "Frame fifteen", "You make me want to be softer, more patient, more loving, and more serious about us."],
  ["p16.jpg", "Frame sixteen", "Six months and I still get that same feeling when I see you."],
  ["p17.jpg", "Frame seventeen", "Every version of you has become my favorite version."],
  ["p18.jpg", "Frame eighteen", "I would choose this story again, even knowing distance would be annoying."],
  ["p19.jpg", "Frame nineteen", "You are the best thing my phone has ever held."],
  ["p20.jpg", "Frame twenty", "The archive gets bigger, but the answer stays the same: it is you."],
  ["p21.jpg", "Frame twenty-one", "A little proof that we are real, and that real love can survive imperfect days."],
  ["p22.jpg", "Frame twenty-two", "I look at these and want more time, more pictures, more memories, more us."],
  ["p23.jpg", "Frame twenty-three", "Distance gets loud. You are louder."],
  ["p24.jpg", "Frame twenty-four", "I keep saving you in every format possible because my heart refuses to be casual about you."],
  ["p25.jpg", "Frame twenty-five", "You really are my favorite view."],
  ["p26.jpg", "Frame twenty-six", "Missing you is hard. Loving you is easy."],
  ["p27.jpg", "Frame twenty-seven", "Some pictures just feel like a reason to keep going."],
  ["p28.jpg", "Frame twenty-eight", "I want a thousand more of these, and I want to be there for them."],
  ["p29.jpg", "Frame twenty-nine", "Tiny moment. Permanent feeling."],
  ["p30.jpg", "Frame thirty", "All of these pictures together are still nowhere near enough proof of how much you mean to me."]
];

const months = [
  { label: "one", title: "The beginning was not small to me.", photo: 0, text: "Month one was the part where my heart started making space for you before I even knew how much space you would take. You became a thought I kept returning to, a name I wanted to see, a person I wanted more of." },
  { label: "two", title: "You became comfort.", photo: 2, text: "By month two, you were not just exciting. You were safe. You became someone I could miss, laugh with, be soft around, and want in the ordinary parts of my day." },
  { label: "three", title: "Distance started losing.", photo: 5, text: "Month three reminded me that being far does not mean being weak. We kept choosing each other across screens, schedules, moods, and time. That matters to me more than you know." },
  { label: "four", title: "I started seeing a future.", photo: 6, text: "Month four was when you stopped feeling like only a relationship and started feeling like a direction. I could imagine more than calls and photos. I could imagine us building something real." },
  { label: "five", title: "I learned I love the real us.", photo: 8, text: "Month five mattered because it was not perfect, and I still wanted you. I love the sweet parts, but I also love that we keep finding each other after the hard parts." },
  { label: "six", title: "I still choose you first.", photo: 14, text: "Month six is not an ending. It is proof. Proof that you are my favorite person, my prettiest girl, my serious plan, and the one I want to keep choosing on purpose." }
];

const envelopes = [
  { title: "When you miss me", closed: "Open when the distance feels too loud.", open: "I miss you too, baby. I miss you in the obvious ways and in the tiny ways. I miss your voice, your face, your random reactions, and the feeling of knowing you are right there. But missing you does not scare me. It reminds me that what we have is real enough to hurt when it is far." },
  { title: "When you overthink", closed: "Open when your mind is being mean.", open: "You do not have to be perfect to be loved by me. You do not have to perform, prove, or panic your way into my heart. You are already there. Even when you are stressed, dramatic, quiet, scared, or unsure, I still love you. Breathe and come back to me." },
  { title: "When you do not feel pretty", closed: "Open when the mirror is lying.", open: "You are so beautiful it actually makes me mad sometimes. But even if every mirror in the world broke, I would still know you are beautiful because your beauty is not only your face. It is your softness, your care, your laugh, your stubborn heart, and the way you make everything feel warmer." },
  { title: "When we argue", closed: "Open when things feel heavy.", open: "I do not want a perfect love. I want a love that knows how to come back. If we argue, I still want you. If we misunderstand each other, I still want to understand you. I would rather fix things with you than pretend things are easy with anyone else." },
  { title: "When you need proof", closed: "Open when words do not feel enough.", open: "Here is proof: I notice you. I save you. I write about you. I plan around you. I miss you. I try for you. I made this because six months with you is not casual to me. You are not a maybe. You are my favorite yes." },
  { title: "When you think about our future", closed: "Open when you wonder if I mean it.", open: "I mean it. I want the future where distance is a memory and you are not just a notification on my phone. I want ordinary mornings, stupid jokes, errands, arguments that end in hugs, and a life where choosing you is not something I say for anniversaries, but something I do every day." }
];

const reasons = [
  "I love the way your name changes my whole mood.",
  "I love your sleepy voice.",
  "I love your dramatic side because it feels so alive.",
  "I love how pretty you are when you are not even trying.",
  "I love how much you care.",
  "I love that you make me want to be softer.",
  "I love your smile.",
  "I love the way I miss you even after we talk.",
  "I love that you feel like home and excitement at the same time.",
  "I love how real you are with me.",
  "I love that you can make a normal day feel important.",
  "I love your little moods.",
  "I love that loving you makes distance worth fighting.",
  "I love your eyes.",
  "I love how you make me want a future.",
  "I love the way you live in my head rent free.",
  "I love your softness.",
  "I love how you make me laugh.",
  "I love that you are my prettiest girl.",
  "I love saving photos of you.",
  "I love how proud I feel to call you mine.",
  "I love that you matter to me in the quiet moments too.",
  "I love your voice when you are comfortable.",
  "I love that you are worth patience.",
  "I love that I want to fix things with you.",
  "I love that your happiness matters to me.",
  "I love how you can be cute and annoying and still my favorite.",
  "I love that I keep choosing you without needing to force it.",
  "I love how much future your name carries.",
  "I love the way you make me romantic.",
  "I love that you are not replaceable to me.",
  "I love the little details only I get to notice.",
  "I love that you are my safe thought.",
  "I love how badly I want more memories with you.",
  "I love that six months still feels like the beginning.",
  "I love you because you are Vanika, and that is enough."
];

const quietThings = [
  { title: "The veg wrap you never had to ask for", text: "The day everyone was making chicken wraps, I quietly pulled Tejus' uncle aside and asked him to make yours veg, before you ever had to bring it up. I just wanted you taken care of without you even having to notice." },
  { title: "I didn't let it slide", text: "I got into it with Adhi, my best friend, because he was saying things about you I was not willing to hear. If it ever comes down to a room and you, I choose you in it. Every time." },
  { title: "The cabin, when the night got heavy", text: "At the cabin, when you had a little too much to drink, I stayed on it the whole time. Water in your hand, your phone on the charger, checking on you again and again until I actually knew you were okay." },
  { title: "I cried on the car ride back", text: "On the drive back, I cried. I never told you. Leaving you and going back to the distance after finally having you right there got to me more than I let anyone see. That is how much you mean to me." },
  { title: "Every ten minutes, New Year's", text: "At the New Year's party I kept coming back downstairs every ten minutes or so, just to see if I could catch a moment with you. I was not smooth about it at all. I just wanted to be near you." },
  { title: "Half an eye on you, always", text: "Around the house I was quietly keeping track of you the whole time. Where you were, if you were warm enough, if you had eaten, if you needed anything. My attention kept drifting back to you without me deciding it." },
  { title: "Making the cabin feel safe", text: "I wanted the cabin to feel safe for you. That you were not cold, that you had a spot that felt like yours, that you had what you needed before you even thought to ask for it." },
  { title: "The check-ins you didn't catch", text: "When the night got loud, I kept finding small reasons to come check on you. Refilling your water, making sure you ate something, making sure nobody bothered you. Little things, all on purpose." },
  { title: "When you went quiet", text: "I noticed the moments you went quiet, even when I played it off like I hadn't. I would make sure you were okay in my own way, without ever making it a big deal in front of everyone." }
];

const favoriteMoments = [
  { title: "Ranking the Vegas photos", text: "Arguing over which shot was actually the best one, neither of us willing to back down. I would rank every photo in the world if it meant doing it with you." },
  { title: "Late night Roblox", text: "Dumb little games way past midnight, laughing at absolutely nothing. Some of my favorite hours with you happened on a screen." },
  { title: "Horror videos, you laying on me", text: "You half-hiding, scared, laying on me while we watched horror clips. I would sit through anything to be the place you feel safe." },
  { title: "Barca games", text: "Watching Barca with you and getting way too invested. You somehow made even the football better." },
  { title: "Watching Off Campus", text: "Our first show. Starting it together and never wanting the episode to be the last one of the night." },
  { title: "January 4th. That kiss.", text: "Where all of this started. That night, that kiss. I replay it more often than I will ever admit to you." },
  { title: "Texting the whole way back from the cabin", text: "The entire ride home, phone in hand, not wanting the conversation to stop even after a whole weekend with you." },
  { title: "Every single call, all six months", text: "Every call. The long ones, the sleepy ones, the ones about nothing at all. Hearing your voice is still the best part of my day." },
  { title: "Every single text, all six months", text: "Every text, every one of them. Six months of your name lighting up my phone and flipping my whole mood with it." },
  { title: "Every single photo you sent", text: "Every photo you sent me, I kept. Each one felt like quiet proof that I actually get to call you mine." },
  { title: "Doing work on the phone together", text: "Even just doing our own work on call, barely talking. Being on the line with you still beats being anywhere else." }
];

const bridgeMessages = [
  "One step closer.",
  "Still choosing you.",
  "The distance is getting nervous.",
  "Your name still feels close.",
  "I miss you, but I am not going anywhere.",
  "Almost there.",
  "Us is stronger than the space.",
  "Distance loses. We win."
];

/* the worlds she loves */
const ghibliTitles = ["Spirited Away", "Howl's Moving Castle", "Whisper of the Heart", "Kiki's Delivery Service", "My Neighbor Totoro", "Ponyo"];
const series = ["Avatar: The Last Airbender", "Cardcaptor Sakura", "Snow White with the Red Hair", "She-Ra and the Princesses of Power", "Fuller House", "Kipo and the Age of Wonderbeasts", "Kaichou wa Maid-sama!", "InuYasha", "Fruits Basket", "Start-Up", "Strong Girl Bong-soon", "Business Proposal"];
const movies = ["Spirited Away", "Howl's Moving Castle", "Whisper of the Heart", "Frozen 2", "Coraline", "Your Name (Kimi no Na wa)", "Belle"];
const alsoLoved = ["Kakushigoto: My Dad's Secret Ambition", "The Royal Tutor", "Kamisama Hajimemashita"];
const rereads = ["Kirameki no Lion Boy", "Under the Oak Tree", "Second to None Adoration", "Your Majesty, Please Watch Your Figure", "Coffee and Vanilla", "Namaikizakari", "Renai Gokko Sayokyoku", "The Kind Goblin's Bird", "Gunjou Reflection", "Sei-chan, Your Love Is Too Much", "Ore Yome", "Honey Lemon Soda", "Just for a Meowment", "She May Not Be Cute", "Honey Come Honey", "I Met the Male Lead in Prison", "Beatrice", "Hayaku Shitai Futari", "Please Throw Me Away", "Seduce the Villain's Father", "The Bittersweet Couple", "Na no ni Chigira-kun", "Kimi wa Kawaii Onnanoko", "Positively Yours", "Devious New Employee", "Give Me a Flower, I Will Give You All of Me", "Elixir of the Sun", "Surely a Happy Ending", "Suki Kirai Kiss", "Inazuma to Romance", "Business Proposal", "Noraneko to Ookami", "Sixth Sense Kiss", "Blissful Marriage"];

const repeatedMemoryPhotoSources = new Set([
  "p02.webp",
  "p07.webp"
]);

const startDate = new Date("2026-01-04T00:00:00");
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeMonth = 0;
let shownReasons = 6;
let bridgeStep = 0;
let holdTimer = null;
let holdProgress = 0;
let toastTimer = null;

document.body.classList.add("begin-open", "no-scroll");

/* ---------------- toast ---------------- */
function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove("is-visible"), 2600);
}

/* ---------------- effects ---------------- */
function hearts(x, y, count = 18) {
  if (reduceMotion) return;
  const layer = $("#effects");
  const palette = ["#8e2a4d", "#b8466a", "#bb934c", "#e9bdc4"];
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.background = palette[i % palette.length];
    heart.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
    heart.style.setProperty("--dy", `${(Math.random() - 0.2) * 70}px`);
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 1350);
  }
}

function petalsBurst(x, y, count = 26) {
  if (reduceMotion) return;
  const layer = $("#effects");
  const palette = ["#e9bdc4", "#f6dcdf", "#d8b977", "#b8d8cb", "#8e2a4d"];
  for (let i = 0; i < count; i += 1) {
    const bit = document.createElement("span");
    bit.className = "petal-bit";
    bit.style.left = `${x}px`;
    bit.style.top = `${y}px`;
    bit.style.setProperty("--c", palette[i % palette.length]);
    bit.style.setProperty("--dx", `${(Math.random() - 0.5) * 260}px`);
    bit.style.setProperty("--dy", `${80 + Math.random() * 200}px`);
    bit.style.setProperty("--r", `${(Math.random() - 0.5) * 460}deg`);
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 1600);
  }
}

/* ---------------- drifting petals + ghibli dust ---------------- */
function initPetals() {
  if (reduceMotion) return;
  const canvas = $("#petals");
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const petalColors = ["rgba(233,189,196,0.55)", "rgba(216,185,119,0.45)", "rgba(246,220,223,0.6)", "rgba(184,216,203,0.4)"];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(46, Math.floor(w / 30));
    particles = Array.from({ length: count }, () => spawn());
  }

  function spawn() {
    const dust = Math.random() < 0.45; // ghibli magic motes
    return {
      dust,
      x: Math.random() * w,
      y: Math.random() * h - h,
      r: dust ? 1.2 + Math.random() * 2.2 : 4 + Math.random() * 7,
      speed: dust ? 0.15 + Math.random() * 0.4 : 0.3 + Math.random() * 0.8,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.005 + Math.random() * 0.015,
      drift: 0.3 + Math.random() * 0.7,
      glow: 0.4 + Math.random() * 0.6,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      rot: Math.random() * Math.PI
    };
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.y += p.speed;
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * p.drift;
      p.rot += 0.01;
      if (p.y > h + 20) { Object.assign(p, spawn(), { y: -20 }); }
      ctx.save();
      ctx.translate(p.x, p.y);
      if (p.dust) {
        ctx.globalAlpha = (0.4 + Math.sin(p.sway) * 0.3) * p.glow;
        ctx.fillStyle = "rgba(255, 244, 214, 0.95)";
        ctx.shadowColor = "rgba(216, 185, 119, 0.9)";
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.62, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

/* ---------------- scroll reveal ---------------- */
function initReveal() {
  const items = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => observer.observe(el));
}

/* ---------------- hero parallax ---------------- */
function initParallax() {
  if (reduceMotion) return;
  const stack = $(".portrait-stack");
  if (!stack) return;
  const cards = $$(".photo-card", stack);
  stack.addEventListener("pointermove", (event) => {
    const rect = stack.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    cards.forEach((card, i) => {
      const depth = (i + 1) * 6;
      card.style.translate = `${dx * depth}px ${dy * depth}px`;
    });
  });
  stack.addEventListener("pointerleave", () => {
    cards.forEach((card) => { card.style.translate = "0 0"; });
  });
}

/* ---------------- begin ---------------- */
function initBegin() {
  $("#beginButton").addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    hearts(cx, cy, 26);
    petalsBurst(cx, cy, 34);
    $("#beginScreen").classList.add("is-hidden");
    document.body.classList.remove("begin-open", "no-scroll");
    toast("Read it slowly. This one is honest.");
    setTimeout(() => $("#beginScreen")?.remove(), 720);
  });
}

/* ---------------- counter ---------------- */
function initCounter() {
  const update = () => {
    const total = Math.max(0, Math.floor((Date.now() - startDate.getTime()) / 1000));
    const values = [
      Math.floor(total / 86400),
      Math.floor((total % 86400) / 3600),
      Math.floor((total % 3600) / 60),
      total % 60
    ];
    $$("#timeGrid b").forEach((node, index) => {
      node.textContent = String(values[index]).padStart(index === 0 ? 1 : 2, "0");
    });
  };
  update();
  setInterval(update, 1000);
}

/* ---------------- months ---------------- */
function renderMonths() {
  const tabs = $("#monthTabs");
  tabs.innerHTML = months.map((month, index) => (
    `<button class="month-tab ${index === activeMonth ? "is-active" : ""}" type="button" data-month="${index}">month ${month.label}</button>`
  )).join("");

  const month = months[activeMonth];
  const photo = photos[month.photo];
  $("#monthDetail").innerHTML = `
    <img src="${photo[0]}" alt="${photo[1]}">
    <div>
      <p class="eyebrow">month ${month.label}</p>
      <h3>${month.title}</h3>
      <p>${month.text}</p>
    </div>
  `;

  $$(".month-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeMonth = Number(button.dataset.month);
      renderMonths();
    });
  });
}

/* ---------------- envelopes ---------------- */
function renderEnvelopes() {
  const grid = $("#envelopeGrid");
  grid.innerHTML = envelopes.map((item, index) => `
    <button class="envelope reveal" type="button" data-envelope="${index}" aria-expanded="false">
      <span class="seal" aria-hidden="true">&#9829;</span>
      <strong>${item.title}</strong>
      <p>${item.closed}</p>
    </button>
  `).join("");

  $$(".envelope").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.envelope);
      const isOpen = button.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.querySelector("p").textContent = isOpen ? envelopes[index].open : envelopes[index].closed;
      if (isOpen) {
        const rect = button.getBoundingClientRect();
        hearts(rect.left + rect.width / 2, rect.top + 30, 8);
        toast("A note for Vanika opened.");
      }
    });
  });
}

/* ---------------- memory wall ---------------- */
function renderMemories() {
  const wall = $("#memoryWall");
  const uniqueMemoryPhotos = photos
    .map((photo, index) => ({ photo, index }))
    .filter(({ photo }) => !repeatedMemoryPhotoSources.has(photo[0]));

  wall.innerHTML = uniqueMemoryPhotos.map(({ photo, index }) => `
    <button class="memory-tile reveal" type="button" data-photo="${index}">
      <img src="${photo[0]}" alt="${photo[1]}" loading="lazy">
      <span>${photo[1]}</span>
    </button>
  `).join("");

  $$("[data-photo]").forEach((button) => {
    button.addEventListener("click", () => openPhoto(Number(button.dataset.photo)));
  });
}

function openPhoto(index) {
  const [src, title, text] = photos[index];
  $("#modalImage").src = src;
  $("#modalImage").alt = title;
  $("#modalTitle").textContent = title;
  $("#modalText").textContent = text;
  $("#photoModal").classList.add("is-open");
  $("#photoModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  $("#photoModal").classList.remove("is-open");
  $("#photoModal").setAttribute("aria-hidden", "true");
  if (!$("#beginScreen")) document.body.classList.remove("no-scroll");
}

function initModal() {
  $$("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  $("#photoModal").addEventListener("click", (event) => {
    if (event.target.id === "photoModal") closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

/* ---------------- favorite moments ---------------- */
function renderMoments() {
  $("#momentsGrid").innerHTML = favoriteMoments.map((item, index) => `
    <article class="moment-card reveal">
      <span class="idx" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

/* ---------------- quiet things ---------------- */
function renderQuiet() {
  $("#quietList").innerHTML = quietThings.map((item) => `
    <article class="quiet-item reveal">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

/* ---------------- worlds she loves ---------------- */
function tagHTML(list) {
  return list.map((t) => `<span class="world-tag">${t}</span>`).join("");
}

function renderWorlds() {
  $("#ghibliTags").innerHTML = tagHTML(ghibliTitles);
  $("#seriesTags").innerHTML = tagHTML(series);
  $("#movieTags").innerHTML = tagHTML(movies);
  $("#alsoTags").innerHTML = tagHTML(alsoLoved);
  $("#rereadTags").innerHTML = tagHTML(rereads);
}

/* ---------------- reasons ---------------- */
function renderReasons() {
  const visible = reasons.slice(0, shownReasons);
  $("#reasonGrid").innerHTML = visible.map((reason) => `<div class="reason-card">${reason}</div>`).join("");
  $("#reasonCount").textContent = `${shownReasons} of ${reasons.length} shown`;
  $("#revealReason").textContent = shownReasons >= reasons.length ? "All 36 reasons are open" : "Reveal another reason";
}

function initReasons() {
  renderReasons();
  $("#revealReason").addEventListener("click", (event) => {
    if (shownReasons < reasons.length) {
      shownReasons += 1;
      renderReasons();
      const rect = event.currentTarget.getBoundingClientRect();
      hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
    } else {
      toast("I still have more. They just would not fit.");
    }
  });
}

/* ---------------- bridge ---------------- */
function initBridge() {
  const bridge = $("#bridge");
  bridge.innerHTML = bridgeMessages.map((_, index) => (
    `<button class="bridge-heart" type="button" data-step="${index}" aria-label="Bridge step ${index + 1}">&#9829;</button>`
  )).join("");

  $$(".bridge-heart").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.step);
      bridgeStep = Math.max(bridgeStep, index + 1);
      $$(".bridge-heart").forEach((heart, heartIndex) => {
        heart.classList.toggle("is-on", heartIndex < bridgeStep);
      });
      $("#bridgeText").textContent = bridgeMessages[bridgeStep - 1];
      const rect = button.getBoundingClientRect();
      hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 7);
      if (bridgeStep === bridgeMessages.length) {
        petalsBurst(rect.left + rect.width / 2, rect.top, 24);
      }
    });
  });
}

/* ---------------- promise ---------------- */
function initPromise() {
  const button = $("#holdButton");
  const fill = $("#holdFill");
  const setProgress = (value) => {
    holdProgress = Math.max(0, Math.min(100, value));
    fill.style.width = `${holdProgress}%`;
  };
  const stop = () => {
    clearInterval(holdTimer);
    holdTimer = null;
    if (holdProgress < 100) {
      setProgress(0);
      $("#promiseText").textContent = "Not tapped. Held. Because I mean it.";
    }
  };

  button.addEventListener("pointerdown", (event) => {
    button.setPointerCapture?.(event.pointerId);
    clearInterval(holdTimer);
    setProgress(0);
    $("#promiseText").textContent = "Keep holding. I am sealing it.";
    holdTimer = setInterval(() => {
      setProgress(holdProgress + 4);
      if (holdProgress >= 100) {
        clearInterval(holdTimer);
        holdTimer = null;
        $("#promiseText").textContent = "Sealed. I choose you in the real world too.";
        const rect = button.getBoundingClientRect();
        hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 30);
        petalsBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 32);
        toast("Promise sealed for Vanika.");
      }
    }, 42);
  });
  button.addEventListener("pointerup", stop);
  button.addEventListener("pointercancel", stop);
  button.addEventListener("pointerleave", stop);
}

/* ---------------- hero hearts ---------------- */
function initHeroHearts() {
  $("#heartButton").addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 24);
    toast("Sent straight to Vanika.");
  });

  $("#foreverButton").addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 36);
    petalsBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
    $("#foreverLine").textContent = "Six months down. I choose you today, tomorrow, and on purpose.";
  });
}

initPetals();
initParallax();
initBegin();
initCounter();
renderMonths();
renderEnvelopes();
renderMemories();
renderMoments();
renderQuiet();
renderWorlds();
initReasons();
initBridge();
initPromise();
initHeroHearts();
initModal();
initReveal(); // run last so dynamically rendered cards are observed too
