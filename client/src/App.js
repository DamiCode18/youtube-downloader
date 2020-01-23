import React from 'react';
import './App.css';

function onSubmit(e) {
	e.preventDefault();
}
function download(e) {
	var btn = document.getElementById('convert-button');
	var URLinput = document.getElementById('URL-input');
	
	sendURL(URLinput.value);
}
function sendURL(URL) {
	window.location.href = `http://localhost:5000/download?URL=${URL}`;
}

function App() {
	return (
		<div className='App'>
			<h1 className='heading'>Dami YouTube Downloader !</h1>
			<form onSubmit={onSubmit}>
				<input id='URL-input' placeholder='Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q' />
				<input type='button' id='convert-button' class='btn btn-primary' onClick={download} value='Download' />
			</form>
		</div>
	);
}

export default App;
