import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FollowService } from 'src/app/core/services/spotify/follow.service';

@Component({
  selector: 'app-item-save-track-list',
  templateUrl: './item-save-track-list.molecule.html',
  styleUrls: ['item-save-track-list.molecule.scss'],
  providers: []
})

export class ItemSaveTrackListMolecule implements OnInit {
  
  @Input() items: SpotifyApi.SavedTrackObject[] = [];
  @Output() removeTrack: EventEmitter<SpotifyApi.SavedTrackObject> = new EventEmitter();

  constructor(private followService: FollowService, private loadingCtrl: LoadingController) { }
  ngOnInit(): void { }
}