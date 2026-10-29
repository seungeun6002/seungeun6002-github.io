// ───────────── 내용 (여기만 고치면 홈페이지 내용이 바뀝니다) ─────────────
// 사진은 assets 폴더에 같은 이름의 .jpg 파일로 넣으면 자동으로 보입니다.

const SITE = {
  title: "lily's favorite",
  intro: "여행하고, 카드를 뒤집고, 동네를 걷는 사람.\n좋아하는 것들을 차곡차곡 모아두는 공간이에요.",
  categories: [
    {
      id: "travel", name: "여행", en: "Travel", icon: "plane",
      desc: "다녀온 곳과 가고 싶은 곳",
      subs: [
        { id: "domestic", name: "국내 여행", desc: "가까이에서 찾은 좋은 장면들", items: [
          { img: "travel-domestic-1", title: "제주, 바람 많은 날", date: "2026.05", tags: ["제주"], text: "오름 위에서 한참을 앉아 있었던 날. 다음엔 가을에 다시." },
          { img: "travel-domestic-2", title: "경주 한옥 골목", date: "2026.03", tags: ["경주"], text: "아침 일찍 걸으면 골목이 온전히 내 것이 된다." },
        ]},
        { id: "abroad", name: "해외 여행", desc: "멀리서 만난 낯선 하루", items: [
          {
            id: "shanghai", img: "shanghai-1", title: "상하이, 낮과 밤이 다른 도시", date: "2025.○○", tags: ["중국", "상하이"],
            text: "와이탄의 야경부터 예원의 오래된 골목까지. 하루에도 몇 번씩 얼굴이 바뀌던 도시.",
            detail: {
              photos: ["shanghai-1", "shanghai-5", "shanghai-2", "shanghai-3", "shanghai-4"],
              intro: "비행기로 2시간이면 닿는 가까운 도시인데, 도착하자마자 완전히 다른 세계에 온 기분이었다. 낮에는 오래된 골목을 걷고, 밤에는 강변 야경을 보러 나갔다.",
              spots: [
                { name: "와이탄 (外滩)", text: "황푸강을 사이에 두고 유럽풍 건물과 푸둥의 마천루가 마주 보는 곳. 해 질 무렵에 가서 불이 켜지는 순간까지 기다리는 걸 추천." },
                { name: "예원 (豫园)", text: "명나라 때 만들어진 정원. 아침 개장 직후에 가면 사람이 적어서 정원 구석구석을 여유롭게 볼 수 있다." },
                { name: "난징루 보행가 (南京路)", text: "상하이의 대표 쇼핑 거리. 걷다가 출출해지면 근처에서 샤오롱바오 한 판." },
                { name: "동방명주 (东方明珠)", text: "푸둥의 상징 같은 방송탑. 올라가지 않아도 강 건너에서 보는 모습이 가장 예쁘다." },
              ],
              tips: [
                "현지 결제는 알리페이·위챗페이가 기본. 출국 전에 해외 카드 연동해 두기.",
                "지하철이 잘 되어 있어서 이동은 지하철 + 도보로 충분.",
                "야경은 와이탄 쪽에서, 사진은 강변 산책로 계단에서 찍으면 사람이 덜 걸린다.",
              ],
            },
          },
          {
            id: "fukuoka", img: "fukuoka-3", title: "후쿠오카, 먹고 걷고 또 먹고", date: "2025.○○", tags: ["일본", "후쿠오카"],
            text: "다자이후의 초록 다리, 하카타의 오래된 골목, 그리고 밤의 포장마차. 짧게 다녀오기 딱 좋은 도시.",
            detail: {
              photos: ["fukuoka-3", "fukuoka-2", "fukuoka-5", "fukuoka-1", "fukuoka-4"],
              intro: "비행기로 1시간 남짓, 공항에서 시내까지 지하철로 10분. 도착한 날부터 바로 여행이 시작되는 도시였다. 계획보다 먹는 일정이 훨씬 길어졌지만 후회는 없다.",
              spots: [
                { name: "다자이후 텐만구 (太宰府天満宮)", text: "학문의 신을 모신 신사. 연못 위 붉은 다리를 건너 들어가는 길이 예쁘다. 참배길의 우메가에모치(매화떡)는 꼭 따끈할 때." },
                { name: "하카타 구시가지 (博多旧市街)", text: "절과 신사가 모여 있는 조용한 동네. 기와와 돌을 섞어 쌓은 '하카타베이' 담장을 따라 걷기 좋다." },
                { name: "나카스 포장마차 (中洲屋台)", text: "해가 지면 강변을 따라 야타이가 하나둘 불을 켠다. 모르는 사람과 나란히 앉아 먹는 분위기가 이 도시의 매력." },
                { name: "하카타 라멘 & 모츠나베", text: "진한 돈코츠 라멘은 면 익힘을 '카타(단단하게)'로. 저녁엔 곱창전골 모츠나베로 마무리." },
              ],
              tips: [
                "공항 ↔ 하카타역 지하철 약 5분, 텐진까지 약 11분. 짐이 있어도 이동이 편하다.",
                "다자이후는 니시테츠 텐진역에서 전철로 약 30~40분. 오전에 다녀오면 한적하다.",
                "포장마차는 현금만 받는 곳이 많으니 동전과 지폐를 넉넉히.",
              ],
            },
          },
          { img: "travel-abroad-1", title: "교토의 이른 아침", date: "2025.11", tags: ["일본"], text: "단풍이 절정이던 주. 사람 없는 시간을 노려서 성공." },
          { img: "travel-abroad-2", title: "파리, 강변 산책", date: "2025.06", tags: ["프랑스"], text: "해가 길어서 밤 10시까지 걸었다." },
        ]},
        { id: "wish", name: "가고 싶은 곳", desc: "언젠가 꼭 갈 버킷리스트", items: [
          { img: "travel-wish-1", title: "아이슬란드 오로라", date: "언젠가", tags: ["버킷리스트"], text: "겨울, 링로드 일주와 오로라." },
          { img: "travel-wish-2", title: "산토리니 일몰", date: "언젠가", tags: ["버킷리스트"], text: "이아 마을에서 해 지는 것 보기." },
        ]},
      ],
    },
    {
      id: "tarot", name: "타로", en: "Tarot", icon: "spark",
      desc: "카드로 나에게 묻는 시간",
      subs: [
        { id: "daily", name: "오늘의 카드", desc: "하루 한 장, 카드를 뽑아보세요", type: "daily" },
        { id: "major", name: "메이저 아르카나", desc: "22장의 카드와 키워드", type: "major" },
        { id: "note", name: "타로 노트", desc: "리딩 기록과 배운 것들", items: [
          { img: "tarot-note-1", title: "쓰리 카드 스프레드", date: "2026.09", tags: ["스프레드"], text: "과거 · 현재 · 미래. 가장 기본이지만 가장 자주 쓰는 배열." },
          { img: "tarot-note-2", title: "역방향 해석 연습", date: "2026.08", tags: ["공부"], text: "역방향을 '막힘'이 아니라 '안쪽으로 향한 에너지'로 읽어보기." },
        ]},
      ],
    },
    {
      id: "estate", name: "부동산 재테크", en: "Real estate", icon: "building",
      desc: "발로 뛰고 기록하는 재테크",
      subs: [
        { id: "visit", name: "임장 기록", desc: "직접 걸어본 동네 이야기", items: [
          { img: "estate-visit-1", title: "역세권 신축 단지 임장", date: "2026.10", tags: ["임장"], text: "역까지 실제 도보 9분. 언덕이 있어 체감은 더 길다." },
          { img: "estate-visit-2", title: "재개발 구역 둘러보기", date: "2026.07", tags: ["재개발"], text: "골목 폭, 상권, 학교 위치를 체크리스트로 확인." },
        ]},
        { id: "study", name: "공부 노트", desc: "책과 강의에서 배운 것", items: [
          { img: "estate-study-1", title: "전세가율 읽는 법", date: "2026.09", tags: ["기초"], text: "매매가 대비 전세가 비율로 수요와 갭을 가늠해 보기." },
          { img: "estate-study-2", title: "청약 가점 계산", date: "2026.06", tags: ["청약"], text: "무주택 기간 · 부양가족 · 통장 가입 기간, 3가지 항목." },
        ]},
        { id: "area", name: "관심 지역", desc: "눈여겨보는 동네 리스트", items: [
          { img: "estate-area-1", title: "교통 호재 지역", date: "관찰 중", tags: ["교통"], text: "신규 노선 개통 일정과 주변 시세 흐름을 지켜보는 중." },
          { img: "estate-area-2", title: "학군 선호 지역", date: "관찰 중", tags: ["학군"], text: "학원가 밀집도와 실거주 수요 위주로 정리." },
        ]},
      ],
    },
  ],
};

