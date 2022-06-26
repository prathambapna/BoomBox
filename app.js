


const music=new Audio('demo_song.mp3');
let playbtn=document.getElementById('playButton');
let wave=document.getElementsByClassName('wave')[0];



const songs=[
    {
        id:'1',
        songName:`Tera hone laga hoon <br>
        <div class="artist">Atif Aslam</div>`,
        poster:"songs_album/1.jpg"
    },
    {
        id:'2',
        songName:`Love Me Like You Do
        <br>
        <div class="artist">Ellie Goulding</div>`,
        poster:"songs_album/2.jpg"
    },
    
    {
        id:'3',
        songName:`Ik Vaari aa
        <br>
        <div class="artist">Arijit Singh</div>`,
        poster:"songs_album/3.jpg"
    },
    
    {
        id:'4',
        songName:`Waalian
        <br>
        <div class="artist">Harnoor</div>`,
        poster:"songs_album/4.jpg"
    },
    
    {
        id:'5',
        songName:`Tujhe Sochta hoon
        <br>
        <div class="artist">Pritam Chakraborty</div>`,
        poster:"songs_album/5.jpg"
    },
    
    {
        id:'6',
        songName:`Shape of you
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"songs_album/6.jpg"
    },
    
    {
        id:'7',
        songName:`Faded
        <br>
        <div class="artist">Alan Walker</div>`,
        poster:"songs_album/7.jpg"
    },
    {
        id:'8',
        songName:`Bekhayali
        <br>
        <div class="artist">Sachet Tandon</div>`,
        poster:"songs_album/8.jpg"
    },
    {
        id:'9',
        songName:`On My Way <br>
        <div class="artist">Alan Walker</div>`,
        poster:"songs_album/9.jpg"
    },
    {
        id:'10',
        songName:`Besharmi ki Height
        <br>
        <div class="artist">Benny Dayal</div>`,
        poster:"songs_album/10.jpg"
    },
    {
        id:'11',
        songName:`Bholenath
        <br>
        <div class="artist">Kaka</div>`,
        poster:"songs_album/11.jpg"
    },
    {
        id:'12',
        songName:`Blank Space
        <br>
        <div class="artist">Taylor Swift</div>`,
        poster:"songs_album/12.jpg"
    },
    {
        id:'13',
        songName:`Closer
        <br>
        <div class="artist">Chainsmokers</div>`,
        poster:"songs_album/13.jpg"
    },
    {
        id:'14',
        songName:`Wavin Flag
        <br>
        <div class="artist">K'naan</div>`,
        poster:"songs_album/14.jpg"
    },
    {
        id:'15',
        songName:`Duniyaa
        <br>
        <div class="artist">Dhvani Bhanushali</div>`,
        poster:"songs_album/15.jpg"
    },
    {
        id:'16',
        songName:`Perfect
        <br>
        <div class="artist">Ed Sheeran</div>`,
        poster:"songs_album/16.jpg"
    },
    {
        id:'17',
        songName:`Barbaadiyan
        <br>
        <div class="artist">Sachet Tandon</div>`,
        poster:"songs_album/17.jpg"
    },
    {
        id:'18',
        songName:`Raataan Lambiyan
        <br>
        <div class="artist">Jubin Nautiyal</div>`,
        poster:"songs_album/18.jpg"
    },
    {
        id:'19',
        songName:`Duppata
        <br>
        <div class="artist">Shreya Sharma</div>`,
        poster:"songs_album/19.jpg"
    },
    {
        id:'20',
        songName:`Heaven
        <br>
        <div class="artist">Lyodra</div>`,
        poster:"songs_album/20.jpg"
    },
    {
        id:'21',
        songName:`Bhool Bhulaiya
        <br>
        <div class="artist">Tanishk Bagchi</div>`,
        poster:"songs_album/21.jpg"
    },
    {
        id:'22',
        songName:`Rockabye
        <br>
        <div class="artist">Clean Bandit</div>`,
        poster:"songs_album/22.jpg"
    },
    {
        id:'23',
        songName:`Maiyya Mainu
        <br>
        <div class="artist">Sachet–Parampara</div>`,
        poster:"songs_album/23.jpg"
    },
    {
        id:'24',
        songName:`Levitating
        <br>
        <div class="artist">Dua Lip</div>`,
        poster:"songs_album/24.jpg"
    },
    {
        id:'25',
        songName:`Let's Nacho
        <br>
        <div class="artist">Badshah</div>`,
        poster:"songs_album/25.jpg"
    },
    {
        id:'26',
        songName:`Stay
        <br>
        <div class="artist">Justin Beiber</div>`,
        poster:"songs_album/26.jpg"
    },
    {
        id:'27',
        songName:`Akhiyon se Goli Maare
        <br>
        <div class="artist">Mika Singh</div>`,
        poster:"songs_album/27.jpg"
    },
    
    {
        id:'28',
        songName:`Kamariyaa
        <br>
        <div class="artist">Darshan Raval</div>`,
        poster:"songs_album/28.jpg"
    },
    {
        id:'29',
        songName:`Need To Know
        <br>
        <div class="artist">Amala Ratna</div>`,
        poster:"songs_album/29.jpg"
    },
    {
        id:'30',
        songName:`Mood
        <br>
        <div class="artist">24kGoldn</div>`,
        poster:"songs_album/30.jpg"
    },
    {
        id:'31',
        songName:`Safari
        <br>
        <div class="artist">SERENA</div>`,
        poster:"songs_album/31.jpg"
    },
    {
        id:'32',
        songName:`Kill This Love
        <br>
        <div class="artist">BLACKPINK</div>`,
        poster:"songs_album/32.jpg"
    },
    {
        id:'33',
        songName:`Tsunami
        <br>
        <div class="artist">Borgeous</div>`,
        poster:"songs_album/33.jpg"
    },
    {
        id:'34',
        songName:`Amplifier
        <br>
        <div class="artist">Imran Khan</div>`,
        poster:"songs_album/34.jpg"
    },
    {
        id:'35',
        songName:`Off the face
        <br>
        <div class="artist">Justin Beiber</div>`,
        poster:"songs_album/35.jpg"
    },
    {
        id:'36',
        songName:`Bilionera
        <br>
        <div class="artist">Otilia Brumă</div>`,
        poster:"songs_album/36.jpg"
    },
    {
        id:'37',
        songName:`Bijlee
        <br>
        <div class="artist">Harrdy Sandhu</div>`,
        poster:"songs_album/37.jpg"
    },
    {
        id:'38',
        songName:`Dance meri Rani
        <br>
        <div class="artist">Guru Randhawa</div>`,
        poster:"songs_album/38.jpg"
    },
    {
        id:'39',
        songName:`Jugnu
        <br>
        <div class="artist">Badshah</div>`,
        poster:"songs_album/39.jpg"
    },
    {
        id:'40',
        songName:`Kaise Hua
        <br>
        <div class="artist">Vishal Mishra</div>`,
        poster:"songs_album/40.jpg"
    },
    {
        id:'41',
        songName:`Tenu Lehenga
        <br>
        <div class="artist">Jass Manak</div>`,
        poster:"songs_album/41.jpg"
    },
    {
        id:'42',
        songName:`Slow Slow
        <br>
        <div class="artist">Badshah</div>`,
        poster:"songs_album/42.jpg"
    },
    {
        id:'43',
        songName:`Sakhiyan
        <br>
        <div class="artist">Maninder Buttar</div>`,
        poster:"songs_album/43.jpg"
    },
    {
        id:'44',
        songName:`Do ghoont
        <br>
        <div class="artist">Viplove Rajdeo</div>`,
        poster:"songs_album/44.jpg"
    }
]
Array.from(document.getElementsByClassName('songAlbum')).forEach(function(ele,i){
    ele.getElementsByTagName('img')[0].src=songs[i].poster;
    ele.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

//bottom player play pause btn
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
    }
});

