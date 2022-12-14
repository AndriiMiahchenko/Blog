export type Post = {
    id: number
    name: string
    image: string
    description: string
    area: string
    bgcolor: string
    dsccolor: string
    color: string
    category: string
}

const locationsArray: Post[] = [
    {
        id: 1,
        name: 'Bali',
        image: '/images-asia/bali.jpg',
        description: 'Where rice terraces meet powerful waterfalls. A true paradise where honesty and karma are culturally engraved.',
        area: '/bali',
        bgcolor: '#f4f96fd1',
        dsccolor: '#c2ec2bd1',
        color: '',
        category: 'asia',
    },
    {
        id: 2,
        name: 'Vietnam',
        image: '/images-asia/vietnam.jpg',
        description: 'Vietnam is a country of contrasts, where loud, vibrant cities sit within touching distance of calm oceans and rising limestone karsts.',
        area: '/vietnam',
        bgcolor: '#f4f96fd1',
        dsccolor: '#c2ec2bd1',
        color: '',
        category: 'asia',
    },
    {
        id: 3,
        name: 'Singapore',
        image: '/images-asia/singapore.jpg',
        description: 'One of the greatest cities in the world, Singapore is an ever-expanding cosmopolitan hub that is beautiful to visit in its own right, or as a base to explore Malaysia and other surrounding Asian countries. ',
        area: '/singapore',
        bgcolor: '#f4f96fd1',
        dsccolor: '#c2ec2bd1',
        color: '',
        category: 'asia',
    },
    {
        id: 4,
        name: 'Thailand',
        image: '/images-asia/thailand.jpg',
        description: 'Thailand’s everlasting strength of spirit and known characterization as the ‘Land of Smiles’, has made it a timeless favorite amongst travelers worldwide.',
        area: '/thailand',
        bgcolor: '#f4f96fd1',
        dsccolor: '#c2ec2bd1',
        color: '',
        category: 'asia',
    },
    {
        id: 5,
        name: 'Malaysia',
        image: '/images-asia/malaysia.jpg',
        description: 'The new and old exist side by side in diverse Malaysia! Witness cutting-edge designs, amongst heritage buildings and UNESCO protected sites, with some street art here and there.',
        area: '/malaysia',
        bgcolor: '#f4f96fd1',
        dsccolor: '#c2ec2bd1',
        color: '',
        category: 'asia',
    },
    {
        id: 6,
        name: 'Iceland',
        image: '/images-europe/iceland.jpg',
        description: 'Home to some of the most heart-stopping landscapes in the world is rugged and beautiful Iceland. Nature is so raw here, it is almost otherworldly- drawing you into its stunning space-like scenery.',
        area: '/iceland',
        bgcolor: '#767769d1',
        dsccolor: '#4c4c49',
        color: 'white',
        category: 'europe',
    },
    {
        id: 7,
        name: 'Spain',
        image: '/images-europe/spain.jpg',
        description: 'Holiday vibes are a way of life in beautiful Spain! Enjoy fruity sangria in the sun, take relaxing siestas in the afternoon, and eat unlimited plates of delicious tapas by night.',
        area: '/spain',
        bgcolor: '#767769d1',
        dsccolor: '#4c4c49',
        color: 'white',
        category: 'europe',
    },
    {
        id: 8,
        name: 'France',
        image: '/images-europe/france.jpg',
        description: 'France: a nation that breathes life into ‘love’, and home to the most romantic and elegant cities in the world. Most known for its capital city Paris, travelers flock from all over the world to experience its breathtaking beauty. ',
        area: '/france',
        bgcolor: '#767769d1',
        dsccolor: '#4c4c49',
        color: 'white',
        category: 'europe',
    },
    {
        id: 9,
        name: 'Italy',
        image: '/images-europe/italy.jpg',
        description: 'Beauty is in the details, in lovable Italy! It’s the skip in the step of an old Italian grandpa, after his morning espresso. In the stringy mozzarella, as it falls off the perfect Italian pizza. ',
        area: '/italy',
        bgcolor: '#767769d1',
        dsccolor: '#4c4c49',
        color: 'white',
        category: 'europe',
    },
    {
        id: 10,
        name: 'Malta',
        image: '/images-europe/malta.jpg',
        description: 'A stunning archipelago in the Meditrranean Sea with 300 sunny days per year on average.',
        area: '/malta',
        bgcolor: '#767769d1',
        dsccolor: '#4c4c49',
        color: 'white',
        category: 'europe',
    },
    {
        id: 11,
        name: 'Egypt',
        image: '/images-africa/egypt.jpg',
        description: 'Mighty Egypt: home to the first ancient wonder of the world, and history that has shaped and inspired humanity since the beginning of time.',
        area: '/egypt',
        bgcolor: '#ed7735d1',
        dsccolor: '#ee8727a2',
        color: 'white',
        category: 'africa',
    },
    {
        id: 12,
        name: 'Mauritius',
        image: '/images-africa/mauritius.jpg',
        description: 'It is no surprise that Mauritius is described as ‘heaven on earth’, with its otherworldly beauty. This incredible island is renowned for its magnificent stretches of soft white sand beaches.',
        area: '/mauritius',
        bgcolor: '#ed7735d1',
        dsccolor: '#ee8727a2',
        color: 'white',
        category: 'africa',
    },
    {
        id: 13,
        name: 'Morocco',
        image: '/images-africa/morocco.jpg',
        description: 'Magical Morocco: a beautiful blend of influences that make it the perfect stepping stone between the delights of Mediterranean Spain and Sub-Saharan Africa.',
        area: '/morocco',
        bgcolor: '#ed7735d1',
        dsccolor: '#ee8727a2',
        color: 'white',
        category: 'africa',
    },
    {
        id: 14,
        name: 'Colombia',
        image: '/images-america/colombia.jpg',
        description: 'Colombia is a country of two sides, a place where skyscrapers sit next to quaint pueblos, and emerald green jungle quickly turns into otherworldly desert. ',
        area: '/colombia',
        bgcolor: '#53c743db',
        dsccolor: '#679c0fa2',
        color: '',
        category: 'america',
    },
    {
        id: 15,
        name: 'Costa Rica',
        image: '/images-america/costa-rica.jpg',
        description: '‘Pura Vida’, meaning ‘simple life’, is a phrase that Costa Ricans live and breathe as they enjoy the pleasures of nature; barefoot walks on the sand, the feeling of ocean salt on the skin, and the sound of coconut trees blowing in the wind.',
        area: '/costa-rica',
        bgcolor: '#53c743db',
        dsccolor: '#679c0fa2',
        color: '',
        category: 'america',
    },
    {
        id: 16,
        name: 'Peru',
        image: '/images-america/peru.jpg',
        description: 'Colorful and vibrant Peru: home to one of the seven wonders of the world, and bucket-list favorite, Machu Picchu! The first view of the lost Incan city, as it shines through the clouds, is pure magic. ',
        area: '/peru',
        bgcolor: '#53c743db',
        dsccolor: '#679c0fa2',
        color: '',
        category: 'america',
    },
    {
        id: 17,
        name: 'Jordan',
        image: '/images-middle-east/jordan.jpg',
        description: 'Jordan is all about discovering the unexpected. Surprises await around every corner in this fascinating and adventurous country. Unearthed ruins provide a spectacular window into an extraordinary past.',
        area: '/jordan',
        bgcolor: '#6ea8c4',
        dsccolor: '#318fbc',
        color: 'white',
        category: 'middle-east',
    },
    {
        id: 18,
        name: 'Oman',
        image: '/images-middle-east/oman.jpg',
        description: 'Oman: an Arabian hideaway, where luxury and simplicity live side by side. In this undiscovered destination, travelers will be surprised to find a stunning variety of landscapes from tip to toe of the country.',
        area: '/oman',
        bgcolor: '#6ea8c4',
        dsccolor: '#318fbc',
        color: 'white',
        category: 'middle-east',
    },
    {
        id: 19,
        name: 'Turkey',
        image: '/images-middle-east/turkey.jpg',
        description: 'Transcontinental Turkey: a remarkable country where continents and cultures blend together, resulting in unique Asian, European, and Middle Eastern influences. ',
        area: '/turkey',
        bgcolor: '#6ea8c4',
        dsccolor: '#318fbc',
        color: 'white',
        category: 'middle-east',
    },
    {
        id: 20,
        name: 'Queensland',
        image: '/images-australia/queensland.jpg',
        description: 'From the dusty interior Outback to the place where the worlds oldest rainforest meets the worlds largest barrier reef, Queensland is the most all encompassing adventurously beautiful state in Australia.',
        area: '/queensland',
        bgcolor: '#009688bd',
        dsccolor: '#458c85bd',
        color: 'white',
        category: 'australia',
    },
    {
        id: 21,
        name: 'Victoria',
        image: '/images-australia/victoria.jpg',
        description: 'Victoria is Australia’s second-smallest state (roughly the size of the British Isles) and there is so much to see and do. From pristine beaches, to national parks, to wineries, to lakes and mountains and to possibly our favourite city in Australia, Melbourne, Victoria packs a punch!',
        area: '/victoria',
        bgcolor: '#009688bd',
        dsccolor: '#458c85bd',
        color: 'white',
        category: 'australia',
    },
    {
        id: 22,
        name: 'Tasmania',
        image: '/images-australia/tasmania.jpg',
        description: 'Besides the history and the food, Tasmania is all about nature. It’s Australia’s smallest state and over 40 per cent of Tasmania is reserved as national park and world heritage area.',
        area: '/tasmania',
        bgcolor: '#009688bd',
        dsccolor: '#458c85bd',
        color: 'white',
        category: 'australia',
    },
]

export default locationsArray

export const getPostsObject = (array: Post[]) => {
    return array.reduce((object, post) => ({
        ...object,
        [post.id]: post
    }), {})
}