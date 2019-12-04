import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import LaReligieuse from '../Images/lareligieuse.png'
import MemorySP from '../Images/southparkmemory.png'
import StranglerThings from '../Images/stranglerthings.png'
import JsonsQuizz from '../Images/jsonsquizz.png'

const itemsWCS = [
  {
    src:`${LaReligieuse}`,
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header',
    caption:'',
    key: '1'
  },
  {
    src:`${MemorySP}`,
    caption:'',
    key: '2'
  },
  {
    src:`${StranglerThings}`,
    caption:'',
    key: '3'
  },
  {
    src:`${JsonsQuizz}`,
    caption:'',
    key:'4'
  }
];

const CarouselWCS = () => <UncontrolledCarousel items={itemsWCS} />;

export default CarouselWCS;