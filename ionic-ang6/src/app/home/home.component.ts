import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  feedLists= new Object
  constructor() { }

  ngOnInit() {
    this.feedLists=[{"id":"1","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"2","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"},
    {"id":"3","draft":"Respected Swanjishree,\/\/Our heart-warming messages have given us a powerful force during our difficult times. We are heartily grateful. The whole GujaratiLexicon family and Ritikaka were the source of inspiration and inspiration for the movement. They won the hearts of everyone who recognized them. Their losses will last forever, and it will be impossible to fulfill.\/\/At this time you put us in your thoughts and you stand constantly in our presence so we have felt very relieved.\/\/Oscillation"}
  ]
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  }


