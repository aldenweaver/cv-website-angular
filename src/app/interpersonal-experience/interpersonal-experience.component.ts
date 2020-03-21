import { Component, OnInit } from '@angular/core';

export interface InterpersonalExperienceData {
  title:string;
  company:string;
  city:string;
  duties:string[];
  startDate:string;
  endDate:string;
}

@Component({
  selector: 'app-interpersonal-experience',
  templateUrl: './interpersonal-experience.component.html',
  styleUrls: ['./interpersonal-experience.component.css']
})
export class InterpersonalExperienceComponent implements OnInit {

  
  public interpersonalExperienceArr:InterpersonalExperienceData[] = [
    {
      title: "Grutor (Grader & Tutor)",
      company: "Harvey Mudd College’s Principles of Computer Science Class",
      city: "Claremont, CA",
      duties: [
        "Provided assistance to students in the class by answering their questions about homework",
        "Graded assignments for professors"
      ],
      startDate: "September 2013",
      endDate: "December 2013"
    },
    {
      title: "Services Desks Attendant",
      company: "Honnold Mudd Library of the Claremont Colleges",
      city: "Claremont, CA",
      duties: [
        "Provided service to members of the colleges & community",
        "Assisted patrons with their research by acquainting them with the library’s services & resources"
      ],
      startDate: "September 2012",
      endDate: "May 2015"
    }
];

  ngOnInit() {
  }

}
