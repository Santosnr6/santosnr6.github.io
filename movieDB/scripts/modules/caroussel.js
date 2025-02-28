// function to render the trailers to the dom
export function renderTrailers(movie, num) {
    const iFrameRef = document.createElement(`iframe`);
    iFrameRef.classList.add(`trailers__video`, `trailers__video-${num}`);
    iFrameRef.src = movie.Trailer_link;
    document.querySelector(`.trailers__container`).appendChild(iFrameRef);

    // set an array with the order of the trailes, used to change order on the page
    const trailerList = document.querySelectorAll(`.trailers__video`);
    const trailerArray = Array.from(trailerList);
    
    // add eventlistener to the arrows in the trailer section to navigate left and right 
    document.querySelectorAll(`.trailers__arrow`).forEach(arrow => {
        arrow.addEventListener(`click`, (event) => {
            changeTrailer(event, trailerList, trailerArray);
        });
    })
}

// function to move the trailers in Carousel
function changeTrailer(event, trailerList, trailerArray) {

    // check what arrow was clicked 
    if (event.target.dataset.direction === `right`) {
        // move first item in array to last position 
        trailerArray.push(trailerArray.shift());
    } else if (event.target.dataset.direction === `left`) {
        // move last item in array to first position  
        trailerArray.unshift(trailerArray.pop());
    }

    // remove all the classes from trailers 
    trailerList.forEach(item => {
        item.classList.remove(
            `trailers__video-1`,
            `trailers__video-2`,
            `trailers__video-3`,
            `trailers__video-4`,
            `trailers__video-5`
        );
    });

    // add class to every trailer for position 
    trailerArray.slice(0, 5).forEach((item, i) => {
        item.classList.add(`trailers__video-${i + 1}`)
    });
}

