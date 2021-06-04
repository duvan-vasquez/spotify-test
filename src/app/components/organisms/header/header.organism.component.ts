import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.organism.html',
  styleUrls: ['header.organism.scss'],
  providers: []
})

export class HeaderOrganism implements OnInit {

  @Input() isMenu: boolean = false;
  @Input() isBack: boolean = false;
  @Input() title: string = '';
  
  ngOnInit(): void {
    
  }

}