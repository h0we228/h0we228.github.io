var accordions=document.querySelectorAll("button.accordion");
{
  for(var i=0; i<accordions.length;i++){
    accordions[i].onclick=function(){
      this.nextElementSibling.classList.toggle("show");
      this.classList.toggle("active");

    }
  }
}
