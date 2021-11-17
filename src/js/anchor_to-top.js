let scrollpos = window.scrollY

const toUp = document.querySelector(".btn-to-up")
const scrollChange = 0

const add_class_on_scroll = () => toUp.classList.add("animate")
const remove_class_on_scroll = () => toUp.classList.remove("animate")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos != scrollChange){
      add_class_on_scroll();
      console.log(scrollpos)
    }
  else{ 
    remove_class_on_scroll();
    } 
})
