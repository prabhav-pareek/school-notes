// ========= CLASS 8 =========
import { chapterNotes8Maths } from './class8/maths.js';
import { chapterNotes8Science } from './class8/science.js';
import { chapterNotes8English } from './class8/english.js';
import { chapterNotes8SocialScience } from './class8/socialscience.js';
import { chapterNotes8Hindi } from './class8/hindi.js';

// ========= CLASS 9 =========
import { chapterNotes9Maths } from './class9/maths.js';
import { chapterNotes9Science } from './class9/science.js';
import { chapterNotes9English } from './class9/english.js';
import { chapterNotes9SocialScience } from './class9/socialscience.js';
import { chapterNotes9Hindi } from './class9/hindi.js';

// ========= CLASS 10 =========
import { chapterNotes10Maths } from './class10/maths.js';
import { chapterNotes10Science } from './class10/science.js';
import { chapterNotes10English } from './class10/english.js';
import { chapterNotes10SocialScience } from './class10/socialscience.js';
import { chapterNotes10Hindi } from './class10/hindi.js';

// ========= CLASS 11 PCMB =========
import { chapterNotes11PcmbPhysics } from './class11pcmb/physics.js';
import { chapterNotes11PcmbChemistry } from './class11pcmb/chemistry.js';
import { chapterNotes11PcmbMaths } from './class11pcmb/maths.js';
import { chapterNotes11PcmbBiology } from './class11pcmb/biology.js';
import { chapterNotes11PcmbEnglish } from './class11pcmb/english.js';

// ========= CLASS 11 COMMERCE =========
import { chapterNotes11ComAccounts } from './class11com/accounts.js';
import { chapterNotes11ComEconomics } from './class11com/economics.js';
import { chapterNotes11ComBusiness } from './class11com/business.js';
import { chapterNotes11ComEnglish } from './class11com/english.js';

// ========= CLASS 11 HUMANITIES =========
import { chapterNotes11HumHistory } from './class11hum/history.js';
import { chapterNotes11HumGeography } from './class11hum/geography.js';
import { chapterNotes11HumPoliticalScience } from './class11hum/politicalscience.js';
import { chapterNotes11HumPsychology } from './class11hum/psychology.js';
import { chapterNotes11HumEnglish } from './class11hum/english.js';

// ========= CLASS 12 PCMB =========
import { chapterNotes12PcmbPhysics } from './class12pcmb/physics.js';
import { chapterNotes12PcmbChemistry } from './class12pcmb/chemistry.js';
import { chapterNotes12PcmbMaths } from './class12pcmb/maths.js';
import { chapterNotes12PcmbBiology } from './class12pcmb/biology.js';
import { chapterNotes12PcmbEnglish } from './class12pcmb/english.js';

// ========= CLASS 12 COMMERCE =========
import { chapterNotes12ComAccounts } from './class12com/accounts.js';
import { chapterNotes12ComEconomics } from './class12com/economics.js';
import { chapterNotes12ComBusiness } from './class12com/business.js';
import { chapterNotes12ComEnglish } from './class12com/english.js';

// ========= CLASS 12 HUMANITIES =========
import { chapterNotes12HumHistory } from './class12hum/history.js';
import { chapterNotes12HumGeography } from './class12hum/geography.js';
import { chapterNotes12HumPoliticalScience } from './class12hum/politicalscience.js';
import { chapterNotes12HumPsychology } from './class12hum/psychology.js';
import { chapterNotes12HumEnglish } from './class12hum/english.js';

// Combine all chapter notes into a single object
export const chapterNotes = {
    // ==== CLASS 8 ====
    ...chapterNotes8Maths,
    ...chapterNotes8Science,
    ...chapterNotes8English,
    ...chapterNotes8SocialScience,
    ...chapterNotes8Hindi,

    // ==== CLASS 9 ====
    ...chapterNotes9Maths,
    ...chapterNotes9Science,
    ...chapterNotes9English,
    ...chapterNotes9SocialScience,
    ...chapterNotes9Hindi,
    // ...spread other subjects

    // ==== CLASS 10 ====
    ...chapterNotes10Maths,
    ...chapterNotes10Science,
    ...chapterNotes10English,
    ...chapterNotes10SocialScience,
    ...chapterNotes10Hindi,
    // ...spread other subjects

    // ==== CLASS 11 PCMB ====
    ...chapterNotes11PcmbPhysics,
    ...chapterNotes11PcmbChemistry,
    ...chapterNotes11PcmbMaths,
    ...chapterNotes11PcmbBiology,
    ...chapterNotes11PcmbEnglish,
    // ...spread other subjects

    // ==== CLASS 11 COMMERCE ====
    ...chapterNotes11ComAccounts,
    ...chapterNotes11ComEconomics,
    ...chapterNotes11ComBusiness,
    ...chapterNotes11ComEnglish,
    // ...spread other subjects

    // ==== CLASS 11 HUMANITIES ====
    ...chapterNotes11HumHistory,
    ...chapterNotes11HumGeography,
    ...chapterNotes11HumPoliticalScience,
    ...chapterNotes11HumPsychology,
    ...chapterNotes11HumEnglish,
    // ...spread other subjects

    // ==== CLASS 12 PCMB ====
    ...chapterNotes12PcmbPhysics,
    ...chapterNotes12PcmbChemistry,
    ...chapterNotes12PcmbMaths,
    ...chapterNotes12PcmbBiology,
    ...chapterNotes12PcmbEnglish,
    // ...spread other subjects

    // ==== CLASS 12 COMMERCE ====
    ...chapterNotes12ComAccounts,
    ...chapterNotes12ComEconomics,
    ...chapterNotes12ComBusiness,
    ...chapterNotes12ComEnglish,
    // ...spread other subjects

    // ==== CLASS 12 HUMANITIES ====
    ...chapterNotes12HumHistory,
    ...chapterNotes12HumGeography,
    ...chapterNotes12HumPoliticalScience,
    ...chapterNotes12HumPsychology,
    ...chapterNotes12HumEnglish,
    // ...spread other subjects
};

