import React from 'react';
import './Ydownloader.css';
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

const Ydownloader = () => {
	return (
		<div className='y-down'>
			<h1 className='heading'>
				<span style={{color: 'red', margin: '5px'}}>YouTube</span>
				<span style={{color: 'green', margin: '5px'}}>Downloader!</span>
			</h1>
			<form onSubmit={onSubmit}>
				<input type='text' id='URL-input' placeholder='paste your link!' />
				<div>
					<input type='button' id='convert-button' className='btn' onClick={download} value='Download Now' />
				</div>
			</form>
		</div>
	);
};
export default Ydownloader;
