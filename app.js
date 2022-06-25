const music=new Audio('demo_song.mp3');
let playbtn=document.getElementById('playButton');
let wave=document.getElementsByClassName('wave')[0];



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

const eng_songs=[
    {
        id:'1',
        songName:`Faded
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"latest_english_poster/1.jpg"
    },
    {
        id:'2',
        songName:`Blank Space
        <br>
        <div class="artist">Taylor Swift</div>`,
        poster:"latest_english_poster/2.jpg"
    },
    {
        id:'3',
        songName:`Closer
        <br>
        <div class="artist">Chainsmokers</div>`,
        poster:"latest_english_poster/3.jpg"
    },
    {
        id:'4',
        songName:`Wavin Flag
        <br>
        <div class="artist">K'naan</div>`,
        poster:"latest_english_poster/4.jpg"
    },
    {
        id:'5',
        songName:`Perfect
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"latest_english_poster/5.jpg"
    },
    {
        id:'6',
        songName:`Love Me Like You Do
        <br>
        <div class="artist">Ellie Goulding</div>`,
        poster:"latest_english_poster/6.jpg"
    },
    {
        id:'7',
        songName:`Drag Me Down
        <br>
        <div class="artist">One Direction</div>`,
        poster:"latest_english_poster/7.jpg"
    },
    {
        id:'8',
        songName:`Shape Of You
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"latest_english_poster/8.jpg"
    },
    {
        id:'9',
        songName:`On My Way
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"latest_english_poster/9.jpg"
    },
]
const hindi_songs=[
    
    {
        id:'1',
        songName:`Besharmi ki Height
        <br>
        <div class="artist">Benny Dayal</div>`,
        poster:"latest_hindi_poster/1.jpg"
    },
    {
        id:'2',
        songName:`Tera hone Laga Hoon
        <br>
        <div class="artist">Atif Aslam</div>`,
        poster:"latest_hindi_poster/2.jpg"
    },
    {
        id:'3',
        songName:`Duniyaa
        <br>
        <div class="artist">Dhvani Bhanushali</div>`,
        poster:"latest_hindi_poster/3.jpg"
    },
    {
        id:'4',
        songName:`Bholenath
        <br>
        <div class="artist">Kaka</div>`,
        poster:"latest_hindi_poster/4.jpg"
    },
    {
        id:'5',
        songName:`Najaa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"latest_hindi_poster/5.jpg"
    },
    {
        id:'6',
        songName:`Waalian
        <br>
        <div class="artist">Harnoor</div>`,
        poster:"latest_hindi_poster/6.jpg"
    },
    {
        id:'7',
        songName:`Bekhayali
        <br>
        <div class="artist">Sachet Tandon</div>`,
        poster:"latest_hindi_poster/7.jpg"
    },
    {
        id:'8',
        songName:`Ik Vaari Aa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"latest_hindi_poster/8.jpg"
    },

    {
        id:'9',
        songName:`Tujhe sochta hoon
        <br>
        <div class="artist">Pritam Chakrabatory</div>`,
        poster:"latest_hindi_poster/9.jpg"
    },
]

const recentlyPlayed=[
    {
        id:'1',
        songName:`Duniyaa
        <br>
        <div class="artist">Dhvani Bhanushali</div>`,
        poster:"recently_played/1.jpg"
    },
    {
        id:'2',
        songName:`Bholenath
        <br>
        <div class="artist">Kaka</div>`,
        poster:"recently_played/2.jpg"
    },
    {
        id:'3',
        songName:`Blank Space
        <br>
        <div class="artist">Taylor Swift</div>`,
        poster:"recently_played/3.jpg"
    },
    {
        id:'4',
        songName:`On My Way
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"recently_played/4.jpg"
    },
    {
        id:'5',
        songName:`Najaa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"recently_played/5.jpg"
    },
    {
        id:'6',
        songName:`Waalian
        <br>
        <div class="artist">Harnoor</div>`,
        poster:"recently_played/6.jpg"
    },
    {
        id:'7',
        songName:`Drag Me Down
        <br>
        <div class="artist">One Direction</div>`,
        poster:"recently_played/7.jpg"
    },
    {
        id:'8',
        songName:`Shape Of You
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"recently_played/8.jpg"
    },
    {
        id:'9',
        songName:`Tujhe sochta hoon
        <br>
        <div class="artist">Pritam Chakrabatory</div>`,
        poster:"recently_played/9.jpg"
    },
    {
        id:'10',
        songName:`Faded
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"recently_played/10.jpg"
    },
]
const latestRelease=[
    {
        id:'1',
        songName:`On My Way
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"late_releases/1.jpg"
    },
    {
        id:'2',
        songName:`Faded
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"late_releases/2.jpg"
    },
    {
        id:'3',
        songName:`Duniyaa
        <br>
        <div class="artist">Dhvani Bhanushali</div>`,
        poster:"late_releases/3.jpg"
    },
    {
        id:'4',
        songName:`Tujhe sochta hoon
        <br>
        <div class="artist">Pritam Chakrabatory</div>`,
        poster:"late_releases/4.jpg"
    },
    {
        id:'5',
        songName:`Drag Me Down
        <br>
        <div class="artist">One Direction</div>`,
        poster:"late_releases/5.jpg"
    },
    {
        id:'6',
        songName:`Bholenath
        <br>
        <div class="artist">Kaka</div>`,
        poster:"late_releases/6.jpg"
    },
    {
        id:'7',
        songName:`Blank Space
        <br>
        <div class="artist">Taylor Swift</div>`,
        poster:"late_releases/7.jpg"
    },
    {
        id:'8',
        songName:`Shape Of You
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"late_releases/8.jpg"
    },
    {
        id:'9',
        songName:`Najaa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"late_releases/9.jpg"
    },
    {
        id:'10',
        songName:`Waalian
        <br>
        <div class="artist">Harnoor</div>`,
        poster:"late_releases/10.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

Array.from(document.getElementsByClassName('englishSongs')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=eng_songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=eng_songs[i].songName;
});
Array.from(document.getElementsByClassName('hindiSongs')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=hindi_songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=hindi_songs[i].songName;
});
Array.from(document.getElementsByClassName('songlistpop')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=recentlyPlayed[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=recentlyPlayed[i].songName;
});

Array.from(document.getElementsByClassName('lateReleases')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=latestRelease[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=latestRelease[i].songName;
});

const allPause=function(){
    Array.from(document.getElementsByClassName('recent_play')).forEach(function(ele){
        ele.classList.remove('fa-circle-pause');
        ele.classList.add('fa-circle-play');
    });
}
playbtn.addEventListener('click',function(){
    if(music.paused || music.currentTime<=0)
    {
        music.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
        wave.classList.add('active2');
    }
    else{
        music.pause();
        playbtn.classList.remove('fa-pause');
        playbtn.classList.add('fa-play');
        wave.classList.remove('active2');
        allPause();
    }
});



let idx=0;
let bottom_poster=document.getElementById('bottom_poster');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('recent_play')).forEach(function(ele){
    ele.addEventListener('click',function(event){
        idx=event.target.id;
        allPause();
        event.target.classList.remove('fa-circle-play');
        event.target.classList.add('fa-circle-pause');
        music.src=`recent_songs/${idx}.mp3`;
        bottom_poster.src=`recently_played/${idx}.jpg`;
        music.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
        wave.classList.add('active2');
    })
});