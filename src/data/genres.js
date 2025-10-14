import hipHopImage from '../assets/hipHop.webp';
import trapImage from '../assets/trap.jpg';
import rnbImage from '../assets/rnb.jpg';
import metalImage from '../assets/metal.jpg';

export const genres = [
    {
        name: 'Hip-Hop / Rap',
        description:
            "Hip-Hop and Rap are influential genres characterized by rhythmic beats, lyrical storytelling, and cultural expression. Artists often address social issues, lifestyle, and self-expression.",
        popularity: 'Very High',
        exampleArtists: ['Drake', 'Kendrick Lamar', 'Travis Scott', 'Nicki Minaj'],
        image: hipHopImage, // replace with your actual imported image variable
    },
    {
        name: 'Trap',
        description:
            "Trap is a subgenre of Hip-Hop known for its heavy use of 808s, fast hi-hats, and dark, atmospheric production. Originating in the Southern U.S., it has evolved into a global sound.",
        popularity: 'High',
        exampleArtists: ['Future', 'Young Thug', 'Metro Boomin'],
        image: trapImage,
    },
    {
        name: 'R&B',
        description:
            "R&B (Rhythm and Blues) blends soulful vocals, emotional lyrics, and smooth instrumentals. Modern R&B often mixes with pop and hip-hop influences.",
        popularity: 'High',
        exampleArtists: ['The Weeknd', 'SZA', 'H.E.R.', 'Frank Ocean'],
        image: rnbImage,
    },
    {
        name: 'Metal',
        description:
            "Metal is an intense and powerful genre known for distorted guitars, strong rhythms, and dynamic vocals. Its subgenres include heavy metal, metalcore, and death metal.",
        popularity: 'Medium',
        exampleArtists: ['Metallica', 'Slipknot', 'Gojira', 'Bring Me The Horizon'],
        image: metalImage,
    },
];