const memoryVideos = [
  {
    id: "hero",
    row: "top",
    title: "3 Years of Us",
    season: "Featured Memory",
    duration: "May 22",
    description: "The full journey of Aashan and Nisha in one beautiful anniversary episode.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/hero-journey.mp4",
    gradient: "linear-gradient(135deg, #e50914, #f0bd3c 52%, #1fb6b2)",
  },
  {
    id: "first-meet",
    row: "top",
    title: "The First Chapter",
    season: "Episode 1",
    duration: "Year 1",
    description: "Where everything started, with one hello that became three years of memories.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/Good Days.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/firstchapter.jpeg",
    gradient: "linear-gradient(135deg, #1577e5, #1fb6b2 58%, #f0bd3c)",
  },
  {
    id: "favorite-days",
    row: "top",
    title: "Favorite Days",
    season: "Episode 2",
    duration: "Story",
    description: "The little normal days that became favorite without trying.",
    story: "Some memories do not need a video. They live in small things: waiting for one reply, laughing at something random, sharing food, fighting and still caring, missing each other even when both are angry.\n\nThese are the favorite days, not because they were perfect, but because they were real. They became proof that love was there in ordinary moments too.",
    gradient: "linear-gradient(135deg, #f0bd3c, #e50914 60%, #1577e5)",
  },
  {
    id: "year-one-hello",
    row: "year1",
    title: "First Hello",
    season: "Year 1",
    duration: "Episode 1",
    description: "The beginning of Aashan and Nisha.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/Good Days.mp4",
    gradient: "linear-gradient(135deg, #1577e5, #7ac8ff)",
  },
  {
    id: "year-one-date",
    row: "year1",
    title: "First Date",
    season: "Year 1",
    duration: "Episode 2",
    description: "A small day that became a big memory.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/firstd.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/firstd.png",
    gradient: "linear-gradient(135deg, #e50914, #ff6b79)",
  },
  {
    id: "first-tiktok",
    row: "year1",
    title: "First TikTok",
    season: "Year 1",
    duration: "Episode 3",
    description: "That first TikTok memory that deserves its own episode.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/firsttt.mp4",
    gradient: "linear-gradient(135deg, #1fb6b2, #f0bd3c)",
  },
  {
    id: "the-jhol-momo",
    row: "year1",
    title: "The Jhol Momo",
    season: "Year 1",
    duration: "Episode 4",
    description: "That bamboo cottage where we spent valuable time together.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/jholmomo.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/jhl.jpeg",
    posterPosition: "center 38%",
    gradient: "linear-gradient(135deg, #2f1b12, #b85c38 52%, #f2c078)",
  },
  {
    id: "her-first-birthday-with-me",
    row: "year1",
    title: "Her First Birthday With Me",
    season: "Year 1",
    duration: "Episode 5",
    description: "The first birthday celebration she shared together, and a day that became his too.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/herbirthday.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/birth.jpeg",
    posterPosition: "center 34%",
    gradient: "linear-gradient(135deg, #e50914, #f6a5c0 52%, #f0bd3c)",
  },
  {
    id: "the-uncle",
    row: "year1",
    title: "The Uncle",
    season: "Year 1",
    duration: "Episode 6",
    description: "A 90s uncle-style video that became one of the funniest little memories.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/aashanuncle.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/uncaashan.jpeg",
    gradient: "linear-gradient(135deg, #111, #6d4c41 55%, #d6a15d)",
  },
  {
    id: "the-good-days-part-2",
    row: "year1",
    title: "The Good Days: Part 2",
    season: "Year 1",
    duration: "Episode 7",
    description: "Another piece of the good days, saved because some moments need a sequel.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/Goodday2.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/WhatsApp Image 2026-05-21 at 23.52.11.jpeg",
    gradient: "linear-gradient(135deg, #24456b, #7f5a83 52%, #f6c56f)",
  },
  {
    id: "late-night",
    row: "year1",
    title: "Late Night",
    season: "Year 1",
    duration: "Episode 9",
    description: "A quiet late-night memory from the days that felt soft, simple, and ours.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/l2.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/WhatsApp Image 2026-05-21 at 23.52.12.jpeg",
    gradient: "linear-gradient(135deg, #111827, #2f4f7f 52%, #f0bd3c)",
  },
  {
    id: "early-morning",
    row: "year1",
    title: "Early Morning",
    season: "Year 1",
    duration: "Coming Soon",
    description: "The morning episode is still sleeping. Coming soon after coffee and one more cute memory.",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/early_Morning.jpeg",
    posterPosition: "center 42%",
    comingSoon: true,
    gradient: "linear-gradient(135deg, #f5c06d, #8bb7d9 52%, #f7f2df)",
  },
  {
    id: "year-two-trips",
    row: "year2",
    title: "Trips and Talks",
    season: "Year 2",
    duration: "Episode 1",
    description: "Places you went, conversations you kept.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/202605211612.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/perfecto.jpeg",
    gradient: "linear-gradient(135deg, #243b55, #1fb6b2)",
  },
  {
    id: "year-two-comfort",
    row: "year2",
    title: "Comfort Zone",
    season: "Year 2",
    duration: "Episode 2",
    description: "When love started feeling like home.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/comfortdance.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/com.jpeg",
    gradient: "linear-gradient(135deg, #8a2387, #e94057 54%, #f27121)",
  },
  {
    id: "year-two-silly",
    row: "year2",
    title: "Silly Together",
    season: "Year 2",
    duration: "Episode 3",
    description: "The fun clips that deserve their own show.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/silly.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/Silly.jpeg",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
  },
  {
    id: "the-day-i-met-her",
    row: "year2",
    title: "The Day I Met Her",
    season: "Year 2",
    duration: "Episode 4",
    description: "That meeting-her kind of moment, when seeing her made the whole day feel special.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/202605212341 (1).mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/bow.jpeg",
    gradient: "linear-gradient(135deg, #2b1d38, #c46c44 52%, #f5d7a1)",
  },
  {
    id: "year-three-now",
    row: "year3",
    title: "The Distance Between Us",
    season: "Year 3",
    duration: "Episode 1",
    description: "Long distance made small things heavy, but missing her still meant loving her.",
    story: "Year 3 was not easy. Distance made everything louder: late replies, small doubts, overthinking, and the feeling of wanting to be near but not being able to.\n\nStill, even from far away, you stayed in my mind. Some days love looked like waiting. Some days it looked like trying to understand each other through a screen.",
    gradient: "linear-gradient(135deg, #111827, #334155 48%, #e50914)",
  },
  {
    id: "year-three-promises",
    row: "year3",
    title: "The Silence",
    season: "Year 3",
    duration: "Episode 2",
    description: "The last few days without talking felt longer than they should have.",
    story: "These last few days have felt heavy. Not talking to her makes everything feel unfinished, like the heart keeps checking for one message again and again.\n\nMaybe both of you are hurt. Maybe both of you are tired. But silence does not mean the love disappeared. It only means this chapter needs gentleness, honesty, and one brave conversation.",
    gradient: "linear-gradient(135deg, #0f172a, #475569 52%, #f0bd3c)",
  },
  {
    id: "year-three-misunderstanding",
    row: "year3",
    title: "Misunderstanding",
    season: "Year 3",
    duration: "Episode 3",
    description: "Not every fight means the story is ending. Sometimes it means two hearts are asking to be heard.",
    story: "Some fights are not about winning. They are about pain coming out in the wrong words. Misunderstanding can make two people who love each other feel like strangers for a while.\n\nIf this story could speak here, it would say: I am sorry for the hurt. I do not want ego to be bigger than us. I want to understand you, not lose you.",
    gradient: "linear-gradient(135deg, #3b0764, #be123c 50%, #f97316)",
  },
  {
    id: "future-plan",
    row: "year3",
    title: "Future Plan",
    season: "Year 3",
    duration: "Episode 4",
    description: "Even after hard days, there is still a part of the heart making plans with her.",
    src: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/videos/plan.mp4",
    poster: "https://pub-1a125c46828845388af1f5af20fb0af0.r2.dev/assets/posters/Plan.jpeg",
    gradient: "linear-gradient(135deg, #0f172a, #2dd4bf 52%, #f0bd3c)",
  },
  {
    id: "year-three-forever",
    row: "year3",
    title: "Still Choosing You",
    season: "Year 3",
    duration: "Finale",
    description: "Three years were not perfect, but the love was never small.",
    story: "If you opens this, I hope you feels one thing clearly: I still care.\n\nYear 3 has been hard. Long distance, fights, silence, and misunderstandings made us tired. But I do not want the hard days to erase all the soft ones.\n\nI miss you. I miss talking to you. I miss us being okay. And if there is still a little space in your heart, I want us to talk, slowly and honestly.",
    gradient: "linear-gradient(135deg, #1577e5, #111827 46%, #e50914)",
  },
];

