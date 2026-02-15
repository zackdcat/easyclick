let clicks = 0;
let startTime = null;
let showingCPS = false;

function CLICK() {
    if (showingCPS) return;

    clicks = clicks + 1;
    document.getElementById("CLICKINGAREATEXT").innerText = clicks;

    if (!startTime) {
        startTime = Date.now();

        setTimeout(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            const cps = (clicks / elapsed).toFixed(1);
            document.getElementById("CLICKINGAREATEXT").innerText = `CPS: ${cps}`;

            showingCPS = true;

            setTimeout(() => {
                clicks = 0;
                startTime = null;
                showingCPS = false;
                document.getElementById("CLICKINGAREATEXT").innerText = "CLICK ME";
            }, 3000);
        }, 5000);
    }
}