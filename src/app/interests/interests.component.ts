import { Component, OnInit } from '@angular/core';

export interface Interest {
	name:string;
	icon:string;
}

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

	public interests:Interest[] = [
		{
			name: "Videography",
			icon: "fa-video"
		},
		{
			name: "Photography",
			icon: "fa-camera-retro"
		},
		{
			name: "Design & Writing",
			icon: "fa-pencil-ruler"
		},
		{
			name: "Event Planning",
			icon: "fa-birthday-cake"
		},
		{
			name: "Programming",
			icon: "fa-code"
		},
		{
			name: "Traveling, Camping, & Hiking",
			icon: "fa-tree"
		},
		{
			name: "Boating & Water Sports",
			icon: "fa-anchor"
		},
		{
			name: "Volleyball, Rugby, & Yoga",
			icon: "fa-dumbbell"
		}
	];
	
	skillArr:Array<string> = [
        "Making music",
		"Videography & photography",
		"Graphic design",
		"Programming",
		"Writing",
		"Event planning",
		"Traveling, camping, & hiking",
		"Boating & water sports",
		"Scuba diving (Advanced Open Water license)",
		"Volleyball, rugby, & yoga",
		
    ];

  constructor() { }

  ngOnInit() {
  }

}