//on clicking songs=>
let idx=0;
let bottom_poster=document.getElementById('bottom_poster');
let title=document.getElementById('title');

Array.from(document.getElementsByClassName('songAlbum')).forEach(function(ele){
    ele.addEventListener('click',function(event){
        idx=event.target.id;
        music.src=`music_list/${idx}.mp3`;
        bottom_poster.src=`songs_album/${idx}.jpg`;
        music.play();
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
        wave.classList.add('active2');
        let song_title=songs.filter(function(element){
            return element.id==idx;
        });
        let {songName}=song_title[0];
        title.innerHTML=songName;
        // music.addEventListener('ended',function(){
        //     playbtn.classList.remove('fa-pause');
        //     playbtn.classList.add('fa-play');
        //     wave.classList.add('active2');
        // })
    })
});

//song bar
let currentSongStart=document.getElementById('start_time');
let currentSongEnd=document.getElementById('end_time');
let song_bar=document.getElementById('song_bar');
let bar=document.getElementById('bar');
let dot=document.getElementById('dot');



music.addEventListener('timeupdate',function(){
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    
    let minutes=Math.floor(music_dur/60);
    let seconds=Math.floor(music_dur%60);
    if(seconds<10)
    {
        seconds=`0${seconds}`;
    }
    currentSongEnd.innerText=`${minutes}:${seconds}`;

    let minutes1=Math.floor(music_curr/60);
    let seconds1=Math.floor(music_curr%60);
    if(seconds1<10)
    {
        seconds1=`0${seconds1}`;
    }
    currentSongStart.innerText=`${minutes1}:${seconds1}`;

    let songBar=parseInt((music.currentTime/music.duration)*100);
    song_bar.value=songBar;
    let barvalue=song_bar.value;
    bar.style.width=`${barvalue}%`;
    dot.style.left=`${barvalue}%`;
})

