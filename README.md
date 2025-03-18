# TTJSDownloader

A TikTok Video Downloader written in pure javascript in only one file that runs on the tiktok website. 
(yup, only one file)

It will redirect you to the tiktok CDN video url of the video the user is currently on.

TAMPERMONKEY SUPPORT COMING SOON

**WORKS ONLY ON CHROME AND FIREFOX**
*Opera might work idk. If someone can test it and submit an issue I would appreciate that*

My current method to get the video on the CDN is [okdargy's fxtiktok service.](https://tfxktok.com/) (their github repository is okdargy/fxTikTok.)

The code is subject to change as things like tiktok updating their API happen.

## How to use
Go to tiktok.com

Go to any video you'd want to download, or you can just stay in the For You page and leave a video running.

Next,

Simply copy and paste the code into your browser's dev console or paste the code into the search bar with "javascript:" at the start.

run **getVideoURLforDownload()** in the dev console or by "javascript:" in the search bar

if you're using the automatic version of the script, you don't need to run the function and it'll do it for you. (make sure you've selected your video first)

## Requirements


Chrome or Firefox

A stable and good enough internet connection.
