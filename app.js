const music=new Audio('demo_song.mp3');

const songs=[
    {
        id:'1',
        songName:`On My Way <br>
        <div class="artist">Alan Walker</div>`,
        poster:"songs_album/1.jpg"
    },
    {
        id:'2',
        songName:`Besharmi ki Height
        <br>
        <div class="artist">Benny Dayal</div>`,
        poster:"songs_album/2.jpg"
    },
    {
        id:'3',
        songName:`Bholenath
        <br>
        <div class="artist">Kaka</div>`,
        poster:"songs_album/3.jpg"
    },
    {
        id:'4',
        songName:`Blank Space
        <br>
        <div class="artist">Taylor Swift</div>`,
        poster:"songs_album/4.jpg"
    },
    {
        id:'5',
        songName:`Closer
        <br>
        <div class="artist">Chainsmokers</div>`,
        poster:"songs_album/5.jpg"
    },
    {
        id:'6',
        songName:`Wavin Flag
        <br>
        <div class="artist">K'naan</div>`,
        poster:"songs_album/6.jpg"
    },
    {
        id:'7',
        songName:`Duniyaa
        <br>
        <div class="artist">Dhvani Bhanushali</div>`,
        poster:"songs_album/7.jpg"
    },
    {
        id:'8',
        songName:`Perfect
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"songs_album/8.jpg"
    },
    {
        id:'9',
        songName:`Love Me Like You Do
        <br>
        <div class="artist">Ellie Goulding</div>`,
        poster:"songs_album/9.jpg"
    },
    {
        id:'10',
        songName:`Najaa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"songs_album/10.jpg"
    },
    {
        id:'11',
        songName:`Bekhayali
        <br>
        <div class="artist">Sachet Tandon</div>`,
        poster:"songs_album/11.jpg"
    },
    {
        id:'12',
        songName:`Drag Me Down
        <br>
        <div class="artist">One Direction</div>`,
        poster:"songs_album/12.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});


let playbtn=document.getElementById('playButton');

playbtn.addEventListener('click',function(){
    if(music.paused || music.currentTime<=0)
    {
        music.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
    }
    else{
        music.pause();
        playbtn.classList.remove('fa-pause');
        playbtn.classList.add('fa-play');
    }
});