import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  accordionItems = [
    {
      question: 'When and where will the CAN Africa Cup 2025 take place?',
      answer: 'The CAN Africa Cup 2025 will be hosted in six cities across Morocco: Rabat, Fes, Marrakech, Casablanca, Agadir, and Tangier. The specific dates of the tournament will be announced soon.',
      showAnswer: false
    },
    {
      question: 'Which stadiums will host the matches?',
      answer: 'The matches will be played in multiple stadiums across the six host cities, showcasing the diverse landscapes and vibrant culture of Morocco. Specific details about the stadiums will be provided closer to the event.',
      showAnswer: false
    },
    {
      question: 'How many teams will participate in the CAN Africa Cup 2025?',
      answer: 'A total of [number] teams from across the African continent will compete in the CAN Africa Cup 2025. The participating teams will be determined through the qualification process.',
      showAnswer: false
    },
    {
      question: 'What is the format of the tournament?',
      answer: 'The tournament will follow a [format] format, featuring group stage matches, knockout rounds, and ultimately culminating in the final. The format aims to showcase the skills and competitiveness of the participating teams.',
      showAnswer: false
    },
    {
      question: 'How can fans purchase tickets for the matches?',
      answer: 'Information about ticket sales, including prices, categories, and purchase methods, will be available on the official CAN Africa Cup 2025 website. Fans are encouraged to stay updated on the latest announcements for ticketing details.',
      showAnswer: false
    },
    {
      question: 'Are there accommodation options in the host cities?',
      answer: 'Yes, there will be various accommodation options available in each host city to cater to the diverse needs and preferences of visitors. Participants and fans can choose from a range of hotels, guesthouses, and other lodging facilities.',
      showAnswer: false
    },
    {
      question: 'Can international fans travel to Morocco for the tournament?',
      answer: 'International fans are welcome to travel to Morocco for the CAN Africa Cup 2025. Detailed information about travel arrangements, visas, and other logistics will be provided to ensure a smooth experience for international visitors.',
      showAnswer: false
    },
    {
      question: 'Is there a fan zone or entertainment program planned?',
      answer: 'Yes, there will be a dedicated fan zone and an exciting entertainment program organized in conjunction with the tournament. Fans can enjoy a vibrant atmosphere, cultural activities, and special events throughout the duration of the CAN Africa Cup 2025.',
      showAnswer: false
    },
    {
      question: 'Will there be opportunities for sponsorships and partnerships?',
      answer: 'Yes, the CAN Africa Cup 2025 offers various sponsorship and partnership opportunities for organizations interested in supporting the event. Details about sponsorship packages and collaboration opportunities will be made available in the lead-up to the tournament.',
      showAnswer: false
    },
    {
      question: 'How can media outlets apply for accreditation?',
      answer: 'Media outlets interested in covering the CAN Africa Cup 2025 can apply for accreditation through the official media accreditation process. Guidelines and application details will be provided on the tournament\'s official website.',
      showAnswer: false
    },
  ];
  
  
  secIds = [
    { id: 'FAQ#sec1', title: 'Frequentlty Asked Questions' },
  ];

  breadCrumbLinkNames: string[] = ['home', 'FAQ'];

  toggleAnswer(item: any) {
    if (item.showAnswer) {
      item.showAnswer = false;
    } else {
      this.accordionItems.forEach((accordionItem) => {
        accordionItem.showAnswer = false;
      });
      item.showAnswer = true;
    }
  }

}
