const mosaic = document.getElementById('mosaic');
const openCamBtn = document.getElementById('openCamBtn');

// Função para adicionar uma nova webcam ao mosaico
function addWebcam(stream) {
    const videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.autoplay = true;
    videoElement.playsInline = true;
    mosaic.appendChild(videoElement);
}

// Quando o usuário clicar no botão para abrir sua câmera
openCamBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        addWebcam(stream);
    } catch (err) {
        console.error('Erro ao acessar a câmera: ', err);
        alert('Não foi possível acessar sua câmera.');
    }
});
