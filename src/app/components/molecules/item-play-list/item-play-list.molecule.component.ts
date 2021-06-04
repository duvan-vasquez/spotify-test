import { Component, Input, OnInit } from '@angular/core';
import { FollowService } from 'src/app/core/services/spotify/follow.service';

@Component({
  selector: 'app-item-play-list',
  templateUrl: './item-play-list.molecule.html',
  styleUrls: ['item-play-list.molecule.scss'],
  providers: []
})

export class ItemPlayListMolecule implements OnInit {
  
  @Input() items: SpotifyApi.TrackObjectFull[] = [];

  constructor(private followService: FollowService) {}

  ngOnInit(): void {}

  isFavorite(item: SpotifyApi.TrackObjectFull){
    return this.followService.listFollowers.findIndex(p => p.track.id === item.id) !== -1;
  }

  addFavorite(item: SpotifyApi.TrackObjectSimplified) {
    this.followService.setFollow(item.id);
  }
}