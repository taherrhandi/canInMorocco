import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  accordionItems = [
    {
      question: 'When and where will CPES 2024 take place?',
      answer: 'CPES 2024 will be held in Rabat, Morocco. The specific dates of the symposium will be announced soon.',
      showAnswer: false
    },
    {
      question: 'What is the purpose of CPES 2024?',
      answer: 'CPES 2024 aims to bring together scholars and practitioners from around the world to discuss and exchange ideas on control, operation, and management of power and energy systems. It focuses on topics such as renewable energy integration, smart grid technologies, energy storage, and energy market design.',
      showAnswer: false
    },
    {
      question: 'Who is organizing CPES 2024?',
      answer: 'CPES 2024 is organized under the auspices of the International Federation of Automatic Control (IFAC) by the National Organizing Committee (NOC) in Morocco.',
      showAnswer: false
    },
    {
      question: 'What can attendees expect from CPES 2024?',
      answer: 'Attendees will have the opportunity to meet renowned scholars and practitioners in the field of power and energy systems. They will also have the chance to explore the city of Rabat and experience the rich culture and heritage of Morocco.',
      showAnswer: false
    },
    {
      question: 'Where will the symposium sessions be held?',
      answer: 'The symposium venue will be at ENSAM of Rabat, located in the Riad area of the city. Some sessions may also take place in the halls of ICESCO\'s and/or CNRST (National Center for Scientific and Technical Research).',
      showAnswer: false
    },
    {
      question: 'How can I travel to Rabat?',
      answer: 'Rabat is easily accessible by air, and the Rabat-Salé Airport serves both domestic and international flights. The city is also well-connected by train, with Fes and Marrakech being just a few hours away.',
      showAnswer: false
    },
    {
      question: 'Are there accommodation options near the symposium venue?',
      answer: 'Yes, there are several hotels and accommodations available near the ENSAM of Rabat and the Annakhil boulevard, which is within walking distance. Participants can choose from a range of options based on their preferences and budget.',
      showAnswer: false
    },
    {
      question: 'How can I register for CPES 2024?',
      answer: 'Registration details will be provided on the official CPES 2024 website. Participants will be able to register online and access information about registration fees, deadlines, and payment methods.',
      showAnswer: false
    },
    {
      question: 'Can I submit a paper or present my research at CPES 2024?',
      answer: 'Yes, CPES 2024 will include opportunities for researchers to present their work through papers, presentations, and poster sessions. Guidelines for paper submission and presentation formats will be provided on the symposium\'s website.',
      showAnswer: false
    },
    {
      question: 'Are there sponsorship or exhibition opportunities available?',
      answer: 'Yes, CPES 2024 will offer sponsorship and exhibition opportunities for organizations interested in showcasing their products, services, or research initiatives. Details on sponsorship packages and exhibition spaces will be made available closer to the event.',
      showAnswer: false
    },
    {
      question: 'What types of contributions can be submitted to CPES 2024?',
      answer: 'CPES 2024 accepts regular papers, tutorial papers, discussion papers, and invited session proposals with invited papers.',
      showAnswer: false
    },
    {
      question: 'How should organizers submit an invited session proposal?',
      answer: 'Organizers should contact potential authors, write a four-page proposal, and submit it through the PaperPlaza system. Authors need to specify the provided session code during their paper submission.',
      showAnswer: false
    },
    {
      question: 'Are there opportunities for open invited tracks?',
      answer: 'Yes, CPES 2024 encourages open invited tracks. Organizers should submit a four-page proposal for consideration.',
      showAnswer: false
    },
    {
      question: 'How can I submit a contribution to CPES 2024?',
      answer: 'All papers and proposals must be submitted electronically through the IFAC PaperPlaza system. Visit [IFAC PaperPlaza](http://ifac.papercept.net/conferences/scripts/start.pl) and select "Submit a contribution to CPES 2024".',
      showAnswer: false
    }
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
