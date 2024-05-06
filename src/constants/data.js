import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    discription:"This prestigious Michelin award recognizes restaurants that offer exceptional value for price. It's a testament to our commitment to delivering high-quality food at an affordable price point."
   
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    discription:"Winner of 'Best Italian Restaurant' in Berlin Magazine's Reader's Choice Awards 2022"
   
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    discription: "Featured in 'Top 10 Up-and-coming Chefs' by [National Food Publication]"
   
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    discription:"Rated '5 Stars' for exceptional service and ambiance by [Restaurant Rating Guide]"
  },
];

export default { wines, cocktails, awards };
