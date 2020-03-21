import { Component, OnInit } from '@angular/core';

export interface Skills {
  icon:string;
  name:string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  devicons:Skills[] = [
    {
      icon: "devicons-java",
      name: "Java"
    },
    {
      icon: "devicons-csharp",
      name: "C#"
    },
    {
      icon: "devicons-dot-net",
      name: ".NET"
    },
    {
      icon: "devicons-html5", 
      name: "HTML 5"
    },
    {
      icon: "devicons-css3",
      name: "CSS 3"
    },
    {
      icon: "devicons-javascript",
      name: "Javascript"
    },
    {
      icon: "devicons-angular",
      name: "Angular"
    },
    {
      icon: "devicons-react",
      name: "React"
    },
    {
      icon: "devicons-jquery",
      name: "JQuery"
    },
    {
      icon: "devicons-bootstrap",
      name: "Bootstrap"
    },
    {
      icon: "devicons-nodejs",
      name: "NodeJS"
    },
    {
      icon: "devicons-ruby",
      name: "Ruby"
    },
    {
      icon: "devicons-ruby_on_rails",
      name: "Rails"
    },
    {
      icon: "devicons-postgresql",
      name: "PostgreSQL"
    },
    {
      icon: "devicons-git",
      name: "Git"
    },
    {
      icon: "devicons-github",
      name: "GitHub"
    },
    {
      icon: "devicons-heroku",
      name: "Heroku"
    },
    {
      icon: "devicons-webstorm",
      name: "WebStorm"
    },
    {
      icon: "devicons-visualstudio",
      name: "Visual Studio"
    },
    {
      icon: "devicons-slack",
      name: "Slack"
    },
    {
      icon: "devicons-wordpress",
      name: "Wordpress"
    },
    {
      icon: "devicons-illustrator",
      name: "Illustrator"
    }
  ];

    skillArr:Array<string> = [
        "Certified Scrum Master: Completed Scrum Master & Agile Development training; experience with leading & participating in Agile development practices",
        "Programming Languages & Frameworks: Java, HTML, CSS, Javascript, jQuery, Bootstrap, Web Components, Polymer, ReactJS, AngularJS, Objective-C, C#, SQL, PostgreSQL",
        "Knowledgeable About: Object-Oriented Programming, Git & GitHub, ASP.NET, MVC, REST APIs, SQL Server, NoSQL, RabbitMQ",
        "Computer Applications: Eclipse, Visual Studio, Unity, WebStorm, Balsamiq, Final Cut Pro, iMovie, Premier, Photoshop, InDesign, Illustrator, Logic Pro",
        "Database Development",
        "Front-End Development & Design",
        "User Testing, Mockups, & Prototyping",
        "Project Management"
    ];

  ngOnInit() {
  }

}
