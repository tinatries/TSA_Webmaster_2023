const animation = document.querySelectorAll(".fi");
const animation2 = document.querySelectorAll(".tfi");
const animation3 = document.querySelectorAll(".rfi");
const animation4 = document.querySelectorAll(".bfi");


console.log(animation2)
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting) {
            if (entry.target.classList.contains('fi') == true) {

                entry.target.classList.add('fade-in');
                entry.target.classList.remove('no-opacity');

            } else if(entry.target.classList.contains('tfi')) {
                entry.target.classList.add('top-fade');
                entry.target.classList.remove('no-opacity'); 

            } else if (entry.target.classList.contains('rfi')) {
                entry.target.classList.add('right-fade');
                entry.target.classList.remove('no-opacity'); 
            } else if (entry.target.classList.contains('bfi')) {
                entry.target.classList.add('bottom-fade');
                entry.target.classList.remove('no-opacity'); 
            }
            
        }else { 
            entry.target.classList.add('no-opacity')
        }
    })
}, {threshold: 0}); 

for (let i = 0; i < animation.length; i++) {
    const elements = animation[i];
 
    observer.observe(elements);
} 

for (let i = 0; i < animation2.length; i++) {
    const elements = animation2[i];
 
    observer.observe(elements);
} 

for (let i = 0; i < animation3.length; i++) {
    const elements = animation3[i];
 
    observer.observe(elements);
} 
for (let i = 0; i < animation4.length; i++) {
    const elements = animation4[i];
 
    observer.observe(elements);
} 

