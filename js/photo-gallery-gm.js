export default function PhotoGallery(argument) {
  const photoGallery = document.querySelector(`[data-gallery='${argument}']`);
  if (photoGallery) {
    //Selec Consts
    const divGallery = photoGallery.querySelectorAll('div');
    const imgsGallery = photoGallery.querySelectorAll('img');
    const body = document.querySelector('body');

    //Creat buttonClosed
    const buttonClose = document.createElement('button');
    buttonClose.innerHTML = 'X';
    photoGallery.appendChild(buttonClose);

    //Creat Arrows
    const arrowRight = document.createElement('button');
    const arrowLeft = document.createElement('button');
    arrowRight.innerHTML = '>';
    arrowLeft.innerHTML = '<';
    photoGallery.appendChild(arrowRight);
    photoGallery.appendChild(arrowLeft);

    //Function Open Photo
    function clickPhoto(event) {
      //Consts
      const img = event.target;
      const divImg = img.parentElement;
      const pageYOffset = window.pageYOffset;
      //Mods Body
      body.style.position = 'relative';
      body.style.overflow = 'hidden';
      //Mods Divs
      divGallery.forEach((div) => {
        div.classList.remove('active');
      });
      divImg.classList.add('active');
      divImg.style.top = `${pageYOffset}px`;
      divImg.style.width = `${window.innerWidth}px`;
      divImg.style.maxWidth = 'unset';
      divImg.style.maxHeight = 'unset';
      //Mods img
      img.classList.add('active');
      //Button Closed and Arrows
      buttonClose.classList.add('active');
      arrowRight.classList.add('active');
      arrowLeft.classList.add('active');
      resizeButtons();
      disbableNextBack();
    }

    //Function Resize Button Closed and Arrows
    function resizeButtons() {
      setTimeout(() => {
        imgsGallery.forEach((img) => {
          const widthArrowLeft = arrowLeft.clientWidth;
          const heightArrowLeft = arrowLeft.clientHeight;
          const heightArrowRight = arrowRight.clientHeight;
          const offsetTop = img.offsetTop;
          const offsetleft = img.offsetLeft;
          const heightButton = buttonClose.clientHeight;
          if (img.parentElement.className.includes('active')) {
            buttonClose.style.top = `calc(${pageYOffset}px + ${offsetTop}px - (${heightButton}px + 30px))`;
            buttonClose.style.left = `calc(${window.innerWidth}px - (${offsetleft}px))`;
            arrowLeft.style.left = `calc(${window.innerWidth}px - (${offsetleft}px + ${img.clientWidth}px  + ${widthArrowLeft}px + 10px)`;
            arrowLeft.style.top = `calc((${pageYOffset}px + ${offsetTop}px) + (${img.clientHeight}px / 2 - ${heightArrowLeft}px / 2))`;
            arrowRight.style.left = `calc(${window.innerWidth}px - ${offsetleft}px + 10px `;
            arrowRight.style.top = `calc((${pageYOffset}px + ${offsetTop}px) + (${img.clientHeight}px / 2 - ${heightArrowRight}px / 2))`;
          }
        });
      });
    }

    //Function remove Style and Attributes
    function removeStyleAttributes(divActive) {
      divActive.classList.remove('active');
      divActive.firstElementChild.classList.remove('active');
      divActive.firstElementChild.style.maxWidth = ``;
      divActive.firstElementChild.style.maxHeight = ``;
      divActive.firstElementChild.style.objectFit = ``;
      divActive.style.width = ``;
      divActive.style.top = ``;
      divActive.style.maxWidth = ``;
      divActive.style.maxHeight = ``;
      divActive.firstElementChild.style.width = ``;
      divActive.firstElementChild.style.height = ``;
    }

    //Function Closed
    function closedButton() {
      const divActive = photoGallery.querySelector('div.active');
      buttonClose.classList.remove('active');
      arrowLeft.classList.remove('active');
      arrowRight.classList.remove('active');
      buttonClose.style.top = ``;
      arrowLeft.style.top = ``;
      arrowRight.style.top = ``;
      buttonClose.style.left = ``;
      arrowLeft.style.left = ``;
      arrowRight.style.left = ``;
      body.style.overflow = 'auto';
      body.style.position = ``;
      arrowRight.removeAttribute('disabled');
      removeStyleAttributes(divActive);
    }

    //Function Resize Div
    function resizeDiv() {
      divGallery.forEach((div) => {
        if (div.className.includes('active')) {
          div.style.top = `${pageYOffset}px`;
          div.style.width = `${window.innerWidth}px`;
        }
      });
    }

    //Function Max Width Image
    function maxWidthImg() {
      imgsGallery.forEach((img) => {
        const pageYOffset = window.pageYOffset;
        if (img.parentElement.className.includes('active')) {
          img.style.maxWidth = 'calc(100vw - 100px)';
          img.style.maxHeight = `calc((${window.innerHeight}px - 150px)`;
          img.style.objectFit = 'unset';
        }
      });
    }

    //Function Next
    function next() {
      const pageYOffset = window.pageYOffset;
      // //Div Actual
      const divActive = photoGallery.querySelector('div.active');
      //Next Div
      const nextDiv = divActive.nextElementSibling;
      nextDiv.classList.add('active');
      nextDiv.style.top = `${pageYOffset}px`;
      nextDiv.style.width = `${window.innerWidth}px`;
      nextDiv.style.maxWidth = `unset`;
      nextDiv.style.maxHeight = `unset`;
      //Next Image
      const nextImage = nextDiv.firstElementChild;
      console.log(nextDiv);
      nextImage.classList.add('active');
      maxWidthImg();
      resizeButtons();
      removeStyleAttributes(divActive);
      disbableNextBack();
    }

    //Function Back
    function back() {
      const pageYOffset = window.pageYOffset;
      //Div Actual
      const divActive = photoGallery.querySelector('div.active');
      //Back Div
      const backDiv = divActive.previousElementSibling;
      backDiv.classList.add('active');
      backDiv.style.top = `${pageYOffset}px`;
      backDiv.style.width = `${window.innerWidth}px`;
      backDiv.style.maxWidth = `unset`;
      backDiv.style.maxHeight = `unset`;
      //Back Image
      const backImage = backDiv.firstElementChild;
      console.log(backImage);
      backImage.classList.add('active');
      maxWidthImg();
      resizeButtons();
      removeStyleAttributes(divActive);
      disbableNextBack();
    }

    //Function Disabled Next and Back
    function disbableNextBack() {
      if (
        (divGallery[divGallery.length - 1].nextElementSibling === buttonClose ||
          arrowRight ||
          arrowLeft) &&
        divGallery[divGallery.length - 1].className.includes('active')
      ) {
        arrowRight.setAttribute('disabled', '');
      } else {
        arrowRight.removeAttribute('disabled');
      }
      if (
        divGallery[0].previousElementSibling === null &&
        divGallery[0].className.includes('active')
      ) {
        arrowLeft.setAttribute('disabled', '');
      } else {
        arrowLeft.removeAttribute('disabled');
      }
    }

    ////Active Functions
    //ClickPhoto, maxWidthImg, resizeButtons
    imgsGallery.forEach((img) => {
      img.addEventListener('click', clickPhoto);
      img.addEventListener('click', maxWidthImg);
      img.addEventListener('click', resizeButtons);
    });
    window.addEventListener('resize', resizeButtons);
    //Closed Button
    buttonClose.addEventListener('click', closedButton);
    //ResizeDiv
    window.addEventListener('resize', resizeDiv);
    //Next
    arrowRight.addEventListener('click', next);
    //Back
    arrowLeft.addEventListener('click', back);
  }
}
