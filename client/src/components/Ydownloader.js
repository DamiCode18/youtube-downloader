import React, {Component} from 'react';
import './Ydownloader.css';
// import axios from 'axios';

function sendURL(URL) {
	let link = 'http://localhost:5000' || 'https://y-downloader.herokuapp.com';
	if (!URL) {
		// Do nothing!!!!
	} else {
		window.location.href = `${link}/download?URL=${URL}`;
	}
}
let btn, URLinput;
class Ydownloader extends Component {
	onSubmit = (e) => {
		e.preventDefault();
		btn = document.getElementById('convert-button');
		URLinput = document.getElementById('URL-input');

		sendURL(URLinput.value);
	};

	render() {
		return (
			<div className='y-down'>
				<h1 className='heading'>
					<span style={{color: 'red', margin: '5px'}}>YouTube</span>
					<span style={{color: 'green', margin: '5px'}}>Downloader!</span>
				</h1>
				<form onSubmit={this.onSubmit}>
					<input type='text' id='URL-input' placeholder='paste your link!' />
					<div>
						<input type='submit' id='convert-button' className='btn' value='Download Now' />
					</div>
				</form>
			</div>
		);
	}
}
export default Ydownloader;
