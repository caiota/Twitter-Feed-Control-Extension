var playLoop = null;
let VIDEO = {
	PLAY_VIDEO(videoElementh) {
		if (videoElementh instanceof HTMLVideoElement && DOCUMENTO_PRONTO==true) {
			videoElementh.play();
			VIDEO_PLAYING = videoElementh;
			CAN_FORCE_PLAY = true;
			if (!playLoop) {
				playLoop = setInterval(CheckIfPlaying, 500);
			}
		}
	},
	PAUSE_VIDEO(videoElementh) {
		if (videoElementh instanceof HTMLVideoElement && !videoElementh.paused) {
			videoElementh.pause();
			VIDEO_PLAYING = null;
			clearInterval(playLoop);
			playLoop = null;
		}
	},
	VOLUME_UP() {
		if (VIDEO_PLAYING) {
			VIDEO_PLAYING.volume = Math.min(1, VIDEO_PLAYING.volume + 0.1);
		}
	},
	VOLUME_DOWN() {
		if (VIDEO_PLAYING) {
			VIDEO_PLAYING.volume = Math.max(0, VIDEO_PLAYING.volume - 0.1);
		}
	},
	SEEK_LEFT() {
		try {
			if (VIDEO_PLAYING) {
				VIDEO_PLAYING.currentTime = Math.max(0, VIDEO_PLAYING.currentTime - 3);
			}
		} catch (e) {
			VIDEO_PLAYING = null;
		}
	},
	SEEK_RIGHT() {
		try {
			if (VIDEO_PLAYING) {
				VIDEO_PLAYING.currentTime = Math.min(VIDEO_PLAYING.duration, VIDEO_PLAYING.currentTime + 3);
			}
		} catch (e) {
			VIDEO_PLAYING = null;
		}
	},
	PLAY_PAUSE(status) {
		if (VIDEO_PLAYING&&DOCUMENTO_PRONTO==true) {
			if (status) {
				VIDEO_PLAYING.play();
			} else {
				VIDEO_PLAYING.pause();
			}
		}
	}
};