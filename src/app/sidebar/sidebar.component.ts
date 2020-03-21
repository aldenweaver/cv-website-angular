import { Component, OnInit,ViewEncapsulation } from '@angular/core';

export interface SocialInfo {
    iconClassInfo: string;
    url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public isCollapsed = false;

    public navigation:Array<string> = [
        "About",
        "Experience",
        "Interpersonal Experience",
        "Leadership Experience",
        "Education",
        // "Projects",
        "Skills",
        "Interests"
    ];

    public socialData:SocialInfo[] = [
        {
            iconClassInfo: "fab fa-linkedin fa-stack-1x fa-inverse",
            url: "https://www.linkedin.com/in/aldenweaver/"
        },
        {
            iconClassInfo: "fab fa-github fa-stack-1x fa-inverse",
            url: "https://github.com/aldenweaver"
        },
        {
            iconClassInfo: "fab fa-medium fa-stack-1x fa-inverse",
        	url:"https://medium.com/@aldenweavercodes"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    makeLowerCase(value:string):string {
        return value.toLocaleLowerCase();
    }

}
