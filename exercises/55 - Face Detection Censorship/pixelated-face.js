const video = document.querySelector(".webcam");
const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d");

const faceDetector = new FaceDetector();

//Write a function that will populate the user's video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 480, height: 360 },
  });
  video.srcObject = stream;
  await video.play();
  console.log(video.videoWidth, video, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces);
}

populateVideo().then(detect);