const MAJOR = [
  ["0", "바보", "The Fool", "새로운 시작 · 자유"],
  ["I", "마법사", "The Magician", "의지 · 창조력"],
  ["II", "여사제", "The High Priestess", "직관 · 내면의 지혜"],
  ["III", "여황제", "The Empress", "풍요 · 돌봄"],
  ["IV", "황제", "The Emperor", "안정 · 리더십"],
  ["V", "교황", "The Hierophant", "전통 · 배움"],
  ["VI", "연인", "The Lovers", "사랑 · 선택"],
  ["VII", "전차", "The Chariot", "전진 · 승리"],
  ["VIII", "힘", "Strength", "용기 · 인내"],
  ["IX", "은둔자", "The Hermit", "성찰 · 고요"],
  ["X", "운명의 수레바퀴", "Wheel of Fortune", "변화 · 기회"],
  ["XI", "정의", "Justice", "균형 · 공정"],
  ["XII", "매달린 사람", "The Hanged Man", "관점 전환 · 기다림"],
  ["XIII", "죽음", "Death", "끝맺음 · 새 출발"],
  ["XIV", "절제", "Temperance", "조화 · 중용"],
  ["XV", "악마", "The Devil", "집착 · 유혹"],
  ["XVI", "탑", "The Tower", "급변 · 깨달음"],
  ["XVII", "별", "The Star", "희망 · 치유"],
  ["XVIII", "달", "The Moon", "불안 · 무의식"],
  ["XIX", "태양", "The Sun", "기쁨 · 성공"],
  ["XX", "심판", "Judgement", "각성 · 부활"],
  ["XXI", "세계", "The World", "완성 · 성취"],
];

