import nykaaLogoFirst from 'Images/nykaa-logo-first.png';
import nykaaLogoRest from 'Images/nykaa-logo-rest.png';
import islandpenguinLogoRest from 'Images/island-logo-rest.png';
import tailoredTechLogoFirst from 'Images/tailoredtech-logo-first.png';
import islandpenguinLogoFirst from 'Images/favicon1.png';
import gkwLogoRest from 'Images/gkw-logo-rest.png';


import mitLogoFirst from 'Images/mit-logo-first.png';
import mitLogoRest from 'Images/mit-logo-rest.png';

import nykaaBackgroundImage from 'Images/background/background-image-nykaa.jpg';
import tailoredTechBackgroundImage from 'Images/background/background-image-tailoredtech.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';



export const timelineListValue = [

{
  id: 'mit',
    companyName: 'Northwest Vista College ',
    position: 'Computer Science Major',
    duration: '2020-2021 (1 years)',
    location: 'San Antonio, Texas',
    roleDetail: '',
    companyDetail: '',
    firstLogo: mitLogoFirst,
    restLogo: mitLogoRest,
    restMargin: 60,
    backgroundImage: collegeBackgroundImage,
    projects: ['vc_music_player']
},
{
    id: 'Geek Squad',
    companyName: 'Geek Squad',
    link: 'https://bestbuy.com',
    position: 'Repair Agent',
    duration: 'Nov 2020 - Feb 2021',
    location: 'Las Cruces, New Mexico',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Nykaa is an e-commerce website offering beauty and wellness products from more than 500 leading brands. Nykaa follows an inventory-based model with warehouses in Mumbai, New Delhi, and Chennai as its offline presence is in 60 stores and expanding. It claims to have over 1000+ curated brands and 85,000 products.',
    firstLogo: nykaaLogoFirst,
    restLogo: nykaaLogoRest,
    restMargin: 50, // the second image margin because logo length is different
    backgroundImage: nykaaBackgroundImage,
    projects: ['nykaa']
  },
  {
    id: 'GKWEngineering',
    companyName: 'GKW Engineering',
    link: 'https://gkw-inc.com',
    position: 'Contractor',
    duration: 'Nov 2020 - Feb 2021',
    location: 'El Paso TX',
    roleDetail: 'In TailoredTech I got to experience many roles. I was initially working as an Android developer for a year then jumped on to these tech stacks :- Laravel, React-Native and React.',
    companyDetail: 'Tailored Tech was a service based startup specialised in web and mobile development, and had clients like Nykaa, Ezone, Sportobuddy, healthcode, hippily, wok express, etc.<br /> TailoredTech later got acqui-hired by Nykaa.',
    firstLogo: tailoredTechLogoFirst,
    restLogo:gkwLogoRest,
    restMargin: 55,
    backgroundImage: tailoredTechBackgroundImage,
    projects: ['snapteam', 'pulse', 'measure', 'wakency', 'benefactory', 'lighthouse']
  },
{
  id: 'IslandPenguin',
    companyName: 'IslandPenguin',
    link: 'islandpenguin.net',
    position: 'CEO - Software Solutions',
    duration: 'January 2021 - Current',
    location: 'El Paso TX',
    roleDetail: 'Started freelancing work and offering any type of software service to help customers and volunteer work',
    firstLogo: islandpenguinLogoFirst,
    restLogo: islandpenguinLogoRest,
    restMargin: 34,
    backgroundImage: tailoredTechBackgroundImage,
}
];

