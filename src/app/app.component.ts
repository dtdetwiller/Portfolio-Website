import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ISourceOptions } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [

    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated)
      return outlet.activatedRoute.snapshot.url;
    return;
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
            // Adds quantity particles to the screen
            push: {
                quantity: 1
            },
            // Conencts particles to your cursor
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
