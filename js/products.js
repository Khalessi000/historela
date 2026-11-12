/**
 * HISTORELA — BOOKS AND TOYS
 * Curated Catalog & Product Data
 */

const featuredBookCover = new URL('../src/assets/images/featured_book_cover_1794197220576.jpg', import.meta.url).href;
const curatedBookImage = new URL('../src/assets/images/curated_book_flatlay_1794197237013.jpg', import.meta.url).href;
const heroReadingImage = new URL('../src/assets/images/hero_reading_world_1794197221546.jpg', import.meta.url).href;
const storeInteriorImage = new URL('../src/assets/images/about_store_interior_1794197236655.jpg', import.meta.url).href;

export const CATEGORIES = [
  { id: 'all', name: 'All Editions', count: 18, description: 'The complete curated collection' },
  { id: 'fiction', name: 'Fiction', count: 4, description: 'Contemporary literary voices and spellbinding narratives' },
  { id: 'classics', name: 'Classics', count: 3, description: 'Timeless editions preserved in clothbound volumes' },
  { id: 'personal-development', name: 'Personal Development', count: 3, description: 'Philosophy, mindfulness, and intentional living' },
  { id: 'history', name: 'History', count: 3, description: 'Chronicles of civilizations, forgotten archives, and human triumphs' },
  { id: 'mystery-thriller', name: 'Mystery & Thriller', count: 2, description: 'Atmospheric noir, intellectual puzzles, and intrigue' },
  { id: 'romance', name: 'Romance', count: 2, description: 'Passionate prose, quiet devotions, and enduring bonds' },
  { id: 'fantasy-scifi', name: 'Fantasy & Sci-Fi', count: 2, description: 'Mythopoetic cosmos and visionary speculative realms' },
  { id: 'childrens-books', name: "Children's Books", count: 2, description: 'Whimsical tales and illustrated wonders for young minds' },
  { id: 'education', name: 'Education & Toys', count: 2, description: 'Heirloom wooden toys and tactile learning artifacts' }
];

