window.addEventListener('load', () => {
    window.addEventListener("scroll",()=>{
        console.log(document.documentElement.clientHeight);
        console.log(document.body.clientHeight);
        console.log(window.scrollY);
    });
});
