function generateQRCode() {
    const inputText = document.getElementById("inputText").value;
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const downloadButton = document.getElementById("downloadButton");

    if (!inputText) {
        alert("Wprowadź tekst lub URL.");
        return;
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;

    // Tworzymy nowy obraz QR i dodajemy animację
    qrCodeContainer.innerHTML = "";
    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.alt = "QR Code";
    qrCodeImage.onload = () => {
        qrCodeContainer.classList.add("show"); // Dodaje klasę animacji po załadowaniu obrazu
        downloadButton.style.display = "inline-block"; // Wyświetla przycisk pobierania
        downloadButton.href = qrCodeUrl; // Ustawia link pobierania na obraz QR
    };
    
    qrCodeContainer.appendChild(qrCodeImage);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const modeToggle = document.getElementById("modeToggle");
    if (document.body.classList.contains("dark-mode")) {
        modeToggle.textContent = "☀️ Tryb Jasny";
    } else {
        modeToggle.textContent = "🌙 Tryb Ciemny";
    }
}
