// 1. The Core Seed Data (15 Unique Novels)
const seedNovels = [
  { id: 1, title: "I Reincarnated as a Vending Machine's Left Button", nativeTitle: "自動販売機の左ボタン", genre: "Comedy", author: "Button Smasher", chapters: 12, timeAdded: "2 mins ago", views: "1,204", rating: "4.1", synopsis: "In a world of magic and swords, the hero usually gets a cool weapon. I got reincarnated as the 'Sprite' button on a vending machine. Now I must cultivate my carbonation to reach the apex!" },
  { id: 2, title: "The Dao of Debugging in Another World", nativeTitle: "異世界のデバッグ道", genre: "Fantasy", author: "Code Monkey", chapters: 304, timeAdded: "15 mins ago", views: "45,992", rating: "4.8", synopsis: "Summoned to save the realm, a senior web developer realizes the universe runs on a terrible legacy codebase. Armed with his trusty console.log, he must refactor the fabric of reality." },
  { id: 3, title: "My System Only Rewards Me With Cabbages", nativeTitle: "キャベツシステム", genre: "Slice of Life", author: "Green Thumb", chapters: 89, timeAdded: "42 mins ago", views: "8,331", rating: "3.9", synopsis: "Defeat a dragon? 1 Cabbage. Save the princess? 5 Cabbages. I don't want to be a hero anymore, I just want to open a soup kitchen." },
  { id: 4, title: "The Villainess Just Wants to Open a Bakery", nativeTitle: "悪役令嬢はパン屋を開きたい", genre: "Romance", author: "Flour Power", chapters: 45, timeAdded: "1 hour ago", views: "12,400", rating: "4.5", synopsis: "I reincarnated as the doomed villainess! To avoid my death flag, I abandoned the royal court and moved to the slums to bake croissants. Why is the Crown Prince suddenly waiting in line for a baguette?" },
  { id: 5, title: "Leveling Up By Taking Naps", nativeTitle: "昼寝でレベルアップ", genre: "Action", author: "Sleepy Head", chapters: 1024, timeAdded: "2 hours ago", views: "900,120", rating: "4.9", synopsis: "While other hunters risk their lives in Dungeons, I awakened the [Sloth] class. Every hour I sleep, my stats double. I'm currently the strongest human alive, but I'm too tired to get out of bed." },
  { id: 6, title: "Surviving the Apocalypse with a Plastic Spoon", nativeTitle: "プラスチックスプーンで生き残る", genre: "Sci-Fi", author: "Spork Master", chapters: 76, timeAdded: "3 hours ago", views: "5,430", rating: "4.0", synopsis: "Zombies have overrun the earth. My cheat item? A single, indestructible Wendy's plastic spoon. Time to scoop some brains." },
  { id: 7, title: "The Heavenly Demon's Guide to Farming", nativeTitle: "天魔の農業ガイド", genre: "Wuxia", author: "Blood Harvester", chapters: 210, timeAdded: "5 hours ago", views: "150,000", rating: "4.7", synopsis: "After unifying the demonic cults and slaughtering the orthodox factions, the Heavenly Demon got bored. Now, he uses supreme sword aura to plow fields and demonic fire to roast marshmallows." },
  { id: 8, title: "I Accidentally Summoned Cthulhu as My Roommate", nativeTitle: "クトゥルフをルームメイトとして召喚してしまった", genre: "Mystery", author: "Eldritch Rent", chapters: 18, timeAdded: "6 hours ago", views: "3,200", rating: "4.2", synopsis: "Rent in London is too high, so I performed a dark ritual for a roommate. Now there's an ancient cosmic horror sleeping on my couch, and he refuses to do his own dishes." },
  { id: 9, title: "Cultivating to Immortality via Compound Interest", nativeTitle: "複利による不老不死への修練", genre: "Xianxia", author: "Warren Buffet of the East", chapters: 550, timeAdded: "8 hours ago", views: "88,000", rating: "4.6", synopsis: "Spiritual stones don't grow on trees, but they do grow in index funds. Watch as I conquer the Nine Heavens not with fists, but with a diversified portfolio of heavenly artifacts." },
  { id: 10, title: "The Strongest Archmage is Terrified of Spiders", nativeTitle: "最強の大魔道士はクモを恐れる", genre: "Adventure", author: "Arachnophobia", chapters: 133, timeAdded: "12 hours ago", views: "41,000", rating: "4.3", synopsis: "I can drop a meteor on a dragon with a flick of my wrist. But if an eight-legged freak crawls across my bathroom floor, I am burning the entire kingdom to ashes." },
  { id: 11, title: "Rebirth of the Urban Immortal", nativeTitle: "都市の不死者の再生", genre: "Urban Fantasy", author: "City Lights", chapters: 880, timeAdded: "1 day ago", views: "450,000", rating: "4.4", synopsis: "Betrayed by his celestial peers, the Immortal Emperor opens his eyes to find himself back on Earth as a broke college student. Time to show these arrogant young masters what true power is." },
  { id: 12, title: "My Disciples Are All Secretly Psychopaths", nativeTitle: "私の弟子は皆、密かにサイコパスです", genre: "Comedy", author: "Stressed Master", chapters: 150, timeAdded: "1 day ago", views: "75,000", rating: "4.6", synopsis: "I thought I was running a peaceful martial arts sect. Turns out my first disciple is the Demon Lord in disguise, my second is a fallen angel, and my third is an undercover imperial assassin. I just want to drink my tea." },
  { id: 13, title: "Trapped in a Dating Sim as the Castle Moat", nativeTitle: "お城の堀として恋愛シミュレーションゲームに閉じ込められた", genre: "Isekai", author: "Deep Waters", chapters: 5, timeAdded: "2 days ago", views: "800", rating: "3.5", synopsis: "Most people reincarnate as the hero or the villain. I reincarnated as the body of water surrounding the castle. The romance options keep throwing coins into me." },
  { id: 14, title: "SSS-Class Suicide Hunter", nativeTitle: "SSS級自殺ハンター", genre: "Action", author: "Shin Noah", chapters: 400, timeAdded: "2 days ago", views: "1,200,000", rating: "4.9", synopsis: "I got a skill that copies the ability of whoever kills me. Problem is, I have to die to use it. Time to throw myself at the strongest hunter in the world." },
  { id: 15, title: "The Library of Heaven's Path", nativeTitle: "天道の図書館", genre: "Xuanhuan", author: "Heng Shao Tian Ya", chapters: 2200, timeAdded: "3 days ago", views: "2,500,000", rating: "4.8", synopsis: "Transported to a world of cultivators, a teacher discovers a mystical library in his mind. He can instantly see the flaws in any technique, person, or object. He is about to become the most pretentious teacher in history." }
];

// 2. The Multiplier Script (Generates 100+ novels instantly)
const generateMassiveDatabase = (baseArray, targetCount) => {
  let expandedDatabase = [...baseArray];
  let idCounter = baseArray.length + 1;
  
  while (expandedDatabase.length < targetCount) {
    baseArray.forEach(novel => {
      if (expandedDatabase.length < targetCount) {
        // Randomize the views and ratings so the page doesn't look identical
        const randomViews = Math.floor(Math.random() * 500000).toLocaleString();
        const randomRating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
        const randomChapters = Math.floor(Math.random() * 1500);
        
        expandedDatabase.push({
          ...novel,
          id: idCounter,
          // Append a random volume number to the title so you can tell them apart
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

// 3. Export exactly 105 novels to your website
export const novelsData = generateMassiveDatabase(seedNovels, 105);