const profileButtons = document.querySelectorAll(".profile-card");
const profilesScreen = document.querySelector("#profilesScreen");
const unlockScreen = document.querySelector("#unlockScreen");
const unlockBackButton = document.querySelector("#unlockBackButton");
const unlockCard = document.querySelector(".unlock-card");
const unlockTitle = document.querySelector("#unlockTitle");
const unlockHint = document.querySelector("#unlockHint");
const unlockForm = document.querySelector("#unlockForm");
const monthOptions = document.querySelectorAll(".month-option");
const dayInput = document.querySelector("#dayInput");
const unlockMessage = document.querySelector("#unlockMessage");
const homeScreen = document.querySelector("#homeScreen");
const selectedInitial = document.querySelector("#selectedInitial");
const brandButton = document.querySelector(".brand-button");
const heroSection = document.querySelector("#homeHero");
const heroVideo = document.querySelector("#heroVideo");
const heroTitle = document.querySelector("#heroTitle");
const heroSubtitle = document.querySelector("#heroSubtitle");
const heroDescription = document.querySelector("#heroDescription");
const playHeroButton = document.querySelector("#playHeroButton");
const muteButton = document.querySelector("#muteButton");
const moreInfoButton = document.querySelector("#moreInfoButton");
const infoPanel = document.querySelector("#infoPanel");
const closeInfoButton = document.querySelector("#closeInfoButton");
const playerModal = document.querySelector("#playerModal");
const closePlayerButton = document.querySelector("#closePlayerButton");
const memoryPlayer = document.querySelector("#memoryPlayer");
const playerSeason = document.querySelector("#playerSeason");
const playerTitle = document.querySelector("#playerTitle");
const playerDescription = document.querySelector("#playerDescription");
const missingVideo = document.querySelector("#missingVideo");

