let cont = 0

Function regidterLogi(){
	let login = localStorage.getItem("login")
	if(login === null){
		localStorage.getItem("login","icet2024")
		localStorage.getItem("Password","icet2024")
	}
		
}