import travisScottImage from '../assets/travis_scott/Travis_Scott.jpg';
import gunnaImage from '../assets/gunna.webp';
import jColeImage from '../assets/j_cole.webp';
import futureImage from '../assets/future.jpg';

import astroworldCover from '../assets/travis_scott/Astroworld.jpg';
import rodeoCover from '../assets/travis_scott/Rodeo.webp';
import utopiaCover from '../assets/travis_scott/Utopia.jpg';
import birdsInTheTrapSingMcKnightCover from '../assets/travis_scott/BirdsInTheTrapSingMcKnight.jpg';
import daysBeforeRodeoCover from '../assets/travis_scott/DaysBeforeRodeo.jpg';

export const soloArtists = [
    {
        name: 'Travis Scott',
        genre: 'Trap',
        rating: 4.7,
        description:
            "Travis Scott is an American rapper, singer, and songwriter known for his genre-blending style, atmospheric production, and high-energy live performances.",
        image: travisScottImage,
        slug: 'travis-scott',
        albums: [
            { name: 'Days Before Rodeo', image: daysBeforeRodeoCover, year: 2014 },
            { name: 'Rodeo', image: rodeoCover, year: 2015 },
            { name: 'Birds in the Trap Sing McKnight', image: birdsInTheTrapSingMcKnightCover, year: 2016 },
            { name: 'Astroworld', image: astroworldCover, year: 2018 },
            { name: 'Utopia', image: utopiaCover, year: 2023 },
        ],
    },
    {
        name: 'Gunna',
        genre: 'Trap',
        rating: 4.4,
        description:
            "Gunna is an American rapper and songwriter recognized for his melodic trap flow and collaborations with artists like Young Thug and Lil Baby. He’s known for smooth production and catchy delivery.",
        image: gunnaImage,
        slug: 'gunna',
        albums: ['Drip Season 3', 'Drip Harder', 'Wunna', 'A Gift & a Curse'],
    },
    {
        name: 'J. Cole',
        genre: 'Hip-Hop / Rap',
        rating: 4.8,
        description:
            "J. Cole is an American rapper, producer, and lyricist acclaimed for his introspective storytelling, sharp lyricism, and socially conscious themes in modern hip-hop.",
        image: jColeImage,
        slug: 'j-cole',
        albums: ['2014 Forest Hills Drive', 'KOD', 'The Off-Season', 'Born Sinner'],
    },
    {
        name: 'Future',
        genre: 'Trap',
        rating: 4.6,
        description:
            "Future is an influential Atlanta rapper and producer known for pioneering the modern trap sound, with emotionally charged lyrics and innovative use of Auto-Tune.",
        image: futureImage,
        slug: 'future',
        albums: ['DS2', 'HNDRXX', 'Future', 'I Never Liked You'],
    },
];