const profileLocks = {
  Aashan: {
    month: "baishak",
    day: "18",
    keeper: "Nisha",
    title: "Aashan's Secret Gate",
    hint: "Nisha, enter Aashan's Nepali birthday to unlock the memories.",
  },
  Nisha: {
    month: "srawan",
    day: "6",
    keeper: "Aashan",
    title: "Nisha's Secret Gate",
    hint: "Aashan, enter Nisha's Nepali birthday to unlock the memories.",
  },
};

let selectedProfile = "";
let selectedMonth = "";
let rowArrowUpdaters = [];
let activeHeroVideoId = "hero";

const placeholderHeroIds = new Set([
  "hero",
  "year-three-now",
  "year-three-promises",
  "year-three-forever",
]);

function renderRows() {
  document.querySelectorAll(".video-row").forEach((rowElement) => {
    const rowName = rowElement.dataset.row;
    const rowVideos = rowName === "top"
      ? getPlayableMemories()
      : memoryVideos.filter((video) => video.row === rowName);

    rowElement.innerHTML = rowVideos
      .map((video) => {
        const cardClasses = [
          "memory-card",
          video.poster ? "has-poster" : "",
          !video.src ? "is-story-card" : "",
        ].filter(Boolean).join(" ");
        const videoSource = video.src ? ` src="${video.src}"` : "";
        const posterSource = video.poster ? ` poster="${video.poster}"` : "";

        return `
          <button class="${cardClasses}" type="button" data-video-id="${video.id}" aria-label="Open ${video.title}" style="--poster-gradient: ${video.gradient}; --poster-position: ${video.posterPosition || "center center"};">
            <span class="card-media">
              <video class="card-video" muted preload="metadata" playsinline${videoSource}${posterSource}></video>
              ${video.poster ? `<img class="poster-image" src="${video.poster}" alt="" />` : ""}
              <span class="poster-fallback" aria-hidden="true"></span>
              <span class="card-shade" aria-hidden="true"></span>
              ${video.src ? `
                <span class="card-mute" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M11 5 6 9H3v6h3l5 4z"></path>
                    <path d="m16 9 5 5"></path>
                    <path d="m21 9-5 5"></path>
                  </svg>
                </span>
              ` : `<span class="story-badge">Story</span>`}
              ${video.badge ? `<span class="recent-badge">${video.badge}</span>` : ""}
              <span class="card-title">${video.title}</span>
            </span>
          </button>
        `;
      })
      .join("");
  });
}

