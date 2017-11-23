const localStorage = window.localStorage;

function storedata(data){
	localStorage.setItem("clickedevent",JSON.stringify(data));
}

function retrievedata(){
	var localdata = JSON.parse(localStorage.getItem("clickedevent"));
	return localdata;
}

function cleardata(){
	localStorage.removeItem("clickedevent");
}