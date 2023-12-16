import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  sectinInfos = [
    { id: 'submission#sec1', title: 'Important Dates' },
    { id: 'submission#sec2', title: 'Call for Contributions' },
    { id: 'submission#sec3', title: 'Types of Contributions' },
    { id: 'submission#sec4', title: 'Submit a Contribution' },
    { id: 'submission#sec5', title: 'Submit a Final Manuscript' },
    { id: 'submission#sec6', title: 'Copyright conditions' },
    { id: 'submission#sec7', title: 'IFAC CPES Young Author Award' },
  ];
  breadCrumbLinkNames: string[] = ['home', 'submission'];
  submissions = [
    {
      type: 'Open invited track proposal',
      initialPageLimits: 4,
      finalPageLimits: '',
      publication: '',
      initialSubmissionDeadline: 'January 5th, 2024',
    },
    {
      type: 'Invited session proposal',
      initialPageLimits: 4,
      finalPageLimits: '',
      publication: '',
      initialSubmissionDeadline: 'January 10th, 2024',
    },
    {
      type: 'Contributed regular paper',
      initialPageLimits: 8,
      finalPageLimits: '6 (max 8)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },
    {
      type: 'Contributed tutorial paper',
      initialPageLimits: 14,
      finalPageLimits: '6 (max 8)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },

    {
      type: 'Invited session paper',
      initialPageLimits: 8,
      finalPageLimits: '6 (max 8)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },
    {
      type: 'Invited session tutorial paper',
      initialPageLimits: 16,
      finalPageLimits: '12 (max 14)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },
    {
      type: 'Open invited track paper',
      initialPageLimits: 8,
      finalPageLimits: '6 (max 8)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },
    {
      type: 'Open invited track tutorial paper',
      initialPageLimits: 16,
      finalPageLimits: '12 (max 14)*',
      publication: 'IFAC-PapersOnLine',
      initialSubmissionDeadline: 'January 20th, 2024',
    },
  ];
}