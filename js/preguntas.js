(() => {
    const curriculum = window.thermoLearnCurriculum || [];
    const levelNames = {
        1: "Aplicación cotidiana",
        2: "Aplicación lógica",
        3: "Aplicación teórica"
    };
    const bank = window.thermoLearnQuestionBank || {};
    const answers = new Map();
    const cardsById = new Map();
    let renderedQuestions = [];
    let completed = false;
    let confirmTimer = null;

    window.renderDiagnosticQuestions = (subtopicRatings) => {
        const list = document.getElementById("diagnostic-questions");
        const status = document.getElementById("question-bank-status");
        const progress = document.getElementById("question-progress");
        const intro = document.getElementById("question-intro");
        const finishButton = document.getElementById("questions-finish");
        const result = document.getElementById("question-result");
        if (!list || !status || !progress || !intro || !finishButton || !result) return;

        list.replaceChildren();
        answers.clear();
        cardsById.clear();
        renderedQuestions = [];
        completed = false;
        result.hidden = true;
        result.textContent = "";
        finishButton.hidden = true;
        finishButton.disabled = true;
        finishButton.textContent = "Continuar";
        finishButton.classList.remove("question-completed-notice");
        finishButton.closest(".questions-footer")?.classList.remove("is-completed");

        const requestedQuestions = [];
        let totalRequested = 0;
        curriculum.forEach((theme) => {
            theme.subtopics.forEach((subtopic) => {
                const count = Math.max(0, Math.min(3, Number(subtopicRatings?.[subtopic.id]) || 0));
                totalRequested += count;
                const subtopicBank = Array.isArray(bank[subtopic.id]) ? bank[subtopic.id] : [];
                for (let level = 1; level <= count; level += 1) {
                    const question = subtopicBank.find((item) => Number(item.level) === level && isQuestionReady(item));
                    if (question) {
                        requestedQuestions.push({
                            ...question,
                            level,
                            subtopicId: subtopic.id,
                            subtopicName: subtopic.name,
                            themeId: theme.id,
                            themeName: theme.name
                        });
                    }
                }
            });
        });
        renderedQuestions = requestedQuestions;

        curriculum.forEach((theme) => {
            const themeQuestions = requestedQuestions.filter((question) => question.themeId === theme.id);
            if (themeQuestions.length === 0) return;

            const themeGroup = document.createElement("section");
            themeGroup.className = "question-topic-group";
            const themeHeading = document.createElement("h2");
            themeHeading.className = "question-topic-heading";
            themeHeading.textContent = theme.name;

            theme.subtopics.forEach((subtopic) => {
                const subtopicQuestions = themeQuestions.filter((question) => question.subtopicId === subtopic.id);
                if (subtopicQuestions.length === 0) return;

                const subtopicGroup = document.createElement("section");
                subtopicGroup.className = "question-subtopic-group";
                const subtopicHeading = document.createElement("h3");
                subtopicHeading.className = "question-subtopic-heading";
                subtopicHeading.textContent = subtopic.name;
                const cards = document.createElement("div");
                cards.className = "question-topic-cards";

                subtopicQuestions.forEach((question, index) => {
                    const card = createQuestionCard(question, index);
                    cardsById.set(question.id, card);
                    cards.appendChild(card);
                });
                subtopicGroup.append(subtopicHeading, cards);
                themeGroup.appendChild(subtopicGroup);
            });

            themeGroup.prepend(themeHeading);
            list.appendChild(themeGroup);
        });

        const missingCount = totalRequested - requestedQuestions.length;
        intro.textContent = `Tu autoevaluación prepara hasta ${totalRequested} pregunta${totalRequested === 1 ? "" : "s"} según los niveles de tus subtemas.`;
        if (totalRequested === 0) {
            status.textContent = "No hay subtemas calificados para preparar el cuestionario.";
            progress.textContent = "No hay preguntas para responder.";
            return;
        }

        if (missingCount > 0) {
            status.textContent = `El banco contiene ${requestedQuestions.length} de ${totalRequested} preguntas necesarias. Faltan ${missingCount} por añadir antes de habilitar la calificación.`;
        } else {
            status.textContent = "Selecciona una respuesta en cada pregunta. Tus respuestas se procesan localmente en esta sesión.";
        }

        progress.textContent = requestedQuestions.length > 0
            ? `0 de ${requestedQuestions.length} respuestas seleccionadas.`
            : "Aún no hay preguntas cargadas para los subtemas calificados.";
        finishButton.hidden = requestedQuestions.length === 0 || missingCount > 0;
        updateProgress();
    };

    function isQuestionReady(question) {
        return Boolean(
            question &&
            typeof question.id === "string" &&
            question.id.length > 0 &&
            typeof question.prompt === "string" &&
            question.prompt.trim() &&
            Array.isArray(question.options) &&
            question.options.length === 4 &&
            question.options.every((option) => option && option.id && typeof option.text === "string" && option.text.trim()) &&
            question.options.some((option) => option.id === question.correctOption)
        );
    }

    function createQuestionCard(question, index) {
        const card = document.createElement("article");
        card.className = "question-card";

        const heading = document.createElement("div");
        heading.className = "question-card-heading";
        const level = document.createElement("span");
        level.className = `question-level question-level-${question.level}`;
        level.textContent = `Pregunta ${question.level} · ${levelNames[question.level]}`;
        heading.appendChild(level);

        const prompt = document.createElement("h4");
        prompt.className = "question-prompt";
        prompt.id = `question-prompt-${question.id}-${index + 1}`;
        prompt.textContent = question.prompt;

        const options = document.createElement("div");
        options.className = "question-options";
        options.setAttribute("role", "radiogroup");
        options.setAttribute("aria-labelledby", prompt.id);

        question.options.forEach((option) => {
            const label = document.createElement("label");
            label.className = "question-option";
            const input = document.createElement("input");
            input.type = "radio";
            input.name = question.id;
            input.value = option.id;
            input.setAttribute("aria-label", `${option.id}. ${option.text}`);
            input.addEventListener("change", () => {
                if (input.checked) {
                    answers.set(question.id, option.id);
                    updateProgress();
                }
            });
            const marker = document.createElement("span");
            marker.className = "question-option-marker";
            marker.textContent = option.id;
            const text = document.createElement("span");
            text.className = "question-option-text";
            text.textContent = option.text;
            label.append(input, marker, text);
            options.appendChild(label);
        });

        const explanation = document.createElement("p");
        explanation.className = "question-explanation";
        explanation.hidden = true;
        explanation.textContent = question.explanation || "";
        card.append(heading, prompt, options, explanation);
        return card;
    }

    function updateProgress() {
        const progress = document.getElementById("question-progress");
        const finishButton = document.getElementById("questions-finish");
        if (!progress || !finishButton || renderedQuestions.length === 0 || completed) return;
        progress.textContent = `${answers.size} de ${renderedQuestions.length} respuestas seleccionadas.`;
        finishButton.disabled = answers.size !== renderedQuestions.length;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const finishButton = document.getElementById("questions-finish");
        const result = document.getElementById("question-result");
        const progress = document.getElementById("question-progress");
        const learnButton = document.getElementById("learn-start");
        const questionsScreen = document.getElementById("questions-screen");
        const learningScreen = document.getElementById("learning-screen");
        const learningList = document.getElementById("learning-topic-list");
        const learningPlaceholder = document.getElementById("learning-placeholder");
        const placeholderTitle = document.getElementById("learning-placeholder-title");
        const topicBack = document.getElementById("learning-topic-back");
        const learningBack = document.getElementById("learning-back");
        if (!finishButton || !result || !progress || !learnButton) return;

        finishButton.addEventListener("click", () => {
            if (finishButton.disabled || completed) return;
            if (finishButton.dataset.confirm !== "true") {
                finishButton.dataset.confirm = "true";
                finishButton.textContent = "¿Seguro?";
                progress.textContent = "Vuelve a pulsar para calificar tus respuestas.";
                if (confirmTimer !== null) clearTimeout(confirmTimer);
                confirmTimer = setTimeout(() => {
                    finishButton.dataset.confirm = "false";
                    finishButton.textContent = "Continuar";
                    updateProgress();
                    confirmTimer = null;
                }, 3000);
                return;
            }

            if (confirmTimer !== null) clearTimeout(confirmTimer);
            completed = true;
            let correctCount = 0;
            renderedQuestions.forEach((question) => {
                const card = cardsById.get(question.id);
                const selectedOption = answers.get(question.id);
                const isCorrect = selectedOption === question.correctOption;
                if (isCorrect) correctCount += 1;
                card.classList.add(isCorrect ? "question-correct" : "question-incorrect");
                card.querySelectorAll("input").forEach((input) => {
                    input.disabled = true;
                    if (input.value === question.correctOption) {
                        input.closest(".question-option")?.classList.add("is-correct-answer");
                    } else if (input.value === selectedOption && !isCorrect) {
                        input.closest(".question-option")?.classList.add("is-wrong-answer");
                    }
                });
                const explanation = card.querySelector(".question-explanation");
                explanation.hidden = !question.explanation;
            });

            result.hidden = false;
            result.textContent = `Resultado de esta sesión: ${correctCount} de ${renderedQuestions.length} respuestas correctas.`;
            progress.textContent = "Cuestionario finalizado.";
            finishButton.disabled = true;
            finishButton.textContent = "Tus respuestas ya fueron calificadas, sube para revisar tus respuestas.";
            finishButton.classList.add("question-completed-notice");
            finishButton.closest(".questions-footer")?.classList.add("is-completed");
            learnButton.disabled = false;
        });

        learnButton.addEventListener("click", () => {
            if (learnButton.disabled || !questionsScreen || !learningScreen || !learningList) return;
            learningList.replaceChildren();
            curriculum.forEach((theme) => theme.subtopics.forEach((subtopic) => {
                const rating = window.thermoLearnPreDiagnostic?.[subtopic.id];
                if (!rating) return;
                const item = document.createElement("li");
                const topicButton = document.createElement("button");
                topicButton.className = "learning-topic-link";
                topicButton.type = "button";
                topicButton.textContent = `${theme.name} · ${subtopic.name} · Autoevaluación: ${rating}/3`;
                topicButton.addEventListener("click", () => {
                    if (!learningPlaceholder || !placeholderTitle) return;
                    placeholderTitle.textContent = `${theme.name} · ${subtopic.name}`;
                    learningList.hidden = true;
                    learningPlaceholder.hidden = false;
                    topicBack?.focus();
                });
                item.appendChild(topicButton);
                learningList.appendChild(item);
            }));
            learningList.hidden = false;
            if (learningPlaceholder) learningPlaceholder.hidden = true;
            questionsScreen.hidden = true;
            questionsScreen.setAttribute("aria-hidden", "true");
            learningScreen.hidden = false;
            learningScreen.setAttribute("aria-hidden", "false");
            learningScreen.focus();
        });

        learningBack?.addEventListener("click", () => {
            if (!questionsScreen || !learningScreen) return;
            learningScreen.hidden = true;
            learningScreen.setAttribute("aria-hidden", "true");
            questionsScreen.hidden = false;
            questionsScreen.setAttribute("aria-hidden", "false");
            questionsScreen.focus();
        });

        topicBack?.addEventListener("click", () => {
            if (!learningList || !learningPlaceholder) return;
            learningPlaceholder.hidden = true;
            learningList.hidden = false;
            learningList.querySelector("button")?.focus();
        });
    });
})();
