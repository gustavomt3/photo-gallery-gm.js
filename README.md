# Photo Gallery GM
Plugin simples em Javascript puro para galeria de imagens

<h2>Instalação</h2>

1 - Copie o arquivo photo-gallery-gm-min.js da pasta js e cole no seu site.

2 - Link o arquivo utilizando a tag script /js é apenas um exemplo, caso você tenha colocado o arquivo dentro da pasta de plugins
```js
<script src="./js/photo-gallery-gm-min.js"></script>;
```

<h2>Funcionamento</h2>

1 - Inicie o plugin com:
```js
new PhotoGallery("principal");
```
OBS: O principal corresponde ao nome que você irá dar ao seu data-gallery. Por exemplo: data-gallery="principal".

2 - Monte a estrutura da sua galeria. Siga o exemplo sempre de uma img dentro de uma div

```html
<div data-gallery="principal">
  <div><img></div>
  <div><img></div>
  <div><img></div>
  <div><img></div>
</div>
```

3 - Adicione o CSS essecial abaixo:

```css
[data-gallery]{
 /*EDIT*/
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 overflow-y: hidden;
 overflow-x: auto;
 height: 300px;
}
[data-gallery] > div{
 /*EDIT*/
 max-width: 140px;
 max-height: 140px;
 margin-right: 10px;
 margin-bottom: 10px;
 cursor: pointer;
}
[data-gallery] > div > img{
 /*EDIT*/
 height: 100%;
 object-fit: cover;
}
[data-gallery] > div > img.active{
 width: unset;
 height: unset;
}
[data-gallery] > div.active{
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 5000;
 background-color: rgba(0,0,0, 0.8);
 height: 100vh;
 left: 0;
}
[data-gallery] > button{
 display: none;
 outline-style: none;
}
[data-gallery] > button.active{
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: Arial, Helvetica, sans-serif;
 font-weight: bold;
 background-color: #fff;
 border: 1px solid #000;
 padding: 5px 10px 5px 10px;
 z-index: 20000;
 cursor: pointer;
}
[data-gallery] > button:disabled{
 color: #ccc;
 border-color: #ccc;
}
```

OBS: Os css's que tem ```css /*EDIT*/ ``` fique a vontade para fazer a edição que achar da melhor forma. Já os outros aconselho não modificar. 