function setupRowArrows() {
  rowArrowUpdaters = [];

  document.querySelectorAll(".memory-row").forEach((row) => {
    const videoRow = row.querySelector(".video-row");

    if (!videoRow || row.querySelector(".row-arrow")) {
      return;
    }

    const previousButton = document.createElement("button");
    const nextButton = document.createElement("button");

    previousButton.className = "row-arrow row-arrow-left is-hidden";
    nextButton.className = "row-arrow row-arrow-right";
    previousButton.type = "button";
    nextButton.type = "button";
    previousButton.setAttribute("aria-label", "Scroll memories left");
    nextButton.setAttribute("aria-label", "Scroll memories right");
    previousButton.innerHTML = '<span aria-hidden="true"></span>';
    nextButton.innerHTML = '<span aria-hidden="true"></span>';

    row.append(previousButton, nextButton);

    const updateArrows = () => {
      const canScroll = videoRow.scrollWidth > videoRow.clientWidth + 4;
      const atStart = videoRow.scrollLeft <= 4;
      const atEnd = videoRow.scrollLeft + videoRow.clientWidth >= videoRow.scrollWidth - 4;

      previousButton.classList.toggle("is-hidden", !canScroll || atStart);
      nextButton.classList.toggle("is-hidden", !canScroll || atEnd);
    };

    const scrollRow = (direction) => {
      hideHoverPreview();
      videoRow.scrollBy({
        left: direction * Math.round(videoRow.clientWidth * 0.82),
        behavior: "smooth",
      });
    };

    previousButton.addEventListener("click", () => scrollRow(-1));
    nextButton.addEventListener("click", () => scrollRow(1));
    videoRow.addEventListener(
      "scroll",
      () => {
        hideHoverPreview();
        updateArrows();
      },
      { passive: true }
    );
    videoRow.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
          videoRow.scrollLeft += event.deltaY;
          event.preventDefault();
        }
      },
      { passive: false }
    );
    window.addEventListener("resize", updateArrows);
    rowArrowUpdaters.push(updateArrows);
    updateArrows();
  });
}

function updateAllRowArrows() {
  rowArrowUpdaters.forEach((updateArrows) => updateArrows());
}

const hoverPreview = document.createElement("div");
hoverPreview.className = "hover-preview is-hidden";
document.body.appendChild(hoverPreview);

