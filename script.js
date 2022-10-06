fetch('https://run.mocky.io/v3/2b858539-b398-45af-88b3-d6c16818417e').then(data => {
    // console.log(data);
    return data.json();
}).then(completedata => {
    console.log(completedata);
    let data1 = ''
    completedata.map(values => {
        data1 += `<div class="recipe-img1">
        <img class="no-height" src=${values.image} alt="cupcake">
        <p class="recipe-p">${values.price} <br> ${values.name} <br> <i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star yellow" aria-hidden="true"></i>
        </p>
    </div>`
    })
    document.getElementById("recipe-img").innerHTML = data1;
}).catch(err => {
    console.log(err);
});


// fetch('https://run.mocky.io/v3/b29f0973-73d2-4b3a-a430-7a2bc9a0b281').then(data => {
//     // console.log(data);
//     return data.json();
// }).then(completedata => {
//     console.log(completedata);
//     let data1 = ''
//     completedata.map(values => {
//         data1 += `<div class="menu-img1">
//             <img class="menu-image" src=${values.image} alt="cupcake">
//             <p class="menu-p">${values.price} <br> ${values.name} <br> <i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star orange" aria-hidden="true"></i><i class="fa fa-star yellow" aria-hidden="true"></i>
//             </p>
//         </div>`
//     })
//     document.getElementById("menu-img").innerHTML = data1;
// }).catch(err => {
//     console.log(err);
// });






fetch('https://run.mocky.io/v3/d0568511-ccde-4a34-83d6-32e2f73b6a11').then(datas => {
    console.log(datas);
    return datas.json();
}).then(completedatas => {
    console.log(completedatas);
    let data2 = ''
    completedatas.map(values => {
        data2 += `<div class="testimonialc">
        <div class="testimonial-text">
            <p><i class="fa fa-minus pink fa-2x" aria-hidden="true"></i></p>
            <h6 class="pink">${values.name} </h6>
            <h1 class="recipe-h1">Hear From <br> Our Customers</h1>
            <p class="test-p">Artisan Bakery opened its first location on a quiet street corner <br> in the heart of New York City's West Village.</p>
            <div class="block">
                <a class="left" class="link middle"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                <a class ="right" class="link middle"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
            <img src="./img/Screenshot (162).png" alt="" class="test-picture">
        </div>
        <div class="test2">
            <div class="testimonial-text2">
                <p><em>" labore voluptate deserunt natus repellendus quisquam distinctio id mollitia unde ab facilis obcaecati optio
                    Eius ratione illum repellendus est soluta ipsam dolorum adipisci error laborum! Corrupti, ab voluptas inventore minima magnam a quae eos totam, veniam, perspiciatis dolores sint obcaecati alias optio provident mollitia?
                    Unde quae esse asperiores illo odio ratione optio architecto? Blanditiis a tempore voluptatem dicta ipsa voluptate nemo
                     " </em>
                </p>
                <div class="test-logo">
                    <img class="logo" src="./img/Screenshot (163).png" alt="">
                    <div>
                        <p class="bold">Zohan Romen</p>
                        <p class="light">CEO & Founder at Rocket Corpporation</p>
                    </div>
                </div>
            </div>
            <div class="control">
                    <ul class="line-ul">
                        <li class="line-li selected"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                        <li class="line-li"></li>
                    </ul>
                   </div>
            
        </div>  
     </div>`
    })
    //  document.getElementById("idk").innerHTML = data2;
}).catch(errs => {
    console.log(errs);
});


