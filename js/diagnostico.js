document.addEventListener("DOMContentLoaded", () => {
    const topicsContainer = document.getElementById("diagnostic-topics");
    const continueButton = document.getElementById("diagnostic-continue");
    const progress = document.getElementById("diagnostic-progress");
    const loading = document.getElementById("diagnostic-loading");
    const diagnosticScreen = document.getElementById("diagnostic-screen");
    const questionsScreen = document.getElementById("questions-screen");
    const curriculum = window.thermoLearnCurriculum || [];

    if (!topicsContainer || !continueButton || !progress || !loading ||
        !diagnosticScreen || !questionsScreen || curriculum.length === 0) {
        return;
    }

    const levels = [
        { value: 1, name: "Bajo", feedback: "Aún estoy empezando a comprenderlo." },
        { value: 2, name: "Medio", feedback: "Comprendo algunas ideas de este subtema." },
        { value: 3, name: "Alto", feedback: "Comprendo bien este subtema." }
    ];
    const subtopicCount = curriculum.reduce((total, theme) => total + theme.subtopics.length, 0);
    const ratings = new Map();
    let confirmTimer = null;
    let isSubmitting = false;

    function updateThemeStatus(theme, themeCard, statusText) {
        const ratedSubtopics = theme.subtopics.filter((subtopic) => ratings.has(subtopic.id));
        const ratedCount = ratedSubtopics.length;
        const toggle = themeCard.querySelector(".diagnostic-theme-toggle");

        if (ratedCount < theme.subtopics.length) {
            themeCard.dataset.status = "pending";
            statusText.textContent = `${ratedCount}/${theme.subtopics.length} subtemas`;
            toggle.setAttribute("aria-label", `${theme.name}: ${ratedCount} de ${theme.subtopics.length} subtemas autoevaluados`);
            return;
        }

        const percentage = Math.round(
            ratedSubtopics.reduce((sum, subtopic) => sum + ratings.get(subtopic.id), 0) /
            (theme.subtopics.length * 3) * 100
        );
        const color = percentage < 50 ? "red" : percentage < 80 ? "yellow" : "green";
        themeCard.dataset.status = color;
        themeCard.dataset.percentage = String(percentage);
        statusText.textContent = `Autopercepción ${percentage}%`;
        toggle.setAttribute("aria-label", `${theme.name}: autopercepción ${percentage} por ciento`);
    }

    function updateProgress() {
        const ratedCount = ratings.size;
        const questionCount = [...ratings.values()].reduce((sum, level) => sum + level, 0);
        continueButton.disabled = ratedCount === 0 || isSubmitting;
        progress.textContent = ratedCount === 0
            ? "Califica al menos un subtema para continuar."
            : `${ratedCount} de ${subtopicCount} subtemas autoevaluados · ${questionCount} preguntas se prepararán.`;
    }

    function selectLevel(theme, themeCard, statusText, subtopic, selectedLevel, selectedButton, ratingGroup) {
        ratings.set(subtopic.id, selectedLevel.value);
        subtopic.card.dataset.level = String(selectedLevel.value);
        ratingGroup.querySelectorAll(".diagnostic-rating-option").forEach((option) => {
            option.setAttribute("aria-checked", String(option === selectedButton));
        });

        subtopic.feedback.textContent = selectedLevel.feedback;
        subtopic.performance.textContent = `Rendimiento: ${selectedLevel.name}`;
        subtopic.card.querySelector(".diagnostic-subtopic-rating")?.setAttribute(
            "aria-label",
            `${subtopic.name}: ${selectedLevel.value}, ${selectedLevel.name}`
        );
        updateThemeStatus(theme, themeCard, statusText);
        updateProgress();
    }

    function createSubtopicCard(theme, themeCard, statusText, subtopic) {
        const card = document.createElement("article");
        card.className = "diagnostic-subtopic-card";
        card.dataset.subtopic = subtopic.id;

        const heading = document.createElement("div");
        heading.className = "diagnostic-subtopic-heading";
        const name = document.createElement("h3");
        name.textContent = subtopic.name;
        const curriculumLevel = document.createElement("span");
        curriculumLevel.className = `curriculum-level curriculum-level-${subtopic.level.toLowerCase()}`;
        curriculumLevel.textContent = subtopic.level;
        heading.append(name, curriculumLevel);

        const question = document.createElement("p");
        question.className = "diagnostic-question";
        question.textContent = "¿Qué tanto comprendes este subtema?";

        const rating = document.createElement("div");
        rating.className = "diagnostic-rating diagnostic-subtopic-rating";
        rating.setAttribute("role", "radiogroup");
        rating.setAttribute("aria-label", `Autoevaluación: ${subtopic.name}`);

        const feedbackRow = document.createElement("div");
        feedbackRow.className = "diagnostic-feedback";
        const feedback = document.createElement("span");
        feedback.className = "diagnostic-feedback-text";
        feedback.textContent = "Elige un nivel para este subtema.";
        const performance = document.createElement("span");
        performance.className = "diagnostic-performance";
        performance.textContent = "Rendimiento: —";
        feedbackRow.append(feedback, performance);

        levels.forEach((level, index) => {
            const option = document.createElement("button");
            option.className = "diagnostic-rating-option";
            option.type = "button";
            option.dataset.level = String(level.value);
            option.setAttribute("role", "radio");
            option.setAttribute("aria-checked", "false");
            option.setAttribute("aria-label", `${level.value}, ${level.name}`);
            option.title = `${level.value} · ${level.name}`;
            option.textContent = String(level.value);
            option.addEventListener("click", () => {
                selectLevel(theme, themeCard, statusText, { ...subtopic, card, feedback, performance, name: subtopic.name }, level, option, rating);
            });
            option.addEventListener("keydown", (event) => {
                let nextIndex = index;
                if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % levels.length;
                else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index + levels.length - 1) % levels.length;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = levels.length - 1;
                else return;
                event.preventDefault();
                const nextOption = rating.querySelector(`[data-level="${levels[nextIndex].value}"]`);
                nextOption.focus();
                selectLevel(theme, themeCard, statusText, { ...subtopic, card, feedback, performance, name: subtopic.name }, levels[nextIndex], nextOption, rating);
            });
            rating.appendChild(option);
        });

        card.append(heading, question, rating, feedbackRow);
        return card;
    }

    function renderCurriculum() {
        curriculum.forEach((theme) => {
            const card = document.createElement("article");
            card.className = "diagnostic-theme-card";
            card.dataset.theme = theme.id;
            card.dataset.status = "pending";

            const toggle = document.createElement("button");
            toggle.className = "diagnostic-theme-toggle";
            toggle.type = "button";
            toggle.setAttribute("aria-expanded", "false");
            const name = document.createElement("span");
            name.className = "diagnostic-theme-name";
            name.textContent = theme.name;
            const count = document.createElement("span");
            count.className = "diagnostic-theme-count";
            count.textContent = `${theme.subtopics.length} subtemas`;
            const statusText = document.createElement("span");
            statusText.className = "diagnostic-theme-status";
            statusText.textContent = `0/${theme.subtopics.length} subtemas`;
            const caret = document.createElement("span");
            caret.className = "diagnostic-theme-caret";
            caret.setAttribute("aria-hidden", "true");
            caret.textContent = "⌄";
            toggle.append(name, count, statusText, caret);

            const subtopics = document.createElement("div");
            subtopics.className = "diagnostic-subtopics";
            subtopics.hidden = true;
            theme.subtopics.forEach((subtopic) => {
                subtopics.appendChild(createSubtopicCard(theme, card, statusText, subtopic));
            });
            toggle.addEventListener("click", () => {
                const expanded = toggle.getAttribute("aria-expanded") !== "true";
                toggle.setAttribute("aria-expanded", String(expanded));
                subtopics.hidden = !expanded;
                card.classList.toggle("is-expanded", expanded);
            });

            card.append(toggle, subtopics);
            topicsContainer.appendChild(card);
        });
    }

    renderCurriculum();

    continueButton.addEventListener("click", () => {
        if (continueButton.disabled || isSubmitting) return;

        if (continueButton.dataset.confirm !== "true") {
            continueButton.dataset.confirm = "true";
            continueButton.textContent = "¿Seguro?";
            progress.textContent = "Vuelve a pulsar para pasar a las preguntas diagnósticas.";
            if (confirmTimer !== null) clearTimeout(confirmTimer);
            confirmTimer = setTimeout(() => {
                continueButton.dataset.confirm = "false";
                continueButton.textContent = "Continuar";
                updateProgress();
                confirmTimer = null;
            }, 3000);
            return;
        }

        if (confirmTimer !== null) clearTimeout(confirmTimer);
        isSubmitting = true;
        continueButton.disabled = true;
        loading.hidden = false;
        window.thermoLearnPreDiagnostic = Object.fromEntries(ratings);
        window.renderDiagnosticQuestions?.(window.thermoLearnPreDiagnostic);

        setTimeout(() => {
            diagnosticScreen.hidden = true;
            questionsScreen.hidden = false;
            questionsScreen.setAttribute("aria-hidden", "false");
            questionsScreen.scrollTop = 0;
            loading.hidden = true;
            questionsScreen.focus();
        }, 900);
    });

    updateProgress();
});
