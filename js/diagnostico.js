document.addEventListener("DOMContentLoaded", () => {
    const topicGrid = document.getElementById("diagnostic-topics");
    const continueButton = document.getElementById("diagnostic-continue");
    const progress = document.getElementById("diagnostic-progress");
    const diagnosticScreen = document.getElementById("diagnostic-screen");
    const loadingScreen = document.getElementById("diagnostic-loading");
    const questionsView = document.getElementById("view-preguntas");
    const diagnosticView = document.getElementById("view-principal");
    const introView = document.getElementById("view-presentacion");

    if (!topicGrid || !continueButton || !progress || !diagnosticScreen ||
        !loadingScreen || !questionsView || !diagnosticView || !introView) {
        return;
    }

    const ratings = new Map();
    const ratingCopy = {
        1: {
            description: "Lo conozco poco y necesito repasarlo.",
            performance: "Bajo"
        },
        2: {
            description: "Lo entiendo en parte, aunque todavía tengo algunas dudas.",
            performance: "Medio"
        },
        3: {
            description: "Lo entiendo y puedo explicarlo con seguridad.",
            performance: "Alto"
        }
    };
    let isConfirming = false;
    let isTransitioning = false;

    function makeRatingCard(topicCard, topicButton) {
        const topicId = topicCard.dataset.topic;
        const topicName = topicButton.textContent.trim();
        const ratingCard = document.createElement("div");
        ratingCard.className = "diagnostic-rating";
        ratingCard.setAttribute("aria-label", topicName);

        const title = document.createElement("h2");
        title.className = "diagnostic-rating-title";
        title.textContent = topicName;

        const bar = document.createElement("div");
        bar.className = "diagnostic-rating-bar";
        bar.setAttribute("role", "group");
        bar.setAttribute("aria-label", `¿Qué tan seguro estás de ${topicName}?`);

        [1, 2, 3].forEach((level) => {
            const option = document.createElement("button");
            option.className = "diagnostic-rating-option";
            option.type = "button";
            option.dataset.level = String(level);
            option.dataset.topic = topicId;
            option.textContent = String(level);
            option.setAttribute("aria-label", `Nivel ${level}: ${ratingCopy[level].performance.toLowerCase()}`);
            option.setAttribute("aria-pressed", "false");
            bar.appendChild(option);
        });

        const question = document.createElement("p");
        question.className = "diagnostic-rating-question";
        question.textContent = "¿Qué tan seguro estás de este tema?";

        const description = document.createElement("p");
        description.className = "diagnostic-rating-description";
        description.textContent = "Elige un nivel en la barra.";

        const performance = document.createElement("p");
        performance.className = "diagnostic-performance";
        performance.setAttribute("aria-live", "polite");
        performance.textContent = "Rendimiento: pendiente";

        ratingCard.append(title, bar, question, description, performance);
        topicCard.replaceChildren(ratingCard);

        const currentRating = ratings.get(topicId);
        if (currentRating) {
            updateRating(topicCard, currentRating, false);
        } else {
            bar.querySelector("button").focus();
        }
    }

    function updateRating(topicCard, level, shouldResetConfirmation = true) {
        const topicId = topicCard.dataset.topic;
        const value = Number(level);
        const copy = ratingCopy[value];
        if (!copy) {
            return;
        }

        ratings.set(topicId, value);
        topicCard.querySelectorAll(".diagnostic-rating-option").forEach((option) => {
            const optionLevel = Number(option.dataset.level);
            const isFilled = optionLevel <= value;
            option.classList.toggle("is-filled", isFilled);
            option.setAttribute("aria-pressed", String(optionLevel === value));
        });

        const description = topicCard.querySelector(".diagnostic-rating-description");
        const performance = topicCard.querySelector(".diagnostic-performance");
        description.textContent = copy.description;
        performance.dataset.level = String(value);
        performance.replaceChildren(
            document.createTextNode("Rendimiento: "),
            Object.assign(document.createElement("strong"), { textContent: copy.performance })
        );

        progress.textContent = `Temas calificados: ${ratings.size} de 8.`;
        continueButton.disabled = ratings.size === 0;

        if (shouldResetConfirmation && isConfirming) {
            isConfirming = false;
            continueButton.textContent = "Continuar";
            continueButton.classList.remove("is-confirming");
        }
    }

    topicGrid.addEventListener("click", (event) => {
        if (isTransitioning) {
            return;
        }

        const topicButton = event.target.closest(".diagnostic-topic");
        if (topicButton && topicGrid.contains(topicButton)) {
            makeRatingCard(topicButton.closest(".diagnostic-topic-card"), topicButton);
            return;
        }

        const ratingOption = event.target.closest(".diagnostic-rating-option");
        if (!ratingOption || !topicGrid.contains(ratingOption)) {
            return;
        }

        updateRating(ratingOption.closest(".diagnostic-topic-card"), ratingOption.dataset.level);
    });

    continueButton.addEventListener("click", () => {
        if (isTransitioning || ratings.size === 0) {
            return;
        }

        if (!isConfirming) {
            isConfirming = true;
            continueButton.textContent = "¿Seguro?";
            continueButton.classList.add("is-confirming");
            return;
        }

        isTransitioning = true;
        continueButton.disabled = true;
        diagnosticScreen.setAttribute("aria-busy", "true");
        loadingScreen.hidden = false;

        const results = Object.fromEntries(ratings);
        window.thermoLearnPreDiagnosticResults = results;
        window.dispatchEvent(new CustomEvent("thermolearn:pre-diagnostic-complete", {
            detail: { ratings: results }
        }));

        window.setTimeout(() => {
            loadingScreen.hidden = true;
            diagnosticView.classList.remove("active-view");
            diagnosticView.setAttribute("aria-hidden", "true");
            introView.setAttribute("aria-hidden", "true");
            questionsView.classList.add("active-view");
            questionsView.setAttribute("aria-hidden", "false");
            questionsView.querySelector("h1")?.focus();
            diagnosticScreen.removeAttribute("aria-busy");
        }, 1200);
    });
});
