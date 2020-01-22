import React from 'react';
import './App.css';

function download() {
	document.getElementById('convert-button');
	var URLinput = document.getElementById('URL-input');
	sendURL(URLinput.value);
}
function sendURL(URL) {
	window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

function App() {
	return (
		<div className='App'>
			<h1 className='heading'>Dami YouTube Downloader !</h1>
			<input id='URL-input' placeholder='Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q' />
			<button id='convert-button' onClick={download}>
				Download
			</button>
		</div>
	);
}

export default App;
