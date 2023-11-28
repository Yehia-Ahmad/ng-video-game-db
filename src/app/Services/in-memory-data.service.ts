import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const Trailer = [
      { path: '../../assets/Trailer/Assassin Creed 2 E3 Trailer.mp4' },
      {
        path: '../../assets/Trailer/Red Dead Redemption 2- Official Trailer #3.mp4',
      },
      { path: '../../assets/Trailer/Grand Theft Auto V Trailer.mp4' },
      {
        path: '../../assets/Trailer/The Witcher 3- Wild Hunt - Killing Monsters Cinematic Trailer.mp4',
      },
    ];

    const Screenshots = [
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper.jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (1).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (2).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (3).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (4).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (5).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (6).jpg',
      },
      {
        path: '../../assets/Screenshots/wallpaperflare.com_wallpaper (7).jpg',
      },
    ];
    return { Trailer, Screenshots };
  }
}
