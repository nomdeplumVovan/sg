import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-reg',
  templateUrl: './main-reg.component.html',
  styleUrls: ['./main-reg.component.css']
})
export class MainRegComponent implements OnInit {
  // askShown1 = false;
  // askShown2 = false;
  // askShown3 = false;
  // askShown4 = false;
  // askShown5 = false;
  // askShown6 = false;
  // askShown7 = false;
  // fullScreen = false;

  questions = [
    { title: 'What kind of results can I expect?', content: '', isExpanded: false },
    { title: 'How many hours per day do I need to work?', content: '', isExpanded: false },
    {
      title: 'Is there a maximum that I can make?',
      content: 'Our members typically profit a minimum of $1,000 each and every single day. That amounts to about $30,000 a month. And about $365,000 a year.',
      isExpanded: false
    },
    {
      title: 'How much does this cost?',
      content: 'The 1K Daily Profit software will cost you absolutely nothing. I am sharing this with you absolutely FREE. All you have to do is fill out the form below to register to become a member.',
      isExpanded: false
    },
    { title: 'Is this like MLM, Affiliate Marketing or Forex?', content: '', isExpanded: false },
    { title: 'Are there any fees?', content: '', isExpanded: false }
  ];

  constructor() { }



  ngOnInit() {
  }

}