song_bar.addEventListener('change',function(){
    music.currentTime=song_bar.value*music.duration/100;
})

//if music ends=>autoplay
music.addEventListener('ended',function(){
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
    wave.classList.add('active2');
    idx++;
    music.src=`music_list/${idx}.mp3`;
    bottom_poster.src=`songs_album/${idx}.jpg`;
    music.play();
    let song_title=songs.filter(function(element){
        return element.id==idx;
    });
    let {songName}=song_title[0];
    title.innerHTML=songName;
})


//vol bar 
let vol_input=document.getElementById('vol_input');
let vol_bar=document.getElementById('vol_bar');
let vol_dot=document.getElementById('vol_dot');
let vol_icon=document.getElementById('vol_icon');
vol_input.addEventListener('change',function(){
    if(vol_input.value==0)
    {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-low');
    }
    if(vol_input.value>0)
    {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-low');
    }
    if(vol_input.value>50)
    {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-low');
    }
    let vol_value=vol_input.value;
    vol_bar.style.width=`${vol_value}%`;
    vol_dot.style.left=`${vol_value}%`;
    music.volume=vol_value/100;

});


//next button in bottom player

let nextButton=document.getElementById('nextButton');
nextButton.addEventListener('click',function(){
    idx-=-1;
    if(idx>Array.from(document.getElementsByClassName('songAlbum')).length){
        idx=1;
    }
    music.src=`music_list/${idx}.mp3`;
    bottom_poster.src=`songs_album/${idx}.jpg`;
    music.play();
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
    wave.classList.add('active2');
    let song_title=songs.filter(function(element){
        return element.id==idx;
    });
    song_title.forEach(ele=>{
        let {songName}=ele;
        title.innerHTML=songName;
    })
})
let backButton=document.getElementById('backButton');
backButton.addEventListener('click',function(){
    idx+=-1;
    if(idx<=0){
        idx=Array.from(document.getElementsByClassName('songAlbum')).length;
    }
    music.src=`music_list/${idx}.mp3`;
    bottom_poster.src=`songs_album/${idx}.jpg`;
    music.play();
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
    wave.classList.add('active2');
    let song_title=songs.filter(function(element){
        return element.id==idx;
    });
    song_title.forEach(ele=>{
        let {songName}=ele;
        title.innerHTML=songName;
    })
})

//back and next in song list
let back1=document.getElementById('back1');
let back2=document.getElementById('back2');
let back3=document.getElementById('back3');
let back4=document.getElementById('back4');
let back5=document.getElementById('back5');
let back6=document.getElementById('back6');

let next1=document.getElementById('next1');
let next2=document.getElementById('next2');
let next3=document.getElementById('next3');
let next4=document.getElementById('next4');
let next5=document.getElementById('next5');
let next6=document.getElementById('next6');

let for5=document.getElementsByClassName('hindi_content')[0];
let for4=document.getElementsByClassName('eng_content')[0];
let for3=document.getElementsByClassName('pop_artist')[0];
let for2=document.getElementById('lateReleases');
let for1=document.getElementById('pop_song_list');
let for6=document.getElementById('sim_artist');

back1.addEventListener('click',function(){
    for1.scrollLeft-=330;
})
next1.addEventListener('click',function(){
    for1.scrollLeft+=330;
})

back2.addEventListener('click',function(){
    for2.scrollLeft-=330;
})
next2.addEventListener('click',function(){
    for2.scrollLeft+=330;
})

back3.addEventListener('click',function(){
    for3.scrollLeft-=330;
})
next3.addEventListener('click',function(){
    for3.scrollLeft+=330;
})

back4.addEventListener('click',function(){
    for4.scrollLeft-=330;
})
next4.addEventListener('click',function(){
    for4.scrollLeft+=330;
})

back5.addEventListener('click',function(){
    for5.scrollLeft-=330;
})
next5.addEventListener('click',function(){
    for5.scrollLeft+=330;
})

back6.addEventListener('click',function(){
    for6.scrollLeft-=330;
})
next6.addEventListener('click',function(){
    for6.scrollLeft+=330;
})


//likes
let index=0;
Array.from(document.getElementsByClassName('fa-heart')).forEach(function(ele){
    ele.addEventListener('click',function(event){
        index=event.target.id;
        if(event.target.classList.contains('filled')){
            event.target.classList.remove('filled');
        }
        else{
            event.target.classList.add('filled');
        }
    })
})