export const schoolData = {
    8: {
        subjects: {
            "Mathematics": {
                sections: ["Algebra", "Geometry"],
                chapters: [
                    //Algebra chapters
                    {
                        name: "Rational Numbers",
                        id: "rational-numbers",
                        hasNotes: true
                    },
                    {
                        name: "Linear Equations in One Variable",
                        id: "linear-equations-one-variable",
                        hasNotes: true
                    },
                    {
                        name: "Understanding Quadrilaterals",
                        id: "understanding-quadrilaterals",
                        hasNotes: true
                    },
                    {
                        name: "Practical Geometry",
                        id: "practical-geometry",
                        hasNotes: true
                    },
                    {
                        name: "Data Handling",
                        id: "data-handling",
                        hasNotes: true
                    },
                    {
                        name: "Squares and Square Roots",
                        id: "squares-square-roots",
                        hasNotes: true
                    },
                    {
                        name: "Cubes and Cube Roots",
                        id: "cubes-cube-roots",
                        hasNotes: true
                    },
                    {
                        name: "Comparing Quantities",
                        id: "comparing-quantities",
                        hasNotes: true
                    },
                    // Geometry chapters
                    {
                        name: "Algebraic Expressions and Identities",
                        id: "algebraic-expressions-and-identities",
                        hasNotes: false
                    },
                    {
                        name: "Mensuration",
                        id: "mensuration",
                        hasNotes: false
                    },
                    {
                        name: "Exponents and Powers",
                        id: "exponents-and-powers",
                        hasNotes: false
                    },
                    {
                        name: "Direct and Inverse Proportions",
                        id: "direct-and-inverse-proportions",
                        hasNotes: false
                    },
                    {
                        name: "Factorisation",
                        id: "factorisation",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Graphs",
                        id: "introduction-to-graphs",
                        hasNotes: false
                    },
                    {
                        name: "Playing with Numbers",
                        id: "playing-with-numbers",
                        hasNotes: false
                    }
                ]
            },
            "Science": {
                sections: ["Physics", "Chemistry", "Biology"],
                chapters: [
                    {
                        name: "Crop Production and Management",
                        id: "crop-production-and-management",
                        hasNotes: false
                    },
                    {
                        name: "Microorganisms: Friend and Foe",
                        id: "microorganisms-friend-and-foe",
                        hasNotes: false
                    },
                    {
                        name: "Synthetic Fibres and Plastics",
                        id: "synthetic-fibres-and-plastics",
                        hasNotes: false
                    },
                    {
                        name: "Materials: Metals and Non-Metals",
                        id: "materials-metals-and-non-metals",
                        hasNotes: false
                    },
                    {
                        name: "Coal and Petroleum",
                        id: "coal-and-petroleum",
                        hasNotes: false
                    },
                    {
                        name: "Combustion and Flame",
                        id: "combustion-and-flame",
                        hasNotes: false
                    },
                    {
                        name: "Conservation of Plants and Animals",
                        id: "conservation-of-plants-and-animals",
                        hasNotes: false
                    },
                    {
                        name: "Cell - Structure and Functions",
                        id: "cell-structure-and-functions",
                        hasNotes: false
                    },
                    {
                        name: "Reproduction in Animals",
                        id: "reproduction-in-animals",
                        hasNotes: false
                    },
                    {
                        name: "Reaching the Age of Adolescence",
                        id: "reaching-the-age-of-adolescence",
                        hasNotes: false
                    },
                    {
                        name: "Force and Pressure",
                        id: "force-and-pressure",
                        hasNotes: false
                    },
                    {
                        name: "Friction",
                        id: "friction",
                        hasNotes: false
                    },
                    {
                        name: "Sound",
                        id: "sound",
                        hasNotes: false
                    },
                    {
                        name: "Chemical Effects of Electric Current",
                        id: "chemical-effects-of-electric-current",
                        hasNotes: false
                    },
                    {
                        name: "Some Natural Phenomena",
                        id: "some-natural-phenomena",
                        hasNotes: false
                    },
                    {
                        name: "Light",
                        id: "light",
                        hasNotes: false
                    },
                    {
                        name: "Stars and the Solar System",
                        id: "stars-and-the-solar-system",
                        hasNotes: false
                    },
                    {
                        name: "Pollution of Air and Water",
                        id: "pollution-of-air-and-water",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Honeydew", "It So Happened"],
                chapters: [
                    {
                        name: "The Best Christmas Present in the World",
                        id: "the-best-christmas-present-in-the-world",
                        hasNotes: false
                    },
                    {
                        name: "The Tsunami",
                        id: "the-tsunami",
                        hasNotes: false
                    },
                    {
                        name: "Glimpses of the Past",
                        id: "glimpses-of-the-past",
                        hasNotes: false
                    },
                    {
                        name: "Bepin Choudhury's Lapse of Memory",
                        id: "bepin-choudbury-lapse-of-memory",
                        hasNotes: false
                    },
                    {
                        name: "The Summit Within",
                        id: "the-summit-within",
                        hasNotes: false
                    },
                    {
                        name: "This is Jody's Fawn",
                        id: "this-is-jody-fawn",
                        hasNotes: false
                    },
                    {
                        name: "A Visit to Cambridge",
                        id: "a-visit-to-cambridge",
                        hasNotes: false
                    },
                    {
                        name: "A Short Monsoon Diary",
                        id: "a-short-monsoon-diary",
                        hasNotes: false
                    },
                    {
                        name: "The Great Stone Face – I",
                        id: "the-great-stone-face-1",
                        hasNotes: false
                    },
                    {
                        name: "The Great Stone Face – II",
                        id: "the-great-stone-face-2",
                        hasNotes: false
                    },
                    {
                        name: "How the Camel Got His Hump",
                        id: "how-the-camel-got-his-hump",
                        hasNotes: false
                    },
                    {
                        name: "Children at Work",
                        id: "children-at-work",
                        hasNotes: false
                    },
                    {
                        name: "The Selfish Giant",
                        id: "the-selfish-giant",
                        hasNotes: false
                    },
                    {
                        name: "The Treasure Within",
                        id: "the-treasure-within",
                        hasNotes: false
                    },
                    {
                        name: "Princess September",
                        id: "princess-september",
                        hasNotes: false
                    },
                    {
                        name: "The Fight",
                        id: "the-fight",
                        hasNotes: false
                    },
                    {
                        name: "The Open Window",
                        id: "the-open-window",
                        hasNotes: false
                    },
                    {
                        name: "Jalebis",
                        id: "jalebis",
                        hasNotes: false
                    },
                    {
                        name: "The Last Bargain",
                        id: "the-last-bargain",
                        hasNotes: false
                    },
                    {
                        name: "The Comet – I",
                        id: "the-comet-1",
                        hasNotes: false
                    },
                    {
                        name: "The Comet – II",
                        id: "the-comet-2",
                        hasNotes: false
                    }
                ]
            },
            "Social Science": {
                sections: ["History", "Geography", "Civics"],
                chapters: [
                    {
                        name: "How, When and Where",
                        id: "how-when-and-where",
                        hasNotes: false
                    },
                    {
                        name: "From Trade to Territory",
                        id: "from-trade-to-territory",
                        hasNotes: false
                    },
                    {
                        name: "Ruling the Countryside",
                        id: "ruling-the-countryside",
                        hasNotes: false
                    },
                    {
                        name: "Tribals, Dikus and the Vision of a Golden Age",
                        id: "tribals-dikus-and-the-vision-of-a-golden-age",
                        hasNotes: false
                    },
                    {
                        name: "When People Rebel",
                        id: "when-people-rebel",
                        hasNotes: false
                    },
                    {
                        name: "Weavers, Iron Smelters and Factory Owners",
                        id: "weavers-iron-smelters-and-factory-owners",
                        hasNotes: false
                    },
                    {
                        name: "Civilising the Native, Educating the Nation",
                        id: "civilising-the-native-educating-the-nation",
                        hasNotes: false
                    },
                    {
                        name: "Women, Caste and Reform",
                        id: "women-caste-and-reform",
                        hasNotes: false
                    },
                    {
                        name: "The Making of the National Movement",
                        id: "the-making-of-the-national-movement",
                        hasNotes: false
                    },
                    {
                        name: "India After Independence",
                        id: "india-after-independence",
                        hasNotes: false
                    },
                    {
                        name: "Resources",
                        id: "resources",
                        hasNotes: false
                    },
                    {
                        name: "Land, Soil, Water, Natural Vegetation and Wildlife Resources",
                        id: "land-soil-water-natural-vegetation-and-wildlife-resources",
                        hasNotes: false
                    },
                    {
                        name: "Mineral and Power Resources",
                        id: "mineral-and-power-resources",
                        hasNotes: false
                    },
                    {
                        name: "Agriculture",
                        id: "agriculture",
                        hasNotes: false
                    },
                    {
                        name: "Industries",
                        id: "industries",
                        hasNotes: false
                    },
                    {
                        name: "Human Resources",
                        id: "human-resources",
                        hasNotes: false
                    },
                    {
                        name: "The Indian Constitution",
                        id: "the-indian-constitution",
                        hasNotes: false
                    },
                    {
                        name: "Understanding Secularism",
                        id: "understanding-secularism",
                        hasNotes: false
                    },
                    {
                        name: "Why do we need a Parliament?",
                        id: "why-do-we-need-a-parliament",
                        hasNotes: false
                    },
                    {
                        name: "Understanding Laws",
                        id: "understanding-laws",
                        hasNotes: false
                    },
                    {
                        name: "Judiciary",
                        id: "judiciary",
                        hasNotes: false
                    },
                    {
                        name: "Understanding Our Criminal Justice System",
                        id: "understanding-our-criminal-justice-system",
                        hasNotes: false
                    },
                    {
                        name: "Understanding Marginalisation",
                        id: "understanding-marginalisation",
                        hasNotes: false
                    },
                    {
                        name: "Confronting Marginalisation",
                        id: "confronting-marginalisation",
                        hasNotes: false
                    },
                    {
                        name: "Public Facilities",
                        id: "public-facilities",
                        hasNotes: false
                    },
                    {
                        name: "Law and Social Justice",
                        id: "law-and-social-justice",
                        hasNotes: false
                    }
                ]
            },
            "Hindi": {
                sections: ["Vasant", "Durva", "Bharat Ki Khoj"],
                chapters: [
                    {
                        name: "ध्वनि",
                        id: "dhvani",
                        hasNotes: true
                    },
                    {
                        name: "लाख की चूड़ियाँ",
                        id: "lakh-ki-churiyan",
                        hasNotes: false
                    },
                    {
                        name: "बस की यात्रा",
                        id: "bas-ki-yatra",
                        hasNotes: false
                    },
                    {
                        name: "दीवानों की हस्ती",
                        id: "deewanon-ki-hasti",
                        hasNotes: false
                    },
                    {
                        name: "चिट्ठियों की अनूठी दुनिया",
                        id: "chitthiyon-ki-anoothi-duniya",
                        hasNotes: false
                    },
                    {
                        name: "भगवान के डाकिये",
                        id: "bhagwan-ke-dakiye",
                        hasNotes: false
                    },
                    {
                        name: "क्या निराश हुआ जाए",
                        id: "kya-nirash-hua-jaye",
                        hasNotes: false
                    },
                    {
                        name: "यह सबसे कठिन समय नहीं",
                        id: "yah-sabse-kathin-samay-nahin",
                        hasNotes: false
                    },
                    {
                        name: "कबीर की साखियाँ",
                        id: "kabir-ki-sakhiyan",
                        hasNotes: false
                    },
                    {
                        name: "कामचोर",
                        id: "kamchor",
                        hasNotes: false
                    },
                    {
                        name: "जब सिनेमा ने बोलना सीखा",
                        id: "jab-cinema-ne-bolna-sikha",
                        hasNotes: false
                    },
                    {
                        name: "सुदामा चरित",
                        id: "sudama-charit",
                        hasNotes: false
                    },
                    {
                        name: "जहाँ पहिया है",
                        id: "jahan-pahiya-hai",
                        hasNotes: false
                    },
                    {
                        name: "अकबरी लोटा",
                        id: "akbari-lota",
                        hasNotes: false
                    },
                    {
                        name: "सूर के पद",
                        id: "soor-ke-pad",
                        hasNotes: false
                    },
                    {
                        name: "पानी की कहानी",
                        id: "paani-ki-kahani",
                        hasNotes: false
                    },
                    {
                        name: "बाज और साँप",
                        id: "baaz-aur-saanp",
                        hasNotes: false
                    },
                    {
                        name: "टोपी शुक्ला",
                        id: "topi-shukla",
                        hasNotes: false
                    }
                ]
            }
        }
    },
    9: {
        subjects: {
            "Mathematics": {
                sections: ["Algebra", "Geometry", "Statistics"],
                chapters: [
                    {
                        name: "Number Systems",
                        id: "number-systems",
                        hasNotes: false
                    },
                    {
                        name: "Polynomials",
                        id: "polynomials",
                        hasNotes: false
                    },
                    {
                        name: "Coordinate Geometry",
                        id: "coordinate-geometry",
                        hasNotes: false
                    },
                    {
                        name: "Linear Equations in Two Variables",
                        id: "linear-equations-in-two-variables",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Euclid's Geometry",
                        id: "introduction-to-euclid-geometry",
                        hasNotes: false
                    },
                    {
                        name: "Lines and Angles",
                        id: "lines-and-angles",
                        hasNotes: false
                    },
                    {
                        name: "Triangles",
                        id: "triangles",
                        hasNotes: false
                    },
                    {
                        name: "Quadrilaterals",
                        id: "quadrilaterals",
                        hasNotes: false
                    },
                    {
                        name: "Areas of Parallelograms and Triangles",
                        id: "areas-of-parallelograms-and-triangles",
                        hasNotes: false
                    },
                    {
                        name: "Circles",
                        id: "circles",
                        hasNotes: false
                    },
                    {
                        name: "Constructions",
                        id: "constructions",
                        hasNotes: false
                    },
                    {
                        name: "Heron's Formula",
                        id: "heron-formula",
                        hasNotes: false
                    },
                    {
                        name: "Surface Areas and Volumes",
                        id: "surface-areas-and-volumes",
                        hasNotes: false
                    },
                    {
                        name: "Statistics",
                        id: "statistics",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability",
                        hasNotes: false
                    }
                ]
            },
            "Science": {
                sections: ["Physics", "Chemistry", "Biology"],
                chapters: [
                    {
                        name: "Matter in Our Surroundings",
                        id: "matter-in-our-surroundings",
                        hasNotes: false
                    },
                    {
                        name: "Is Matter Around Us Pure",
                        id: "is-matter-around-us-pure",
                        hasNotes: false
                    },
                    {
                        name: "Atoms and Molecules",
                        id: "atoms-and-molecules",
                        hasNotes: false
                    },
                    {
                        name: "Structure of the Atom",
                        id: "structure-of-the-atom",
                        hasNotes: false
                    },
                    {
                        name: "The Fundamental Unit of Life",
                        id: "the-fundamental-unit-of-life",
                        hasNotes: false
                    },
                    {
                        name: "Tissues",
                        id: "tissues",
                        hasNotes: false
                    },
                    {
                        name: "Diversity in Living Organisms",
                        id: "diversity-in-living-organisms",
                        hasNotes: false
                    },
                    {
                        name: "Motion",
                        id: "motion",
                        hasNotes: false
                    },
                    {
                        name: "Force and Laws of Motion",
                        id: "force-and-laws-of-motion",
                        hasNotes: false
                    },
                    {
                        name: "Gravitation",
                        id: "gravitation",
                        hasNotes: false
                    },
                    {
                        name: "Work and Energy",
                        id: "work-and-energy",
                        hasNotes: false
                    },
                    {
                        name: "Sound",
                        id: "sound-class-9",
                        hasNotes: false
                    },
                    {
                        name: "Why Do We Fall Ill",
                        id: "why-do-we-fall-ill",
                        hasNotes: false
                    },
                    {
                        name: "Natural Resources",
                        id: "natural-resources",
                        hasNotes: false
                    },
                    {
                        name: "Improvement in Food Resources",
                        id: "improvement-in-food-resources",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Beehive", "Moments"],
                chapters: [
                    {
                        name: "The Fun They Had",
                        id: "the-fun-they-had",
                        hasNotes: false
                    },
                    {
                        name: "The Sound of Music",
                        id: "the-sound-of-music",
                        hasNotes: false
                    },
                    {
                        name: "The Little Girl",
                        id: "the-little-girl",
                        hasNotes: false
                    },
                    {
                        name: "A Truly Beautiful Mind",
                        id: "a-truly-beautiful-mind",
                        hasNotes: false
                    },
                    {
                        name: "The Snake and the Mirror",
                        id: "the-snake-and-the-mirror",
                        hasNotes: false
                    },
                    {
                        name: "My Childhood",
                        id: "my-childhood",
                        hasNotes: false
                    },
                    {
                        name: "Packing",
                        id: "packing",
                        hasNotes: false
                    },
                    {
                        name: "Reach for the Top",
                        id: "reach-for-the-top",
                        hasNotes: false
                    },
                    {
                        name: "The Bond of Love",
                        id: "the-bond-of-love",
                        hasNotes: false
                    },
                    {
                        name: "Kathmandu",
                        id: "kathmandu",
                        hasNotes: false
                    },
                    {
                        name: "If I Were You",
                        id: "if-i-were-you",
                        hasNotes: false
                    },
                    {
                        name: "The Lost Child",
                        id: "the-lost-child",
                        hasNotes: false
                    },
                    {
                        name: "The Adventures of Toto",
                        id: "the-adventures-of-toto",
                        hasNotes: false
                    },
                    {
                        name: "Iswaran the Storyteller",
                        id: "iswaran-the-storyteller",
                        hasNotes: false
                    },
                    {
                        name: "In the Kingdom of Fools",
                        id: "in-the-kingdom-of-fools",
                        hasNotes: false
                    },
                    {
                        name: "The Happy Prince",
                        id: "the-happy-prince",
                        hasNotes: false
                    },
                    {
                        name: "Weathering the Storm in Ersama",
                        id: "weathering-the-storm-in-ersama",
                        hasNotes: false
                    },
                    {
                        name: "The Last Leaf",
                        id: "the-last-leaf",
                        hasNotes: false
                    },
                    {
                        name: "A House Is Not a Home",
                        id: "a-house-is-not-a-home",
                        hasNotes: false
                    },
                    {
                        name: "The Accidental Tourist",
                        id: "the-accidental-tourist",
                        hasNotes: false
                    },
                    {
                        name: "The Nine Gold Medals",
                        id: "the-nine-gold-medals",
                        hasNotes: false
                    }
                ]
            },
            "Social Science": {
                sections: ["History", "Geography", "Political Science", "Economics"],
                chapters: [
                    {
                        name: "The French Revolution",
                        id: "the-french-revolution",
                        hasNotes: false
                    },
                    {
                        name: "Socialism in Europe and the Russian Revolution",
                        id: "socialism-in-europe-and-the-russian-revolution",
                        hasNotes: false
                    },
                    {
                        name: "Nazism and the Rise of Hitler",
                        id: "nazism-and-the-rise-of-hitler",
                        hasNotes: false
                    },
                    {
                        name: "Forest Society and Colonialism",
                        id: "forest-society-and-colonialism",
                        hasNotes: false
                    },
                    {
                        name: "Pastoralists in the Modern World",
                        id: "pastoralists-in-the-modern-world",
                        hasNotes: false
                    },
                    {
                        name: "India - Size and Location",
                        id: "india-size-and-location",
                        hasNotes: false
                    },
                    {
                        name: "Physical Features of India",
                        id: "physical-features-of-india",
                        hasNotes: false
                    },
                    {
                        name: "Drainage",
                        id: "drainage",
                        hasNotes: false
                    },
                    {
                        name: "Climate",
                        id: "climate",
                        hasNotes: false
                    },
                    {
                        name: "Natural Vegetation and Wildlife",
                        id: "natural-vegetation-and-wildlife",
                        hasNotes: false
                    },
                    {
                        name: "Population",
                        id: "population",
                        hasNotes: false
                    },
                    {
                        name: "What is Democracy?",
                        id: "what-is-democracy",
                        hasNotes: false
                    },
                    {
                        name: "Constitutional Design",
                        id: "constitutional-design",
                        hasNotes: false
                    },
                    {
                        name: "Electoral Politics",
                        id: "electoral-politics",
                        hasNotes: false
                    },
                    {
                        name: "Working of Institutions",
                        id: "working-of-institutions",
                        hasNotes: false
                    },
                    {
                        name: "Democratic Rights",
                        id: "democratic-rights",
                        hasNotes: false
                    },
                    {
                        name: "The Story of Village Palampur",
                        id: "the-story-of-village-palampur",
                        hasNotes: false
                    },
                    {
                        name: "People as Resource",
                        id: "people-as-resource",
                        hasNotes: false
                    },
                    {
                        name: "Poverty as a Challenge",
                        id: "poverty-as-a-challenge",
                        hasNotes: false
                    },
                    {
                        name: "Food Security in India",
                        id: "food-security-in-india",
                        hasNotes: false
                    }
                ]
            },
            "Hindi": {
                sections: ["Kshitij", "Kritika", "Sparsh"],
                chapters: [
                    {
                        name: "दो बैलों की कथा",
                        id: "do-bailon-ki-katha",
                        hasNotes: false
                    },
                    {
                        name: "ल्हासा की ओर",
                        id: "lhasa-ki-or",
                        hasNotes: false
                    },
                    {
                        name: "उपभोक्तावाद की संस्कृति",
                        id: "upbhoktavad-ki-sanskriti",
                        hasNotes: false
                    },
                    {
                        name: "साँवले सपनों की याद",
                        id: "saanvle-sapnon-ki-yaad",
                        hasNotes: false
                    },
                    {
                        name: "नाना साहब की पुत्री देवी मैना को भस्म कर दिया गया",
                        id: "nana-saheb-ki-putri-devi-maina-ko-bhasma-kar-diya-gaya",
                        hasNotes: false
                    },
                    {
                        name: "प्रेमचंद के फटे जूते",
                        id: "premchand-ke-phate-joote",
                        hasNotes: false
                    },
                    {
                        name: "मेरे बचपन के दिन",
                        id: "mere-bachpan-ke-din",
                        hasNotes: false
                    },
                    {
                        name: "एक कुत्ता और एक मैना",
                        id: "ek-kutta-aur-ek-maina",
                        hasNotes: false
                    },
                    {
                        name: "गिल्लू",
                        id: "gillu",
                        hasNotes: false
                    },
                    {
                        name: "स्मृति",
                        id: "smriti",
                        hasNotes: false
                    },
                    {
                        name: "कल्लू कुम्हार की उनाकोटी",
                        id: "kallu-kumhar-ki-unakoti",
                        hasNotes: false
                    },
                    {
                        name: "मेरा छोटा सा निजी पुस्तकालय",
                        id: "mera-chota-sa-niji-pustakalay",
                        hasNotes: false
                    },
                    {
                        name: "हामिद खान",
                        id: "hamid-khan",
                        hasNotes: false
                    },
                    {
                        name: "दिये जल उठे",
                        id: "diye-jal-uthe",
                        hasNotes: false
                    }
                ]
            }
        }
    },
    10: {
        subjects: {
            "Mathematics": {
                sections: ["Algebra", "Geometry", "Trigonometry", "Statistics"],
                chapters: [
                    {
                        name: "Real Numbers",
                        id: "real-numbers",
                        hasNotes: false
                    },
                    {
                        name: "Polynomials",
                        id: "polynomials-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Pair of Linear Equations in Two Variables",
                        id: "pair-of-linear-equations-in-two-variables",
                        hasNotes: false
                    },
                    {
                        name: "Quadratic Equations",
                        id: "quadratic-equations",
                        hasNotes: false
                    },
                    {
                        name: "Arithmetic Progressions",
                        id: "arithmetic-progressions",
                        hasNotes: false
                    },
                    {
                        name: "Triangles",
                        id: "triangles-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Coordinate Geometry",
                        id: "coordinate-geometry-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Trigonometry",
                        id: "introduction-to-trigonometry",
                        hasNotes: false
                    },
                    {
                        name: "Some Applications of Trigonometry",
                        id: "some-applications-of-trigonometry",
                        hasNotes: false
                    },
                    {
                        name: "Circles",
                        id: "circles-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Constructions",
                        id: "constructions-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Areas Related to Circles",
                        id: "areas-related-to-circles",
                        hasNotes: false
                    },
                    {
                        name: "Surface Areas and Volumes",
                        id: "surface-areas-and-volumes-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Statistics",
                        id: "statistics-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability-class-10",
                        hasNotes: false
                    }
                ]
            },
            "Science": {
                sections: ["Physics", "Chemistry", "Biology"],
                chapters: [
                    {
                        name: "Light – Reflection and Refraction",
                        id: "light-reflection-and-refraction",
                        hasNotes: false
                    },
                    {
                        name: "Human Eye and Colourful World",
                        id: "human-eye-and-colourful-world",
                        hasNotes: false
                    },
                    {
                        name: "Electricity",
                        id: "electricity",
                        hasNotes: false
                    },
                    {
                        name: "Magnetic Effects of Electric Current",
                        id: "magnetic-effects-of-electric-current",
                        hasNotes: false
                    },
                    {
                        name: "Sources of Energy",
                        id: "sources-of-energy",
                        hasNotes: false
                    },
                    {
                        name: "Acids, Bases and Salts",
                        id: "acids-bases-and-salts",
                        hasNotes: false
                    },
                    {
                        name: "Metals and Non-metals",
                        id: "metals-and-non-metals",
                        hasNotes: false
                    },
                    {
                        name: "Carbon and its Compounds",
                        id: "carbon-and-its-compounds",
                        hasNotes: false
                    },
                    {
                        name: "Periodic Classification of Elements",
                        id: "periodic-classification-of-elements",
                        hasNotes: false
                    },
                    {
                        name: "Life Processes",
                        id: "life-processes",
                        hasNotes: false
                    },
                    {
                        name: "Control and Coordination",
                        id: "control-and-coordination",
                        hasNotes: false
                    },
                    {
                        name: "How do Organisms Reproduce?",
                        id: "how-do-organisms-reproduce",
                        hasNotes: false
                    },
                    {
                        name: "Heredity and Evolution",
                        id: "heredity-and-evolution",
                        hasNotes: false
                    },
                    {
                        name: "Our Environment",
                        id: "our-environment",
                        hasNotes: false
                    },
                    {
                        name: "Management of Natural Resources",
                        id: "management-of-natural-resources",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["First Flight", "Footprints Without Feet"],
                chapters: [
                    {
                        name: "A Letter to God",
                        id: "a-letter-to-god",
                        hasNotes: false
                    },
                    {
                        name: "Nelson Mandela: Long Walk to Freedom",
                        id: "nelson-mandela-long-walk-to-freedom",
                        hasNotes: false
                    },
                    {
                        name: "Two Stories about Flying",
                        id: "two-stories-about-flying",
                        hasNotes: false
                    },
                    {
                        name: "From the Diary of Anne Frank",
                        id: "from-the-diary-of-anne-frank",
                        hasNotes: false
                    },
                    {
                        name: "Glimpses of India",
                        id: "glimpses-of-india",
                        hasNotes: false
                    },
                    {
                        name: "Mijbil the Otter",
                        id: "mijbil-the-otter",
                        hasNotes: false
                    },
                    {
                        name: "Madam Rides the Bus",
                        id: "madam-rides-the-bus",
                        hasNotes: false
                    },
                    {
                        name: "The Sermon at Benares",
                        id: "the-sermon-at-benares",
                        hasNotes: false
                    },
                    {
                        name: "The Proposal",
                        id: "the-proposal",
                        hasNotes: false
                    },
                    {
                        name: "A Triumph of Surgery",
                        id: "a-triumph-of-surgery",
                        hasNotes: false
                    },
                    {
                        name: "The Thief's Story",
                        id: "the-thief-story",
                        hasNotes: false
                    },
                    {
                        name: "The Midnight Visitor",
                        id: "the-midnight-visitor",
                        hasNotes: false
                    },
                    {
                        name: "A Question of Trust",
                        id: "a-question-of-trust",
                        hasNotes: false
                    },
                    {
                        name: "Footprints without Feet",
                        id: "footprints-without-feet",
                        hasNotes: false
                    },
                    {
                        name: "The Making of a Scientist",
                        id: "the-making-of-a-scientist",
                        hasNotes: false
                    },
                    {
                        name: "The Necklace",
                        id: "the-necklace",
                        hasNotes: false
                    },
                    {
                        name: "Bholi",
                        id: "bholi",
                        hasNotes: false
                    },
                    {
                        name: "The Book That Saved the Earth",
                        id: "the-book-that-saved-the-earth",
                        hasNotes: false
                    }
                ]
            },
            "Social Science": {
                sections: ["History", "Geography", "Political Science", "Economics"],
                chapters: [
                    {
                        name: "The Rise of Nationalism in Europe",
                        id: "the-rise-of-nationalism-in-europe",
                        hasNotes: false
                    },
                    {
                        name: "Nationalism in India",
                        id: "nationalism-in-india",
                        hasNotes: false
                    },
                    {
                        name: "The Making of a Global World",
                        id: "the-making-of-a-global-world",
                        hasNotes: false
                    },
                    {
                        name: "The Age of Industrialisation",
                        id: "the-age-of-industrialisation",
                        hasNotes: false
                    },
                    {
                        name: "Print Culture and the Modern World",
                        id: "print-culture-and-the-modern-world",
                        hasNotes: false
                    },
                    {
                        name: "Resources and Development",
                        id: "resources-and-development",
                        hasNotes: false
                    },
                    {
                        name: "Forest and Wildlife Resources",
                        id: "forest-and-wildlife-resources",
                        hasNotes: false
                    },
                    {
                        name: "Water Resources",
                        id: "water-resources",
                        hasNotes: false
                    },
                    {
                        name: "Agriculture",
                        id: "agriculture-class-10",
                        hasNotes: false
                    },
                    {
                        name: "Minerals and Energy Resources",
                        id: "minerals-and-energy-resources",
                        hasNotes: false
                    },
                    {
                        name: "Manufacturing Industries",
                        id: "manufacturing-industries",
                        hasNotes: false
                    },
                    {
                        name: "Lifelines of National Economy",
                        id: "lifelines-of-national-economy",
                        hasNotes: false
                    },
                    {
                        name: "Power Sharing",
                        id: "power-sharing",
                        hasNotes: false
                    },
                    {
                        name: "Federalism",
                        id: "federalism",
                        hasNotes: false
                    },
                    {
                        name: "Gender, Religion and Caste",
                        id: "gender-religion-and-caste",
                        hasNotes: false
                    },
                    {
                        name: "Popular Struggles and Movements",
                        id: "popular-struggles-and-movements",
                        hasNotes: false
                    },
                    {
                        name: "Political Parties",
                        id: "political-parties",
                        hasNotes: false
                    },
                    {
                        name: "Outcomes of Democracy",
                        id: "outcomes-of-democracy",
                        hasNotes: false
                    },
                    {
                        name: "Challenges to Democracy",
                        id: "challenges-to-democracy",
                        hasNotes: false
                    },
                    {
                        name: "Development",
                        id: "development",
                        hasNotes: false
                    },
                    {
                        name: "Sectors of the Indian Economy",
                        id: "sectors-of-the-indian-economy",
                        hasNotes: false
                    },
                    {
                        name: "Money and Credit",
                        id: "money-and-credit",
                        hasNotes: false
                    },
                    {
                        name: "Globalisation and the Indian Economy",
                        id: "globalisation-and-the-indian-economy",
                        hasNotes: false
                    },
                    {
                        name: "Consumer Rights",
                        id: "consumer-rights",
                        hasNotes: false
                    }
                ]
            },
            "Hindi": {
                sections: ["Kshitij", "Kritika", "Sparsh"],
                chapters: [
                    {
                        name: "सूरदास के पद",
                        id: "surdas-ke-pad",
                        hasNotes: false
                    },
                    {
                        name: "तुलसीदास के पद",
                        id: "tulsidas-ke-pad",
                        hasNotes: false
                    },
                    {
                        name: "देव",
                        id: "dev",
                        hasNotes: false
                    },
                    {
                        name: "जयशंकर प्रसाद",
                        id: "jayshankar-prasad",
                        hasNotes: false
                    },
                    {
                        name: "सूर्यकांत त्रिपाठी 'निराला'",
                        id: "suryakant-tripathi-nirala",
                        hasNotes: false
                    },
                    {
                        name: "नागार्जुन",
                        id: "nagarjun",
                        hasNotes: false
                    },
                    {
                        name: "गिरिजा कुमार माथुर",
                        id: "girija-kumar-mathur",
                        hasNotes: false
                    },
                    {
                        name: "ऋतुराज",
                        id: "rituraj",
                        hasNotes: false
                    },
                    {
                        name: "मंगलेश डबराल",
                        id: "manglesh-dabral",
                        hasNotes: false
                    },
                    {
                        name: "स्वयं प्रकाश",
                        id: "swayam-prakash",
                        hasNotes: false
                    },
                    {
                        name: "सर्वेश्वर दयाल सक्सेना",
                        id: "sarveshwar-dayal-saxena",
                        hasNotes: false
                    },
                    {
                        name: "हरिशंकर परसाई",
                        id: "harishankar-parsai",
                        hasNotes: false
                    },
                    {
                        name: "यशपाल",
                        id: "yashpal",
                        hasNotes: false
                    },
                    {
                        name: "फणीश्वरनाथ रेणु",
                        id: "phanishwarnath-renu",
                        hasNotes: false
                    },
                    {
                        name: "महावीरप्रसाद द्विवेदी",
                        id: "mahavir-prasad-dwivedi",
                        hasNotes: false
                    },
                    {
                        name: "यतीन्द्र मिश्र",
                        id: "yatindra-mishra",
                        hasNotes: false
                    },
                    {
                        name: "भदंत आनंद कौसल्यायन",
                        id: "bhadant-anand-kausalyayan",
                        hasNotes: false
                    },
                    {
                        name: "रामविलास शर्मा",
                        id: "ramvilas-sharma",
                        hasNotes: false
                    }
                ]
            }
        }
    },
    11: {
        science: {
            "Physics": {
                sections: ["Mechanics", "Thermodynamics", "Waves"],
                chapters: [
                    {
                        name: "Physical World",
                        id: "physical-world",
                        hasNotes: false
                    },
                    {
                        name: "Units and Measurements",
                        id: "units-and-measurements",
                        hasNotes: false
                    },
                    {
                        name: "Motion in a Straight Line",
                        id: "motion-in-a-straight-line",
                        hasNotes: false
                    },
                    {
                        name: "Motion in a Plane",
                        id: "motion-in-a-plane",
                        hasNotes: false
                    },
                    {
                        name: "Laws of Motion",
                        id: "laws-of-motion",
                        hasNotes: false
                    },
                    {
                        name: "Work, Energy and Power",
                        id: "work-energy-and-power",
                        hasNotes: false
                    },
                    {
                        name: "System of Particles and Rotational Motion",
                        id: "system-of-particles-and-rotational-motion",
                        hasNotes: false
                    },
                    {
                        name: "Gravitation",
                        id: "gravitation-class-11",
                        hasNotes: false
                    },
                    {
                        name: "Mechanical Properties of Solids",
                        id: "mechanical-properties-of-solids",
                        hasNotes: false
                    },
                    {
                        name: "Mechanical Properties of Fluids",
                        id: "mechanical-properties-of-fluids",
                        hasNotes: false
                    },
                    {
                        name: "Thermal Properties of Matter",
                        id: "thermal-properties-of-matter",
                        hasNotes: false
                    },
                    {
                        name: "Thermodynamics",
                        id: "thermodynamics",
                        hasNotes: false
                    },
                    {
                        name: "Kinetic Theory",
                        id: "kinetic-theory",
                        hasNotes: false
                    },
                    {
                        name: "Oscillations",
                        id: "oscillations",
                        hasNotes: false
                    },
                    {
                        name: "Waves",
                        id: "waves",
                        hasNotes: false
                    }
                ]
            },
            "Chemistry": {
                sections: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
                chapters: [
                    {
                        name: "Some Basic Concepts of Chemistry",
                        id: "some-basic-concepts-of-chemistry",
                        hasNotes: false
                    },
                    {
                        name: "Structure of Atom",
                        id: "structure-of-atom-class-11",
                        hasNotes: false
                    },
                    {
                        name: "Classification of Elements and Periodicity in Properties",
                        id: "classification-of-elements-and-periodicity-in-properties",
                        hasNotes: false
                    },
                    {
                        name: "Chemical Bonding and Molecular Structure",
                        id: "chemical-bonding-and-molecular-structure",
                        hasNotes: false
                    },
                    {
                        name: "States of Matter",
                        id: "states-of-matter",
                        hasNotes: false
                    },
                    {
                        name: "Thermodynamics",
                        id: "thermodynamics-chemistry",
                        hasNotes: false
                    },
                    {
                        name: "Equilibrium",
                        id: "equilibrium",
                        hasNotes: false
                    },
                    {
                        name: "Redox Reactions",
                        id: "redox-reactions",
                        hasNotes: false
                    },
                    {
                        name: "Hydrogen",
                        id: "hydrogen",
                        hasNotes: false
                    },
                    {
                        name: "The s-Block Elements",
                        id: "the-s-block-elements",
                        hasNotes: false
                    },
                    {
                        name: "The p-Block Elements",
                        id: "the-p-block-elements",
                        hasNotes: false
                    },
                    {
                        name: "Organic Chemistry - Some Basic Principles and Techniques",
                        id: "organic-chemistry-some-basic-principles-and-techniques",
                        hasNotes: false
                    },
                    {
                        name: "Hydrocarbons",
                        id: "hydrocarbons",
                        hasNotes: false
                    },
                    {
                        name: "Environmental Chemistry",
                        id: "environmental-chemistry",
                        hasNotes: false
                    }
                ]
            },
            "Mathematics": {
                sections: ["Algebra", "Coordinate Geometry", "Calculus", "Statistics"],
                chapters: [
                    {
                        name: "Sets",
                        id: "sets",
                        hasNotes: false
                    },
                    {
                        name: "Relations and Functions",
                        id: "relations-and-functions",
                        hasNotes: false
                    },
                    {
                        name: "Trigonometric Functions",
                        id: "trigonometric-functions",
                        hasNotes: false
                    },
                    {
                        name: "Principle of Mathematical Induction",
                        id: "principle-of-mathematical-induction",
                        hasNotes: false
                    },
                    {
                        name: "Complex Numbers and Quadratic Equations",
                        id: "complex-numbers-and-quadratic-equations",
                        hasNotes: false
                    },
                    {
                        name: "Linear Inequalities",
                        id: "linear-inequalities",
                        hasNotes: false
                    },
                    {
                        name: "Permutations and Combinations",
                        id: "permutations-and-combinations",
                        hasNotes: false
                    },
                    {
                        name: "Binomial Theorem",
                        id: "binomial-theorem",
                        hasNotes: false
                    },
                    {
                        name: "Sequences and Series",
                        id: "sequences-and-series",
                        hasNotes: false
                    },
                    {
                        name: "Straight Lines",
                        id: "straight-lines",
                        hasNotes: false
                    },
                    {
                        name: "Conic Sections",
                        id: "conic-sections",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Three Dimensional Geometry",
                        id: "introduction-to-three-dimensional-geometry",
                        hasNotes: false
                    },
                    {
                        name: "Limits and Derivatives",
                        id: "limits-and-derivatives",
                        hasNotes: false
                    },
                    {
                        name: "Mathematical Reasoning",
                        id: "mathematical-reasoning",
                        hasNotes: false
                    },
                    {
                        name: "Statistics",
                        id: "statistics-class-11",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability-class-11",
                        hasNotes: false
                    }
                ]
            },
            "Biology": {
                sections: ["Botany", "Zoology"],
                chapters: [
                    {
                        name: "The Living World",
                        id: "the-living-world",
                        hasNotes: false
                    },
                    {
                        name: "Biological Classification",
                        id: "biological-classification",
                        hasNotes: false
                    },
                    {
                        name: "Plant Kingdom",
                        id: "plant-kingdom",
                        hasNotes: false
                    },
                    {
                        name: "Animal Kingdom",
                        id: "animal-kingdom",
                        hasNotes: false
                    },
                    {
                        name: "Morphology of Flowering Plants",
                        id: "morphology-of-flowering-plants",
                        hasNotes: false
                    },
                    {
                        name: "Anatomy of Flowering Plants",
                        id: "anatomy-of-flowering-plants",
                        hasNotes: false
                    },
                    {
                        name: "Structural Organisation in Animals",
                        id: "structural-organisation-in-animals",
                        hasNotes: false
                    },
                    {
                        name: "Cell: The Unit of Life",
                        id: "cell-the-unit-of-life",
                        hasNotes: false
                    },
                    {
                        name: "Biomolecules",
                        id: "biomolecules",
                        hasNotes: false
                    },
                    {
                        name: "Cell Cycle and Cell Division",
                        id: "cell-cycle-and-cell-division",
                        hasNotes: false
                    },
                    {
                        name: "Transport in Plants",
                        id: "transport-in-plants",
                        hasNotes: false
                    },
                    {
                        name: "Mineral Nutrition",
                        id: "mineral-nutrition",
                        hasNotes: false
                    },
                    {
                        name: "Photosynthesis in Higher Plants",
                        id: "photosynthesis-in-higher-plants",
                        hasNotes: false
                    },
                    {
                        name: "Respiration in Plants",
                        id: "respiration-in-plants",
                        hasNotes: false
                    },
                    {
                        name: "Plant Growth and Development",
                        id: "plant-growth-and-development",
                        hasNotes: false
                    },
                    {
                        name: "Digestion and Absorption",
                        id: "digestion-and-absorption",
                        hasNotes: false
                    },
                    {
                        name: "Breathing and Exchange of Gases",
                        id: "breathing-and-exchange-of-gases",
                        hasNotes: false
                    },
                    {
                        name: "Body Fluids and Circulation",
                        id: "body-fluids-and-circulation",
                        hasNotes: false
                    },
                    {
                        name: "Excretory Products and their Elimination",
                        id: "excretory-products-and-their-elimination",
                        hasNotes: false
                    },
                    {
                        name: "Locomotion and Movement",
                        id: "locomotion-and-movement",
                        hasNotes: false
                    },
                    {
                        name: "Neural Control and Coordination",
                        id: "neural-control-and-coordination",
                        hasNotes: false
                    },
                    {
                        name: "Chemical Coordination and Integration",
                        id: "chemical-coordination-and-integration",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Hornbill", "Snapshots"],
                chapters: [
                    {
                        name: "The Portrait of a Lady",
                        id: "the-portrait-of-a-lady",
                        hasNotes: false
                    },
                    {
                        name: "We're Not Afraid to Die... if We Can All Be Together",
                        id: "we-are-not-afraid-to-die-if-we-can-all-be-together",
                        hasNotes: false
                    },
                    {
                        name: "Discovering Tut: the Saga Continues",
                        id: "discovering-tut-the-saga-continues",
                        hasNotes: false
                    },
                    {
                        name: "Landscape of the Soul",
                        id: "landscape-of-the-soul",
                        hasNotes: false
                    },
                    {
                        name: "The Ailing Planet: the Green Movement's Role",
                        id: "the-ailing-planet-the-green-movement-role",
                        hasNotes: false
                    },
                    {
                        name: "The Browning Version",
                        id: "the-browning-version",
                        hasNotes: false
                    },
                    {
                        name: "The Adventure",
                        id: "the-adventure",
                        hasNotes: false
                    },
                    {
                        name: "Silk Road",
                        id: "silk-road",
                        hasNotes: false
                    },
                    {
                        name: "The Summer of the Beautiful White Horse",
                        id: "the-summer-of-the-beautiful-white-horse",
                        hasNotes: false
                    },
                    {
                        name: "The Address",
                        id: "the-address",
                        hasNotes: false
                    },
                    {
                        name: "Ranga's Marriage",
                        id: "ranga-marriage",
                        hasNotes: false
                    },
                    {
                        name: "Albert Einstein at School",
                        id: "albert-einstein-at-school",
                        hasNotes: false
                    },
                    {
                        name: "Mother's Day",
                        id: "mother-day",
                        hasNotes: false
                    },
                    {
                        name: "The Ghat of the Only World",
                        id: "the-ghat-of-the-only-world",
                        hasNotes: false
                    },
                    {
                        name: "Birth",
                        id: "birth",
                        hasNotes: false
                    },
                    {
                        name: "The Tale of Melon City",
                        id: "the-tale-of-melon-city",
                        hasNotes: false
                    }
                ]
            }
        },
        commerce: {
            "Accountancy": {
                sections: ["Financial Accounting", "Partnership"],
                chapters: [
                    {
                        name: "Introduction to Accounting",
                        id: "introduction-to-accounting",
                        hasNotes: false
                    },
                    {
                        name: "Theory Base of Accounting",
                        id: "theory-base-of-accounting",
                        hasNotes: false
                    },
                    {
                        name: "Recording of Transactions – I",
                        id: "recording-of-transactions-1",
                        hasNotes: false
                    },
                    {
                        name: "Recording of Transactions – II",
                        id: "recording-of-transactions-2",
                        hasNotes: false
                    },
                    {
                        name: "Bank Reconciliation Statement",
                        id: "bank-reconciliation-statement",
                        hasNotes: false
                    },
                    {
                        name: "Trial Balance and Rectification of Errors",
                        id: "trial-balance-and-rectification-of-errors",
                        hasNotes: false
                    },
                    {
                        name: "Depreciation, Provisions and Reserves",
                        id: "depreciation-provisions-and-reserves",
                        hasNotes: false
                    },
                    {
                        name: "Bill of Exchange",
                        id: "bill-of-exchange",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Partnership",
                        id: "introduction-to-partnership",
                        hasNotes: false
                    },
                    {
                        name: "Goodwill",
                        id: "goodwill",
                        hasNotes: false
                    },
                    {
                        name: "Change in Profit Sharing Ratio among the Existing Partners",
                        id: "change-in-profit-sharing-ratio-among-the-existing-partners",
                        hasNotes: false
                    },
                    {
                        name: "Admission of a Partner",
                        id: "admission-of-a-partner",
                        hasNotes: false
                    },
                    {
                        name: "Retirement/Death of a Partner",
                        id: "retirement-death-of-a-partner",
                        hasNotes: false
                    },
                    {
                        name: "Dissolution of Partnership Firm",
                        id: "dissolution-of-partnership-firm",
                        hasNotes: false
                    }
                ]
            },
            "Business Studies": {
                sections: ["Foundations of Business", "Corporate Organization"],
                chapters: [
                    {
                        name: "Nature and Purpose of Business",
                        id: "nature-and-purpose-of-business",
                        hasNotes: false
                    },
                    {
                        name: "Forms of Business Organisation",
                        id: "forms-of-business-organisation",
                        hasNotes: false
                    },
                    {
                        name: "Private, Public and Global Enterprises",
                        id: "private-public-and-global-enterprises",
                        hasNotes: false
                    },
                    {
                        name: "Business Services",
                        id: "business-services",
                        hasNotes: false
                    },
                    {
                        name: "Emerging Modes of Business",
                        id: "emerging-modes-of-business",
                        hasNotes: false
                    },
                    {
                        name: "Social Responsibilities of Business and Business Ethics",
                        id: "social-responsibilities-of-business-and-business-ethics",
                        hasNotes: false
                    },
                    {
                        name: "Formation of a Company",
                        id: "formation-of-a-company",
                        hasNotes: false
                    },
                    {
                        name: "Sources of Business Finance",
                        id: "sources-of-business-finance",
                        hasNotes: false
                    },
                    {
                        name: "Small Business",
                        id: "small-business",
                        hasNotes: false
                    },
                    {
                        name: "Internal Trade",
                        id: "internal-trade",
                        hasNotes: false
                    },
                    {
                        name: "International Business",
                        id: "international-business",
                        hasNotes: false
                    }
                ]
            },
            "Economics": {
                sections: ["Microeconomics", "Statistics"],
                chapters: [
                    {
                        name: "Introduction to Microeconomics",
                        id: "introduction-to-microeconomics",
                        hasNotes: false
                    },
                    {
                        name: "Theory of Consumer Behaviour",
                        id: "theory-of-consumer-behaviour",
                        hasNotes: false
                    },
                    {
                        name: "Production and Costs",
                        id: "production-and-costs",
                        hasNotes: false
                    },
                    {
                        name: "Theory of Firm Under Perfect Competition",
                        id: "theory-of-firm-under-perfect-competition",
                        hasNotes: false
                    },
                    {
                        name: "Market Equilibrium",
                        id: "market-equilibrium",
                        hasNotes: false
                    },
                    {
                        name: "Non-competitive Markets",
                        id: "non-competitive-markets",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Statistics",
                        id: "introduction-to-statistics",
                        hasNotes: false
                    },
                    {
                        name: "Collection, Organisation and Presentation of Data",
                        id: "collection-organisation-and-presentation-of-data",
                        hasNotes: false
                    },
                    {
                        name: "Statistical Tools and Interpretation",
                        id: "statistical-tools-and-interpretation",
                        hasNotes: false
                    },
                    {
                        name: "Measures of Central Tendency",
                        id: "measures-of-central-tendency",
                        hasNotes: false
                    },
                    {
                        name: "Measures of Dispersion",
                        id: "measures-of-dispersion",
                        hasNotes: false
                    },
                    {
                        name: "Correlation",
                        id: "correlation",
                        hasNotes: false
                    },
                    {
                        name: "Index Numbers",
                        id: "index-numbers",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Hornbill", "Snapshots"],
                chapters: [
                    {
                        name: "The Portrait of a Lady",
                        id: "the-portrait-of-a-lady-commerce",
                        hasNotes: false
                    },
                    {
                        name: "We're Not Afraid to Die... if We Can All Be Together",
                        id: "we-are-not-afraid-to-die-if-we-can-all-be-together-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Discovering Tut: the Saga Continues",
                        id: "discovering-tut-the-saga-continues-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Landscape of the Soul",
                        id: "landscape-of-the-soul-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Ailing Planet: the Green Movement's Role",
                        id: "the-ailing-planet-the-green-movement-role-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Browning Version",
                        id: "the-browning-version-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Adventure",
                        id: "the-adventure-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Silk Road",
                        id: "silk-road-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Summer of the Beautiful White Horse",
                        id: "the-summer-of-the-beautiful-white-horse-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Address",
                        id: "the-address-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Ranga's Marriage",
                        id: "ranga-marriage-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Albert Einstein at School",
                        id: "albert-einstein-at-school-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Mother's Day",
                        id: "mother-day-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Ghat of the Only World",
                        id: "the-ghat-of-the-only-world-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Birth",
                        id: "birth-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Tale of Melon City",
                        id: "the-tale-of-melon-city-commerce",
                        hasNotes: false
                    }
                ]
            },
            "Mathematics": {
                sections: ["Algebra", "Coordinate Geometry", "Calculus", "Statistics"],
                chapters: [
                    {
                        name: "Sets",
                        id: "sets-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Relations and Functions",
                        id: "relations-and-functions-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Trigonometric Functions",
                        id: "trigonometric-functions-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Principle of Mathematical Induction",
                        id: "principle-of-mathematical-induction-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Complex Numbers and Quadratic Equations",
                        id: "complex-numbers-and-quadratic-equations-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Linear Inequalities",
                        id: "linear-inequalities-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Permutations and Combinations",
                        id: "permutations-and-combinations-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Binomial Theorem",
                        id: "binomial-theorem-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Sequences and Series",
                        id: "sequences-and-series-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Straight Lines",
                        id: "straight-lines-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Conic Sections",
                        id: "conic-sections-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Introduction to Three Dimensional Geometry",
                        id: "introduction-to-three-dimensional-geometry-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Limits and Derivatives",
                        id: "limits-and-derivatives-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Mathematical Reasoning",
                        id: "mathematical-reasoning-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Statistics",
                        id: "statistics-class-11-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability-class-11-commerce",
                        hasNotes: false
                    }
                ]
            }
        },
        arts: {
            "History": {
                sections: ["Ancient History", "Medieval History"],
                chapters: [
                    {
                        name: "From the Beginning of Time",
                        id: "from-the-beginning-of-time",
                        hasNotes: false
                    },
                    {
                        name: "Writing and City Life",
                        id: "writing-and-city-life",
                        hasNotes: false
                    },
                    {
                        name: "An Empire Across Three Continents",
                        id: "an-empire-across-three-continents",
                        hasNotes: false
                    },
                    {
                        name: "The Central Islamic Lands",
                        id: "the-central-islamic-lands",
                        hasNotes: false
                    },
                    {
                        name: "Nomadic Empires",
                        id: "nomadic-empires",
                        hasNotes: false
                    },
                    {
                        name: "The Three Orders",
                        id: "the-three-orders",
                        hasNotes: false
                    },
                    {
                        name: "Changing Cultural Traditions",
                        id: "changing-cultural-traditions",
                        hasNotes: false
                    },
                    {
                        name: "Confrontation of Cultures",
                        id: "confrontation-of-cultures",
                        hasNotes: false
                    },
                    {
                        name: "The Industrial Revolution",
                        id: "the-industrial-revolution",
                        hasNotes: false
                    },
                    {
                        name: "Displacing Indigenous Peoples",
                        id: "displacing-indigenous-peoples",
                        hasNotes: false
                    },
                    {
                        name: "Paths to Modernisation",
                        id: "paths-to-modernisation",
                        hasNotes: false
                    }
                ]
            },
            "Geography": {
                sections: ["Physical Geography", "Practical Work"],
                chapters: [
                    {
                        name: "Geography as a Discipline",
                        id: "geography-as-a-discipline",
                        hasNotes: false
                    },
                    {
                        name: "The Origin and Evolution of the Earth",
                        id: "the-origin-and-evolution-of-the-earth",
                        hasNotes: false
                    },
                    {
                        name: "Interior of the Earth",
                        id: "interior-of-the-earth",
                        hasNotes: false
                    },
                    {
                        name: "Distribution of Oceans and Continents",
                        id: "distribution-of-oceans-and-continents",
                        hasNotes: false
                    },
                    {
                        name: "Minerals and Rocks",
                        id: "minerals-and-rocks",
                        hasNotes: false
                    },
                    {
                        name: "Geomorphic Processes",
                        id: "geomorphic-processes",
                        hasNotes: false
                    },
                    {
                        name: "Landforms and their Evolution",
                        id: "landforms-and-their-evolution",
                        hasNotes: false
                    },
                    {
                        name: "Composition and Structure of Atmosphere",
                        id: "composition-and-structure-of-atmosphere",
                        hasNotes: false
                    },
                    {
                        name: "Solar Radiation, Heat Balance and Temperature",
                        id: "solar-radiation-heat-balance-and-temperature",
                        hasNotes: false
                    },
                    {
                        name: "Atmospheric Circulation and Weather Systems",
                        id: "atmospheric-circulation-and-weather-systems",
                        hasNotes: false
                    },
                    {
                        name: "Water in the Atmosphere",
                        id: "water-in-the-atmosphere",
                        hasNotes: false
                    },
                    {
                        name: "World Climate and Climate Change",
                        id: "world-climate-and-climate-change",
                        hasNotes: false
                    },
                    {
                        name: "Water (Oceans)",
                        id: "water-oceans",
                        hasNotes: false
                    },
                    {
                        name: "Movements of Ocean Water",
                        id: "movements-of-ocean-water",
                        hasNotes: false
                    },
                    {
                        name: "Life on the Earth",
                        id: "life-on-the-earth",
                        hasNotes: false
                    },
                    {
                        name: "Biodiversity and Conservation",
                        id: "biodiversity-and-conservation",
                        hasNotes: false
                    }
                ]
            },
            "Political Science": {
                sections: ["Indian Constitution", "Political Theory"],
                chapters: [
                    {
                        name: "Constitution: Why and How?",
                        id: "constitution-why-and-how",
                        hasNotes: false
                    },
                    {
                        name: "Rights in the Indian Constitution",
                        id: "rights-in-the-indian-constitution",
                        hasNotes: false
                    },
                    {
                        name: "Election and Representation",
                        id: "election-and-representation",
                        hasNotes: false
                    },
                    {
                        name: "Executive",
                        id: "executive",
                        hasNotes: false
                    },
                    {
                        name: "Legislature",
                        id: "legislature",
                        hasNotes: false
                    },
                    {
                        name: "Judiciary",
                        id: "judiciary-class-11",
                        hasNotes: false
                    },
                    {
                        name: "Federalism",
                        id: "federalism-class-11",
                        hasNotes: false
                    },
                    {
                        name: "Local Governments",
                        id: "local-governments",
                        hasNotes: false
                    },
                    {
                        name: "Constitution as a Living Document",
                        id: "constitution-as-a-living-document",
                        hasNotes: false
                    },
                    {
                        name: "Political Theory: An Introduction",
                        id: "political-theory-an-introduction",
                        hasNotes: false
                    },
                    {
                        name: "Freedom",
                        id: "freedom",
                        hasNotes: false
                    },
                    {
                        name: "Equality",
                        id: "equality",
                        hasNotes: false
                    },
                    {
                        name: "Social Justice",
                        id: "social-justice",
                        hasNotes: false
                    },
                    {
                        name: "Rights",
                        id: "rights",
                        hasNotes: false
                    },
                    {
                        name: "Citizenship",
                        id: "citizenship",
                        hasNotes: false
                    },
                    {
                        name: "Nationalism",
                        id: "nationalism",
                        hasNotes: false
                    },
                    {
                        name: "Secularism",
                        id: "secularism",
                        hasNotes: false
                    },
                    {
                        name: "Peace",
                        id: "peace",
                        hasNotes: false
                    },
                    {
                        name: "Development",
                        id: "development-class-11",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Hornbill", "Snapshots"],
                chapters: [
                    {
                        name: "The Portrait of a Lady",
                        id: "the-portrait-of-a-lady-arts",
                        hasNotes: false
                    },
                    {
                        name: "We're Not Afraid to Die... if We Can All Be Together",
                        id: "we-are-not-afraid-to-die-if-we-can-all-be-together-arts",
                        hasNotes: false
                    },
                    {
                        name: "Discovering Tut: the Saga Continues",
                        id: "discovering-tut-the-saga-continues-arts",
                        hasNotes: false
                    },
                    {
                        name: "Landscape of the Soul",
                        id: "landscape-of-the-soul-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Ailing Planet: the Green Movement's Role",
                        id: "the-ailing-planet-the-green-movement-role-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Browning Version",
                        id: "the-browning-version-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Adventure",
                        id: "the-adventure-arts",
                        hasNotes: false
                    },
                    {
                        name: "Silk Road",
                        id: "silk-road-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Summer of the Beautiful White Horse",
                        id: "the-summer-of-the-beautiful-white-horse-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Address",
                        id: "the-address-arts",
                        hasNotes: false
                    },
                    {
                        name: "Ranga's Marriage",
                        id: "ranga-marriage-arts",
                        hasNotes: false
                    },
                    {
                        name: "Albert Einstein at School",
                        id: "albert-einstein-at-school-arts",
                        hasNotes: false
                    },
                    {
                        name: "Mother's Day",
                        id: "mother-day-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Ghat of the Only World",
                        id: "the-ghat-of-the-only-world-arts",
                        hasNotes: false
                    },
                    {
                        name: "Birth",
                        id: "birth-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Tale of Melon City",
                        id: "the-tale-of-melon-city-arts",
                        hasNotes: false
                    }
                ]
            },
            "Psychology": {
                sections: ["Foundations", "Cognitive Processes"],
                chapters: [
                    {
                        name: "What is Psychology?",
                        id: "what-is-psychology",
                        hasNotes: false
                    },
                    {
                        name: "Methods of Enquiry in Psychology",
                        id: "methods-of-enquiry-in-psychology",
                        hasNotes: false
                    },
                    {
                        name: "The Bases of Human Behaviour",
                        id: "the-bases-of-human-behaviour",
                        hasNotes: false
                    },
                    {
                        name: "Human Development",
                        id: "human-development",
                        hasNotes: false
                    },
                    {
                        name: "Sensory, Attentional and Perceptual Processes",
                        id: "sensory-attentional-and-perceptual-processes",
                        hasNotes: false
                    },
                    {
                        name: "Learning",
                        id: "learning",
                        hasNotes: false
                    },
                    {
                        name: "Human Memory",
                        id: "human-memory",
                        hasNotes: false
                    },
                    {
                        name: "Thinking",
                        id: "thinking",
                        hasNotes: false
                    },
                    {
                        name: "Motivation and Emotion",
                        id: "motivation-and-emotion",
                        hasNotes: false
                    }
                ]
            }
        }
    },
    12: {
        science: {
            "Physics": {
                sections: ["Electrodynamics", "Optics", "Modern Physics"],
                chapters: [
                    {
                        name: "Electric Charges and Fields",
                        id: "electric-charges-and-fields",
                        hasNotes: false
                    },
                    {
                        name: "Electrostatic Potential and Capacitance",
                        id: "electrostatic-potential-and-capacitance",
                        hasNotes: false
                    },
                    {
                        name: "Current Electricity",
                        id: "current-electricity",
                        hasNotes: false
                    },
                    {
                        name: "Moving Charges and Magnetism",
                        id: "moving-charges-and-magnetism",
                        hasNotes: false
                    },
                    {
                        name: "Magnetism and Matter",
                        id: "magnetism-and-matter",
                        hasNotes: false
                    },
                    {
                        name: "Electromagnetic Induction",
                        id: "electromagnetic-induction",
                        hasNotes: false
                    },
                    {
                        name: "Alternating Current",
                        id: "alternating-current",
                        hasNotes: false
                    },
                    {
                        name: "Electromagnetic Waves",
                        id: "electromagnetic-waves",
                        hasNotes: false
                    },
                    {
                        name: "Ray Optics and Optical Instruments",
                        id: "ray-optics-and-optical-instruments",
                        hasNotes: false
                    },
                    {
                        name: "Wave Optics",
                        id: "wave-optics",
                        hasNotes: false
                    },
                    {
                        name: "Dual Nature of Radiation and Matter",
                        id: "dual-nature-of-radiation-and-matter",
                        hasNotes: false
                    },
                    {
                        name: "Atoms",
                        id: "atoms",
                        hasNotes: false
                    },
                    {
                        name: "Nuclei",
                        id: "nuclei",
                        hasNotes: false
                    },
                    {
                        name: "Semiconductor Electronics",
                        id: "semiconductor-electronics",
                        hasNotes: false
                    },
                    {
                        name: "Communication Systems",
                        id: "communication-systems",
                        hasNotes: false
                    }
                ]
            },
            "Chemistry": {
                sections: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
                chapters: [
                    {
                        name: "The Solid State",
                        id: "the-solid-state",
                        hasNotes: false
                    },
                    {
                        name: "Solutions",
                        id: "solutions",
                        hasNotes: false
                    },
                    {
                        name: "Electrochemistry",
                        id: "electrochemistry",
                        hasNotes: false
                    },
                    {
                        name: "Chemical Kinetics",
                        id: "chemical-kinetics",
                        hasNotes: false
                    },
                    {
                        name: "Surface Chemistry",
                        id: "surface-chemistry",
                        hasNotes: false
                    },
                    {
                        name: "General Principles and Processes of Isolation of Elements",
                        id: "general-principles-and-processes-of-isolation-of-elements",
                        hasNotes: false
                    },
                    {
                        name: "The p-Block Elements",
                        id: "the-p-block-elements-class-12",
                        hasNotes: false
                    },
                    {
                        name: "The d-and f-Block Elements",
                        id: "the-d-and-f-block-elements",
                        hasNotes: false
                    },
                    {
                        name: "Coordination Compounds",
                        id: "coordination-compounds",
                        hasNotes: false
                    },
                    {
                        name: "Haloalkanes and Haloarenes",
                        id: "haloalkanes-and-haloarenes",
                        hasNotes: false
                    },
                    {
                        name: "Alcohols, Phenols and Ethers",
                        id: "alcohols-phenols-and-ethers",
                        hasNotes: false
                    },
                    {
                        name: "Aldehydes, Ketones and Carboxylic Acids",
                        id: "aldehydes-ketones-and-carboxylic-acids",
                        hasNotes: false
                    },
                    {
                        name: "Amines",
                        id: "amines",
                        hasNotes: false
                    },
                    {
                        name: "Biomolecules",
                        id: "biomolecules-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Polymers",
                        id: "polymers",
                        hasNotes: false
                    },
                    {
                        name: "Chemistry in Everyday Life",
                        id: "chemistry-in-everyday-life",
                        hasNotes: false
                    }
                ]
            },
            "Mathematics": {
                sections: ["Calculus", "Algebra", "Vectors", "Probability"],
                chapters: [
                    {
                        name: "Relations and Functions",
                        id: "relations-and-functions-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Inverse Trigonometric Functions",
                        id: "inverse-trigonometric-functions",
                        hasNotes: false
                    },
                    {
                        name: "Matrices",
                        id: "matrices",
                        hasNotes: false
                    },
                    {
                        name: "Determinants",
                        id: "determinants",
                        hasNotes: false
                    },
                    {
                        name: "Continuity and Differentiability",
                        id: "continuity-and-differentiability",
                        hasNotes: false
                    },
                    {
                        name: "Application of Derivatives",
                        id: "application-of-derivatives",
                        hasNotes: false
                    },
                    {
                        name: "Integrals",
                        id: "integrals",
                        hasNotes: false
                    },
                    {
                        name: "Application of Integrals",
                        id: "application-of-integrals",
                        hasNotes: false
                    },
                    {
                        name: "Differential Equations",
                        id: "differential-equations",
                        hasNotes: false
                    },
                    {
                        name: "Vector Algebra",
                        id: "vector-algebra",
                        hasNotes: false
                    },
                    {
                        name: "Three Dimensional Geometry",
                        id: "three-dimensional-geometry",
                        hasNotes: false
                    },
                    {
                        name: "Linear Programming",
                        id: "linear-programming",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability-class-12",
                        hasNotes: false
                    }
                ]
            },
            "Biology": {
                sections: ["Botany", "Zoology"],
                chapters: [
                    {
                        name: "Reproduction in Organisms",
                        id: "reproduction-in-organisms",
                        hasNotes: false
                    },
                    {
                        name: "Sexual Reproduction in Flowering Plants",
                        id: "sexual-reproduction-in-flowering-plants",
                        hasNotes: false
                    },
                    {
                        name: "Human Reproduction",
                        id: "human-reproduction",
                        hasNotes: false
                    },
                    {
                        name: "Reproductive Health",
                        id: "reproductive-health",
                        hasNotes: false
                    },
                    {
                        name: "Principles of Inheritance and Variation",
                        id: "principles-of-inheritance-and-variation",
                        hasNotes: false
                    },
                    {
                        name: "Molecular Basis of Inheritance",
                        id: "molecular-basis-of-inheritance",
                        hasNotes: false
                    },
                    {
                        name: "Evolution",
                        id: "evolution",
                        hasNotes: false
                    },
                    {
                        name: "Human Health and Disease",
                        id: "human-health-and-disease",
                        hasNotes: false
                    },
                    {
                        name: "Strategies for Enhancement in Food Production",
                        id: "strategies-for-enhancement-in-food-production",
                        hasNotes: false
                    },
                    {
                        name: "Microbes in Human Welfare",
                        id: "microbes-in-human-welfare",
                        hasNotes: false
                    },
                    {
                        name: "Biotechnology: Principles and Processes",
                        id: "biotechnology-principles-and-processes",
                        hasNotes: false
                    },
                    {
                        name: "Biotechnology and its Applications",
                        id: "biotechnology-and-its-applications",
                        hasNotes: false
                    },
                    {
                        name: "Organisms and Populations",
                        id: "organisms-and-populations",
                        hasNotes: false
                    },
                    {
                        name: "Ecosystem",
                        id: "ecosystem",
                        hasNotes: false
                    },
                    {
                        name: "Biodiversity and Conservation",
                        id: "biodiversity-and-conservation-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Environmental Issues",
                        id: "environmental-issues",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Flamingo", "Vistas"],
                chapters: [
                    {
                        name: "The Last Lesson",
                        id: "the-last-lesson",
                        hasNotes: false
                    },
                    {
                        name: "Lost Spring",
                        id: "lost-spring",
                        hasNotes: false
                    },
                    {
                        name: "Deep Water",
                        id: "deep-water",
                        hasNotes: false
                    },
                    {
                        name: "The Rattrap",
                        id: "the-rattrap",
                        hasNotes: false
                    },
                    {
                        name: "Indigo",
                        id: "indigo",
                        hasNotes: false
                    },
                    {
                        name: "Poets and Pancakes",
                        id: "poets-and-pancakes",
                        hasNotes: false
                    },
                    {
                        name: "The Interview",
                        id: "the-interview",
                        hasNotes: false
                    },
                    {
                        name: "Going Places",
                        id: "going-places",
                        hasNotes: false
                    },
                    {
                        name: "My Mother at Sixty-six",
                        id: "my-mother-at-sixty-six",
                        hasNotes: false
                    },
                    {
                        name: "Keeping Quiet",
                        id: "keeping-quiet",
                        hasNotes: false
                    },
                    {
                        name: "A Thing of Beauty",
                        id: "a-thing-of-beauty",
                        hasNotes: false
                    },
                    {
                        name: "A Roadside Stand",
                        id: "a-roadside-stand",
                        hasNotes: false
                    },
                    {
                        name: "Aunt Jennifer's Tigers",
                        id: "aunt-jennifer-tigers",
                        hasNotes: false
                    },
                    {
                        name: "The Third Level",
                        id: "the-third-level",
                        hasNotes: false
                    },
                    {
                        name: "The Tiger King",
                        id: "the-tiger-king",
                        hasNotes: false
                    },
                    {
                        name: "The Enemy",
                        id: "the-enemy",
                        hasNotes: false
                    },
                    {
                        name: "Should Wizard Hit Mommy?",
                        id: "should-wizard-hit-mommy",
                        hasNotes: false
                    },
                    {
                        name: "On the Face of It",
                        id: "on-the-face-of-it",
                        hasNotes: false
                    },
                    {
                        name: "Evans Tries an O-level",
                        id: "evans-tries-an-o-level",
                        hasNotes: false
                    },
                    {
                        name: "Memories of Childhood",
                        id: "memories-of-childhood",
                        hasNotes: false
                    }
                ]
            }
        },
        commerce: {
            "Accountancy": {
                sections: ["Company Accounts", "Analysis of Financial Statements"],
                chapters: [
                    {
                        name: "Accounting for Share Capital",
                        id: "accounting-for-share-capital",
                        hasNotes: false
                    },
                    {
                        name: "Accounting for Debentures",
                        id: "accounting-for-debentures",
                        hasNotes: false
                    },
                    {
                        name: "Financial Statements of a Company",
                        id: "financial-statements-of-a-company",
                        hasNotes: false
                    },
                    {
                        name: "Analysis of Financial Statements",
                        id: "analysis-of-financial-statements",
                        hasNotes: false
                    },
                    {
                        name: "Accounting Ratios",
                        id: "accounting-ratios",
                        hasNotes: false
                    },
                    {
                        name: "Cash Flow Statement",
                        id: "cash-flow-statement",
                        hasNotes: false
                    },
                    {
                        name: "Accounting for Partnership",
                        id: "accounting-for-partnership",
                        hasNotes: false
                    },
                    {
                        name: "Reconstitution of Partnership",
                        id: "reconstitution-of-partnership",
                        hasNotes: false
                    },
                    {
                        name: "Dissolution of Partnership",
                        id: "dissolution-of-partnership",
                        hasNotes: false
                    },
                    {
                        name: "Accounting for Not-for-Profit Organisation",
                        id: "accounting-for-not-for-profit-organisation",
                        hasNotes: false
                    },
                    {
                        name: "Admission of a Partner",
                        id: "admission-of-a-partner-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Retirement/Death of a Partner",
                        id: "retirement-death-of-a-partner-class-12",
                        hasNotes: false
                    }
                ]
            },
                        "Business Studies": {
                sections: ["Management", "Marketing", "Finance"],
                chapters: [
                    {
                        name: "Nature and Significance of Management",
                        id: "nature-and-significance-of-management",
                        hasNotes: false
                    },
                    {
                        name: "Principles of Management",
                        id: "principles-of-management",
                        hasNotes: false
                    },
                    {
                        name: "Business Environment",
                        id: "business-environment",
                        hasNotes: false
                    },
                    {
                        name: "Planning",
                        id: "planning",
                        hasNotes: false
                    },
                    {
                        name: "Organising",
                        id: "organising",
                        hasNotes: false
                    },
                    {
                        name: "Staffing",
                        id: "staffing",
                        hasNotes: false
                    },
                    {
                        name: "Directing",
                        id: "directing",
                        hasNotes: false
                    },
                    {
                        name: "Controlling",
                        id: "controlling",
                        hasNotes: false
                    },
                    {
                        name: "Business Finance",
                        id: "business-finance",
                        hasNotes: false
                    },
                    {
                        name: "Financial Markets",
                        id: "financial-markets",
                        hasNotes: false
                    },
                    {
                        name: "Marketing",
                        id: "marketing",
                        hasNotes: false
                    },
                    {
                        name: "Consumer Protection",
                        id: "consumer-protection",
                        hasNotes: false
                    }
                ]
            },
            "Economics": {
                sections: ["Macroeconomics", "Indian Economic Development"],
                chapters: [
                    {
                        name: "Introduction to Macroeconomics",
                        id: "introduction-to-macroeconomics",
                        hasNotes: false
                    },
                    {
                        name: "National Income Accounting",
                        id: "national-income-accounting",
                        hasNotes: false
                    },
                    {
                        name: "Money and Banking",
                        id: "money-and-banking",
                        hasNotes: false
                    },
                    {
                        name: "Determination of Income and Employment",
                        id: "determination-of-income-and-employment",
                        hasNotes: false
                    },
                    {
                        name: "Government Budget and the Economy",
                        id: "government-budget-and-the-economy",
                        hasNotes: false
                    },
                    {
                        name: "Open Economy Macroeconomics",
                        id: "open-economy-macroeconomics",
                        hasNotes: false
                    },
                    {
                        name: "Development Experience (1947-90) and Economic Reforms since 1991",
                        id: "development-experience-1947-90-economic-reforms-since-1991",
                        hasNotes: false
                    },
                    {
                        name: "Current Challenges facing the Indian Economy",
                        id: "current-challenges-facing-the-indian-economy",
                        hasNotes: false
                    },
                    {
                        name: "Development Experience of India",
                        id: "development-experience-of-india",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Flamingo", "Vistas"],
                chapters: [
                    {
                        name: "The Last Lesson",
                        id: "the-last-lesson-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Lost Spring",
                        id: "lost-spring-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Deep Water",
                        id: "deep-water-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Rattrap",
                        id: "the-rattrap-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Indigo",
                        id: "indigo-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Poets and Pancakes",
                        id: "poets-and-pancakes-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Interview",
                        id: "the-interview-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Going Places",
                        id: "going-places-commerce",
                        hasNotes: false
                    },
                    {
                        name: "My Mother at Sixty-six",
                        id: "my-mother-at-sixty-six-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Keeping Quiet",
                        id: "keeping-quiet-commerce",
                        hasNotes: false
                    },
                    {
                        name: "A Thing of Beauty",
                        id: "a-thing-of-beauty-commerce",
                        hasNotes: false
                    },
                    {
                        name: "A Roadside Stand",
                        id: "a-roadside-stand-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Aunt Jennifer's Tigers",
                        id: "aunt-jennifer-tigers-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Third Level",
                        id: "the-third-level-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Tiger King",
                        id: "the-tiger-king-commerce",
                        hasNotes: false
                    },
                    {
                        name: "The Enemy",
                        id: "the-enemy-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Should Wizard Hit Mommy?",
                        id: "should-wizard-hit-mommy-commerce",
                        hasNotes: false
                    },
                    {
                        name: "On the Face of It",
                        id: "on-the-face-of-it-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Evans Tries an O-level",
                        id: "evans-tries-an-o-level-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Memories of Childhood",
                        id: "memories-of-childhood-commerce",
                        hasNotes: false
                    }
                ]
            },
            "Mathematics": {
                sections: ["Calculus", "Algebra", "Vectors", "Probability"],
                chapters: [
                    {
                        name: "Relations and Functions",
                        id: "relations-and-functions-class-12-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Inverse Trigonometric Functions",
                        id: "inverse-trigonometric-functions-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Matrices",
                        id: "matrices-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Determinants",
                        id: "determinants-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Continuity and Differentiability",
                        id: "continuity-and-differentiability-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Application of Derivatives",
                        id: "application-of-derivatives-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Integrals",
                        id: "integrals-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Application of Integrals",
                        id: "application-of-integrals-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Differential Equations",
                        id: "differential-equations-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Vector Algebra",
                        id: "vector-algebra-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Three Dimensional Geometry",
                        id: "three-dimensional-geometry-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Linear Programming",
                        id: "linear-programming-commerce",
                        hasNotes: false
                    },
                    {
                        name: "Probability",
                        id: "probability-class-12-commerce",
                        hasNotes: false
                    }
                ]
            }
        },
        arts: {
            "History": {
                sections: ["Ancient India", "Medieval India", "Modern India"],
                chapters: [
                    {
                        name: "Bricks, Beads and Bones",
                        id: "bricks-beads-and-bones",
                        hasNotes: false
                    },
                    {
                        name: "Kings, Farmers and Towns",
                        id: "kings-farmers-and-towns",
                        hasNotes: false
                    },
                    {
                        name: "Kinship, Caste and Class",
                        id: "kinship-caste-and-class",
                        hasNotes: false
                    },
                    {
                        name: "Thinkers, Beliefs and Buildings",
                        id: "thinkers-beliefs-and-buildings",
                        hasNotes: false
                    },
                    {
                        name: "Through the Eyes of Travellers",
                        id: "through-the-eyes-of-travellers",
                        hasNotes: false
                    },
                    {
                        name: "Bhakti-Sufi Traditions",
                        id: "bhakti-sufi-traditions",
                        hasNotes: false
                    },
                    {
                        name: "An Imperial Capital: Vijayanagara",
                        id: "an-imperial-capital-vijayanagara",
                        hasNotes: false
                    },
                    {
                        name: "Peasants, Zamindars and the State",
                        id: "peasants-zamindars-and-the-state",
                        hasNotes: false
                    },
                    {
                        name: "Kings and Chronicles",
                        id: "kings-and-chronicles",
                        hasNotes: false
                    },
                    {
                        name: "Colonial Cities",
                        id: "colonial-cities",
                        hasNotes: false
                    },
                    {
                        name: "Rebels and the Raj",
                        id: "rebels-and-the-raj",
                        hasNotes: false
                    },
                    {
                        name: "Mahatma Gandhi and the Nationalist Movement",
                        id: "mahatma-gandhi-and-the-nationalist-movement",
                        hasNotes: false
                    },
                    {
                        name: "Understanding Partition",
                        id: "understanding-partition",
                        hasNotes: false
                    },
                    {
                        name: "Framing the Constitution",
                        id: "framing-the-constitution",
                        hasNotes: false
                    }
                ]
            },
            "Geography": {
                sections: ["Human Geography", "India"],
                chapters: [
                    {
                        name: "Human Geography: Nature and Scope",
                        id: "human-geography-nature-and-scope",
                        hasNotes: false
                    },
                    {
                        name: "The World Population Distribution, Density and Growth",
                        id: "the-world-population-distribution-density-and-growth",
                        hasNotes: false
                    },
                    {
                        name: "Population Composition",
                        id: "population-composition",
                        hasNotes: false
                    },
                    {
                        name: "Human Development",
                        id: "human-development-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Primary Activities",
                        id: "primary-activities",
                        hasNotes: false
                    },
                    {
                        name: "Secondary Activities",
                        id: "secondary-activities",
                        hasNotes: false
                    },
                    {
                        name: "Tertiary and Quaternary Activities",
                        id: "tertiary-and-quaternary-activities",
                        hasNotes: false
                    },
                    {
                        name: "Transport and Communication",
                        id: "transport-and-communication",
                        hasNotes: false
                    },
                    {
                        name: "International Trade",
                        id: "international-trade",
                        hasNotes: false
                    },
                    {
                        name: "Human Settlements",
                        id: "human-settlements",
                        hasNotes: false
                    },
                    {
                        name: "Population: Distribution, Density, Growth and Composition",
                        id: "population-distribution-density-growth-and-composition",
                        hasNotes: false
                    },
                    {
                        name: "Migration: Types, Causes and Consequences",
                        id: "migration-types-causes-and-consequences",
                        hasNotes: false
                    },
                    {
                        name: "Human Development",
                        id: "human-development-india",
                        hasNotes: false
                    },
                    {
                        name: "Human Settlements",
                        id: "human-settlements-india",
                        hasNotes: false
                    },
                    {
                        name: "Land Resources and Agriculture",
                        id: "land-resources-and-agriculture",
                        hasNotes: false
                    },
                    {
                        name: "Water Resources",
                        id: "water-resources-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Mineral and Energy Resources",
                        id: "mineral-and-energy-resources-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Manufacturing Industries",
                        id: "manufacturing-industries-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Planning and Sustainable Development in Indian Context",
                        id: "planning-and-sustainable-development-in-indian-context",
                        hasNotes: false
                    },
                    {
                        name: "Transport and Communication",
                        id: "transport-and-communication-class-12",
                        hasNotes: false
                    },
                    {
                        name: "International Trade",
                        id: "international-trade-class-12",
                        hasNotes: false
                    },
                    {
                        name: "Geographical Perspective on Selected Issues and Problems",
                        id: "geographical-perspective-on-selected-issues-and-problems",
                        hasNotes: false
                    }
                ]
            },
            "Political Science": {
                sections: ["Contemporary World Politics", "Politics in India"],
                chapters: [
                    {
                        name: "The Cold War Era",
                        id: "the-cold-war-era",
                        hasNotes: false
                    },
                    {
                        name: "The End of Bipolarity",
                        id: "the-end-of-bipolarity",
                        hasNotes: false
                    },
                    {
                        name: "US Hegemony in World Politics",
                        id: "us-hegemony-in-world-politics",
                        hasNotes: false
                    },
                    {
                        name: "Alternative Centres of Power",
                        id: "alternative-centres-of-power",
                        hasNotes: false
                    },
                    {
                        name: "Contemporary South Asia",
                        id: "contemporary-south-asia",
                        hasNotes: false
                    },
                    {
                        name: "International Organisations",
                        id: "international-organisations",
                        hasNotes: false
                    },
                    {
                        name: "Security in the Contemporary World",
                        id: "security-in-the-contemporary-world",
                        hasNotes: false
                    },
                    {
                        name: "Environment and Natural Resources",
                        id: "environment-and-natural-resources",
                        hasNotes: false
                    },
                    {
                        name: "Globalisation",
                        id: "globalisation",
                        hasNotes: false
                    },
                    {
                        name: "Challenges of Nation Building",
                        id: "challenges-of-nation-building",
                        hasNotes: false
                    },
                    {
                        name: "Era of One Party Dominance",
                        id: "era-of-one-party-dominance",
                        hasNotes: false
                    },
                    {
                        name: "Politics of Planned Development",
                        id: "politics-of-planned-development",
                        hasNotes: false
                    },
                    {
                        name: "India's External Relations",
                        id: "india-external-relations",
                        hasNotes: false
                    },
                    {
                        name: "Challenges to and Restoration of Congress System",
                        id: "challenges-to-and-restoration-of-congress-system",
                        hasNotes: false
                    },
                    {
                        name: "Regional Aspirations",
                        id: "regional-aspirations",
                        hasNotes: false
                    },
                    {
                        name: "Crisis of Democratic Order",
                        id: "crisis-of-democratic-order",
                        hasNotes: false
                    },
                    {
                        name: "Rise of Popular Movements",
                        id: "rise-of-popular-movements",
                        hasNotes: false
                    },
                    {
                        name: "Recent Developments in Indian Politics",
                        id: "recent-developments-in-indian-politics",
                        hasNotes: false
                    }
                ]
            },
            "English": {
                sections: ["Flamingo", "Vistas"],
                chapters: [
                    {
                        name: "The Last Lesson",
                        id: "the-last-lesson-arts",
                        hasNotes: false
                    },
                    {
                        name: "Lost Spring",
                        id: "lost-spring-arts",
                        hasNotes: false
                    },
                    {
                        name: "Deep Water",
                        id: "deep-water-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Rattrap",
                        id: "the-rattrap-arts",
                        hasNotes: false
                    },
                    {
                        name: "Indigo",
                        id: "indigo-arts",
                        hasNotes: false
                    },
                    {
                        name: "Poets and Pancakes",
                        id: "poets-and-pancakes-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Interview",
                        id: "the-interview-arts",
                        hasNotes: false
                    },
                    {
                        name: "Going Places",
                        id: "going-places-arts",
                        hasNotes: false
                    },
                    {
                        name: "My Mother at Sixty-six",
                        id: "my-mother-at-sixty-six-arts",
                        hasNotes: false
                    },
                    {
                        name: "Keeping Quiet",
                        id: "keeping-quiet-arts",
                        hasNotes: false
                    },
                    {
                        name: "A Thing of Beauty",
                        id: "a-thing-of-beauty-arts",
                        hasNotes: false
                    },
                    {
                        name: "A Roadside Stand",
                        id: "a-roadside-stand-arts",
                        hasNotes: false
                    },
                    {
                        name: "Aunt Jennifer's Tigers",
                        id: "aunt-jennifer-tigers-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Third Level",
                        id: "the-third-level-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Tiger King",
                        id: "the-tiger-king-arts",
                        hasNotes: false
                    },
                    {
                        name: "The Enemy",
                        id: "the-enemy-arts",
                        hasNotes: false
                    },
                    {
                        name: "Should Wizard Hit Mommy?",
                        id: "should-wizard-hit-mommy-arts",
                        hasNotes: false
                    },
                    {
                        name: "On the Face of It",
                        id: "on-the-face-of-it-arts",
                        hasNotes: false
                    },
                    {
                        name: "Evans Tries an O-level",
                        id: "evans-tries-an-o-level-arts",
                        hasNotes: false
                    },
                    {
                        name: "Memories of Childhood",
                        id: "memories-of-childhood-arts",
                        hasNotes: false
                    }
                ]
            },
            "Psychology": {
                sections: ["Clinical Psychology", "Social Psychology"],
                chapters: [
                    {
                        name: "Variations in Psychological Attributes",
                        id: "variations-in-psychological-attributes",
                        hasNotes: false
                    },
                    {
                        name: "Self and Personality",
                        id: "self-and-personality",
                        hasNotes: false
                    },
                    {
                        name: "Meeting Life Challenges",
                        id: "meeting-life-challenges",
                        hasNotes: false
                    },
                    {
                        name: "Psychological Disorders",
                        id: "psychological-disorders",
                        hasNotes: false
                    },
                    {
                        name: "Therapeutic Approaches",
                        id: "therapeutic-approaches",
                        hasNotes: false
                    },
                    {
                        name: "Attitude and Social Cognition",
                        id: "attitude-and-social-cognition",
                        hasNotes: false
                    },
                    {
                        name: "Social Influence and Group Processes",
                        id: "social-influence-and-group-processes",
                        hasNotes: false
                    },
                    {
                        name: "Psychology and Life",
                        id: "psychology-and-life",
                        hasNotes: false
                    },
                    {
                        name: "Developing Psychological Skills",
                        id: "developing-psychological-skills",
                        hasNotes: false
                    }
                ]
            }
        }
    }
};