import { Component, OnInit } from '@angular/core';

export interface PersonalInformation {
    firstName: string;
    lastName: string;
    address: Address;
    email: string;
    description: string;
    quote: string;
}

export interface Address {
    city: string;
    state: string;
}

export interface SocialInfo {
    iconClassInfo: string;
    url: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public personalInfo:PersonalInformation = {
        firstName: "Alden",
        lastName: "Weaver",
        address: {
            city: "Seattle",
            state: "Washington",
        },
        email: "aldenweavercodes@gmail.com",
        description: "Full Stack Engineer with a Passion for Front-End Development, Product Management, Product Development, & Design",
        quote: "'Whether you believe you can do a thing or not, you are right.' — Henry Ford",
    };

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

}