let hoverHideTimer;
let hoverShowTimer;
let activePreviewVideoId = "";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderHoverPreview(video) {
  const posterContent = video.poster
    ? `<img class="preview-poster" src="${video.poster}" alt="" style="object-position: ${video.posterPosition || "center center"};" />`
    : video.src
      ? `<video class="preview-video" muted autoplay loop playsinline src="${video.src}"></video>`
      : "";

  hoverPreview.innerHTML = `
    <div class="preview-media">
      ${posterContent}
      <span class="poster-fallback" aria-hidden="true" style="--poster-gradient: ${video.gradient};"></span>
      <span class="card-shade" aria-hidden="true"></span>
      <span class="card-mute" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M11 5 6 9H3v6h3l5 4z"></path>
          <path d="m16 9 5 5"></path>
          <path d="m21 9-5 5"></path>
        </svg>
      </span>
      <span class="preview-title">${video.title}</span>
    </div>
    <div class="preview-details">
      <span class="hover-controls" aria-hidden="true">
        <span class="card-play"></span>
        <span class="round-icon plus-icon"></span>
        <span class="round-icon like-icon"></span>
        <span class="round-icon down-icon"></span>
      </span>
      <span class="hover-meta">
        <span class="age-rating">3+</span>
        <span>${video.duration}</span>
        <span class="quality-badge">HD</span>
      </span>
      <span class="hover-tags">${video.season} <b></b> Journey <b></b> Memories</span>
    </div>
  `;

  const previewVideo = hoverPreview.querySelector(".preview-video");

  if (previewVideo) {
    previewVideo.addEventListener("error", () => {
      previewVideo.classList.add("is-unavailable");
    });
  }
}

function positionHoverPreview(card) {
  const rect = card.getBoundingClientRect();
  const previewWidth = clamp(rect.width * 1.55, 360, Math.min(470, window.innerWidth - 24));
  const previewHeight = previewWidth * 0.5625 + 210;
  const left = clamp(rect.left + rect.width / 2 - previewWidth / 2, 12, window.innerWidth - previewWidth - 12);
  const top = clamp(rect.top - 42, 76, window.innerHeight - previewHeight - 12);

  hoverPreview.style.width = `${previewWidth}px`;
  hoverPreview.style.left = `${left}px`;
  hoverPreview.style.top = `${top}px`;
}

function showHoverPreview(card) {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  const video = findVideo(card.dataset.videoId);
  activePreviewVideoId = video.id;
  clearTimeout(hoverHideTimer);
  renderHoverPreview(video);
  positionHoverPreview(card);
  hoverPreview.classList.remove("is-hidden");
}

function hideHoverPreview() {
  clearTimeout(hoverShowTimer);
  clearTimeout(hoverHideTimer);
  hoverPreview.classList.add("is-hidden");
  hoverPreview.innerHTML = "";
  activePreviewVideoId = "";
}

function scheduleHideHoverPreview() {
  hoverHideTimer = window.setTimeout(() => {
    hideHoverPreview();
  }, 90);
}

function normalizeNepaliDigits(value) {
  const nepaliDigits = "०१२३४५६७८९";

  return value
    .trim()
    .split("")
    .map((character) => {
      const digitIndex = nepaliDigits.indexOf(character);
      return digitIndex >= 0 ? String(digitIndex) : character;
    })
    .join("")
    .replace(/\D/g, "");
}

function setSelectedMonth(month) {
  selectedMonth = month;
  monthOptions.forEach((option) => {
    option.classList.toggle("is-selected", option.dataset.month === selectedMonth);
  });
}

function resetUnlockState() {
  unlockForm.reset();
  setSelectedMonth("");
  unlockMessage.textContent = "";
  unlockMessage.className = "unlock-message";
  unlockCard.classList.remove("is-shaking", "is-unlocked");
}

function openUnlock(person) {
  const lock = profileLocks[person];

  selectedProfile = person;
  resetUnlockState();
  unlockTitle.textContent = lock.title;
  unlockHint.textContent = lock.hint;
  profilesScreen.classList.add("is-hidden");
  unlockScreen.classList.remove("is-hidden");
  window.setTimeout(() => dayInput.focus(), 180);
}

function closeUnlock() {
  unlockScreen.classList.add("is-hidden");
  profilesScreen.classList.remove("is-hidden");
  resetUnlockState();
}

function showUnlockError(message) {
  unlockMessage.textContent = message;
  unlockMessage.className = "unlock-message is-error";
  unlockCard.classList.remove("is-shaking");
  void unlockCard.offsetWidth;
  unlockCard.classList.add("is-shaking");
}

