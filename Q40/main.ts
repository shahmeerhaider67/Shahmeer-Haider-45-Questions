//#Q40
class Album {
    constructor(public artist: string, public title: string, public tracks?: number) {}
  
    getInfo(): Record<string, any> {
      const albumInfo: Record<string, any> = {
        artist: this.artist,
        title: this.title,
      };
  
      if (this.tracks !== undefined) {
        albumInfo.tracks = this.tracks;
      }
  
      return albumInfo;
    }
  }
  
  // Create three album objects

  const album1 = new Album("Artist1", "Album1");
  const album2 = new Album("Artist2", "Album2", 12); // Including the number of tracks
  const album3 = new Album("Artist3", "Album3");
  
  // Print the album information
  console.log(album1.getInfo());
  console.log(album2.getInfo());
  console.log(album3.getInfo());
  
