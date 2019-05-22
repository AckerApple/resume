import { Component } from '@angular/core';
import { string } from "./passion.template"
import { animations } from "ack-angular-fx"

export interface passion{
  rating     : number
  title      : string
  colorClass : string
  details?   : string
}

@Component({
  template: string,
  animations:animations
}) export class Passion {
  passions:passion[]=[{
    rating:9.8,
    title:'Our Kids',
    colorClass:'bg-assertive',
    details:'Our two boys are some kind of automatic wonderful with a generous helping of crazy awesome.\n\nGreat boys behind this good guy.'
  },{
    rating:9.35,
    title:'Family',
    colorClass:'bg-assertive',
    details:'Loyalty at it\'s finest. They\'ve been there for me before I can remember. I enjoy repeating the process by honoring my commitments, spreading respect, and giving extra love to my mom.\n\nI love you mom!'
  },{
    rating:9.34,
    title:'Friends',
    colorClass:'bg-assertive',
    details:'Friends and I figured out who we were together and we\'ve been together ever since. I sure do love that now our kids friends are our friend\'s kids.\n\nWe are the champions.'
  },{
    rating:10,
    title:'Coding Software',
    colorClass:'bg-positive',
    details:'I once wrote software to mute talk radio commercials on a schedule. That is my kind of self satisfaction. To be using my skills in all parts of my life to be at my programming best.\n\nThis is where I know more than my wife.'
  },{
    rating:8,
    title:'Open Source Code',
    colorClass:'bg-positive',
    details:'This is where I am a team leader for the human race. All this software will be the biggest reason we will survive beyond Earth. It is imperative we learn and distribute knowledge as fast and freely as possible to ensure our eggs are invested in more than just this one Earth-basket.\n\nToday the moon, tomorrow the Star Trek'
  },{
    rating:7,
    title:'Electronics',
    colorClass:'bg-positive',
    details:'More than just dreaming of ones and zeros, I have soldered together some great digital components and ran my own zeros and ones through them. I learned a lot by watching YouTube videos and then Amazon shipped me my first bread board and more.\n\n00110001 00110000 00110001 00110000\n(1010 in binary)'
  },{
    rating:5.5,
    title:'Dehydrating Meats & Fruits',
    colorClass:'bg-energized',
    details:'My body has an extremely high metabolism. This has pushed me towards eating small amounts of food throughout the day. But keeping food at hand all day is very difficult, especially over time. That is where I found dehydrating foods has allowed me to eat in the manner my body needs.\n\nI make incredibly awesome beef jerky!!!'
  },{
    rating:0.2,
    title:'Cooking',
    colorClass:'bg-energized',
    details:'Although I rock at dehydrating foods and even though I\'m a detail oriented Software Engineer, I cannot cook. I work best in a world of exactness. But in the world of finesse with physcial techniques and knowing your cooking/rising times, I fail so hard. So hard.\n\nI wish I could cook.'
  },{
    rating:6,
    title:'Pinball',
    colorClass:'bg-royal',
    details:'Being a Software Engineer has had me locked up inside my mind. Pinball is where my super brain talents can be present in the physical world. It is a type of hands on software, to me, and I am very addicted to it.\n\nYou\'re not shaking it enough!'
  },{
    rating:5,
    title:'Exercising',
    colorClass:'bg-royal',
    details:'My body is always on my mind since my mind is on top of my body. I ride my bike very often and walk a lot. Any sadness or depression is always met with exercise.\n\nKeep on keeping on.'
  },{
    rating:3,
    title:'Lawn Care',
    colorClass:'bg-royal',
    details:'Let\'s not forget this is on a scale of 1-to-wife. I rather do enjoy mowing my own lawn. It helps, especially when having a career at a keyboard, to find joy in getting outside and sweating.\n\nIt\'s for the trees.'
  },{
    rating:1.5,
    title:'Baseball',
    colorClass:'bg-balanced',
    details:'I absolutely hated baseball. Then some day I decided to avoid hating things. A loved one passed and she loved watching baseball. I opened up to baseball in her memory and found I rather enjoy the stats and statistics of watching baseball.\n\nLet\'s go Marlins!'
  },{
    rating:2.5,
    title:'Football',
    colorClass:'bg-balanced',
    details:'Growing up being at so many super bowl parties with family, I just decided I would go along with liking football. I then became a loyal Miami Dolphins fan. I learned a new level of coping and living with failure by being a Dolphins fan. Any win is a big win for us!\n\nGO FINS!'
  },{
    rating:4,
    title:'Golf',
    colorClass:'bg-balanced',
    details:'Since this is a sport I can still play without having a week of back pain, I sure do love getting out to knock balls into the clouds.\n\nFOUR!, mulligan, FOUR!, mulligan.'
  },{
    rating:1,
    title:'Hockey',
    colorClass:'bg-balanced',
    details:'I grew up on hockey. I do not mind that I cannot run like I could as a child. However, I do miss the beauty, grace, and slap shot I once had on skates.\n\nRoller blades, it\'s Florida on ice.'
  }]
}