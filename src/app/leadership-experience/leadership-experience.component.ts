import { Component, OnInit } from '@angular/core';

export interface LeadershipExperienceData {
  title:string;
  company:string;
  city:string;
  duties:string;
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
      title: "Web Designer, Developer, & Project Manager",
      company: "Web PR",
      city: "Seattle, WA",
      duties: [
        "Started a website consulting business",
        "Met with clients to determine needs & create project proposal to plan projects & land jobs",
        "Planned & managed website redesign, development, & SEO",
        "Managed & executed user testing, client feedback, & iteration",
        "Managed an intern & both taught & delegated",
        "Ensured deliverables were met based on established timeline",
        "Successfully delivered websites on time"
      ],
      startDate: "January 2019",
      endDate: "Present"
    },
    {
      title: "Software Engineer I",
      company: "Vertafore",
      city: "Bothell, WA",
      duties: [
        "Created an ASP.NET MVC web portal application that retrieves data from an API, uses RabbitMQ & connects to a SQL DB",
        "Redesigned a client portal & learned React to create a POC of a new implementation using a custom React component library", 
        "Worked on a diagnostic dashboard using HTML/CSS/ES6/ReactJS on the front end & Python as middleware to make Splunk API calls",
        "Handled support tickets to register relying applications with our single sign-on service; turned the confusing spreadsheet used to gather information for the registration into a streamlined web form by building the UI for an ASP.NET app & connecting it to the backend; used my media skills & experience to create a video tutorial, write an article, & publish both on the company website", 
        "Received honorable mention in Hackathon for POC to replace plain text customer emails with HTML emails; then implemented the POC",
        "Collaborated with our UX team to build a new UI Framework library using Web Components & Polymer",
        "Worked with my manager to plan & organize team-building events"
      ],
      startDate: "June 2015",
      endDate: "December 2017"
    },
    {
        title: "Full Stack Engineer Intern",
        company: "Vertafore",
        city: "Bothell, WA",
        duties: [
          "Designed a dashboard in one month to show the health of a company-wide, single sign-on system",
          "Learned AngularJS; reinforced HTML & CSS knowledge; implemented HTTP calls in AngularJS to retrieve data via an API", 
          "Started designing the UI for another project with a new employee & trained her on the basics of AngularJS", 
          "Participated in an Intern Innovation Challenge & worked on a team with four other interns designing a web application to streamline communication & coordinate requests for the whole company"
        ],
        startDate: "Summer 2014",
        endDate: "Fall 2014"
    },
    {
      title: "Mobile App Designer",
      company: "ScrumPoint LLC",
      city: "Bellevue, WA",
      duties: [
        "Created a detailed project plan for a mobile application that met the customer’s requirements & introduced new ideas"
      ],
      startDate: "Summer 2014",
      endDate: "Fall 2014"
    },
    {
      title: "Software Developer/Software Architect Intern & Project Manager",
      company: "Seattle Avionics Software",
      city: "Woodinville, WA",
      duties: [
        "Worked on a team with an experienced developer & another intern to build a database, API, & front-end to hold all the information about airports, navigational aids, air routes, etc. needed for a flight planning app", 
        "Built a complex database infrastructure in PostgreSQL, with little previous knowledge of databases, to store worldwide aviation navigation data",
        "Designed & built access objects to respond to REST service requests to support a team-designed public API",
        "Implemented Agile methodologies for our team & used my skills as a certified Scrum Master to structure our schedule, user stories, daily tasks, etc., & ensure timely releases on a four week cycle"
      ],
      startDate: "Summer 2013",
      endDate: "Fall 2013"
    },
    {
      title: "Programming Intern",
      company: "SolutionsIQ",
      city: "Redmond, WA",
      duties: [
        "Worked on a team with 3 experienced developers creating a web application for T-Mobile that is used worldwide by Customer Service Representatives & that allows for changes in business rules",
        "Gained experience in Visual Studio, C#, ASP.NET, SQL Server, Amazon Web Services (AWS), & HTML",
        "Participated in weekly presentations & meetings with the customer; maintained design specifications for my team", 
        "Translated business requirements & client feedback into user stories & program functionalities"
      ],
      startDate: "Summer 2012",
      endDate: "Fall 2012"
  }
];

  ngOnInit() {
  }

}
