

var car_count = Array.from(document.getElementsByClassName('count'));

car_count.forEach(function(index){
	index.addEventListener("change", calck);
});

function calck(){	
	var count=Number(this.value);
	var price= Number(this.parentElement.previousElementSibling.innerText);
	var summ=count*price;
	this.parentElement.nextElementSibling.innerHTML=summ;
		
}

//car_count.addEventListener("click", function(){ alert("Hello World!"); });


/*.forEach.call(like,function(el){
    el.addEventListener('click', function (e) {...})
});*/
//var price = Array.from(document.getElementsByClassName('price'));

/*price.forEach(function(index){
	var p=Number(index.innerText);

	console.log(index.nextSibling);
});*/