import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPage(pageName: string) : void {
    this.router.navigate(['${pageName']);
  }

  // Options for the particle packground
  options : ISourceOptions = {
    background: {

        color: {
            value: "101010"
        }

    },
    fpsLimit: 60,
    interactivity: {

        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "grab"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            grab: {
              distance: 150,
              links: {
                blink: false,
                consent: false,
                opacity: .03
              }
            }
        }

    },
    particles: {

        color: {
            value: "#a9a9a9"
        },
        links: {
            color: "#a9a9a9",
            distance: 200,
            enable: true,
            opacity: 0.1,
            width: 1.5
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            // The number of vertices
            value: 60
        },
        opacity: {
            value: 1
        },
        shape: {
            type: "diamond"
        },
        size: {
            random: true,
            value: 3
        }

    },
    detectRetina: true
};

}
