document.addEventListener("DOMContentLoaded", function(){

  //Efekt podlisty
    var dropdownList = document.querySelector(".dropdown");
    var subList = document.querySelector(".dropdown-content");

    function showList(){
        dropdownList.addEventListener("mouseover", function(){
            subList.style.display = "block";
        });

        dropdownList.addEventListener("mouseout", function(){
            subList.style.display = "none";
        });
    }
    showList();


  //Efekt obrazkow
    function photoEffect() {
        var galleryItemOne = document.querySelector(".gallery-item__photoOne");
        var galleryItemTwo = document.querySelector(".gallery-item__photoTwo");
        var galleryTitle = document.querySelectorAll(".gallery-item__title");

        galleryItemOne.addEventListener("mouseover", function(){
            galleryTitle[0].style.display ="none";
        });
        galleryItemOne.addEventListener("mouseout", function(){
            galleryTitle[0].style.display ="block";
        });

        galleryItemTwo.addEventListener("mouseover", function(){
            galleryTitle[1].style.display ="none";
        });
        galleryItemTwo.addEventListener("mouseout", function(){
            galleryTitle[1].style.display ="block";
        });
    }
    photoEffect()

  //slider

    var previous = document.querySelector(".slider-arrow-left");
    var next = document.querySelector(".slider-arrow-right");
    var sliderParts = document.querySelectorAll(".slider-parts li");
    var index = 0;

    function slider(){
        sliderParts[index].classList.add("visible");
        next.addEventListener("click", function(){
            sliderParts[index].classList.remove("visible");
            index += 1;
            if(index >= 3){
                index = 0;
            }
            sliderParts[index].classList.add("visible");
        });

        previous.addEventListener("click", function(){
            sliderParts[index].classList.remove("visible");
            index -= 1;
            if(index < 0){
                index = 2;
            }
            sliderParts[index].classList.add("visible");
        });
    }
    slider();

    //Calculator

    var arrow = document.querySelectorAll(".list_arrow");
    var list = document.querySelectorAll(".list_panel li");
    var label = document.querySelectorAll(".list_label");
    var chairChosen = document.querySelector(".title");
    var colorChosen = document.querySelector(".color");
    var patternChosen = document.querySelector(".pattern");
    var transportChosen = document.querySelector(".transport");
    var value = document.querySelectorAll(".value");
    var sum = document.querySelector(".sum");
    var transport = document.querySelector('#transport');
    var transportVal = Number(transport.dataset.transportPrice);
    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");
    var summaryPanel = document.querySelector(".summary_panel");
    var clair = document.querySelector("#clair");
    var margarita = document.querySelector("#margarita");
    var selena = document.querySelector("#selena");
    var orderSection = document.querySelector(".order");

    function calculator() {

        for(var i = 0, len = arrow.length; i < len; i++){
            arrow[i].addEventListener("click", function(e){
                e.stopPropagation();
                var listToShow = this.nextSibling.nextSibling;
                if(listToShow.style.display == "block"){
                    listToShow.style.display = "none";
                } else {
                    listToShow.style.display = "block";
                }
                orderSection.addEventListener("click", function(e) {
                    e.stopPropagation();
                if(listToShow.style.display == "block"){
                        listToShow.style.display = "none";
                    }
                });
            });
        }

        for(var i = 0, len = list.length; i < len; i++){
            list[i].addEventListener("click", function(){
                var name = this.innerText;
                var label = this.parentNode.parentNode.children[0];
                var price = Number(this.dataset.price);

                label.innerText = name;
                label.style.color = "#9e9c9e";

                if(label.classList.contains("title_name")){
                    chairChosen.innerText = name;
                    value[0].innerText = price;
                } else if(label.classList.contains("color_name")){
                    colorChosen.innerText = name;
                    value[1].innerText = price;
                    panelLeft.style.height = "200px";
                    panelRight.style.height = "200px";
                    summaryPanel.style.height = "230px";
                    summaryPanel.style.paddingBottom = "30px";
                } else {
                    patternChosen.innerText = name;
                    value[2].innerText = price;
                    panelLeft.style.height = "200px";
                    panelRight.style.height = "200px";
                    summaryPanel.style.height = "230px";
                    summaryPanel.style.paddingBottom = "30px";
                }

                sum.innerText = Number(value[0].innerText) + Number(value[1].innerText) + Number(value[2].innerText) + Number(value[3].innerText) + "zł";


                if(name === "Red"){
                    clair.style.display = "block";
                    clair.style.marginLeft = "38px";
                    margarita.style.display = "none";
                    selena.style.display = "none";
                }  else if (name == "Black") {
                    selena.style.display = "block";
                    selena.style.marginLeft = "0";
                    clair.style.display = "none";
                    margarita.style.display = "none";
                }  else if (name == "Orange") {
                    margarita.style.display = "block";
                    margarita.style.marginLeft = "0";
                    clair.style.display = "none";
                    selena.style.display = "none";
                }
            });

        }


        transport.addEventListener("click", function(){

            if(transport.checked){
                transportChosen.innerText = "Transport";
                value[3].innerText = transportVal;
                panelLeft.style.height = "200px";
                panelRight.style.height = "200px";
                summaryPanel.style.height = "230px";
                summaryPanel.style.paddingBottom = "30px";
            } else {
                transportChosen.innerText = "";
                value[3].innerText = "";
            }

            sum.innerText = Number(value[0].innerText) + Number(value[1].innerText) + Number(value[2].innerText) + Number(value[3].innerText) + "zł";

        });
    }
    calculator();

//Form validation
    var contactForm = document.querySelector("form");
    var formName = document.querySelector('input[name="name"]');
    var formEmail = document.querySelector('input[name="email"]');
    var formAgree = document.querySelectorAll('.checkbox input[type="checkbox"]');

    function formValidation() {
        contactForm.addEventListener("submit", function(e){
            var nameVal = formName.value;
            var emailVal = formEmail.value;
            var wrongName = "";
            var wrongEmail = "";
            var notAgreed = "";

            if(nameVal.length < 5) {
                e.preventDefault();
                wrongName = "Your name is too short. Please check if you put your name correctly";
            }

            if(emailVal.search("@") === -1){
                e.preventDefault();
                wrongEmail = "Your email is incorrect - missing @";
            }

            if(!formAgree[1].checked) {
                e.preventDefault();
                notAgreed = "Your need to agree to condition";
            }

            if(wrongName !=="" || wrongEmail !=="" || notAgreed !==""){
                alert(wrongName + "\n" + wrongEmail + "\n" + notAgreed);
            }
        });
    }
    formValidation()

});
