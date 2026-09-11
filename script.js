
const messages = [
    "Connecting to Secret Government Server...",
    "Bypassing NASA security...",
    "Downloading classified information...",
    "Analyzing your browser history...",
    "Checking your intelligence level...",
    "Calculating your chances of success...",
    "Almost there...",
    "Preparing the secret..."
];

function startPrank(){

    const button = document.getElementById("revealBtn");
    const loading = document.getElementById("loading");
    const progress = document.getElementById("progress");
    const message = document.getElementById("message");

    button.style.display = "none";
    loading.style.display = "block";

    let percent = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {

        percent += Math.floor(Math.random() * 7) + 3;

        if(percent > 100){
            percent = 100;
        }

        progress.style.width = percent + "%";

        if(
            messageIndex < messages.length &&
            percent >= (messageIndex + 1) * 12
        ){
            message.innerText = messages[messageIndex];
            messageIndex++;
        }

        if(percent >= 100){

            clearInterval(interval);

            message.innerText = "SECRET UNLOCKED.";

            setTimeout(() => {

                document.getElementById("warning").style.display = "block";

                setTimeout(() => {

                    document.getElementById("title").innerText =
                        "🚨 CRITICAL SYSTEM ERROR 🚨";

                    document.getElementById("title")
                        .classList.add("glitch");

                    document.body.classList.add("danger");

                    setTimeout(() => {

                        loading.style.display = "none";

                        document.getElementById("warning")
                            .style.display = "none";

                        document.getElementById("symbol")
                            .style.display = "block";

                        document.getElementById("finalText")
                            .style.display = "block";

                        document.getElementById("again")
                            .style.display = "inline-block";

                    },1500);

                },1500);

            },800);
        }

    },350);
}

