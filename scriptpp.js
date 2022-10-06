const idk = document.getElementById('slider');
const idk2 = document.getElementById('slider2');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
console.log(idk,left,right);
const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
var sectionIndex = 0;
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    index = i;
    slider.style.transform = 'translateX(' + (i) * -10 + '%)';  
    slider2.style.transform = 'translateX(' + (i) * -10 + '%)';  
  });
});

left.addEventListener('click', function() {
    index = (index > 0) ? index - 1 : 0;
    console.log(index);
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    idk.style.transform = 'translate(' + (index) * -10 + '%)';
    idk2.style.transform = 'translate(' + (index) * -10 + '%)';
});
right.addEventListener('click', function() {
    index = (index < 9) ? index + 1 : 9;
    console.log(index);
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    idk.style.transform = 'translate(' + (index) * -10 + '%)';
    idk2.style.transform = 'translate(' + (index) * -10 + '%)';
});
