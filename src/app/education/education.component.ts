import { Component, OnInit } from '@angular/core';

export interface EducationData {
	school:string;
	degree:string;
	department:string; 
	startDate:string;
	endDate:string;
	icon:string;
	status:string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

	public educationArr:EducationData[] = [
	    {
	        school: "Scripps College",
	        degree: "Bachelor of Arts",
	        department: "Media Studies & Computer Science via the Harvey Mudd Computer Science program",
	        startDate: "August 2010",
	        endDate: "June 2015",
	        icon: "fa-code",
	        status: "Completed"
	    },
	    {
	        school: "The Overlake School",
	        degree: "High School",
	        department: "National Merit Scholarship Winner & AP Scholar with Distinction",
	        startDate: "September 2006",
	        endDate: "June 2010",
	        icon: "fa-school",
	        status: "Completed"
	    },
	];

  constructor() { }

  ngOnInit() {
  }

}
