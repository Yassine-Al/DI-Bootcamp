// Définition de la classe Video
class Video {
    constructor(titre, uploader, temps) {
        this.titre = titre;
        this.uploader = uploader;
        this.temps = temps;
    }

    watch() {
        console.log(`${this.uploader} a regardé tout le temps ${this.temps} de la vidéo ${this.titre} !`);
    }
}
  
  
const vid1 = new Video("Titre de la vidéo 1", "Uploader 1", 120);
vid1.watch();

const vid2 = new Video("Titre de la vidéo 2", "Uploader 2", 180);
vid2.watch();
  
const videosData = [
    ["Titre de la vidéo 1", "Uploader 1", 120],
    ["Titre de la vidéo 2", "Uploader 2", 180],
    ["Titre de la vidéo 3", "Uploader 3", 240],
    ["Titre de la vidéo 4", "Uploader 4", 300],
    ["Titre de la vidéo 5", "Uploader 5", 360],
];
  
// Boucle dans le tableau pour instancier les vidéos
const videos = [];
for (const videoData of videosData) {
    const video = new Video(videoData[0], videoData[1], videoData[2]);
    videos.push(video);
}
  
// la méthode watch() pour chaque vidéo
for (const video of videos) {
    video.watch();
}