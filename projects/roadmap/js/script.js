// Wait for Mermaid SVG
function initRoadmapFeatures() {
    const svg = document.querySelector("#roadmap svg");
    if (!svg) return;

    // Pan & zoom
    svgPanZoom(svg, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.5,
        maxZoom: 2
    });

    const nodes = svg.querySelectorAll(".node");
    const modal = document.getElementById("nodeModal");
    const modalBody = document.getElementById("modalBody");
    const spanClose = document.querySelector(".close");

    nodes.forEach(node => {
        const title = node.querySelector("title");
        if (!title) return;

        node.addEventListener("mouseenter", e => {
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerHTML = title.textContent.replace(/\n/g, "<br>");

            const text = title.textContent.toLowerCase();
            if (text.includes("developer") && !text.includes("game")) tooltip.style.backgroundColor = "#4f92ff";
            else if (text.includes("game developer")) tooltip.style.backgroundColor = "#9b59b6";
            else if (text.includes("data")) tooltip.style.backgroundColor = "#2ecc71";
            else if (text.includes("mentor") || text.includes("researcher")) tooltip.style.backgroundColor = "#e67e22";
            else tooltip.style.backgroundColor = "rgba(0,0,0,0.85)";

            document.body.appendChild(tooltip);
            tooltip.classList.add("show");

            node.addEventListener("mousemove", ev => {
                tooltip.style.left = `${ev.pageX + 10}px`;
                tooltip.style.top = `${ev.pageY + 10}px`;
            });

            node.addEventListener("mouseleave", () => {
                tooltip.classList.remove("show");
                setTimeout(() => tooltip.remove(), 200);
            }, { once: true });

            // Click opens modal
            node.addEventListener("click", () => {
                modalBody.innerHTML = `<h2>${title.textContent}</h2><p>More details or portfolio link can go here.</p>`;
                modal.style.display = "block";
            });
        });
    });

    spanClose.onclick = () => modal.style.display = "none";
    window.onclick = e => { if(e.target == modal) modal.style.display = "none"; };
}

function waitForMermaidSVG() {
    const svg = document.querySelector("#roadmap svg");
    if (svg && !svg.dataset.init) {
        svg.dataset.init = true;
        initRoadmapFeatures();
    } else setTimeout(waitForMermaidSVG, 100);
}

document.addEventListener("DOMContentLoaded", waitForMermaidSVG);