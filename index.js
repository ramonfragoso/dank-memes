const readline = require('readline');
const fetch = require('node-fetch');
const opn = require('opn');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

randomMeme = () => {
	rl.question('Generate random meme?(y/n)', (answer) => {
		if(answer === "y") {
			generateRandomMeme();
		} else {
			console.log('goodbye');
		}
		rl.close()
	});
}

generateRandomMeme = () => {

	fetch('https://api.imgflip.com/get_memes',{
        method: "GET"
    })
	.then(res => {return res.json()})
	.then(r => {
		return (r.data.memes[Math.floor(Math.random() * Math.floor(r.data.memes.length-1))].url)
	})
	.then(url => {opn(url)})
}

randomMeme();
