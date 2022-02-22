var database = [
	{
		username: "jason",
		password: "olefson253"
	},
    {
		username: "julia",
		password: "grindreel"
	},
    {
		username: "nora",
		password: "dinosaur"
	}
];

var newsfeed = [
    {
    username:"tina",
    timeline:"went to the waterpark"
},
{
    username: "nora",
    timeline:"went to get groceries"
},
{
    username:"michael",
    timeline:"went to dc"
}
    
    ];

    function isUserValid(username, password) {
        for (var i=0; i < database.length; i++) {
            if(database [i].username === username &&
                database[i].password === password) {
                return true;
        }else {
        }
    }
    return false;
    }

    function signIn(username, password) {
    if (isUserValid(username, password)) {
         console.log(newsfeed);
       } else {
        alert("youre password is wrong!");
       }
    }
    var userNamePrompt = prompt("What\'s your username?");
    var passwordPrompt = prompt("What\'s your password?");

    signIn(userNamePrompt, passwordPrompt);