function submitUnlock() {
  const lock = profileLocks[selectedProfile];
  const enteredDay = normalizeNepaliDigits(dayInput.value);

  if (!selectedMonth) {
    showUnlockError("Choose the Nepali month first.");
    return;
  }

  if (!enteredDay) {
    showUnlockError("Add the day too. The lock is dramatic like that.");
    return;
  }

  if (selectedMonth === lock.month && enteredDay === lock.day) {
    unlockCard.classList.add("is-unlocked");
    unlockMessage.textContent = `Correct. Welcome, ${lock.keeper}.`;
    unlockMessage.className = "unlock-message is-success";

    window.setTimeout(() => {
      unlockScreen.classList.add("is-hidden");
      openHome(selectedProfile);
    }, 620);

    return;
  }

  showUnlockError("Not this date. Try the birthday that only you two know.");
}

function setupCardPreviews() {
  document.querySelectorAll(".memory-card").forEach((card) => {
    const preview = card.querySelector(".card-video");

    preview.addEventListener("loadeddata", () => {
      card.classList.add("has-video");
    });

    preview.addEventListener("error", () => {
      card.classList.add("is-missing");
    });

    card.addEventListener("mouseenter", () => {
      clearTimeout(hoverHideTimer);
      clearTimeout(hoverShowTimer);
      hoverShowTimer = window.setTimeout(() => {
        showHoverPreview(card);
      }, 420);

      if (card.classList.contains("has-poster")) {
        return;
      }

      if (!preview.getAttribute("src")) {
        return;
      }

      preview.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(hoverShowTimer);
      if (preview.getAttribute("src")) {
        preview.pause();
      }
      if (preview.readyState > 0) {
        preview.currentTime = 0;
      }
      scheduleHideHoverPreview();
    });
  });
}

hoverPreview.addEventListener("mouseenter", () => {
  clearTimeout(hoverHideTimer);
});

hoverPreview.addEventListener("mouseleave", scheduleHideHoverPreview);

hoverPreview.addEventListener("click", () => {
  if (activePreviewVideoId) {
    openPlayer(activePreviewVideoId);
  }
});

function getPlayableMemories() {
  return memoryVideos.filter((video) => {
    return video.src && !video.comingSoon && !placeholderHeroIds.has(video.id);
  });
}

function getHeroCandidates() {
  return getPlayableMemories();
}

function pickRandomHeroVideo() {
  const candidates = getHeroCandidates();

  if (!candidates.length) {
    return findVideo("hero");
  }

  const freshCandidates = candidates.length > 1
    ? candidates.filter((video) => video.id !== activeHeroVideoId)
    : candidates;

  return freshCandidates[Math.floor(Math.random() * freshCandidates.length)];
}

function updateHeroMemory(video = pickRandomHeroVideo()) {
  activeHeroVideoId = video.id;
  heroTitle.textContent = video.title;
  heroSubtitle.textContent = `${video.season} | ${video.duration}`;
  heroDescription.textContent = video.description;
  heroSection.style.setProperty("--hero-gradient", video.gradient || "linear-gradient(135deg, #151515, #262626 48%, #111)");
  heroVideo.classList.remove("is-unavailable");

  if (video.poster) {
    heroVideo.setAttribute("poster", video.poster);
  } else {
    heroVideo.removeAttribute("poster");
  }

  if (heroVideo.getAttribute("src") !== video.src) {
    heroVideo.src = video.src;
    heroVideo.load();
  }
}

function openHome(person) {
  selectedInitial.textContent = person.charAt(0).toUpperCase();
  profilesScreen.classList.add("is-hidden");
  unlockScreen.classList.add("is-hidden");
  homeScreen.classList.remove("is-hidden");
  document.body.classList.add("is-browsing");
  updateHeroMemory();
  heroVideo.play().catch(() => {});
  window.requestAnimationFrame(() => {
    updateAllRowArrows();
    window.setTimeout(updateAllRowArrows, 80);
  });
}

function openProfiles() {
  homeScreen.classList.add("is-hidden");
  unlockScreen.classList.add("is-hidden");
  profilesScreen.classList.remove("is-hidden");
  document.body.classList.remove("is-browsing");
  heroVideo.pause();
  resetUnlockState();
}