export const PRODUCTS = [
  {
    id: 'arch-solitude',
    title: 'The Architecture of Solitude',
    author: 'Clara Vance',
    publisher: 'Atelier Press, London',
    category: 'fiction',
    categoryName: 'Fiction',
    price: 32.00,
    originalPrice: 38.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 168,
    image: featuredBookCover,
    accentColor: '#002564',
    badge: 'Trending Read',
    synopsis: 'A mesmerizing meditation on memory, sacred geometry, and the silent rooms we build inside ourselves. Set across an observatory on the coast of Brittany and an ancient library in Lisbon, Vance weaves celestial observation with intimate human longing.',
    authorBio: 'Clara Vance is an award-winning novelist and cultural geographer based in Edinburgh. Her work examines the intersections of landscape, astronomy, and architectural history.',
    specs: {
      isbn: '978-0-9844-3210-9',
      pages: 368,
      format: 'Linen Hardcover, Gold Foil Stamp',
      language: 'English',
      publishedDate: 'September 2026',
      dimensions: '155 × 230 mm'
    },
    quote: '“To be quiet in the presence of stones and stars is not solitude; it is communion.”',
    matchTags: {
      mood: 'contemplative',
      genre: 'fiction',
      pace: 'reflective',
      format: 'hardcover'
    }
  },
  {
    id: 'hidden-life-trees',
    title: 'The Hidden Memory of Forest Canopy',
    author: 'Peter Wohlleben & S. Aris',
    publisher: 'Verdant Editions',
    category: 'history',
    categoryName: 'History & Nature',
    price: 29.50,
    originalPrice: null,
    isTrending: true,
    isNewRelease: false,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 214,
    image: curatedBookImage,
    accentColor: '#07566A',
    badge: 'Staff Recommendation',
    synopsis: 'A monumental investigation into how ancient arboreal root networks communicate through subterranean mycelium, mirroring human historical archives and survival across millennia.',
    authorBio: 'Peter Wohlleben spent over twenty years as a forester in the Eifel mountains. S. Aris is a botanical historian at Cambridge.',
    specs: {
      isbn: '978-1-5534-8891-2',
      pages: 320,
      format: 'Clothbound with Silk Bookmark',
      language: 'English',
      publishedDate: 'August 2026',
      dimensions: '148 × 210 mm'
    },
    quote: '“A tree can be only as strong as the forest that envelops it.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'history',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'phosphorescence',
    title: 'Phosphorescence: On Awe and Wonder',
    author: 'Julia Baird',
    publisher: 'Fourth Estate Books',
    category: 'personal-development',
    categoryName: 'Personal Development',
    price: 26.00,
    originalPrice: 30.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 95,
    image: curatedBookImage,
    accentColor: '#E8755B',
    badge: 'Bestseller',
    synopsis: 'An intimate, luminous inquiry into finding sustaining inner light during periods of emotional drought, drawing upon marine biology, stoic contemplation, and natural history.',
    authorBio: 'Julia Baird is a journalist, broadcaster, and historian who writes for The New York Times and national literary journals.',
    specs: {
      isbn: '978-0-0630-1120-4',
      pages: 288,
      format: 'Embossed Textured Paperback',
      language: 'English',
      publishedDate: 'October 2026',
      dimensions: '135 × 205 mm'
    },
    quote: '“The light that sustains us is often quiet, subterranean, and found only when we slow our stride.”',
    matchTags: {
      mood: 'uplifting',
      genre: 'personal-development',
      pace: 'reflective',
      format: 'paperback'
    }
  },
  {
    id: 'meditations-aurelius',
    title: 'Meditations: The Imperial Journal',
    author: 'Marcus Aurelius',
    publisher: 'Historela Library Classics',
    category: 'classics',
    categoryName: 'Classics',
    price: 34.00,
    originalPrice: 40.00,
    isTrending: false,
    isNewRelease: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 340,
    image: curatedBookImage,
    accentColor: '#002564',
    badge: 'Historela Heritage Edition',
    synopsis: 'A definitive, newly restored translation featuring annotations from Oxford scholars. Bound in deep navy buckram with gilded ribbon markers and hand-printed endpapers.',
    authorBio: 'Marcus Aurelius was Roman Emperor from 161 to 180 AD, and the penultimate Stoic philosopher of antiquity.',
    specs: {
      isbn: '978-0-1988-6622-0',
      pages: 256,
      format: 'Buckram Clothbound, Gilded Edges',
      language: 'English (from Koine Greek)',
      publishedDate: 'November 2026',
      dimensions: '140 × 215 mm'
    },
    quote: '“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'classics',
      pace: 'reflective',
      format: 'hardcover'
    }
  },
  {
    id: 'wintering-may',
    title: 'Wintering: The Power of Rest & Retreat',
    author: 'Katherine May',
    publisher: 'Riverhead Books',
    category: 'personal-development',
    categoryName: 'Personal Development',
    price: 24.50,
    originalPrice: null,
    isTrending: true,
    isNewRelease: false,
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 182,
    image: curatedBookImage,
    accentColor: '#07566A',
    badge: 'Trending Read',
    synopsis: 'A poignant and comforting exploration of the seasons of dormancy in human life. May shows how fallow periods are not failures, but essential rhythms for resilience and renewal.',
    authorBio: 'Katherine May is an internationally bestselling author and essayist living on the Whitstable coast of England.',
    specs: {
      isbn: '978-0-5931-8958-0',
      pages: 272,
      format: 'Hardcover with Debossed Title',
      language: 'English',
      publishedDate: 'July 2026',
      dimensions: '145 × 215 mm'
    },
    quote: '“Plants and animals don’t fight the winter; they don’t pretend it’s not happening. They adapt. They retreat.”',
    matchTags: {
      mood: 'contemplative',
      genre: 'personal-development',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'odyssey-fagles',
    title: 'The Odyssey: Illustrated Folio',
    author: 'Homer (Trans. Robert Fagles)',
    publisher: 'Pelican Classical Press',
    category: 'classics',
    categoryName: 'Classics',
    price: 48.00,
    originalPrice: 55.00,
    isTrending: false,
    isNewRelease: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 128,
    image: heroReadingImage,
    accentColor: '#E9BD57',
    badge: 'Collector Edition',
    synopsis: 'The cornerstone epic of Western literature, presented in Robert Fagles’s celebrated translation with 24 archival copperplate engravings and historic Mediterranean sea charts.',
    authorBio: 'Homer was the legendary archaic Greek poet credited with the Iliad and the Odyssey.',
    specs: {
      isbn: '978-0-1402-6886-7',
      pages: 560,
      format: 'Quarter-Leather Slipcase Edition',
      language: 'English (from Ancient Greek)',
      publishedDate: 'September 2026',
      dimensions: '175 × 255 mm'
    },
    quote: '“There is a time for many words, and there is also a time for sleep.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'classics',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'shadow-wind',
    title: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafón',
    publisher: 'Penguin Modern Classics',
    category: 'mystery-thriller',
    categoryName: 'Mystery & Thriller',
    price: 27.00,
    originalPrice: 32.00,
    isTrending: true,
    isNewRelease: false,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 420,
    image: featuredBookCover,
    accentColor: '#002564',
    badge: 'Bestseller',
    synopsis: 'Barcelona, 1945: A young boy is taken by his antiquarian book-dealer father to the secret Cemetery of Forgotten Books. The volume he chooses draws him into a labyrinth of murder, cursed love, and obsession.',
    authorBio: 'Carlos Ruiz Zafón was one of the most widely read Spanish authors worldwide since Cervantes.',
    specs: {
      isbn: '978-0-1431-2639-3',
      pages: 512,
      format: 'Deckle-edge Softcover',
      language: 'English (Trans. Lucia Graves)',
      publishedDate: 'June 2026',
      dimensions: '135 × 210 mm'
    },
    quote: '“Every book, every volume you see here, has a soul. The soul of the person who wrote it and of those who read it.”',
    matchTags: {
      mood: 'gripping',
      genre: 'mystery-thriller',
      pace: 'fast-paced',
      format: 'paperback'
    }
  },
  {
    id: 'chronicles-lost-cities',
    title: 'Chronicles of Forgotten Cartography',
    author: 'Dr. Alistair Thorne',
    publisher: 'Geographical Archive Press',
    category: 'history',
    categoryName: 'History',
    price: 36.50,
    originalPrice: null,
    isTrending: false,
    isNewRelease: true,
    isBestseller: false,
    rating: 4.7,
    reviewsCount: 79,
    image: storeInteriorImage,
    accentColor: '#07566A',
    badge: 'Fresh Story',
    synopsis: 'A lavish visual atlas recounting the lost maps of Renaissance navigators, mythological islands that vanished from maritime charts, and how human imagination shaped our borders.',
    authorBio: 'Dr. Alistair Thorne is Curator Emeritus of Cartographic Collections at the Bodleian Library.',
    specs: {
      isbn: '978-1-9122-4411-9',
      pages: 410,
      format: 'Oversized Hardcover with Foldout Maps',
      language: 'English',
      publishedDate: 'October 2026',
      dimensions: '215 × 290 mm'
    },
    quote: '“The map does not merely describe the world; it dreams the destination before the voyage begins.”',
    matchTags: {
      mood: 'contemplative',
      genre: 'history',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'tokyo-listening-rooms',
    title: 'The Tokyo Listening Rooms',
    author: 'Kenji Takahashi',
    publisher: 'Sound & Space Editions',
    category: 'fiction',
    categoryName: 'Fiction',
    price: 25.00,
    originalPrice: 29.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 110,
    image: featuredBookCover,
    accentColor: '#E8755B',
    badge: 'New Release',
    synopsis: 'In a rain-washed alley of Shibuya, an audiophile jazz café owner witnesses three generations of strangers confess the secrets they could never whisper in daylight.',
    authorBio: 'Kenji Takahashi is an architect and fiction writer living in Tokyo. His novels explore acoustics and memory.',
    specs: {
      isbn: '978-4-0877-1044-8',
      pages: 296,
      format: 'Soft-touch Paper with Washi Endsheets',
      language: 'English (Trans. Michael Emmerich)',
      publishedDate: 'November 2026',
      dimensions: '130 × 195 mm'
    },
    quote: '“Between the needle dropping and the first note, there is an entire universe of anticipation.”',
    matchTags: {
      mood: 'contemplative',
      genre: 'fiction',
      pace: 'reflective',
      format: 'paperback'
    }
  },
  {
    id: 'invisible-cities-calvino',
    title: 'Invisible Cities: Deluxe Typography',
    author: 'Italo Calvino',
    publisher: 'Folio Typography Studio',
    category: 'fiction',
    categoryName: 'Fiction',
    price: 38.00,
    originalPrice: null,
    isTrending: false,
    isNewRelease: false,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 290,
    image: curatedBookImage,
    accentColor: '#E9BD57',
    badge: 'Staff Recommendation',
    synopsis: 'Marco Polo conjures fifty-five fictional cities for emperor Kublai Khan, each a philosophical jewel exploring desire, memory, time, and language. Illustrated with bespoke letterpress typography.',
    authorBio: 'Italo Calvino was an Italian journalist and writer of short stories and novels, renowned for his fabulist narrative brilliance.',
    specs: {
      isbn: '978-0-1564-5380-6',
      pages: 192,
      format: 'Clothbound with Letterpress Inset',
      language: 'English (Trans. William Weaver)',
      publishedDate: 'May 2026',
      dimensions: '140 × 210 mm'
    },
    quote: '“You take delight not in a city’s seven or seventy wonders, but in the answer it gives to a question of yours.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'fiction',
      pace: 'reflective',
      format: 'hardcover'
    }
  },
  {
    id: 'stars-beneath-us',
    title: 'The Stars Beneath Our Skin',
    author: 'Mireille Duchamp',
    publisher: 'Celeste Press, Paris',
    category: 'romance',
    categoryName: 'Romance',
    price: 24.00,
    originalPrice: 28.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: false,
    rating: 4.7,
    reviewsCount: 88,
    image: featuredBookCover,
    accentColor: '#E8755B',
    badge: 'Trending Read',
    synopsis: 'Two glass restorers restoring the stained glass of Notre-Dame discover hidden letters concealed within the lead cames since 1889, unearthing an impossible romance that mirrors their own.',
    authorBio: 'Mireille Duchamp is a French novelist and conservator who divides her time between Paris and Provence.',
    specs: {
      isbn: '978-2-0704-5123-1',
      pages: 340,
      format: 'French Flap Paperback',
      language: 'English',
      publishedDate: 'September 2026',
      dimensions: '135 × 205 mm'
    },
    quote: '“We hold each other like fragile glass held up to the late October sun.”',
    matchTags: {
      mood: 'uplifting',
      genre: 'romance',
      pace: 'steady',
      format: 'paperback'
    }
  },
  {
    id: 'song-of-achilles',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    publisher: 'Bloomsbury Publishing',
    category: 'romance',
    categoryName: 'Romance',
    price: 22.50,
    originalPrice: null,
    isTrending: false,
    isNewRelease: false,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 512,
    image: curatedBookImage,
    accentColor: '#07566A',
    badge: 'Bestseller',
    synopsis: 'A breathtaking reimagining of the Iliad and the profound bond between Patroclus and Achilles from boyhood through the tragic shores of Troy.',
    authorBio: 'Madeline Miller has an MA in Classics from Brown University and is the Orange Prize-winning author of Circe and The Song of Achilles.',
    specs: {
      isbn: '978-1-4088-9138-4',
      pages: 368,
      format: 'Embossed Paper Hardcover',
      language: 'English',
      publishedDate: 'March 2026',
      dimensions: '130 × 200 mm'
    },
    quote: '“He is half of my soul, as the poets say.”',
    matchTags: {
      mood: 'gripping',
      genre: 'romance',
      pace: 'steady',
      format: 'paperback'
    }
  },
  {
    id: 'name-of-the-rose',
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    publisher: 'Harcourt Heritage',
    category: 'mystery-thriller',
    categoryName: 'Mystery & Thriller',
    price: 31.00,
    originalPrice: 36.00,
    isTrending: false,
    isNewRelease: true,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 310,
    image: heroReadingImage,
    accentColor: '#002564',
    badge: 'Historela Heritage Edition',
    synopsis: 'The year is 1327. Franciscans in a wealthy Italian abbey are suspected of heresy, but Brother William of Baskerville’s investigation is suddenly overshadowed by seven bizarre deaths inside a labyrinthine library.',
    authorBio: 'Umberto Eco was an Italian medievalist, semiotician, philosopher, and novelist.',
    specs: {
      isbn: '978-0-1514-4647-6',
      pages: 536,
      format: 'Hardcover with Debossed Labyrinth Cover',
      language: 'English (Trans. William Weaver)',
      publishedDate: 'October 2026',
      dimensions: '150 × 225 mm'
    },
    quote: '“Books are not made to be believed, but to be subjected to inquiry.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'mystery-thriller',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'solaris-lem',
    title: 'Solaris: The Restored Translation',
    author: 'Stanisław Lem',
    publisher: 'Faber Horizon',
    category: 'fantasy-scifi',
    categoryName: 'Fantasy & Sci-Fi',
    price: 26.50,
    originalPrice: 30.00,
    isTrending: true,
    isNewRelease: false,
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 140,
    image: featuredBookCover,
    accentColor: '#07566A',
    badge: 'Trending Read',
    synopsis: 'A psychologist sent to investigate strange behavior aboard a station orbiting the living oceanic planet Solaris discovers that the ocean can manifest physical incarnations of human subconscious guilt and longing.',
    authorBio: 'Stanisław Lem was a Polish writer of science fiction and philosophy whose works have been translated into over forty languages.',
    specs: {
      isbn: '978-0-5712-1972-8',
      pages: 224,
      format: 'Matte Finish Hardcover',
      language: 'English (Trans. Bill Johnston)',
      publishedDate: 'July 2026',
      dimensions: '135 × 210 mm'
    },
    quote: '“We don’t want to conquer the cosmos; we simply want to extend the boundaries of Earth to the frontiers of the cosmos.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'fantasy-scifi',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'earthsea-illustrated',
    title: 'A Wizard of Earthsea',
    author: 'Ursula K. Le Guin',
    publisher: 'Gollancz Masterworks',
    category: 'fantasy-scifi',
    categoryName: 'Fantasy & Sci-Fi',
    price: 35.00,
    originalPrice: null,
    isTrending: false,
    isNewRelease: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 275,
    image: storeInteriorImage,
    accentColor: '#002564',
    badge: 'Collector Edition',
    synopsis: 'A lyrical, timeless fantasy masterpiece following Ged, the greatest sorcerer in Earthsea, who in reckless youth unleashed a terrible shadow upon the archipelago that only he can name and face.',
    authorBio: 'Ursula K. Le Guin was an American author of speculative fiction, recipient of multiple Hugo, Nebula, and National Book Awards.',
    specs: {
      isbn: '978-1-4732-2355-4',
      pages: 240,
      format: 'Hardcover with Color Map Insets',
      language: 'English',
      publishedDate: 'November 2026',
      dimensions: '155 × 230 mm'
    },
    quote: '“Only in silence the word, only in dark the light, only in dying life: bright the hawk’s flight on the empty sky.”',
    matchTags: {
      mood: 'uplifting',
      genre: 'fantasy-scifi',
      pace: 'steady',
      format: 'hardcover'
    }
  },
  {
    id: 'little-prince-linen',
    title: 'The Little Prince: Collector Linen Folio',
    author: 'Antoine de Saint-Exupéry',
    publisher: 'Reynal & Hitchcock Heritage',
    category: 'childrens-books',
    categoryName: "Children's Books",
    price: 30.00,
    originalPrice: 35.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 460,
    image: curatedBookImage,
    accentColor: '#E9BD57',
    badge: 'Historela Heritage Edition',
    synopsis: 'The beloved timeless fable of an aviator stranded in the Sahara who meets a little prince fallen from Asteroid B-612. Features restored watercolor illustrations from the author’s original 1943 manuscript.',
    authorBio: 'Antoine de Saint-Exupéry was a French pioneering aviator, poet, and writer.',
    specs: {
      isbn: '978-0-1560-1219-5',
      pages: 112,
      format: 'Cream Linen Hardbound with Gold Foil Rose',
      language: 'English',
      publishedDate: 'October 2026',
      dimensions: '180 × 230 mm'
    },
    quote: '“It is only with the heart that one can see rightly; what is essential is invisible to the eye.”',
    matchTags: {
      mood: 'uplifting',
      genre: 'childrens-books',
      pace: 'reflective',
      format: 'hardcover'
    }
  },
  {
    id: 'heirloom-wooden-astronomy',
    title: 'Heirloom Wooden Celestial Orrery',
    author: 'Atelier Historela Craftsmen',
    publisher: 'Historela Artisan Workshop',
    category: 'education',
    categoryName: 'Education & Toys',
    price: 78.00,
    originalPrice: 90.00,
    isTrending: true,
    isNewRelease: true,
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 64,
    image: storeInteriorImage,
    accentColor: '#002564',
    badge: 'Artisan Crafted Toy',
    synopsis: 'Hand-turned from solid sustainably harvested walnut and maple wood with brass planetary gears. Smoothly models the heliocentric rotation of Earth, Moon, and inner planets for curious young and adult minds alike.',
    authorBio: 'Crafted in limited small batches by traditional toy artisans in the Jura mountain valley.',
    specs: {
      isbn: 'TOY-HIST-2026-04',
      pages: null,
      format: 'Solid Walnut & Brass Gear Mechanical Toy',
      language: 'Illustrated Guidebook Included',
      publishedDate: 'November 2026',
      dimensions: '220 × 220 × 260 mm'
    },
    quote: '“Toys that invite touch, observation, and lifelong wonder.”',
    matchTags: {
      mood: 'philosophical',
      genre: 'education',
      pace: 'steady',
      format: 'toy'
    }
  },
  {
    id: 'wooden-forest-storytelling-blocks',
    title: 'Nordic Forest Storytelling Blocks',
    author: 'Historela Studio',
    publisher: 'Historela Children & Play',
    category: 'childrens-books',
    categoryName: "Children's & Toys",
    price: 44.00,
    originalPrice: null,
    isTrending: false,
    isNewRelease: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 82,
    image: storeInteriorImage,
    accentColor: '#07566A',
    badge: 'Fresh Story',
    synopsis: 'A set of 24 hand-carved linden wood blocks screenprinted with botanical, mythological, and animal motifs. Designed to inspire open-ended imaginative storytelling and spatial balance.',
    authorBio: 'Designed by pediatric educators and toy makers committed to natural, screen-free tactile exploration.',
    specs: {
      isbn: 'TOY-HIST-2026-09',
      pages: null,
      format: '24 Linden Wood Blocks in Cotton Bag',
      language: 'Wordless / Universal',
      publishedDate: 'September 2026',
      dimensions: 'Wood tray 240 × 180 mm'
    },
    quote: '“Before children read sentences, they build stories in their hands.”',
    matchTags: {
      mood: 'uplifting',
      genre: 'childrens-books',
      pace: 'steady',
      format: 'toy'
    }
  }
];

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'Elegance',
    tagline: 'Form Meets Soul',
    description: 'We believe a book is a physical artifact of enduring beauty. Every cloth binding, debossed serif, and acid-free page celebrates the tactile ritual of reading.'
  },
  {
    number: '02',
    title: 'Knowledge',
    tagline: 'Depth Over Velocity',
    description: 'In an era of fleeting feeds, our catalog curates works of lasting intellect, historical resonance, and transformative prose that withstand the drift of decades.'
  },
  {
    number: '03',
    title: 'Serenity',
    tagline: 'A Sanctuary for Quiet Thought',
    description: 'Stepping into Historela is an invitation to exhale. We cultivate quiet spaces, unhurried browsing, and the contemplative joy of unscripted discovery.'
  },
  {
    number: '04',
    title: 'Community',
    tagline: 'Shared Stories & Heirlooms',
    description: 'From evening salon conversations and author readings to heirloom toys passed between generations, we bring curious minds together through the power of narrative.'
  }
];
