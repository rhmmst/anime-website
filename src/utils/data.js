const animes = [
    {
        title: "Sousou no Frieren",
        image: "/anime/frieren.jpg",
        rating: 9.10,
        date: "Sep 29, 2023",
        studio: "Madhouse",
        sinopsis: "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them."
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        image: "/anime/fullmetal.jpg",
        rating: 9.10,
        date: "Apr 5, 2009",
        studio: "Bones",
        sinopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor."
    },
    {
        title: "One Piece",
        image: "/anime/onepiece.jpg",
        rating: 8.71,
        date: "Oct 20, 1999",
        studio: "Toei Animation",
        sinopsis: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it."
    },
    {
        title: "Dr. Stone: New World Part 2",
        image: "/anime/drstone.jpg",
        rating: 8.20,
        date: "Apr 6, 2023",
        studio: "TMS Entertainment",
        sinopsis: "When a mysterious light suddenly engulfs Earth, humanity is left petrified, frozen in stone. Thousands of years later, the world is teeming with vegetation, and forests have taken the places of cities that once stood proudly. One of the very first to emerge from their stone prison is Taiju Ooki, who finds that his good friend, a brilliant young scientist named Senkuu, has been preparing for his awakening. While Taiju wishes to save the girl he loves, Senkuu is determined to figure out the cause behind the strange phenomenon and restore the world to its former glory."
    },
    {
        title: "Jujutsu Kaisen Season 2",
        image: "/anime/jujutsu.jpg",
        rating: 8.89,
        date: "Jul 6, 2023",
        studio: "MAPPA",
        sinopsis: "The year is 2006, and the halls of Tokyo Prefectural Jujutsu High School echo with the endless bickering and intense debate between two inseparable best friends. Exuding unshakeable confidence, Satoru Gojou and Suguru Getou believe there is no challenge too great for young and powerful Special Grade sorcerers such as themselves. They are tasked with safely delivering a sensible girl named Riko Amanai to the entity whose existence is the very essence of the jujutsu world. However, the mission plunges them into an exhausting swirl of moral conflict that threatens to destroy the already feeble amity between sorcerers and ordinary humans."
    },
    {
        title: "Spy x Family",
        image: "/anime/spy.jpg",
        rating: 8.57,
        date: "Apr 9, 2022",
        studio: "Wit Studio",
        sinopsis: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise Twilight fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war."
    },
    {
        title: "Detective Conan",
        image: "/anime/conan.jpg",
        rating: 8.17,
        date: "Jan 8, 1996",
        studio: "Madhouse",
        sinopsis: "Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child."
    },
    {
        title: "Naruto: Shippuden",
        image: "/anime/naruto.jpg",
        rating: 8.26,
        date: "Feb 15, 2007",
        studio: "Pierrot",
        sinopsis: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world."
    },
    {
        title: "Attack on Titan",
        image: "/anime/aot.jpg",
        rating: 8.54,
        date: "7, 2013",
        studio: "Wit Studio",
        sinopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations."
    },
    {
        title: "Sword Art Online",
        image: "/anime/sao.jpg",
        rating: 7.20,
        date: "Jul 8, 2012",
        studio: "A-1 Pictures",
        sinopsis: "Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination. With the release of this worldwide sensation, gaming has never felt more lifelike."
    },
]

function topAnime() {
    animes.sort((a, b) => b.rating - a.rating);
    return animes.slice(0, 6);;
}

export {animes, topAnime}