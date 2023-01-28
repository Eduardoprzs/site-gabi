

let musicas = [
    {titulo:'My Girl ', artista:'The Temptations', src:'musicas/The Temptations - My Girl (tradução,legendadoletra,lyric).mp3'},
    {titulo:'Can I Be Him', artista:'James Arthur', src:'musicas/James Arthur - Can I Be Him.mp3'},
    {titulo:'Never Be Alone', artista:'Shawn Mendes', src:'musicas/Shawn Mendes - Never Be Alone (Official Audio).mp3'},
    {titulo:'Pra Ter O Seu Amor', artista:'Jorge & Matheus', src:'musicas/Pra Ter O Seu Amor (Live In Sao Paulo  2010).mp3'},
    {titulo:'Gatinha Manhosa', artista:'Erasmo Carlos', src:'musicas/Gatinha Manhosa.mp3'},
    {titulo:'Stand By Me', artista:'Ben E. King', src:'musicas/Ben E. King - Stand By Me (HQ Video Remastered In 1080p).mp3'},
    {titulo:'Back in Black', artista:'Ac/Dc', src:'musicas/AC DC - Back in black(HQ-Official video)(Lyrics in description).mp3'}
    
];

let musica = document.querySelector('audio');
let indexMusica = 0;



let nomeMusica = document.querySelector('.descricao div');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);



document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 6;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 6){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        
        
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}