function findVideo(videoId) {
  return memoryVideos.find((video) => video.id === videoId) || memoryVideos[0];
}

function openPlayer(videoId) {
  const video = findVideo(videoId);

  hoverPreview.classList.add("is-hidden");
  hoverPreview.innerHTML = "";
  homeScreen.classList.add("is-hidden");
  document.body.classList.add("is-watching");
  heroVideo.pause();
  memoryPlayer.pause();
  memoryPlayer.removeAttribute("src");
  memoryPlayer.load();

  playerSeason.textContent = `${video.season} | ${video.duration}`;
  playerTitle.textContent = video.title;
  playerDescription.textContent = video.description;
  missingVideo.classList.add("is-hidden");
  missingVideo.textContent = "";

  if (video.comingSoon || !video.src) {
    const storyPoster = video.poster ? `url("${video.poster}")` : video.gradient || "linear-gradient(135deg, #121212, #242424)";

    memoryPlayer.classList.add("is-hidden");
    missingVideo.textContent = video.story || "Coming soon. This one is still being edited with extra love and probably too many sleepy morning clips.";
    missingVideo.classList.remove("is-hidden");
    playerModal.classList.add("is-coming-soon");
    playerModal.classList.toggle("is-story", !video.comingSoon);
    playerModal.style.setProperty("--coming-poster", storyPoster);
    playerModal.classList.remove("is-hidden");
    playerModal.scrollTo(0, 0);
    return;
  }

  playerModal.classList.remove("is-coming-soon");
  playerModal.classList.remove("is-story");
  playerModal.style.removeProperty("--coming-poster");
  memoryPlayer.classList.remove("is-hidden");
  memoryPlayer.src = video.src;
  playerModal.classList.remove("is-hidden");
  playerModal.scrollTo(0, 0);
  memoryPlayer.load();

  memoryPlayer.play().catch(() => {});
}

function closePlayer() {
  if (playerModal.classList.contains("is-hidden")) {
    return;
  }

  memoryPlayer.pause();
  playerModal.classList.add("is-hidden");
  playerModal.classList.remove("is-coming-soon");
  playerModal.classList.remove("is-story");
  playerModal.style.removeProperty("--coming-poster");
  memoryPlayer.classList.remove("is-hidden");
  homeScreen.classList.remove("is-hidden");
  document.body.classList.remove("is-watching");
}

renderRows();
setupRowArrows();
setupCardPreviews();

profileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openUnlock(button.dataset.person);
  });
});

monthOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setSelectedMonth(option.dataset.month);
    dayInput.focus();
  });
});

unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitUnlock();
});

unlockBackButton.addEventListener("click", closeUnlock);

brandButton.addEventListener("click", openProfiles);

playHeroButton.addEventListener("click", () => {
  openPlayer(activeHeroVideoId);
});

muteButton.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  muteButton.classList.toggle("is-sound-on", !heroVideo.muted);
  muteButton.setAttribute("aria-label", heroVideo.muted ? "Turn sound on" : "Turn sound off");
});

heroVideo.addEventListener("error", () => {
  heroVideo.classList.add("is-unavailable");
});

moreInfoButton.addEventListener("click", () => {
  infoPanel.classList.remove("is-hidden");
});

closeInfoButton.addEventListener("click", () => {
  infoPanel.classList.add("is-hidden");
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".memory-card");

  if (card) {
    openPlayer(card.dataset.videoId);
  }
});

memoryPlayer.addEventListener("error", () => {
  const failedSource = memoryPlayer.currentSrc || memoryPlayer.getAttribute("src") || "this video";
  missingVideo.textContent = `This video could not play in the browser: ${failedSource}`;
  missingVideo.classList.remove("is-hidden");
});

closePlayerButton.addEventListener("click", closePlayer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    infoPanel.classList.add("is-hidden");

    if (!playerModal.classList.contains("is-hidden")) {
      closePlayer();
      return;
    }

    if (!unlockScreen.classList.contains("is-hidden")) {
      closeUnlock();
    }
  }
});
