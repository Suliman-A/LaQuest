import { v4 as uuidv4 } from 'uuid';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'

const products = [
    {
      id: uuidv4(),
      name: 'BARANGAY INFORMATION MANAGMENT SYSTEM',
      desc:
        'An application to track your all data from one place. I developed the website and the mobile app',
      img: img1,
    },
    {
      id: uuidv4(),
      name: 'INVENTORY AND ORDARING MANAGMENT SYSTEM',
      desc:
        'An app to help people to get an overview of how they can make the city beautiful.',
      img: img2,
    },
    {
      id: uuidv4(),
      name: 'LABORATORY INFORMATION MANAGMENT SYSTEM',
      desc:
        'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
      img: img3,
    },
    {
      id: uuidv4(),
      name: "PATIENT MAMAGMET SYSTEM",
      desc:
        'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
      img: img4,
    },
    {
      id: uuidv4(),
      name: 'GOOGLE WORKPLACE',
      desc:
        'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
      img: img5,
    },
    {
      id: uuidv4(),
      name: 'ELECTRONIC MEDICAL HEALTH RECORD SYSTEM',
      desc:
        'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
      img: img6,
    },
  ];
  
  export default products;