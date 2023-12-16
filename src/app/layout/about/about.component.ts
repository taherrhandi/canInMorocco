import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  secIds = [
    { id: 'about#sec1', title: 'About CPES 2024' },
    { id: 'about#sec2', title: 'About IFAC' },
    { id: 'about#sec6', title: 'Honorary Commitee' },
    { id: 'about#sec3', title: 'National Organizing Committee' },
    { id: 'about#sec4', title: 'International Program Committee' },
    { id: 'about#sec5', title: 'Contact' },
  ];
  breadCrumbLinkNames: string[] = ['home', 'about'];

  contacts = [
    { name: 'CPES', email: 'cpes2024@unicaen.fr' },
  ];
  honoraryCommitee = [
    {
      name: 'El Bacha Farid',
      university: "Interim President, Mohammed V University, Rabat Morocco"
    },
    {
      name: 'Belfkih Samir ',
      university: " Director, ENSAM Rabat"
    },
    {
      name: 'El Alami Jamila',
      university: " Director, CNRST, Rabat Morocco"
    },
  ]

  ipc = [
    {
      role: 'IPC CHAIR',
      name: 'Michela Robba',
      university: 'University of Genoa, Genova, Italy',
    },
    {
      role: 'IPC CO-CHAIR',
      name: 'Kwang Y. Lee ',
      university: 'Baylor University, Texas, USA',
    },
    {
      role: 'IPCVICE-CHAIR FROM INDUSTRY',
      name: 'Mohamed Benabbou',
      university: 'Lear Corporation, Rabat, Morocco',
    },
  ]

  nationalOrganizers = [
    {
      role: 'General Chair',
      name: 'Fouad Giri',
      university: 'University of Caen Normandie, Caen, France',
    },
    {
      role: 'NOC Co-Chair',
      name: 'Hamid Ouadi',
      university: 'University Mohammed V, Rabat, Morocco',
    },
    {
      role: 'NOC Vice-Chair From Industry',
      name: 'Driss Ghani',
      university: 'REDAL SA, Rabat, Morocco',
    },
    {
      role: 'Editor',
      name: 'Rachid Lajouad ',
      university: 'University Hassan II, Casablanca, Morocco',
    },
    {
      role: 'Invited Sessions',
      name: 'Fatima-Zahra Chaoui ',
      university: 'University Mohammed V, Rabat, Morocco',
    },
    {
      role: 'Sponsors & Exhibits',
      name: 'Mounime El Magri ',
      university: 'University Hassan II, Casablanca, Morocco',
    },
    {
      role: 'SAGIP IFAC NMO',
      name: 'Hervé Panetto ',
      university: 'University de Larraine, Nancy, France',
    },
    {
      role: 'Publicity',
      name: 'Khalid El Majdoub ',
      university: '	University Hassan II, Casablanca, Morocco',
    },
    {
      role: '',
      name: 'Erraffas Mohamed',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'El Ghazouani Hamza',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Owusu Kelvin Clark',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: 'Local arrangment',
      name: 'El Mustapha Lotfi',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Mohammed Lazrek',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Abdelilah jilbab',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Bekkari Soukaina',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Zeriab Es Sadek Mohamed',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Zidane Nordine',
      university: "ENSAM, Mohammed V University, Rabat"
    },
    {
      role: '',
      name: 'Bendaalouch Rida',
      university: "CNRST Rabat Morocco"
    },
  ];
  internationalOrganizers = [
    {
      "LastName": "Annaswamy",
      "FirstName": "Anuradha",
      "Country": "USA",
      "Email": "Aanna@Mit.Edu",
      "Confirmation": "Ok"
    },
    
    {
      "LastName": "Barbot",
      "FirstName": "Jean-Pierre",
      "Country": "France",
      "Email": "Barbot@Ensea.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Bordons",
      "FirstName": "Carlos",
      "Country": "Spain",
      "Email": "Bordons@Us.Es",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Braatz",
      "FirstName": "Richard D.",
      "Country": "USA",
      "Email": "Braatz@Mit.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Bratcu",
      "FirstName": "Antoneta Iuliana",
      "Country": "France",
      "Email": "Antoneta.Bratcu@Gipsa-Lab.Grenoble-Inp.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Brouri",
      "FirstName": "Adil",
      "Country": "Morocco",
      "Email": "A.Brouri@Ensam-Umi.Ac.Ma",
      "Confirmation": ""
    },
    {
      "LastName": "Cesar Fernando",
      "FirstName": "Mendez-Barrios",
      "Country": "Mexico",
      "Email": "Fernando.Barrios@Uaslp.Mx",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Chaoui",
      "FirstName": "Fatima Zahra",
      "Country": "Morocco",
      "Email": "F.Chaoui@Um5s.Net.Ma",
      "Confirmation": ""
    },
    {
      "LastName": "Chen",
      "FirstName": "Yousu",
      "Country": "USA",
      "Email": "Yousu.Chen@Pnl.Gov",
      "Confirmation": ""
    },
    {
      "LastName": "Choi",
      "FirstName": "Jaeseok",
      "Country": "Korea",
      "Email": "Jschoi@Gnu.Ac.Kr",
      "Confirmation": ""
    },
    {
      "LastName": "Corradini",
      "FirstName": "Maria Letizia",
      "Country": "Italy",
      "Email": "Letizia.Corradini@Unicam.It",
      "Confirmation": ""
    },
    {
      "LastName": "Damm",
      "FirstName": "Gilney",
      "Country": "France",
      "Email": "Gilney.Damm@Univ-Eiffel.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Derbel",
      "FirstName": "Nabil",
      "Country": "Tunisia",
      "Email": "Nabil.Derbel@Enis.Tn",
      "Confirmation": "Ok"
    },
    {
      "LastName": "El Fadili",
      "FirstName": "Abderrahim",
      "Country": "Morocco",
      "Email": "Elfadili_Abderrahim@Yahoo.Fr ",
      "Confirmation": ""
    },
    {
      "LastName": "El Magri",
      "FirstName": "Abdelmounime",
      "Country": "Morocco",
      "Email": "Magri_Mounaim@Yahoo.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "El Majdoub",
      "FirstName": "Khalid",
      "Country": "Morocco",
      "Email": "Khalid_Majdoub@Yahoo.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "Fadel",
      "FirstName": "Maurice",
      "Country": "France",
      "Email": "Maurice.Fadel@Enseeiht.Fr; Maurice.Fadel@Laplace.Univ-Tlse.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Flynn",
      "FirstName": "Damian",
      "Country": "Ireland",
      "Email": "Damian.Flynn@Ucd.Ie",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Ghanes",
      "FirstName": "Malek",
      "Country": "France",
      "Email": "Malek.Ghanes@Ec-Nantes.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Grillo",
      "FirstName": "Samuele",
      "Country": "Italy",
      "Email": "Samuele.Grillo@Polimi.It",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Grino",
      "FirstName": "Robert",
      "Country": "Spain",
      "Email": "Roberto.Grino@Upc.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Garduno-Ramirez",
      "FirstName": "Raul",
      "Country": "Mexico",
      "Email": "",
      "Confirmation": ""
    },
    {
      "LastName": "Gusrialdi",
      "FirstName": "Azwirman",
      "Country": "Finland",
      "Email": "Azwirman.Gusrialdi@Tuni.Fi",
      "Confirmation": ""
    },
    {
      "LastName": "Gueguen",
      "FirstName": "Herve",
      "Country": "France",
      "Email": "Herve.Gueguen@Centralesupelec.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "Han",
      "FirstName": "Qing-Long",
      "Country": "Australia",
      "Email": "Q.Han@Cqu.Edu.Au; Qhan@Swin.Edu.Au",
      "Confirmation": ""
    },
    {
      "LastName": "Han",
      "FirstName": "Soohee",
      "Country": "Korea",
      "Email": "Soohee.Han@Postech.Ac.Kr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "He",
      "FirstName": "Zhengyou",
      "Country": "China",
      "Email": "Hezy@Home.Swjtu.Edu.Cn; Hezy@Swjtu.Cn",
      "Confirmation": ""
    },
    {
      "LastName": "Hiskens",
      "FirstName": "Ian",
      "Country": "USA",
      "Email": "Hiskens@Umich.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Ilic",
      "FirstName": "Marija",
      "Country": "USA",
      "Email": "Ilic@Mit.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Incremona",
      "FirstName": "Gian Paolo",
      "Country": "Italy",
      "Email": "Gianpaolo.Incremona@Polimi.It",
      "Confirmation": ""
    },
    {
      "LastName": "Jiang",
      "FirstName": "Jing",
      "Country": "Canada",
      "Email": "Jjiang@Eng.Uwo.Ca",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Juuso",
      "FirstName": "Esko",
      "Country": "Finland",
      "Email": "Esko.Juuso@Oulu.Fi",
      "Confirmation": ""
    },
    {
      "LastName": "Korba",
      "FirstName": "Petr",
      "Country": "Switzerland",
      "Email": "Korb@Zhaw.Ch",
      "Confirmation": ""
    },
    {
      "LastName": "Lajouad",
      "FirstName": "Rachid",
      "Country": "Morocco",
      "Email": "Dsa.Lajouad@Gmail.Com ",
      "Confirmation": ""
    },
    {
      "LastName": "Lee",
      "FirstName": "Young Il",
      "Country": "Korea",
      "Email": "Yilee@Seoultech.Ac.Kr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Lens",
      "FirstName": "Hendrick",
      "Country": "Germany",
      "Email": "Hendrik.Lens@Ifk.Uni-Stuttgart.De",
      "Confirmation": ""
    },
    {
      "LastName": "Li",
      "FirstName": "Yong",
      "Country": "China",
      "Email": "Yongli@Hnu.Edu.Cn",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Li",
      "FirstName": "Donghai",
      "Country": "China",
      "Email": "Lidongh@Tsinghua.Edu.Cn",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Li",
      "FirstName": "Zhen",
      "Country": "China",
      "Email": "Zhenli@Bit.Edu.Cn",
      "Confirmation": ""
    },
    {
      "LastName": "Lissane El Haq",
      "FirstName": "Saad",
      "Country": "Morocco",
      "Email": "S.Lissane@Ensem.Ac.Ma, Lissan1@Yahoo.Com",
      "Confirmation": ""
    },
    {
      "LastName": "Liu",
      "FirstName": "Xiangjie",
      "Country": "China",
      "Email": "Liuxj@Ncepu.Edu.Cn",
      "Confirmation": ""
    },
    {
      "LastName": "Loparo",
      "FirstName": "Kenneth A.",
      "Country": "USA",
      "Email": "Kenneth.Loparo@Case.Edu; Kal4@Case.Edu",
      "Confirmation": ""
    },
    {
      "LastName": "Lubosny",
      "FirstName": "Zbigniew",
      "Country": "Poland",
      "Email": "Zbigniew.Lubosny@Pg.Edu.Pl",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Madsen",
      "FirstName": "Henrik",
      "Country": "Denmark",
      "Email": "Hmad.Dtu@Gmail.Com",
      "Confirmation": ""
    },
    {
      "LastName": "Majanne",
      "FirstName": "Yrjö",
      "Country": "Finland",
      "Email": "Yrjo.Majanne@Tuni.Fi",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Malik",
      "FirstName": "Om P.",
      "Country": "Canada",
      "Email": "Maliko@Ieee.Org",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Marinescu",
      "FirstName": "Bogdan",
      "Country": "France",
      "Email": "Bogdan.Marinescu@Ec-Nantes.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "Milano",
      "FirstName": "Federico",
      "Country": "Ireland",
      "Email": "Federico.Milano@Ucd.Ie",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Mishra",
      "FirstName": "Sukumar",
      "Country": "India",
      "Email": "Sukumar@Ee.Iitd.Ac.In; Sukumariitdelhi@Gmail.Com",
      "Confirmation": ""
    },
    {
      "LastName": "Mori",
      "FirstName": "Hiroyuki",
      "Country": "Japan",
      "Email": "Hmori@Meiji.Ac.Jp; Hmori2911@Gmail.Com",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Muresan",
      "FirstName": "Vlad",
      "Country": "Romania",
      "Email": "Hmori@Meiji.Ac.Jp; Hmori2911@Gmail.Com",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Nakanishi",
      "FirstName": "Yosuke",
      "Country": "Japan",
      "Email": "Nakanishi-Yosuke@Waseda.Jp",
      "Confirmation": ""
    },
    {
      "LastName": "Neuman",
      "FirstName": "Petr V.",
      "Country": "Czech Republic",
      "Email": "Neumanp@Volny.Cz",
      "Confirmation": "Declined"
    },
    {
      "LastName": "Odgaard",
      "FirstName": "Peter Fogh",
      "Country": "Denmark",
      "Email": "Odgaard@Ieee.Org",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Ortega",
      "FirstName": "Romeo",
      "Country": "France",
      "Email": "Romeo.Ortega@Itam.Mx, Romeo.Ortega@Lss.Supelec.Fr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Ouadi",
      "FirstName": "Hamid",
      "Country": "Morocco",
      "Email": "Hamidouadi3@Yahoo.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "Park",
      "FirstName": "Poogyeon",
      "Country": "Korea",
      "Email": "Ppg@Postech.Ac.Kr",
      "Confirmation": ""
    },
    {
      "LastName": "Puig Cayuela",
      "FirstName": "Vicenc",
      "Country": "Spain",
      "Email": "Vicenc.Puig@Upc.Edu, Vpuig@Iri.Upc.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Qu",
      "FirstName": "Zhihua",
      "Country": "USA",
      "Email": "Qu@Ucf.Edu",
      "Confirmation": ""
    },
    {
      "LastName": "Ratnam",
      "FirstName": "Elizabeth",
      "Country": "Australia",
      "Email": "",
      "Confirmation": ""
    },
    {
      "LastName": "Robert",
      "FirstName": "Bruno Gérard Michel",
      "Country": "France",
      "Email": "Bruno.Robert@Univ-Reims.Fr",
      "Confirmation": ""
    },
    {
      "LastName": "Ruano",
      "FirstName": "António E. B.",
      "Country": "Portugal",
      "Email": "Aruano@Ualg.Pt",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Rueda Torres",
      "FirstName": "Jose",
      "Country": "Netherlands",
      "Email": "J.L.Ruedatorres@Tudelft.Nl",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Russo",
      "FirstName": "Mario",
      "Country": "Italy",
      "Email": "Russo@Unicas.It",
      "Confirmation": ""
    },
    {
      "LastName": "Sasiadek",
      "FirstName": "Jurek",
      "Country": "Canada",
      "Email": "Jurek.Sasiadek@Carleton.Ca",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Soares",
      "FirstName": "Joao",
      "Country": "Portugal",
      "Email": "Joaps@Isep.Ipp.Pt",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Soroush",
      "FirstName": "Masoud",
      "Country": "USA",
      "Email": "Ms1@Drexel.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Sun",
      "FirstName": "Li",
      "Country": "China",
      "Email": "Sunli12@Seu.Edu.Cn",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Susuki",
      "FirstName": "Yoshihiko",
      "Country": "Japan",
      "Email": "Susuki.Yoshihiko.5c@Kyoto-U.Ac.Jp",
      "Confirmation": ""
    },
    {
      "LastName": "Tadeo Rico",
      "FirstName": "Fernando J.",
      "Country": "Spain",
      "Email": "Fernando.Tadeo@Uva.Es",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Vale",
      "FirstName": "Zita",
      "Country": "Portugal",
      "Email": "Zav@Isep.Ipp.Pt; Email.Zitavale@Gmail.Com",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Vargas",
      "FirstName": "Esteban",
      "Country": "Germany",
      "Email": "Vargas@Fias.Uni-Frankfurt.De",
      "Confirmation": ""
    },
    {
      "LastName": "Vilela Soares Da Cunha",
      "FirstName": "Jose Paulo",
      "Country": "Brazil",
      "Email": "Jpaulo@Ieee.Org",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Venayagamoorthy",
      "FirstName": "Ganesh Kumar",
      "Country": "USA",
      "Email": "Gvenaya@Clemson.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Vilanova",
      "FirstName": "Ramon",
      "Country": "Spain",
      "Email": "Ramon.Vilanova@Uab.Cat",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Vournas",
      "FirstName": "Costas D.",
      "Country": "Greece",
      "Email": "Vournas@Power.Ece.Ntua.Gr",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Weber",
      "FirstName": "Harald W.",
      "Country": "Germany",
      "Email": "Harald.Weber@Uni-Rostock.De",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Weißbach",
      "FirstName": "Tobias",
      "Country": "Germany",
      "Email": "T.Weissbach@Transnetbw.De",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Wu",
      "FirstName": "Xiao",
      "Country": "China",
      "Email": "Wux@Seu.Edu.Cn",
      "Confirmation": ""
    },
    {
      "LastName": "Yadykin",
      "FirstName": "Igor",
      "Country": "Russia",
      "Email": "Jad@Ipu.Ru; Jadikin1@Mail.Ru",
      "Confirmation": "Ok"
    },
    {
      "LastName": "You",
      "FirstName": "Fengqi",
      "Country": "USA",
      "Email": "Fengqi.You@Cornell.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Yue",
      "FirstName": "Dong",
      "Country": "China",
      "Email": "Yued@Njupt.Edu.Cn; Medongy@Vip.163.Com",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Zavala",
      "FirstName": "Victor",
      "Country": "USA",
      "Email": "Victor.Zavala@Wisc.Edu",
      "Confirmation": ""
    },
    {
      "LastName": "Zhang",
      "FirstName": "Xiao-Ping",
      "Country": "United Kingdom",
      "Email": "X.P.Zhang@Ieee.Org;X.P.Zhang@Bham.Ac.Uk",
      "Confirmation": ""
    },
    {
      "LastName": "Zhang",
      "FirstName": "Jiangfeng",
      "Country": "USA",
      "Email": "Jiangfz@Clemson.Edu",
      "Confirmation": "Ok"
    },
    {
      "LastName": "Zhong",
      "FirstName": "Qing-Chang",
      "Country": "USA",
      "Email": "Zhongqc@Iit.Edu",
      "Confirmation": "Declined"
    },
    {
      "LastName": "Zobaa",
      "FirstName": "Ahmed",
      "Country": "United Kingdom",
      "Email": "Azobaa@Ieee.Org; Ahmed.Zobaa@Brunel.Ac.Uk",
      "Confirmation": "Ok"
    },
    
  ];

}