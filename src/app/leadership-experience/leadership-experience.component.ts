import { Component, OnInit } from '@angular/core';

export interface LeadershipExperienceData {
  title:string;
  company:string;
  city:string;
  duties:string[];
  startDate:string;
  endDate:string;
}

@Component({
  selector: 'app-leadership-experience',
  templateUrl: './leadership-experience.component.html',
  styleUrls: ['./leadership-experience.component.css']
})
export class LeadershipExperienceComponent implements OnInit {

  
  public leadershipExperienceArr:LeadershipExperienceData[] = [
    {
      title: "Co-President, Co-VP, & Active Member",
      company: "Nu Alpha Phi frarority of the Claremont Colleges",
      city: "Claremont, CA",
      duties: [
        "Helped organize & lead weekly club meetings",
        "Assisted in hosting a weekly public event",
        "Worked as a group to organize, plan, & execute fundraising & charity events",
        "Worked on an elected team to plan & lead a full week of events"
      ],
      startDate: "2011",
      endDate: "2015"
    },
    {
      title: "Media Relations Officer & Active Member",
      company: "5 College Hip Hop Club",
      city: "Claremont, CA",
      duties: [
        "Helped organize weekly meetings",
        "Planned & coordinated a hip hop festival on campus that showcased multiple campus groups & clubs"
      ],
      startDate: "2012",
      endDate: "2015"
    },
    {
      title: "Radio DJ",
      company: "Vertafore",
      city: "Bothell, WA",
      duties: [
        "Hosted an underground hip hop show on my college's radio station"
      ],
      startDate: "Summer 2014",
      endDate: "Fall 2014"
    },
    {
      title: "Co-Coach, Co-Captain, & Active Member",
      company: "Claremont Colleges Women’s Volleyball Club Team",
      city: "Claremont, CA",
      duties: [
        "Assisted with leading practices",
        "Worked with the coach and another captain to create practice plans & plan player rotations",
        "Planned team-building events"
      ],
      startDate: "2012",
      endDate: "2013"
    },
    {
      title: "Service Work",
      company: "The Overlake School (High School)",
      city: "Washington, New Orleans, & Cambodia",
      duties: [
        "Pailin, Cambodia: teaching children & building a library & playground at a school built by my high school",
        "New Orleans: Hurricane Katrina cleanup",
        "Lake Hills Elementary: teacher’s assistant at an elementary school"
      ],
      startDate: "2006",
      endDate: "2010"
    }
];

  ngOnInit() {
  }

}
