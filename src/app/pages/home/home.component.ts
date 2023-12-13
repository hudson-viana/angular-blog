import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  image1: string = 'https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title1: string = 'Donec dignissim pharetra lectus';
  description1: string = 'In hac habitasse platea dictumst. Suspendisse sagittis enim ut tortor posuere, in scelerisque sapien rutrum. Donec vitae nulla id dui molestie fringilla. Fusce et euismod dolor.';
  lastUpdated1: string = 'October 05, 2023';
  
  
  image2: string = 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title2: string = 'In hac habitasse platea';
  description2: string = 'Pellentesque eget ante ut enim tincidunt vehicula. Aenean urna tellus, laoreet vitae sem sit amet, elementum volutpat neque. Vivamus vitae varius sapien, sit amet finibus mauris. In quis ante elementum lacus ultrices vulputate.';
  lastUpdated2: string = 'December 3, 2023';
  
  
  image3: string = 'https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title3: string = 'Suspendisse sagittis enim ut';
  description3: string = 'Mauris lectus lacus, semper a sapien in, pulvinar faucibus nisl. Ut pretium enim orci, sit amet congue enim faucibus a. Phasellus luctus elit bibendum justo volutpat porta. Donec eros ipsum, viverra et nibh nec, venenatis euismod est. ';
  lastUpdated3: string = 'February 2, 2023';
  
  
  image4: string = 'https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title4: string = 'Cras porta ligula neque';
  description4: string = 'Vivamus pulvinar dui in libero posuere, ac tincidunt eros consequat. Aliquam sapien dui, molestie at tortor et, fringilla porta lorem. Donec finibus commodo tempus. Donec euismod sollicitudin ullamcorper. ';
  lastUpdated4: string = 'November 22, 2023';


  image5: string = 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg';
  title5: string = 'Donec nunc mauris mattis';
  description5: string = 'Quisque non ligula at tortor mollis molestie. Sed consectetur nunc quis dolor rhoncus tincidunt. Integer pretium dictum sapien, quis rhoncus nunc semper in. Curabitur feugiat mi risus. Cras efficitur nec arcu sed porttitor.';
  lastUpdated5: string = 'January 27, 2023';
  
  
  image6: string = 'https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title6: string = 'Vestibulum pulvinar lorem mauris';
  description6: string = 'In rutrum odio ut suscipit luctus. Phasellus ultrices, massa nec interdum iaculis, magna erat venenatis turpis, fermentum mattis turpis eros in est. Proin egestas orci turpis, in condimentum turpis tempor eu.';
  lastUpdated6: string = 'April 15, 2023';
  
  
  image7: string = 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title7: string = 'Class aptent taciti sociosqu';
  description7: string = 'Morbi pellentesque lectus cursus efficitur aliquam.  litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sollicitudin odio sagittis, vehicula elit ac, semper erat. Nunc eleifend tellus ac tristique congue.';
  lastUpdated7: string = 'August 8, 2023';
  
  image8: string = 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  title8: string = 'Nullam non ipsum eu dui sociosqu';
  description8: string = 'Aenean consectetur leo at mi eleifend imperdiet. Aliquam pellentesque dolor metus, ut vulputate massa tincidunt at. Mauris et nulla euismod libero mollis dapibus. Mauris eu bibendum leo.';
  lastUpdated8: string = 'April 25, 2023';

  constructor() {}

  ngOnInit(): void {
  }

}
