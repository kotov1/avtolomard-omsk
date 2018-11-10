// ico pages video 
var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
                video.classList.add('has-media-controls-hidden');
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0];
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton);
            }
        },

        hideVideoPlayButton: function() {
            video.play();
            $(videoPlayButton).addClass('is-hidden');
            video.classList.remove('has-media-controls-hidden');
            video.setAttribute('controls', 'controls');
        }
	}

videoMethods.renderVideoPlayButton();