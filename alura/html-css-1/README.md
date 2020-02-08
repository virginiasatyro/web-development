# Alura

## HTML5 e CSS3 parte 1: A primeira página da Web

### Aula 1 - Marcação do primeiro texto

Seis tipos diferentes de títulos no HTML. Usado como títilo, e não como texto maior ou negrito.

```<h1>This is heading 1</h1>```
<h1>This is heading 1</h1>

```<h2>This is heading 2</h2>``` 
<h2>This is heading 2</h2>

```<h3>This is heading 3</h3>``` 
<h3>This is heading 3</h3>

```<h4>This is heading 4</h4>```
<h4>This is heading 4</h4>

```<h5>This is heading 5</h5>```
<h5>This is heading 5</h5>

```<h6>This is heading 6</h6>```
<h6>This is heading 6</h6> 

Exemplos de tags:

```<em>Emphasized text</em>```
<em>Emphasized text</em>

```<strong>Strong text</strong>```
<strong>Strong text</strong>

```<code>A piece of computer code</code>```
<code>A piece of computer code</code>

```<samp>Sample output from a computer program</samp>```
<samp>Sample output from a computer program</samp>

```<kbd>Keyboard input</kbd>```
<kbd>Keyboard input</kbd>

```<var>Variable</var>```
<var>Variable</var>

Parágrafo:

```<p>Esse é um texto dentro de um parágrafo.</p>```
<p>Esse é um texto dentro de um parágrafo.</p>

[Exemplo](https://github.com/virginiasatyro/web-development/blob/master/alura/html-css-1/html-css-1-1/index.html)

<img src="https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-1.png">

### Aula 2 - Separando o conteúdo e informações

```<!DOCTYPE html>``` - Primeira definição a ser escrita no documento HTML - antes da tag ```<html>```. Adicionar essa tag, pois assim o navegador seberá que tipo de documento esperar. 

```<html lang="pt-br">``` - Definição do idioma da página. 
  
```<meta charset="UTF 8">``` - especifica codificação dos caracteres do documento HTML. 

```<head></head>``` - O elemento ```<head>``` é um contêiner para metadados (dados sobre dados) e é colocado entre a tag ```<html>``` e a ```<body>```.

Os metadados HTML são dados sobre o documento HTML. Os metadados não são exibidos.

Os metadados geralmente definem o título do documento, o conjunto de caracteres, os estilos, os scripts e outras metainformações.
    
```<body></body>``` - A tag ```<body>``` define o corpo do documento.

O elemento ```<body>``` contém todo o conteúdo de um documento HTML, como texto, hiperlinks, imagens, tabelas, listas, etc.

```<title><title>``` - A tag ```<title>``` é necessária em todos os documentos HTML e define o título do documento.

O elemento ```<title>```:
   - define um título na barra de ferramentas do navegador;
   - fornece um título para a página quando ela é adicionada aos favoritos;
   - exibe um título para a página nos resultados do mecanismo de pesquisa;

Exemplo:

```
<!DOCTYPE html>
<html>

<head>
  <title>Page Title</title>
</head>

<body>
The content of the document......
</body>

</html> 
```

[Exemplo](https://github.com/virginiasatyro/web-development/tree/master/alura/html-css-1/html-css-1-2)

<img src="https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-2.png">

### Aula 3 - Trabalhando com CSS 

```<link rel="stylesheet" href="style.css">``` - link para o style.css.

```<h1 style="text-align: center;">```

```<p style="font-size: 20px; text-align: center";>```

Mexer na apresentação dos textos:
   - No alinhamento deles (text-align)
      - No tamanho da fonte (font-size)
      - Na cor de fundo (background)
      - Na cor do texto (color)
   - CSS inline
      - Na linha onde temos a nossa tag, adicionamos a propriedade do CSS
   - A tag ```<style>```
      - Dentro da tag, podemos colocar marcações de CSS referentes aos elementos que temos no nosso HTML
   - A apresentação do CSS com um arquivo externo
   - Como funciona o estilo em cascata do CSS
   - Como importar um arquivo externo de CSS dentro da nossa página HTML
   - Como representar cores no CSS
      - Através do nome da cor - color: red;
      - Através do seu hexadecimal - color: #CCCCCC;
      - Através do seu RGB

[Exemplo](https://github.com/virginiasatyro/web-development/tree/master/alura/html-css-1/html-css-1-3)

<img src= "https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-3.png"> 

### Aula 4 - Estilizando imagens

```src="banner.jpg">``` - ```<img src="URL">```.

```F12``` - Ferramenta do desenvolvedor - navegador

- CSS 
   - ```height```
   - ```width``` 
   - ```padding``` 
   - ```margin```

Time de Front-end
- UX - User Experience - usabilidade 
- UI - User Interface - <em>design</em>
- Desenvolvedor Front-end 

[Exemplo](https://github.com/virginiasatyro/web-development/tree/master/alura/html-css-1/html-css-1-4)

<img src= "https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-4.png"> 

### Aula 5 - Lista e divisões de conteúdo

```classe = ""``` - O atributo da classe HTML é usado para definir estilos iguais para elementos com o mesmo nome de classe.

Portanto, todos os elementos HTML com o mesmo atributo de classe terão o mesmo estilo.

```<div></div>``` - A tag ```<div>``` define uma divisão ou seção em um documento HTML.

O elemento ```<div>``` é frequentemente usado como um contêiner para outros elementos HTML para estilizá-los com CSS ou para executar determinadas tarefas com JavaScript.

```<ul></ul>``` e ```<li></li>``` - A tag ```<ul>``` define uma lista não ordenada (com marcadores).

Use a tag ```<ul>``` junto com a tag ```<li>``` para criar listas não ordenadas.

Exemplo: 
```<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>```

 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul> 

- comportamento <i>inline</i> e <i>block</i>

[Exemplo](https://github.com/virginiasatyro/web-development/tree/master/alura/html-css-1/html-css-1-5)

<img src="https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-5.png">

### Aula 6 - Finalizando a página

```<header></header>```

- O conceito de cabeçalho da página e como criá-lo
- Que o cabeçalho da página deve ter mais destaque
- Que não é recomendado criar estilos usando tags
- O ideal é usarmos classes para tudo

[Exemplo](https://github.com/virginiasatyro/web-development/tree/master/alura/html-css-1/html-css-1-6)

<img src= "https://raw.githubusercontent.com/virginiasatyro/web-development/master/alura/html-css-1/img/site-1-6.png"> 