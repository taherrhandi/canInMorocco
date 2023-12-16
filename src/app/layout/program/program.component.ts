import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  secIds = [
    { id: 'program#sec1', title: 'CPES 2024 Topics' },
    { id: 'program#sec2', title: 'Plenary Talks' },
    { id: 'program#sec3', title: 'CAN 2025 final draw' },
  ];

  matchs =[
    {
          team1:"morocco",
          team2:"algerie",
          stadium:"algerie",
          time:"15 juin 17h 00min",
          status:"played",
          result:"4 - 0",
    },
    {
      team1:"morocco",
      team2:"algerie",
      stadium:"algerie",
      time:"15 juin 17h 00min",
      status:"played",
      result:"4 - 0",
},
{
  team1:"morocco",
  team2:"algerie",
  stadium:"algerie",
  time:"15 juin 17h 00min",
  status:"played",
  result:"4 - 0",
},
{
  team1:"morocco",
  team2:"algerie",
  stadium:"algerie",
  time:"15 juin 17h 00min",
  status:"played",
  result:"4 - 0",
},
{
  team1:"morocco",
  team2:"algerie",
  stadium:"algerie",
  time:"15 juin 17h 00min",
  status:"played",
  result:"4 - 0",
},
{
  team1:"morocco",
  team2:"algerie",
  stadium:"algerie",
  time:"15 juin 17h 00min",
  status:"played",
  result:"4 - 0",
},
  ]

  breadCrumbLinkNames: string[] = ['home', 'program'];
}