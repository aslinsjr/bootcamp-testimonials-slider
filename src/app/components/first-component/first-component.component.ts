import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})


export class FirstComponentComponent {

  i = 0

  data = [{
    testimonial: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    author: "Tanya Sinclair",
    role: 'UX Engineer',
    photo: "/image-tanya.jpg"
  },
  {
    testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    author: "John Tarkpor",
    role: 'Junior Front-end Developer',
    photo: "/image-john.jpg"
  }]

  handleClick() {
    if(this.i === 0) {
      this.i = 1
    } else {
      this.i = 0
    }
    
  }
  
}
