//TT Video Downloader
//the whole thing (yup, only one file)

function getVideoURLforDownload() {
    document.querySelectorAll(identifyVideoContainer_class,'[id^="xgwrapper"]').forEach(item => {
        var videoId_split = item.getAttribute("id").split("-");
        var videoId_ext = videoId_split[videoId_split.length-1];
        var ttrawlink = metavideo.replace("_VIDEO-ID",videoId_ext);
        alert(redirectingdownloadinitmsg.replace("_ID_",videoId_ext));
        window.location.replace(ttrawlink);
    });
}
