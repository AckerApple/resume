import { query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from '@angular/animations'
export const fxArray = [
trigger('1000', [
transition('zoomInUp => void, void => zoomOutUp', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => zoomInUp', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInRight => void, void => zoomOutLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInLeft => void, void => zoomOutRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInDown => void, void => zoomOutDown', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => zoomInDown', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomIn => void, void => zoomOut', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
transition('void => zoomIn', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('zoomOutUp', 
style({"display":"none"})),
state('zoomOutRight', 
style({"display":"none"})),
state('zoomOutLeft', 
style({"display":"none"})),
state('zoomOutDown', 
style({"display":"none"})),
state('zoomOut', 
style({"display":"none"})),
transition('void => slideOutUp', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('slideInUp => void', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => slideInUp', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutLeft', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('slideInRight => void', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => slideInRight', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutRight', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('slideInLeft => void', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => slideInLeft', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutDown', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('slideInDown => void', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => slideInDown', [
animate('1000ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
state('slideOutUp', 
style({"display":"none"})),
state('slideOutRight', 
style({"display":"none"})),
state('slideOutLeft', 
style({"display":"none"})),
state('slideOutDown', 
style({"display":"none"})),
transition('rotateInUpRight => void, void => rotateOutUpRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInUpRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInUpLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownRight => void, void => rotateOutDownRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInDownRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInDownLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateIn => void, void => rotateOut', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
transition('void => rotateIn', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
state('rotateOutUpRight', 
style({"display":"none"})),
state('rotateOutUpLeft', 
style({"display":"none"})),
state('rotateOutDownRight', 
style({"display":"none"})),
state('rotateOutDownLeft', 
style({"display":"none"})),
state('rotateOut', 
style({"display":"none"})),
transition('bounceInUp => void, void => bounceOutUp', [
animate('1000ms 0ms linear', keyframes([
style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => bounceInUp', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInRight => void, void => bounceOutLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInLeft => void, void => bounceOutRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInDown => void, void => bounceOutDown', [
animate('1000ms 0ms linear', keyframes([
style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => bounceInDown', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceIn => void, void => bounceOut', [
animate('1000ms 0ms linear', keyframes([
style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
transition('void => bounceIn', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('bounceOutUp', 
style({"display":"none"})),
state('bounceOutRight', 
style({"display":"none"})),
state('bounceOutLeft', 
style({"display":"none"})),
state('bounceOutDown', 
style({"display":"none"})),
state('bounceOut', 
style({"display":"none"})),
transition('fadeInUp => void, void => fadeOutUp', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => fadeInUp', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInRight => void, void => fadeOutLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => fadeInRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInLeft => void, void => fadeOutRight', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => fadeInLeft', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInDown => void, void => fadeOutDown', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => fadeInDown', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeIn => void, void => fadeOut', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":1,"offset":0}),
style({"opacity":0,"offset":1})]))]),
transition('void => fadeIn', [
animate('1000ms 0ms linear', keyframes([
style({"opacity":0,"offset":0}),
style({"opacity":1,"offset":1})]))]),
state('fadeOutUp', 
style({"display":"none"})),
state('fadeOutRight', 
style({"display":"none"})),
state('fadeOutLeft', 
style({"display":"none"})),
state('fadeOutDown', 
style({"display":"none"})),
state('fadeOut', 
style({"display":"none"}))]),
trigger('500', [
transition('zoomInUp => void, void => zoomOutUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => zoomInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInRight => void, void => zoomOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInLeft => void, void => zoomOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInDown => void, void => zoomOutDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => zoomInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomIn => void, void => zoomOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
transition('void => zoomIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('zoomOutUp', 
style({"display":"none"})),
state('zoomOutRight', 
style({"display":"none"})),
state('zoomOutLeft', 
style({"display":"none"})),
state('zoomOutDown', 
style({"display":"none"})),
state('zoomOut', 
style({"display":"none"})),
transition('void => slideOutUp', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('slideInUp => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => slideInUp', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('slideInRight => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => slideInRight', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutRight', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('slideInLeft => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => slideInLeft', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutDown', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('slideInDown => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => slideInDown', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
state('slideOutUp', 
style({"display":"none"})),
state('slideOutRight', 
style({"display":"none"})),
state('slideOutLeft', 
style({"display":"none"})),
state('slideOutDown', 
style({"display":"none"})),
transition('rotateInUpRight => void, void => rotateOutUpRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInUpRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInUpLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownRight => void, void => rotateOutDownRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInDownRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInDownLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateIn => void, void => rotateOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
transition('void => rotateIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
state('rotateOutUpRight', 
style({"display":"none"})),
state('rotateOutUpLeft', 
style({"display":"none"})),
state('rotateOutDownRight', 
style({"display":"none"})),
state('rotateOutDownLeft', 
style({"display":"none"})),
state('rotateOut', 
style({"display":"none"})),
transition('bounceInUp => void, void => bounceOutUp', [
animate('500ms 0ms linear', keyframes([
style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => bounceInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInRight => void, void => bounceOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInLeft => void, void => bounceOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInDown => void, void => bounceOutDown', [
animate('500ms 0ms linear', keyframes([
style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => bounceInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceIn => void, void => bounceOut', [
animate('500ms 0ms linear', keyframes([
style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
transition('void => bounceIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('bounceOutUp', 
style({"display":"none"})),
state('bounceOutRight', 
style({"display":"none"})),
state('bounceOutLeft', 
style({"display":"none"})),
state('bounceOutDown', 
style({"display":"none"})),
state('bounceOut', 
style({"display":"none"})),
transition('fadeInUp => void, void => fadeOutUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => fadeInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInRight => void, void => fadeOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => fadeInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInLeft => void, void => fadeOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => fadeInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInDown => void, void => fadeOutDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => fadeInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeIn => void, void => fadeOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"offset":0}),
style({"opacity":0,"offset":1})]))]),
transition('void => fadeIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"offset":0}),
style({"opacity":1,"offset":1})]))]),
state('fadeOutUp', 
style({"display":"none"})),
state('fadeOutRight', 
style({"display":"none"})),
state('fadeOutLeft', 
style({"display":"none"})),
state('fadeOutDown', 
style({"display":"none"})),
state('fadeOut', 
style({"display":"none"}))]),
trigger('200', [
transition('zoomInUp => void, void => zoomOutUp', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => zoomInUp', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInRight => void, void => zoomOutLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInLeft => void, void => zoomOutRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInDown => void, void => zoomOutDown', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => zoomInDown', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomIn => void, void => zoomOut', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
transition('void => zoomIn', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('zoomOutUp', 
style({"display":"none"})),
state('zoomOutRight', 
style({"display":"none"})),
state('zoomOutLeft', 
style({"display":"none"})),
state('zoomOutDown', 
style({"display":"none"})),
state('zoomOut', 
style({"display":"none"})),
transition('void => slideOutUp', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('slideInUp => void', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => slideInUp', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutLeft', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('slideInRight => void', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => slideInRight', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutRight', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('slideInLeft => void', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => slideInLeft', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutDown', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('slideInDown => void', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => slideInDown', [
animate('200ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
state('slideOutUp', 
style({"display":"none"})),
state('slideOutRight', 
style({"display":"none"})),
state('slideOutLeft', 
style({"display":"none"})),
state('slideOutDown', 
style({"display":"none"})),
transition('rotateInUpRight => void, void => rotateOutUpRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInUpRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInUpLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownRight => void, void => rotateOutDownRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInDownRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInDownLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateIn => void, void => rotateOut', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
transition('void => rotateIn', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
state('rotateOutUpRight', 
style({"display":"none"})),
state('rotateOutUpLeft', 
style({"display":"none"})),
state('rotateOutDownRight', 
style({"display":"none"})),
state('rotateOutDownLeft', 
style({"display":"none"})),
state('rotateOut', 
style({"display":"none"})),
transition('bounceInUp => void, void => bounceOutUp', [
animate('200ms 0ms linear', keyframes([
style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => bounceInUp', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInRight => void, void => bounceOutLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInLeft => void, void => bounceOutRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInDown => void, void => bounceOutDown', [
animate('200ms 0ms linear', keyframes([
style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => bounceInDown', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceIn => void, void => bounceOut', [
animate('200ms 0ms linear', keyframes([
style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
transition('void => bounceIn', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('bounceOutUp', 
style({"display":"none"})),
state('bounceOutRight', 
style({"display":"none"})),
state('bounceOutLeft', 
style({"display":"none"})),
state('bounceOutDown', 
style({"display":"none"})),
state('bounceOut', 
style({"display":"none"})),
transition('fadeInUp => void, void => fadeOutUp', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => fadeInUp', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInRight => void, void => fadeOutLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => fadeInRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInLeft => void, void => fadeOutRight', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => fadeInLeft', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInDown => void, void => fadeOutDown', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => fadeInDown', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeIn => void, void => fadeOut', [
animate('200ms 0ms linear', keyframes([
style({"opacity":1,"offset":0}),
style({"opacity":0,"offset":1})]))]),
transition('void => fadeIn', [
animate('200ms 0ms linear', keyframes([
style({"opacity":0,"offset":0}),
style({"opacity":1,"offset":1})]))]),
state('fadeOutUp', 
style({"display":"none"})),
state('fadeOutRight', 
style({"display":"none"})),
state('fadeOutLeft', 
style({"display":"none"})),
state('fadeOutDown', 
style({"display":"none"})),
state('fadeOut', 
style({"display":"none"}))]),
trigger('100', [
transition('zoomInUp => void, void => zoomOutUp', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => zoomInUp', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInRight => void, void => zoomOutLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInLeft => void, void => zoomOutRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => zoomInLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomInDown => void, void => zoomOutDown', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => zoomInDown', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
transition('zoomIn => void, void => zoomOut', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
transition('void => zoomIn', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('zoomOutUp', 
style({"display":"none"})),
state('zoomOutRight', 
style({"display":"none"})),
state('zoomOutLeft', 
style({"display":"none"})),
state('zoomOutDown', 
style({"display":"none"})),
state('zoomOut', 
style({"display":"none"})),
transition('void => slideOutUp', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('slideInUp => void', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => slideInUp', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutLeft', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('slideInRight => void', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => slideInRight', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutRight', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('slideInLeft => void', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => slideInLeft', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('void => slideOutDown', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('slideInDown => void', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => slideInDown', [
animate('100ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
state('slideOutUp', 
style({"display":"none"})),
state('slideOutRight', 
style({"display":"none"})),
state('slideOutLeft', 
style({"display":"none"})),
state('slideOutDown', 
style({"display":"none"})),
transition('rotateInUpRight => void, void => rotateOutUpRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInUpRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInUpLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownRight => void, void => rotateOutDownRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
transition('void => rotateInDownRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
transition('void => rotateInDownLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
transition('rotateIn => void, void => rotateOut', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
transition('void => rotateIn', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
state('rotateOutUpRight', 
style({"display":"none"})),
state('rotateOutUpLeft', 
style({"display":"none"})),
state('rotateOutDownRight', 
style({"display":"none"})),
state('rotateOutDownLeft', 
style({"display":"none"})),
state('rotateOut', 
style({"display":"none"})),
transition('bounceInUp => void, void => bounceOutUp', [
animate('100ms 0ms linear', keyframes([
style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
transition('void => bounceInUp', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInRight => void, void => bounceOutLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInLeft => void, void => bounceOutRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
transition('void => bounceInLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceInDown => void, void => bounceOutDown', [
animate('100ms 0ms linear', keyframes([
style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
transition('void => bounceInDown', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('bounceIn => void, void => bounceOut', [
animate('100ms 0ms linear', keyframes([
style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
transition('void => bounceIn', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
state('bounceOutUp', 
style({"display":"none"})),
state('bounceOutRight', 
style({"display":"none"})),
state('bounceOutLeft', 
style({"display":"none"})),
state('bounceOutDown', 
style({"display":"none"})),
state('bounceOut', 
style({"display":"none"})),
transition('fadeInUp => void, void => fadeOutUp', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
transition('void => fadeInUp', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInRight => void, void => fadeOutLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
transition('void => fadeInRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInLeft => void, void => fadeOutRight', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
transition('void => fadeInLeft', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeInDown => void, void => fadeOutDown', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
transition('void => fadeInDown', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
transition('fadeIn => void, void => fadeOut', [
animate('100ms 0ms linear', keyframes([
style({"opacity":1,"offset":0}),
style({"opacity":0,"offset":1})]))]),
transition('void => fadeIn', [
animate('100ms 0ms linear', keyframes([
style({"opacity":0,"offset":0}),
style({"opacity":1,"offset":1})]))]),
state('fadeOutUp', 
style({"display":"none"})),
state('fadeOutRight', 
style({"display":"none"})),
state('fadeOutLeft', 
style({"display":"none"})),
state('fadeOutDown', 
style({"display":"none"})),
state('fadeOut', 
style({"display":"none"}))]),
trigger('absoluteSwap', [
transition('zoomInUp => void, void => zoomOutUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => zoomInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('zoomInRight => void, void => zoomOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => zoomInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('zoomInLeft => void, void => zoomOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => zoomInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('zoomInDown => void, void => zoomOutDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => zoomInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('zoomIn => void, void => zoomOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => zoomIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
state('zoomOutUp', 
style({"display":"none"})),
state('zoomOutRight', 
style({"display":"none"})),
state('zoomOutLeft', 
style({"display":"none"})),
state('zoomOutDown', 
style({"display":"none"})),
state('zoomOut', 
style({"display":"none"})),
transition('void => slideOutUp', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('slideInUp => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideInUp', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('slideInRight => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideInRight', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideOutRight', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('slideInLeft => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideInLeft', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideOutDown', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('slideInDown => void', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => slideInDown', [
animate('500ms 0ms linear', keyframes([
style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
state('slideOutUp', 
style({"display":"none"})),
state('slideOutRight', 
style({"display":"none"})),
state('slideOutLeft', 
style({"display":"none"})),
state('slideOutDown', 
style({"display":"none"})),
transition('rotateInUpRight => void, void => rotateOutUpRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => rotateInUpRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => rotateInUpLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('rotateInDownRight => void, void => rotateOutDownRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => rotateInDownRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => rotateInDownLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('rotateIn => void, void => rotateOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => rotateIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
state('rotateOutUpRight', 
style({"display":"none"})),
state('rotateOutUpLeft', 
style({"display":"none"})),
state('rotateOutDownRight', 
style({"display":"none"})),
state('rotateOutDownLeft', 
style({"display":"none"})),
state('rotateOut', 
style({"display":"none"})),
transition('bounceInUp => void, void => bounceOutUp', [
animate('500ms 0ms linear', keyframes([
style({"transform":"translate3d(0, -10px, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => bounceInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 10px, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, -5px, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('bounceInRight => void, void => bounceOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => bounceInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(10px, 0, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(-5px, 0, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('bounceInLeft => void, void => bounceOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => bounceInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(-10px, 0, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(5px, 0, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('bounceInDown => void, void => bounceOutDown', [
animate('500ms 0ms linear', keyframes([
style({"transform":"translate3d(0, 10px, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => bounceInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, -10px, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 5px, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('bounceIn => void, void => bounceOut', [
animate('500ms 0ms linear', keyframes([
style({"transform":"scale3d(.9, .9, .9)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => bounceIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.9, .9, .9)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"transform":"scale3d(.97, .97, .97)","offset":0.8,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
state('bounceOutUp', 
style({"display":"none"})),
state('bounceOutRight', 
style({"display":"none"})),
state('bounceOutLeft', 
style({"display":"none"})),
state('bounceOutDown', 
style({"display":"none"})),
state('bounceOut', 
style({"display":"none"})),
transition('fadeInUp => void, void => fadeOutUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => fadeInUp', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('fadeInRight => void, void => fadeOutLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => fadeInRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('fadeInLeft => void, void => fadeOutRight', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => fadeInLeft', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('fadeInDown => void, void => fadeOutDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => fadeInDown', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('fadeIn => void, void => fadeOut', [
animate('500ms 0ms linear', keyframes([
style({"opacity":1,"offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":0,"offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
transition('void => fadeIn', [
animate('500ms 0ms linear', keyframes([
style({"opacity":0,"offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
style({"opacity":1,"offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
state('fadeOutUp', 
style({"display":"none"})),
state('fadeOutRight', 
style({"display":"none"})),
state('fadeOutLeft', 
style({"display":"none"})),
state('fadeOutDown', 
style({"display":"none"})),
state('fadeOut', 
style({"display":"none"}))]),
trigger('childStag50', [
transition('* => *', [
query('.childFx', [
stagger(50, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])]),
trigger('childStag', [
transition('* => *', [
query('.childFx', [
stagger(100, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])]),
trigger('childStag200', [
transition('* => *', [
query('.childFx', [
stagger(200, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])]),
trigger('childStag300', [
transition('* => *', [
query('.childFx', [
stagger(300, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])]),
trigger('childStag400', [
transition('* => *', [
query('.childFx', [
stagger(400, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])]),
trigger('childStag500', [
transition('* => *', [
query('.childFx', [
stagger(500, [
animateChild()])], {
  "optional": true,
  "limit": 500
})])])]