// 1. The Core Seed Data (30 Authentic Novels: 10 CN, 10 KR, 10 JP)
const seedNovels = [
  // --- CHINESE NOVELS (CN) ---
  { id: 1, title: "Lord of the Mysteries", nativeTitle: "诡秘之主", language: "Chinese", genre: "Mystery", author: "Cuttlefish That Loves Diving", chapters: 1432, timeAdded: "1 hour ago", views: "5,400,200", rating: "4.9", synopsis: "Waking up in an era of steam and machinery, Zhou Mingrui reincarnates as Klein Moretti. He must navigate a world of Beyonders, Eldritch horrors, and steampunk conspiracies." },
  { id: 2, title: "Reverend Insanity", nativeTitle: "蛊真人", language: "Chinese", genre: "Dark Fantasy", author: "Gu Zhen Ren", chapters: 2334, timeAdded: "2 hours ago", views: "4,100,500", rating: "4.8", synopsis: "Fang Yuan is a ruthless, scheming demonic cultivator who travels 500 years back in time. With no morals and ultimate ambition, he will sacrifice anything for eternal life." },
  { id: 3, title: "The King's Avatar", nativeTitle: "全职高手", language: "Chinese", genre: "Esports", author: "Butterfly Blue", chapters: 1728, timeAdded: "5 hours ago", views: "3,200,000", rating: "4.7", synopsis: "Ye Xiu, a top-tier pro player in the MMORPG Glory, is forced to retire. He starts over on a new server with a fresh character, aiming to climb back to the apex." },
  { id: 4, title: "Renegade Immortal", nativeTitle: "仙逆", language: "Chinese", genre: "Xianxia", author: "Er Gen", chapters: 2088, timeAdded: "1 day ago", views: "2,800,000", rating: "4.6", synopsis: "Wang Lin is a mediocre boy who joins a cultivation sect. Lacking talent, he survives through sheer grit, paranoia, and a heaven-defying bead." },
  { id: 5, title: "Martial Peak", nativeTitle: "武炼巅峰", language: "Chinese", genre: "Xuanhuan", author: "Momo", chapters: 6009, timeAdded: "2 days ago", views: "8,900,000", rating: "4.3", synopsis: "Yang Kai is a sweeping disciple who accidentally finds a Black Book. This encounter sets him on a martial path reaching the peak of the universe." },
  { id: 6, title: "Desolate Era", nativeTitle: "莽荒纪", language: "Chinese", genre: "Xianxia", author: "I Eat Tomatoes", chapters: 1450, timeAdded: "3 days ago", views: "1,500,000", rating: "4.5", synopsis: "Born into the Ji Clan, Ji Ning trains in dual swords and celestial magic to defend his tribe and uncover the secrets of the chaotic universe." },
  { id: 7, title: "I Shall Seal the Heavens", nativeTitle: "我欲封天", language: "Chinese", genre: "Comedy", author: "Er Gen", chapters: 1614, timeAdded: "4 days ago", views: "2,100,000", rating: "4.7", synopsis: "Failed scholar Meng Hao is forcibly recruited into a cultivation sect. Armed with a copper mirror that duplicates items, he scams his way to immortality." },
  { id: 8, title: "Douluo Continent", nativeTitle: "斗罗大陆", language: "Chinese", genre: "Fantasy", author: "Tang Jia San Shao", chapters: 336, timeAdded: "5 days ago", views: "6,000,000", rating: "4.5", synopsis: "Tang San brings the hidden weapons of the Tang Sect into a new world where everyone cultivates Martial Souls." },
  { id: 9, title: "Coiling Dragon", nativeTitle: "盘龙", language: "Chinese", genre: "Xuanhuan", author: "I Eat Tomatoes", chapters: 806, timeAdded: "6 days ago", views: "1,900,000", rating: "4.6", synopsis: "Linley Baruch, heir to a declining dragonblood clan, discovers a ring housing the spirit of a grand magus, beginning his journey to godhood." },
  { id: 10, title: "A Will Eternal", nativeTitle: "一念永恒", language: "Chinese", genre: "Comedy", author: "Er Gen", chapters: 1314, timeAdded: "1 week ago", views: "1,750,000", rating: "4.5", synopsis: "Bai Xiaochun is terrified of death. His quest for immortality is filled with accidental explosions, misunderstood genius, and endless chaos." },

  // --- KOREAN NOVELS (KR) ---
  { id: 11, title: "Omniscient Reader's Viewpoint", nativeTitle: "전지적 독자 시점", language: "Korean", genre: "Urban Fantasy", author: "Sing Shong", chapters: 551, timeAdded: "2 hours ago", views: "4,500,000", rating: "4.9", synopsis: "Kim Dokja is the sole reader of a webnovel that suddenly becomes reality. Armed with knowledge of the future, he must survive the apocalypse." },
  { id: 12, title: "Solo Leveling", nativeTitle: "나 혼자만 레벨업", language: "Korean", genre: "System", author: "Chugong", chapters: 270, timeAdded: "4 hours ago", views: "7,200,000", rating: "4.8", synopsis: "Sung Jinwoo, the world's weakest hunter, survives a double dungeon and awakens as a Player. He can now level up infinitely by hunting monsters." },
  { id: 13, title: "Trash of the Count's Family", nativeTitle: "백작가의 망나니가 되었다", language: "Korean", genre: "Fantasy", author: "Yoo Ryeo Han", chapters: 700, timeAdded: "6 hours ago", views: "3,100,000", rating: "4.8", synopsis: "Reincarnated as the first villain in a novel, Cale Henituse just wants to live a peaceful, wealthy slacker life. Instead, he keeps accidentally saving the world." },
  { id: 14, title: "SSS-Class Suicide Hunter", nativeTitle: "SSS급 자살헌터", language: "Korean", genre: "Action", author: "Shin Noah", chapters: 400, timeAdded: "8 hours ago", views: "2,200,000", rating: "4.9", synopsis: "Given a skill that copies the ability of his killer, Kim Gongja must die to use it. He throws himself at the world's strongest hunter to steal his time-reversal power." },
  { id: 15, title: "Overgeared", nativeTitle: "템빨", language: "Korean", genre: "LitRPG", author: "Park Saenal", chapters: 1950, timeAdded: "12 hours ago", views: "5,500,000", rating: "4.6", synopsis: "Grid is a low-level loser in the VR game Satisfy. After stumbling upon a legendary blacksmith's book, he begins dominating the game through sheer item advantage." },
  { id: 16, title: "The Novel's Extra", nativeTitle: "소설 속 엑스트라", language: "Korean", genre: "School Life", author: "Jee Gab Song", chapters: 379, timeAdded: "1 day ago", views: "1,800,000", rating: "4.5", synopsis: "An author is dragged into his own unfinished novel as a background extra. To survive, he uses his laptop's 'Setting Intervention' to tweak the world." },
  { id: 17, title: "Return of the Mount Hua Sect", nativeTitle: "화산귀환", language: "Korean", genre: "Martial Arts", author: "Biga", chapters: 1200, timeAdded: "2 days ago", views: "3,600,000", rating: "4.8", synopsis: "Chung Myung, the Plum Blossom Sword Saint, falls in battle against the Heavenly Demon. He wakes up 100 years later to find his glorious sect has gone completely broke." },
  { id: 18, title: "Second Life Ranker", nativeTitle: "두 번 사는 랭커", language: "Korean", genre: "Action", author: "Sadoyeon", chapters: 860, timeAdded: "3 days ago", views: "2,100,000", rating: "4.6", synopsis: "Yeon-woo finds his missing brother's pocket watch, revealing he was betrayed in the Tower of the Sun God. Yeon-woo enters the tower to exact cold-blooded revenge." },
  { id: 19, title: "Doom Breaker", nativeTitle: "투신전생기", language: "Korean", genre: "Regression", author: "Cheong Dam", chapters: 150, timeAdded: "4 days ago", views: "900,000", rating: "4.7", synopsis: "Zephyr is the last survivor of humanity. Defeated by the God of Destruction, the amused gods grant him a chance to regress and try again." },
  { id: 20, title: "Player Who Returned 10,000 Years Later", nativeTitle: "1만 년 만에 귀환한 플레이어", language: "Korean", genre: "Action", author: "Butterfly Valley", chapters: 300, timeAdded: "5 days ago", views: "850,000", rating: "4.4", synopsis: "Trapped in hell for 10,000 years, Kangwoo absorbs demonic powers to survive. He finally returns to Earth, only to find it overrun by gates and monsters." },

  // --- JAPANESE NOVELS (JP) ---
  { id: 21, title: "Mushoku Tensei: Jobless Reincarnation", nativeTitle: "無職転生", language: "Japanese", genre: "Isekai", author: "Rifujin na Magonote", chapters: 26, timeAdded: "3 hours ago", views: "4,200,000", rating: "4.7", synopsis: "A 34-year-old shut-in dies saving a stranger and is reborn in a magical world as Rudeus Greyrat. He resolves to live a life without regrets." },
  { id: 22, title: "Re:Zero - Starting Life in Another World", nativeTitle: "Re:ゼロから始める異世界生活", language: "Japanese", genre: "Psychological", author: "Tappei Nagatsuki", chapters: 35, timeAdded: "6 hours ago", views: "3,800,000", rating: "4.8", synopsis: "Subaru Natsuki is summoned to a fantasy world and discovers he has the power of 'Return by Death'. He must suffer endlessly to save those he loves." },
  { id: 23, title: "Overlord", nativeTitle: "オーバーロード", language: "Japanese", genre: "Dark Fantasy", author: "Kugane Maruyama", chapters: 16, timeAdded: "9 hours ago", views: "3,500,000", rating: "4.7", synopsis: "When the servers of Yggdrasil shut down, a player remains logged in. He and his NPC guild are transported to a new world, where he acts as the undead sorcerer Ainz Ooal Gown." },
  { id: 24, title: "That Time I Got Reincarnated as a Slime", nativeTitle: "転生したらスライムだった件", language: "Japanese", genre: "Kingdom Building", author: "Fuse", chapters: 20, timeAdded: "11 hours ago", views: "4,000,000", rating: "4.6", synopsis: "Satoru Mikami is stabbed and reincarnates as a weak slime. Armed with the 'Predator' skill, he builds a nation of monsters." },
  { id: 25, title: "The Rising of the Shield Hero", nativeTitle: "盾の勇者の成り上がり", language: "Japanese", genre: "Adventure", author: "Aneko Yusagi", chapters: 22, timeAdded: "1 day ago", views: "2,500,000", rating: "4.4", synopsis: "Summoned as the Shield Hero, Naofumi is immediately falsely accused and banished. He buys a demi-human slave and becomes a cynical, hardened protector." },
  { id: 26, title: "KonoSuba", nativeTitle: "この素晴らしい世界に祝福を!", language: "Japanese", genre: "Comedy", author: "Natsume Akatsuki", chapters: 17, timeAdded: "2 days ago", views: "3,100,000", rating: "4.8", synopsis: "Kazuma dies an embarrassing death and drags a useless goddess with him to a fantasy world. His party includes an explosive mage and a masochistic knight." },
  { id: 27, title: "Classroom of the Elite", nativeTitle: "ようこそ実力至上主義の教室へ", language: "Japanese", genre: "School", author: "Shogo Kinugasa", chapters: 24, timeAdded: "3 days ago", views: "2,900,000", rating: "4.9", synopsis: "Kiyotaka Ayanokoji attends a cutthroat government school. Hiding his extreme intelligence and dark past, he manipulates his classmates from the shadows." },
  { id: 28, title: "So I'm a Spider, So What?", nativeTitle: "蜘蛛ですが、なにか？", language: "Japanese", genre: "Adventure", author: "Okina Baba", chapters: 16, timeAdded: "4 days ago", views: "1,700,000", rating: "4.5", synopsis: "A high school class reincarnates in a fantasy world. While some become royalty, the protagonist hatches in the deadliest dungeon as a weak spider monster." },
  { id: 29, title: "No Game No Life", nativeTitle: "ノーゲーム・ノーライフ", language: "Japanese", genre: "Game", author: "Yuu Kamiya", chapters: 12, timeAdded: "5 days ago", views: "2,200,000", rating: "4.7", synopsis: "Undefeated gamer siblings Sora and Shiro are pulled into Disboard, a world where wars, borders, and lives are decided entirely by high-stakes games." },
  { id: 30, title: "Sword Art Online", nativeTitle: "ソードアート・オンライン", language: "Japanese", genre: "Sci-Fi", author: "Reki Kawahara", chapters: 27, timeAdded: "6 days ago", views: "5,000,000", rating: "4.3", synopsis: "10,000 players are trapped in a deadly VRMMORPG. Kirito, a solo player, fights his way up the 100 floors of Aincrad to free them all." }
];

// 2. The Multiplier Script (Generates 120 novels instantly for layout testing)
const generateMassiveDatabase = (baseArray, targetCount) => {
  let expandedDatabase = [...baseArray];
  let idCounter = baseArray.length + 1;
  
  while (expandedDatabase.length < targetCount) {
    baseArray.forEach(novel => {
      if (expandedDatabase.length < targetCount) {
        const randomViews = Math.floor(Math.random() * 5000000).toLocaleString();
        const randomRating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
        
        // Japanese light novels usually have fewer volumes/chapters, CN/KR have thousands
        const chapterMultiplier = novel.language === 'Japanese' ? 30 : 2000;
        const randomChapters = Math.floor(Math.random() * chapterMultiplier) + 10;
        
        expandedDatabase.push({
          ...novel, // This copies over the language and genre keys perfectly
          id: idCounter,
          title: `${novel.title} (Vol. ${Math.floor(Math.random() * 20 + 2)})`,
          views: randomViews,
          rating: randomRating,
          chapters: randomChapters
        });
        idCounter++;
      }
    });
  }
  return expandedDatabase;
};

// 3. Export exactly 120 novels to your website
export const novelsData = generateMassiveDatabase(seedNovels, 120);