const MESSAGES = [
  "오늘은 마음이 가는 쪽으로 한 걸음.",
  "서두르지 않아도 괜찮은 하루예요.",
  "작은 선택이 큰 흐름을 만들어요.",
  "익숙한 것에서 새로운 걸 발견해 보세요.",
  "오늘의 직감을 믿어보세요.",
];

// ───────────── 아이콘 ─────────────
const ICONS = {
  home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
  plane: '<path d="M10.5 13.5L3 11l1.5-1.5 8 1 4-4c1-1 2.5-1.5 3.5-.5s.5 2.5-.5 3.5l-4 4 1 8L15 23l-2.5-7.5"/>',
  spark: '<path d="M12 3l1.8 5.6L19.5 10l-5.7 1.4L12 17l-1.8-5.6L4.5 10l5.7-1.4z"/><path d="M18.5 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  building: '<path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M3 21h18M8 8h2M8 12h2M8 16h2M17 13h0M17 17h0"/>',
  chevR: '<path d="M9 6l6 6-6 6"/>',
  chevD: '<path d="M6 9l6 6 6-6"/>',
};
const icon = (name, size = 22) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${ICONS[name]}</svg>`;
const photo = (name, cls = "") => `<div class="ph ${cls}"><img src="assets/${name}.jpg" alt="" loading="lazy" onerror="this.remove()"></div>`;
const nl2br = (s) => s.replace(/\n/g, "<br>");

// ───────────── 화면 그리기 ─────────────
function crumb(parts) {
  return `<nav class="crumb" aria-label="현재 위치">${parts
    .map((p, i) => (i < parts.length - 1 ? `<a href="${p[1]}">${p[0]}</a><span aria-hidden="true">/</span>` : `<span>${p[0]}</span>`))
    .join("")}</nav>`;
}

function renderHome() {
  return `
    <div class="hero-wrap">
      ${photo("hero", "hero")}
      <div class="hero-text">
        <p class="eyebrow">Hobby archive</p>
        <h1 class="h1">${SITE.title}</h1>
      </div>
    </div>
    <section class="section">
      <p class="lead" style="margin-top:0">${nl2br(SITE.intro)}</p>
    </section>
    <section class="section">
      <h2 class="h2" style="margin-bottom:14px">Favorites</h2>
      <div class="cat-list">
        ${SITE.categories.map((c) => `
          <a class="cat-card" href="#/${c.id}">
            ${photo(c.id)}
            <div class="body">
              <div>
                <p class="eyebrow">${c.en}</p>
                <p class="name">${c.name}</p>
                <p class="desc">${c.desc}</p>
              </div>
              <span class="chev">${icon("chevR", 20)}</span>
            </div>
          </a>`).join("")}
      </div>
    </section>`;
}

function renderCategory(c) {
  return `
    <div class="hero-wrap">
      ${photo(c.id, "hero")}
      <div class="hero-text">
        <p class="eyebrow">${c.en}</p>
        <h1 class="h1">${c.name}</h1>
      </div>
    </div>
    ${crumb([["홈", "#/"], [c.name]])}
    <section class="section">
      <p class="lead" style="margin:0 0 18px">${c.desc}</p>
      <div class="row-list">
        ${c.subs.map((s) => `
          <a class="row" href="#/${c.id}/${s.id}">
            ${photo(`${c.id}-${s.id}`)}
            <div class="txt">
              <p class="name">${s.name}</p>
              <p class="desc">${s.desc}</p>
            </div>
            <span class="chev">${icon("chevR", 18)}</span>
          </a>`).join("")}
      </div>
    </section>`;
}

function renderSub(c, s) {
  let body = "";
  if (s.type === "major") {
    body = `<div class="tarot-grid">${MAJOR.map(([n, k, e, kw]) => `
      <div class="tcard">
        <span class="num">${n}</span>
        <span class="mark">${icon("spark", 22)}</span>
        <div><p class="kname">${k}</p><p class="ename">${e}</p></div>
        <p class="kw">${kw}</p>
      </div>`).join("")}</div>`;
  } else if (s.type === "daily") {
    body = `
      <div class="draw">
        <div class="flip" id="flip">
          <div class="flip-inner">
            <div class="face back"></div>
            <div class="face front" id="front"></div>
          </div>
        </div>
        <p class="draw-msg" id="drawMsg">마음속으로 질문을 하나 떠올리고<br>카드를 뽑아보세요.</p>
        <button class="btn" id="drawBtn">카드 뽑기</button>
      </div>`;
  } else {
    body = `<div class="posts">${s.items.map((it) => {
      const inner = `
        ${photo(it.img)}
        <p class="meta">${it.date} &nbsp; ${it.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</p>
        <h3 class="title">${it.title}</h3>
        <p class="text">${it.text}</p>`;
      return it.detail
        ? `<a class="post" href="#/${c.id}/${s.id}/${it.id}">${inner}<span class="more">자세히 보기 ${icon("chevR", 14)}</span></a>`
        : `<article class="post">${inner}</article>`;
    }).join("")}</div>`;
  }
  return `
    ${crumb([["홈", "#/"], [c.name, `#/${c.id}`], [s.name]])}
    <section class="section" style="padding-top:12px">
      <p class="eyebrow">${c.en}</p>
      <h1 class="h1">${s.name}</h1>
      <p class="lead">${s.desc}</p>
    </section>
    <section class="section">${body}</section>`;
}

function renderPost(c, s, it) {
  const d = it.detail;
  return `
    ${crumb([["홈", "#/"], [c.name, `#/${c.id}`], [s.name, `#/${c.id}/${s.id}`], [it.tags[it.tags.length - 1]]])}
    <section class="section" style="padding-top:12px">
      <p class="meta" style="font-size:12px;color:var(--muted)">${it.date} &nbsp; ${it.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</p>
      <h1 class="h1">${it.title}</h1>
    </section>
    <div class="gallery" aria-label="사진 모음">
      ${d.photos.map((p) => photo(p, "shot")).join("")}
    </div>
    <p class="gallery-hint">옆으로 넘겨보세요 · ${d.photos.length}장</p>
    <section class="section">
      <p class="body-text">${d.intro}</p>
    </section>
    <section class="section">
      <h2 class="h2" style="margin-bottom:12px">다녀온 곳</h2>
      <ol class="spots">
        ${d.spots.map((sp) => `<li><p class="name">${sp.name}</p><p class="text">${sp.text}</p></li>`).join("")}
      </ol>
    </section>
    <section class="section">
      <h2 class="h2" style="margin-bottom:12px">여행 팁</h2>
      <ul class="tips">${d.tips.map((t) => `<li>${t}</li>`).join("")}</ul>
    </section>
    <section class="section">
      <a class="back-link" href="#/${c.id}/${s.id}">${icon("chevR", 14)} ${s.name} 목록으로</a>
    </section>`;
}

// ───────────── 오늘의 카드 ─────────────
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
function setupDraw() {
  const btn = document.getElementById("drawBtn");
  if (!btn) return;
  const flip = document.getElementById("flip");
  const front = document.getElementById("front");
  const msg = document.getElementById("drawMsg");

  const show = (i, animate) => {
    const [n, k, e, kw] = MAJOR[i];
    front.innerHTML = `<span class="num">${n}</span><span class="kname">${k}</span><span class="ename">${e}</span><span class="kw">${kw}</span>`;
    const reveal = () => {
      flip.classList.add("is-open");
      msg.innerHTML = `${MESSAGES[i % MESSAGES.length]}<small>오늘의 카드는 하루 동안 그대로 유지돼요</small>`;
      btn.disabled = true;
      btn.textContent = "내일 다시 뽑기";
    };
    animate ? requestAnimationFrame(reveal) : reveal();
  };

  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("lily-daily") || "null"); } catch (_) {}
  if (saved && saved.day === todayKey()) show(saved.card, false);

  btn.addEventListener("click", () => {
    const i = Math.floor(Math.random() * MAJOR.length);
    try { localStorage.setItem("lily-daily", JSON.stringify({ day: todayKey(), card: i })); } catch (_) {}
    show(i, true);
  });
}

// ───────────── 메뉴 ─────────────
const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const menuBtn = document.getElementById("menuBtn");

function openMenu() {
  scrim.hidden = false;
  requestAnimationFrame(() => { scrim.classList.add("is-open"); drawer.classList.add("is-open"); });
  drawer.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}
function closeMenu() {
  scrim.classList.remove("is-open");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  setTimeout(() => { scrim.hidden = true; }, 250);
}
menuBtn.addEventListener("click", openMenu);
document.getElementById("closeBtn").addEventListener("click", closeMenu);
scrim.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

function buildNav() {
  document.getElementById("nav").innerHTML =
    `<li><div class="nav-row"><a href="#/">홈</a></div></li>` +
    SITE.categories.map((c) => `
      <li>
        <div class="nav-row">
          <a href="#/${c.id}">${c.name}</a>
          <button class="nav-toggle" aria-expanded="false" aria-controls="sub-${c.id}" aria-label="${c.name} 하위 메뉴">${icon("chevD")}</button>
        </div>
        <div class="sub" id="sub-${c.id}">
          <ul>${c.subs.map((s) => `<li><a href="#/${c.id}/${s.id}">${s.name}</a></li>`).join("")}</ul>
        </div>
      </li>`).join("");

  document.querySelectorAll(".nav-toggle").forEach((b) => {
    b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open));
      document.getElementById(b.getAttribute("aria-controls")).classList.toggle("is-open", open);
    });
  });

  document.getElementById("tabbar").innerHTML =
    `<a class="tab" href="#/" data-tab="">${icon("home")}<span>홈</span></a>` +
    SITE.categories.map((c) => `<a class="tab" href="#/${c.id}" data-tab="${c.id}">${icon(c.icon)}<span>${c.name.split(" ")[0]}</span></a>`).join("");
}

// ───────────── 화면 전환 ─────────────
function route() {
  const [catId, subId, postId] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const cat = SITE.categories.find((c) => c.id === catId);
  const sub = cat && cat.subs.find((s) => s.id === subId);
  const post = sub && sub.items && sub.items.find((it) => it.id === postId && it.detail);

  const view = document.getElementById("view");
  view.innerHTML = post ? renderPost(cat, sub, post) : sub ? renderSub(cat, sub) : cat ? renderCategory(cat) : renderHome();
  view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";

  document.title = post ? `${post.title} · ${SITE.title}` : sub ? `${sub.name} · ${SITE.title}` : cat ? `${cat.name} · ${SITE.title}` : SITE.title;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === (cat ? cat.id : "")));
  document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === location.hash || (a.getAttribute("href") === "#/" && !cat)));

  // 현재 카테고리의 하위 메뉴는 펼쳐 둠
  if (cat) {
    const t = document.querySelector(`[aria-controls="sub-${cat.id}"]`);
    t.setAttribute("aria-expanded", "true");
    document.getElementById(`sub-${cat.id}`).classList.add("is-open");
  }

  setupDraw();
  closeMenu();
  window.scrollTo(0, 0);
}

buildNav();
window.addEventListener("hashchange", route);
route();
