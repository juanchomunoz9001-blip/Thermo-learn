document.addEventListener("DOMContentLoaded", () => {
    const btnAction = document.getElementById("btn-action");
    const wave = btnAction.querySelector(".contour-wave");
    const welcomeTitle = document.querySelector(".interactive-title");
    welcomeTitle.setAttribute("aria-label", "ThermoLearn");

    function createTitleShimmerOverlay(text) {
        const overlay = document.createElement("span");
        overlay.className = "title-shimmer-overlay";
        overlay.setAttribute("aria-hidden", "true");
        Array.from(text).forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            overlay.appendChild(span);
        });
        return overlay;
    }

    welcomeTitle.appendChild(createTitleShimmerOverlay("ThermoLearn"));
    
    let clickCount = 0;
    let spamTimer = null;
    let appPhase = "intro";
    let transitionStarted = false;
    let spinnerHandoffTimer = null;
    let welcomeTransitionStarted = false;
    let liquidTransitionStarted = false;
    let welcomeTitleSettled = false;

    function handleWelcomeTitleTransition(event) {
        if (welcomeTitleSettled || event.target !== welcomeTitle ||
            event.propertyName !== "transform" ||
            !document.querySelector(".sandbox-content.state-manifesto")) {
            return;
        }

        welcomeTitleSettled = true;
        welcomeTitle.classList.add("title-shimmer-ready");
        welcomeTitle.removeEventListener("transitionend", handleWelcomeTitleTransition);
    }

    welcomeTitle.addEventListener("transitionend", handleWelcomeTitleTransition);

    btnAction.addEventListener("click", () => {
        if (liquidTransitionStarted) {
            return;
        }

        if (spamTimer !== null) {
            clearTimeout(spamTimer);
        }

        clickCount += 1;

        if (clickCount >= 2) {
            btnAction.classList.remove("shake-button");
            void btnAction.offsetWidth;
            btnAction.classList.add("shake-button");

            spamTimer = setTimeout(() => {
                clickCount = 0;
                spamTimer = null;
            }, 700);
            return;
        }

        wave.classList.remove("active-pulse");
        void wave.offsetWidth;
        wave.classList.add("active-pulse");

        const buttonText = btnAction.querySelector(".button-text");
        if (appPhase === "info" && btnAction.classList.contains("welcome-complete") &&
            buttonText.textContent === "Bienvenido a ThermoLearn") {
            liquidTransitionStarted = true;
            startLiquidTransition();
            spamTimer = setTimeout(() => {
                clickCount = 0;
                spamTimer = null;
            }, 700);
            return;
        }

        if (appPhase === "info" && !welcomeTransitionStarted &&
            document.querySelector(".popup-information-content")) {
            welcomeTransitionStarted = true;
            startWelcomeTransition();
        }

        if (appPhase === "info" && !transitionStarted) {
            transitionStarted = true;
            const buttonBounds = btnAction.getBoundingClientRect();
            const buttonTransform = new DOMMatrixReadOnly(getComputedStyle(btnAction).transform);
            const buttonOffset = `${buttonTransform.m42}px`;
            btnAction.style.boxSizing = "border-box";
            btnAction.style.width = `${buttonBounds.width}px`;
            btnAction.style.height = `${buttonBounds.height}px`;
            btnAction.style.setProperty("--loading-button-offset", buttonOffset);
            btnAction.style.setProperty("--manifesto-button-shift", buttonOffset);
            btnAction.classList.add("loading-active");
            spinnerHandoffTimer = setTimeout(() => {
                btnAction.classList.add("loading-indicator-ready");
            }, 350);
            setTimeout(showInitialPopup, 2500);
        }

        spamTimer = setTimeout(() => {
            clickCount = 0;
            spamTimer = null;

            const sandboxContent = document.querySelector(".sandbox-content");
            const btnText = btnAction.querySelector(".button-text");

            if (appPhase === "intro" && sandboxContent) {
                appPhase = "info"; // Bloqueamos cambio de fase repetido

                // Disparamos la animación de desplazamiento vertical en CSS
                sandboxContent.classList.add("state-manifesto");

                // Transición controlada para cambiar el texto del botón
                if (btnText) {
                    btnText.classList.add("fade-out");
                    
                    // Esperamos que se vuelva invisible (250ms) para inyectar "De acuerdo"
                    setTimeout(() => {
                        btnText.textContent = "De acuerdo";
                        btnText.classList.remove("fade-out");
                    }, 250);
                }

                // Esperamos a que el título y botón terminen de moverse (700ms) para revelar el texto de forma lenta
                setTimeout(() => {
                    if (appPhase === "info") {
                        sandboxContent.classList.add("state-reveal-text");
                    }
                }, 700);

            } else if (appPhase === "info") {
                console.log("Fase de manifiesto completada con éxito. Listo para la siguiente capa.");
            }
        }, 700);
    });

    btnAction.addEventListener("animationend", (event) => {
        if (event.animationName === "shake-horizontal") {
            btnAction.classList.remove("shake-button");
        }
    });

    function showInitialPopup() {
        const view = document.getElementById("view-presentacion");
        const popupOverlay = document.createElement("div");
        popupOverlay.className = "popup-overlay";

        const popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        const popupTitle = document.createElement("h1");
        popupTitle.className = "popup-main-title";
        popupTitle.textContent = "ESPERA";

        const message = document.createElement("p");
        message.className = "popup-secondary-text";
        message.textContent = "Estamos preparando tu bienvenida…";

        popupBox.append(popupTitle, message);
        popupOverlay.appendChild(popupBox);
        view.appendChild(popupOverlay);

        void popupBox.offsetWidth;
        btnAction.classList.remove("loading-active", "loading-indicator-ready");
        if (spinnerHandoffTimer !== null) {
            clearTimeout(spinnerHandoffTimer);
            spinnerHandoffTimer = null;
        }
        popupOverlay.classList.add("pop-active");

        const waitDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 900;
        setTimeout(() => beginTitleTransformation(popupOverlay, popupBox, message), waitDuration);
    }

    function startWelcomeTransition() {
        const buttonBounds = btnAction.getBoundingClientRect();
        const buttonTransform = new DOMMatrixReadOnly(getComputedStyle(btnAction).transform);
        const buttonOffset = `${buttonTransform.m42}px`;

        btnAction.style.boxSizing = "border-box";
        btnAction.style.width = `${buttonBounds.width}px`;
        btnAction.style.height = `${buttonBounds.height}px`;
        btnAction.style.setProperty("--loading-button-offset", buttonOffset);
        btnAction.style.setProperty("--manifesto-button-shift", buttonOffset);
        btnAction.classList.add("loading-active", "loading-green");
        spinnerHandoffTimer = setTimeout(() => {
            btnAction.classList.add("loading-indicator-ready");
        }, 350);

        setTimeout(finishWelcomeTransition, 2500);
    }

    function finishWelcomeTransition() {
        const buttonText = btnAction.querySelector(".button-text");
        const currentWidth = btnAction.getBoundingClientRect().width;
        const currentHeight = btnAction.getBoundingClientRect().height;

        btnAction.classList.remove("loading-active", "loading-indicator-ready");
        if (spinnerHandoffTimer !== null) {
            clearTimeout(spinnerHandoffTimer);
            spinnerHandoffTimer = null;
        }

        buttonText.textContent = "Bienvenido a ThermoLearn";
        btnAction.classList.add("welcome-complete");
        btnAction.style.width = `${currentWidth}px`;
        btnAction.style.height = `${currentHeight}px`;

        const textRange = document.createRange();
        textRange.selectNodeContents(buttonText);
        const textWidth = textRange.getBoundingClientRect().width;
        const targetWidth = Math.ceil(textWidth + 72);
        const overshootWidth = Math.ceil(targetWidth * 1.06);
        const targetMargin = -targetWidth / 2;
        const overshootMargin = -overshootWidth / 2;
        const initialMargin = -currentWidth / 2;

        btnAction.style.marginLeft = `${initialMargin}px`;
        const expansionAnimation = btnAction.animate([
            { width: `${currentWidth}px`, marginLeft: `${initialMargin}px` },
            { width: `${overshootWidth}px`, marginLeft: `${overshootMargin}px` }
        ], {
            duration: 450,
            easing: "cubic-bezier(0.2, 0.9, 0.35, 1.18)",
            fill: "forwards"
        });

        expansionAnimation.onfinish = () => {
            btnAction.style.width = `${overshootWidth}px`;
            btnAction.style.marginLeft = `${overshootMargin}px`;
            expansionAnimation.cancel();

            const reboundAnimation = btnAction.animate([
                { width: `${overshootWidth}px`, marginLeft: `${overshootMargin}px` },
                { width: `${targetWidth}px`, marginLeft: `${targetMargin}px` }
            ], {
                duration: 400,
                easing: "cubic-bezier(0.25, 0.8, 0.3, 1)",
                fill: "forwards"
            });

            reboundAnimation.onfinish = () => {
                btnAction.style.width = `${targetWidth}px`;
                btnAction.style.marginLeft = `${targetMargin}px`;
                reboundAnimation.cancel();
            };
        };
    }

    function startLiquidTransition() {
        const introView = document.getElementById("view-presentacion");
        const homeView = document.getElementById("view-principal");
        const buttonBounds = btnAction.getBoundingClientRect();
        const buttonStyle = getComputedStyle(btnAction);
        const surface = document.createElement("div");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        welcomeTitle.classList.remove("title-shimmer-ready");
        surface.className = "liquid-transition-surface";
        surface.style.backgroundColor = buttonStyle.backgroundColor;
        surface.style.left = `${buttonBounds.left}px`;
        surface.style.top = `${buttonBounds.top}px`;
        surface.style.width = `${buttonBounds.width}px`;
        surface.style.height = `${buttonBounds.height}px`;
        surface.style.borderRadius = buttonStyle.borderRadius;
        document.body.appendChild(surface);
        void surface.offsetWidth;
        btnAction.classList.add("liquid-transitioning");

        if (reduceMotion) {
            surface.style.left = "0";
            surface.style.top = "0";
            surface.style.width = "100vw";
            surface.style.height = "100vh";
            surface.style.borderRadius = "0";
            surface.style.opacity = "0";
            void surface.offsetWidth;

            const coverAnimation = surface.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 160,
                easing: "ease-out",
                fill: "forwards"
            });
            coverAnimation.onfinish = () => {
                showHomeUnderSurface(introView, homeView);
                fadeSurfaceOut(surface);
            };
            return;
        }

        const centerX = buttonBounds.left + buttonBounds.width / 2;
        const centerY = buttonBounds.top + buttonBounds.height / 2;
        const farthestCorner = Math.max(
            Math.hypot(centerX, centerY),
            Math.hypot(window.innerWidth - centerX, centerY),
            Math.hypot(centerX, window.innerHeight - centerY),
            Math.hypot(window.innerWidth - centerX, window.innerHeight - centerY)
        );
        const coverDiameter = farthestCorner * 2 + 24;
        const frameAt = (progress, radius) => {
            const width = buttonBounds.width + (coverDiameter - buttonBounds.width) * progress;
            const height = buttonBounds.height + (coverDiameter - buttonBounds.height) * progress;
            return {
                left: `${centerX - width / 2}px`,
                top: `${centerY - height / 2}px`,
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: radius
            };
        };

        const liquidAnimation = surface.animate([
            {
                left: `${buttonBounds.left}px`,
                top: `${buttonBounds.top}px`,
                width: `${buttonBounds.width}px`,
                height: `${buttonBounds.height}px`,
                borderRadius: buttonStyle.borderRadius,
                offset: 0,
                easing: "cubic-bezier(0.2, 0.8, 0.25, 1)"
            },
            {
                ...frameAt(0.14, "48% 52% 66% 34% / 56% 40% 60% 44%"),
                offset: 0.2,
                easing: "cubic-bezier(0.2, 0.7, 0.25, 1)"
            },
            {
                ...frameAt(0.52, "36% 64% 44% 56% / 60% 38% 62% 40%"),
                offset: 0.52,
                easing: "cubic-bezier(0.3, 0.7, 0.25, 1)"
            },
            {
                ...frameAt(0.84, "55% 45% 58% 42% / 46% 58% 42% 54%"),
                offset: 0.82,
                easing: "cubic-bezier(0.3, 0.8, 0.3, 1)"
            },
            frameAt(1, "50% 50% 48% 52% / 52% 48% 52% 48%")
        ], {
            duration: 900,
            easing: "cubic-bezier(0.2, 0.8, 0.25, 1)",
            fill: "forwards"
        });

        liquidAnimation.onfinish = () => {
            showHomeUnderSurface(introView, homeView);
            fadeSurfaceOut(surface);
        };
    }

    function showHomeUnderSurface(introView, homeView) {
        homeView.classList.add("active-view");
        homeView.setAttribute("aria-hidden", "false");
        introView.classList.remove("active-view");
        introView.setAttribute("aria-hidden", "true");
    }

    function fadeSurfaceOut(surface) {
        const fadeAnimation = surface.animate([
            {
                opacity: 1,
                borderRadius: "50% 50% 48% 52% / 52% 48% 52% 48%"
            },
            {
                opacity: 0,
                borderRadius: "46% 54% 52% 48% / 48% 52% 48% 52%"
            }
        ], {
            duration: 350,
            easing: "ease-in-out",
            fill: "forwards"
        });
        fadeAnimation.onfinish = () => surface.remove();
    }

    function beginTitleTransformation(popupOverlay, popupBox, message) {
        const sandboxContent = document.querySelector(".sandbox-content");
        const originalTitle = sandboxContent.querySelector(".interactive-title");
        const manifesto = sandboxContent.querySelector(".manifesto-container");
        const letters = Array.from("ESPERA", (letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            return span;
        });

        message.remove();
        originalTitle.classList.remove("title-shimmer-ready");
        originalTitle.style.opacity = "0";
        originalTitle.setAttribute("aria-label", "ESPERA");
        originalTitle.replaceChildren(...letters, createTitleShimmerOverlay("ESPERA"));
        manifesto.classList.add("manifesto-morphing-out");

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const duration = reduceMotion ? 1 : 320;
        const popupTransform = getComputedStyle(popupBox).transform;
        const popupAnimation = popupBox.animate([
            { opacity: 1, transform: popupTransform },
            { opacity: 0, transform: `${popupTransform} scale(0.97)` }
        ], { duration, easing: "ease-in", fill: "forwards" });
        const titleAnimation = originalTitle.animate(
            [{ opacity: 0, filter: "blur(3px)" }, { opacity: 1, filter: "blur(0)" }],
            { duration: reduceMotion ? 1 : 420, easing: "ease-out", fill: "forwards" }
        );

        Promise.all([popupAnimation.finished, titleAnimation.finished]).then(() => {
            originalTitle.style.opacity = "";
            originalTitle.classList.add("title-shimmer-ready");
            popupOverlay.remove();
            showInformationContent(sandboxContent);
        });
    }

    function showInformationContent(sandboxContent) {
        const floatingWindow = document.querySelector(".floating-window");
        const underline = sandboxContent.querySelector(".title-underline");
        const content = document.createElement("div");

        content.className = "popup-information-content";
        content.appendChild(createInformationContent());
        floatingWindow.appendChild(content);

        function updateContentBounds() {
            const windowBounds = floatingWindow.getBoundingClientRect();
            const lineBounds = underline.getBoundingClientRect();
            const buttonBounds = btnAction.getBoundingClientRect();
            const contentTop = Math.max(0, lineBounds.bottom - windowBounds.top + 12);
            const contentBottom = Math.max(12, windowBounds.bottom - buttonBounds.top + 12);

            content.style.top = `${contentTop}px`;
            content.style.bottom = `${contentBottom}px`;
        }

        updateContentBounds();
        window.addEventListener("resize", updateContentBounds);
        content.style.visibility = "hidden";
        void content.offsetHeight;
        content.style.visibility = "visible";
        content.classList.add("information-visible");
    }

    function createInformationContent() {
        const fragment = document.createDocumentFragment();
        const introduction = document.createElement("p");
        introduction.className = "welcome-lead";
        const introductionEmphasis = document.createElement("strong");
        introductionEmphasis.textContent = "Queremos brindarte la mejor calidad educativa.";
        introduction.appendChild(introductionEmphasis);
        fragment.appendChild(introduction);

        const explanation = document.createElement("p");
        explanation.className = "welcome-description";
        explanation.textContent = "Por lo tanto, necesitamos que respondas las siguientes preguntas con total sinceridad. Esto nos permitirá personalizar tu experiencia según tus conocimientos previos sobre los temas que vas a ver en este curso.";
        fragment.appendChild(explanation);

        const heading = document.createElement("h2");
        heading.className = "welcome-section-title";
        const headingEmphasis = document.createElement("strong");
        headingEmphasis.textContent = "¿Qué vas a encontrar aquí?";
        heading.appendChild(headingEmphasis);
        fragment.appendChild(heading);

        const list = document.createElement("ul");
        list.className = "welcome-feature-list";
        [
            "Contenido textual dinámico.",
            "Videos educativos de apoyo.",
            "Lecciones, subtemas y retos interactivos.",
            "Pruebas para evaluar y contrastar tus conocimientos."
        ].forEach((itemText) => {
            const item = document.createElement("li");
            item.className = "welcome-feature-item";
            item.textContent = itemText;
            list.appendChild(item);
        });
        fragment.appendChild(list);

        const closing = document.createElement("p");
        closing.className = "welcome-note";
        const closingEmphasis = document.createElement("em");
        closingEmphasis.textContent = "Ten en cuenta que este curso es completamente gratuito, no tiene ni tendrá ningún costo monetario. ¡Esperamos que disfrutes tu estadía!";
        closing.appendChild(closingEmphasis);
        fragment.appendChild(closing);

        return fragment;
    }

});
