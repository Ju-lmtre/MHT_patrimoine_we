// ============================================================================
// 📝 CONFIGURATION DE L'INTENSITÉ DU SON (VERROUILLÉE ET PRÉCISE)
// ============================================================================
const AUDIO_VOLUME = 0.6; // Intensité sonore bloquée de l'application (entre 0.0 et 1.0)

// ============================================================================
// 📝 CONFIGURATION DES TEXTES DE L'APPLICATION (FACILEMENT MODIFIABLE)
// Vous pouvez modifier les textes ci-dessous pour mettre à jour l'application.
//
// 💡 CONSEIL DE MISE EN PAGE :
// Vous pouvez mettre certains mots en gras (font-weight 600) dans les textes
// ci-dessous en les entourant de la balise <strong>, par exemple :
// "Tracer avec <strong>Vazco</strong>..." ou "Bienvenue chez <strong>MHT</strong>..."
// ============================================================================
const APP_TEXTS = {

  // Écran 1 : Accueil / Landing
  welcome: {
    title: "Découvrez l'histoire des Chantiers Navals de Nantes et les métiers qui les ont fait vivre avec <strong>Vazco</strong> !",
    subtitle: "Tout le texte est écrit sur les slides que vous allez faire défiler, une transcription audio est disponible mais optionnelle et peut être activée ou désactivée à votre convenance.",
    button: "Commencer"
  },

  // Écran 2 à 6 : Carrousel d'Introduction Historique (5 slides)
  carousel: [
    {
      text: "<strong style='font-style: italic;'>Bienvenue à la Maison des Hommes et des Techniques</strong>. Ce lieu que vous visitez aujourd'hui a été créé en <strong style='font-style: italic;'>1994</strong> par les anciens travailleurs des chantiers navals eux-mêmes, portés par des années de réflexion et d'engagement pour <strong style='font-style: italic;'>sauvegarder leur histoire</strong>. Vous vous apprêtez à découvrir l'exposition permanente <strong style='font-style: italic;'>Bâtisseurs de navires</strong>, installée au cœur même des anciens bureaux administratifs de l'entreprise Dubigeon.\n\nC'est ici, entre ces murs, que battait le cœur stratégique du chantier...",
      image: "assets/photographies/Bienvenue.png"
    },
    {
      text: "<strong style='font-style: italic;'>Nantes, fin des années 70.</strong> Si vous tendez l’oreille, la ville ne sonne pas du tout comme aujourd’hui. À cette époque, <strong style='font-style: italic;'>le cœur de Nantes bat au rythme de l’acier.</strong> Un battement lourd, puissant, qui résonne de la place du Commerce jusqu’aux ruelles de Chantenay.",
      image: "assets/photographies/Nantes, fin des années 70.png"
    },
    {
      text: "Ici, sur l’île, le paysage est dominé par des monstres de métal : <strong style='font-style: italic;'>les célèbres grues des chantiers navals.</strong> Chaque matin, <strong style='font-style: italic;'>des milliers d’ouvriers en bleu de travail </strong>franchissent les grilles. Une marée humaine qui, depuis des générations, fait vibrer les familles nantaises, les commerces et les bistrots du coin.\n\nDans les cales, on donne naissance à des navires de toutes sortes : <strong style='font-style: italic;'>des cargos, des paquebots, des dragues ou des sous-marins.</strong> La fierté est immense, chacun contribue à sa manière avec tout autant d’importance.",
      image: "assets/photographies/Ici, sur l’île.png"
    },
    {
      text: "<strong style='font-style: italic;'>Mais en ces années 75-80, l'ambiance change.</strong> Le ciel s’assombrit. On parle de crise mondiale, de restructurations, de menaces de fermeture. Alors, dans les ateliers, la solidarité se resserre. On lutte, on crie, on espère. Le chantier, <strong style='font-style: italic;'>ce n'est pas juste un travail, c’est notre vie…\n\n</strong> Pendant des décennies, la Loire a déposé ses boues contre les cales. Les ouvriers, eux, y ont laissé tomber des cordages usés, des éclats d'acier ou encore des gouttes d'huile de moteur. Les pluies ont brassé tout ça dans un fossé oublié, là où personne ne regardait vraiment.",
      image: "assets/photographies/Mais en ces années 75-80.png"
    },
    {
      text: "C’est comme cela qu’est apparu <strong style='font-style: italic;'>Vazco.</strong> Ce petit personnage incarne tout ce que la Navale a fabriqué... au-delà des bateaux.\n\nEt parce qu'il s'est nourri de ces traces, <strong style='font-style: italic;'>il sait tout.</strong> Il a vibré au rythme de chaque outil, de chaque geste. Aujourd'hui, alors que les chantiers s'éveillent à une nouvelle vie, Vazco remonte à la surface. Pas pour eﬀrayer les passants, non. Pour témoigner. Pour vous montrer que bâtir <strong style='font-style: italic;'>un géant des mers</strong> n’est pas l’aﬀaire d’un seul homme, mais d'une <strong style='font-style: italic;'>incroyable chaîne de savoir-faire.",
      image: "assets/photographies/C’est comme cela qu’est apparu Vazco.png"
    }
  ],

  // Écran 7 : Présentation de Vazco
  vazcoIntro: {
    title: "Bonjour à tous, moi c'est Vazco, dit Le Vaseux !",
    text: "Ne vous fiez pas à mon apparence un peu... collante ! Sous ma peau de rouille et de vase, je palpite de toute l'histoire de ce lieu.",
    button: "Découvrir l'histoire de Vazco"
  },

  // Écran 8 : Transition Métamorphose
  vazcoMeta: {
    paragraph1: "Regardez, c'est plus fort que moi : dès que je pense à un métier, mon corps se métamorphose. <strong style='font-style: italic;'>Les souvenirs des anciens employés se réveillent en moi, leurs gestes me reviennent par cœur, et leur fierté me colle à la peau.</strong>",
    paragraph2: "Pour faire naître ces navires, il fallait une véritable armée d'artisans. <strong style='font-style: italic;'>Ouvrez grand vos oreilles, je change de peau pour vous raconter leurs histoires. Vous êtes prêts ?</strong>",
    button: "Suivant"
  },

  // Écran 9 : Menu de sélection des métiers
  menu: {
    title: "Choisi quelle histoire tu veux découvrir...",
    backButton: "Retour présentation Vazco"
  },

  // Écrans des métiers individuels (9 à 24)
  trades: {
    dessinateur: {
      story: "Chut... Écoutez ce calme. Installez-vous, mais faîtes attention à ne pas marcher sur mes plans ! Nous voilà au bureau d'études, au dernier étage. <strong style='font-style: italic;'>Je suis Jean-Pierre, dessinateur industriel.</strong>",
      story2: "Face à moi, <strong style='font-style: italic;'>ma table à dessin inclinée et une feuille blanche.</strong> C’est ici que les navires géants naissent, bien avant de toucher l'eau de la Loire. Approchez-vous de ma table…",
      story3: "Créée par les chantiers de la Loire, <strong style='font-style: italic;'>la « crèche » formait des jeunes dessinateurs et dessinatrices pour l’ensemble de la construction navale française.</strong> Premier au concours d’entrée, je dessinais mal, mais je savais calculer. C’est pour cela que Dubigeon m’a embauché.",
      tip: "Maintenant que vous avez écouté le témoignage de Jean-Pierre, je vous invite à aller voir la deuxième partie de l’exposition au fond de la salle pour découvrir les objets qu’il utilisait ! Et même <strong style='font-style: italic;'>s'installer à son poste de travail !</strong>",
      backgroundImage: "assets/metiers/dessinateur.jpg"
    },
    secretaire: {
      story: "Chantiers Dubigeon, bonjour ? Oui, je vous passe le bureau d’études. Ah, les bureaux... On oublie souvent que sans la paperasse, aucun bateau ne quitte Nantes ! <strong style='font-style: italic;'>Je suis Christianne, secrétaire</strong>, je m’occupe des <strong style='font-style: italic;'>commandes d'acier, des fiches de paie, des plannings de livraison…</strong> Et au-delà de mon métier, je mène une vie d’engagée depuis très jeune.",
      story2: "Le syndicat, ça fait partie de ma vie. Au début du 20e siècle, les syndicats étaient uniquement masculin. Mais petit à petit, à partir de 1920, les femmes ont commencé à les intégrer, notamment <strong style='font-style: italic;'>le syndicat des dames employées du commerce et de l’industrie.</strong>",
      story3: "Nous, <strong style='font-style: italic;'>les femmes du pôle dactylographique</strong> étions en minorité, c’était quand même un milieu d’hommes, mais cela ne nous a pas empêché de nous engager et faire entendre nos revendications. Pour les grèves de 1977, nous nous sommes même regroupées en un<strong style='font-style: italic;'> collectif d’épouses et travailleuses des chantiers</strong>, afin de soutenir le mouvement de nos époux. Nous pouvons donc affirmer avec fierté que les femmes ont eu un rôle important dans l’histoire sociale des chantiers.",
      tip: "Maintenant que vous en savez un peu plus sur l’histoire de Christianne, <strong style='font-style: italic;'>je vous invite à aller voir le reste de l’exposition dans la zone où vous êtes actuellement. </strong>Vous en apprendrez encore plus sur le travail et la vie au chantier !",
      backgroundImage: "assets/metiers/secretaire.jpg"
    },
    soudeur: {
      story: "Ça y est, j’ai relié ma « masse » à mon poste à souder, je sens l'odeur du métal brûlé. Je suis Claude, soudeur en cette année 1975. Je viens tout juste de relever mon masque de protection. Installez-vous avec moi sur le bordée, le temps de reprendre mon souﬄe...",
      story2: "Le chantier, ce n’était pas seulement le travail. C’était aussi toute une vie autour. Le comité d’entreprise organisait des activités, des voyages, des événements. On passait du temps ensemble, même en dehors du travail. On avait vraiment l’impression de faire partie d’une grande famille.",
      story3: " Tout le monde se connaissait, les liens étaient forts. C’est ça qui rendait le quotidien plus supportable, malgré la dureté du métier. Aujourd’hui, ce qui me reste, ce sont surtout ces souvenirs-là.",
      tip: "Maintenant que vous avez écouté le témoignage de Claude, je vous invite à aller voir la deuxième partie de l’exposition au fond de la salle pour découvrir les objets qu’il utilisait et en apprendre plus sur son environnement de travail !",
      backgroundImage: "assets/metiers/soudeur.jpg"
    },
    chaudronnier: {
      story: "Écoutez ce boucan dans lequel on travaille... <strong style='font-style: italic;'>Je suis Michel, chaudronnier.</strong> C'est moi qui cogne sur l'acier pour lui donner sa forme. Posez vos mains sur la pièce de métal avec moi, sentez comme ça vibre...",
      story2: "Au chantier, <strong style='font-style: italic;'>tout était une question de précision.</strong> On travaillait le métal, mais surtout, on travaillait en équipe. Chacun avait son rôle, et il fallait que tout s’imbrique parfaitement. <strong style='font-style: italic;'>Le bruit était constant. Les marteaux, les machines, les coques en construction…</strong>",
      story3: "On s’y habituait. <strong style='font-style: italic;'>C’était notre environnement. On apprenait sur le tas, avec les anciens. Ils nous montraient les gestes, ils corrigeaient, ils transmettaient.</strong> C’est comme ça que le métier se perpétuait. Aujourd’hui, je me dis que ce savoir là, <strong style='font-style: italic;'>c’était une richesse. Pas seulement technique, mais humaine.</strong>",
      tip: "Maintenant que vous avez écouté le témoignage de Michel, <strong style='font-style: italic;'>je vous invite à aller voir la deuxième partie de l’exposition au fond de la salle pour découvrir les objets qu’il utilisait et vivre une expérience audio autour de ceux-ci !</strong>",
      backgroundImage: "assets/metiers/formeur.jpg"
    }
  },

  // Écran 18 : Clôture & fin
  closure: {
    title: "Tu as découvert tous les métiers de Vazco !",
    subtitle: "Vole de tes propres ailes maintenant et <strong style='font-style: italic;'>va explorer l’exposition et manipuler ses objets...</strong>",
    timerLabel: "Retour au début dans"
  }
};

// ============================================================================
// ⚙️ LOGIQUE DE L'APPLICATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- Éléments du DOM ---
  const appViewport = document.getElementById('app-viewport');
  const slidesWrapper = document.getElementById('slides-wrapper');

  // Présentation Vazco (Nouvel écran d'accueil)
  const txtVazcoIntroTitle = document.getElementById('txt-vazco-intro-title');
  const txtVazcoIntroText = document.getElementById('txt-vazco-intro-text');
  const txtVazcoIntroBtn = document.getElementById('txt-vazco-intro-btn');
  const btnVazcoNext = document.getElementById('btn-vazco-next');

  // Métamorphose
  const txtMetaP1 = document.getElementById('txt-meta-p1');
  const txtMetaP2 = document.getElementById('txt-meta-p2');
  const btnBackVazcoMeta = document.getElementById('btn-back-vazco-meta');

  // Menu
  const txtMenuTitle = document.getElementById('txt-menu-title');
  const txtMenuBack = document.getElementById('txt-menu-back');
  const btnBackMeta = document.getElementById('btn-back-meta');
  const btnsMetier = document.querySelectorAll('.btn-metier');

  // Clôture
  const txtClosureTitle = document.getElementById('txt-closure-title');
  const txtClosureSubtitle = document.getElementById('txt-closure-subtitle');
  const txtTimerLabel = document.getElementById('txt-timer-label');
  const btnRestart = document.getElementById('btn-restart');

  // Overlay d'inactivité
  const inactivityOverlay = document.getElementById('inactivity-overlay');
  const btnOverlayYes = document.getElementById('btn-overlay-yes');
  const btnOverlayNo = document.getElementById('btn-overlay-no');

  // --- État de l'application ---
  let currentSlide = 0;
  let currentAudio = null;
  let audioUnlocked = false;

  const state = {
    audioEnabled: true, // Activé par défaut
    completedTrades: {
      dessinateur: false,
      secretaire: false,
      soudeur: false,
      chaudronnier: false
    }
  };

  // Mappage des slides vers les fichiers audio MP3 réels (Slides 0 à 18)
  const SLIDE_AUDIO_MAP = {
    // Présentation de Vazco (Slide 0 - Accueil)
    0: 'assets/Audios/Introduction - Narratrice & VAZCO/Intro (6) VAZCO.MP3',

    // Transition Métamorphose (Slide 1)
    1: 'assets/Audios/Introduction - Narratrice & VAZCO/Intro (7) VAZCO.MP3',

    // Dessinateur (Story 1, 2, 3 + Outro Vazco - Slides 3 à 6)
    3: 'assets/Audios/Dessinateur - JeanPierre/Dessinateur (1).MP3',
    4: 'assets/Audios/Dessinateur - JeanPierre/Dessinateur (2).MP3',
    5: 'assets/Audios/Dessinateur - JeanPierre/Dessinateur (3).MP3',
    6: 'assets/Audios/Dessinateur - JeanPierre/Vazco_Jean-Pierre.wav',

    // Secrétaire (Story 1, 2, 3 + Outro Vazco - Slides 7 à 10)
    7: 'assets/Audios/Secretaire - Christianne/Secretaire (1).MP3',
    8: 'assets/Audios/Secretaire - Christianne/Secretaire (2).MP3',
    9: 'assets/Audios/Secretaire - Christianne/Secretaire (3).MP3',
    10: 'assets/Audios/Secretaire - Christianne/Vazco_Secretaire.wav',

    // Soudeur (Story 1, 2, 3 + Outro Vazco - Slides 11 à 14)
    11: 'assets/Audios/Soudeur - Claude/Soudeur (1).MP3',
    12: 'assets/Audios/Soudeur - Claude/Soudeur (2).MP3',
    13: 'assets/Audios/Soudeur - Claude/Soudeur (3).MP3',
    14: 'assets/Audios/Soudeur - Claude/Vazco_Claude.wav',

    // Chaudronnier (Story 1, 2, 3 + Outro Vazco - Slides 15 à 18)
    15: 'assets/Audios/Chaudronnier - Michel/Chaudronnier (1).MP3',
    16: 'assets/Audios/Chaudronnier - Michel/Chaudronnier (2).MP3',
    17: 'assets/Audios/Chaudronnier - Michel/Chaudronnier (3).MP3',
    18: 'assets/Audios/Chaudronnier - Michel/Vazco_Michel.wav'
  };

  // Déverrouiller le contexte audio sur les appareils mobiles/tablettes
  function unlockAudio() {
    if (audioUnlocked) return;
    const dummy = new Audio();
    dummy.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
    dummy.play()
      .then(() => {
        audioUnlocked = true;
        console.log("Contexte audio déverrouillé avec succès.");
      })
      .catch(err => {
        console.warn("Échec du déverrouillage de l'audio, attente d'interaction :", err);
      });
  }

  // Jouer l'audio correspondant à la slide (avec option de reprise si possible)
  function playAudioForSlide(slideIndex, resumeIfPossible = false) {
    if (resumeIfPossible && currentAudio) {
      if (state.audioEnabled) {
        currentAudio.play().catch(err => {
          console.warn("Lecture audio bloquée :", err);
        });
      }
      return;
    }

    stopAudio(true);

    if (!state.audioEnabled) return;

    const audioFile = SLIDE_AUDIO_MAP[slideIndex];
    if (audioFile) {
      currentAudio = new Audio(audioFile);
      currentAudio.volume = AUDIO_VOLUME; // Verrouiller l'intensité du son
      currentAudio.play().catch(err => {
        console.warn("Lecture audio bloquée (interaction utilisateur requise) :", err);
      });
    }
  }

  // Arrêter ou mettre en pause l'audio en cours de lecture
  function stopAudio(reset = true) {
    if (currentAudio) {
      currentAudio.pause();
      if (reset) {
        currentAudio.currentTime = 0;
        currentAudio = null;
      }
    }
  }

  // Alterner l'état de l'audio (activé / désactivé)
  function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;
    updateSoundIndicators();

    if (state.audioEnabled) {
      playAudioForSlide(currentSlide, true);
    } else {
      stopAudio(false); // Met en pause sans réinitialiser currentTime à 0
    }
  }

  // S'assurer que tous les écrans métiers (slides 3 à 18) possèdent le placeholder sound-indicator
  function setupSoundIndicators() {
    for (let i = 3; i <= 18; i++) {
      const slide = document.getElementById(`slide-${i}`);
      if (slide) {
        const content = slide.querySelector('.slide-content');
        if (content) {
          let indicator = content.querySelector('.sound-indicator');
          if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'sound-indicator';
            const backBtn = content.querySelector('.btn-back');
            if (backBtn && backBtn.nextSibling) {
              content.insertBefore(indicator, backBtn.nextSibling);
            } else {
              content.appendChild(indicator);
            }
          }
        }
      }
    }
  }

  // Mettre à jour l'icône de l'indicateur sonore (Uniquement l'icône, pas de texte ni switch)
  function updateSoundIndicators() {
    document.querySelectorAll('.sound-indicator').forEach(indicator => {
      const iconSrc = state.audioEnabled ? 'assets/icons/sound-high.svg' : 'assets/icons/sound-off.svg';
      const stateText = state.audioEnabled ? 'Son actif' : 'Son désactivé';

      if (state.audioEnabled) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }

      indicator.innerHTML = `
        <img src="${iconSrc}" class="sound-indicator-icon" alt="${stateText}">
      `;
    });
  }

  // --- Initialisation dynamique des textes ---
  function initTexts() {
    txtVazcoIntroTitle.innerHTML = APP_TEXTS.vazcoIntro.title;
    txtVazcoIntroText.innerHTML = APP_TEXTS.vazcoIntro.text;
    txtVazcoIntroBtn.textContent = APP_TEXTS.vazcoIntro.button;

    txtMetaP1.innerHTML = APP_TEXTS.vazcoMeta.paragraph1;
    txtMetaP2.innerHTML = APP_TEXTS.vazcoMeta.paragraph2;

    txtMenuTitle.innerHTML = APP_TEXTS.menu.title;
    txtMenuBack.textContent = APP_TEXTS.menu.backButton;

    // Métiers
    document.getElementById('txt-story-dessinateur').innerHTML = APP_TEXTS.trades.dessinateur.story;
    document.getElementById('txt-story2-dessinateur').innerHTML = APP_TEXTS.trades.dessinateur.story2;
    document.getElementById('txt-story3-dessinateur').innerHTML = APP_TEXTS.trades.dessinateur.story3;
    document.getElementById('txt-tip-dessinateur').innerHTML = APP_TEXTS.trades.dessinateur.tip;

    document.getElementById('txt-story-secretaire').innerHTML = APP_TEXTS.trades.secretaire.story;
    document.getElementById('txt-story2-secretaire').innerHTML = APP_TEXTS.trades.secretaire.story2;
    document.getElementById('txt-story3-secretaire').innerHTML = APP_TEXTS.trades.secretaire.story3;
    document.getElementById('txt-tip-secretaire').innerHTML = APP_TEXTS.trades.secretaire.tip;

    document.getElementById('txt-story-soudeur').innerHTML = APP_TEXTS.trades.soudeur.story;
    document.getElementById('txt-story2-soudeur').innerHTML = APP_TEXTS.trades.soudeur.story2;
    document.getElementById('txt-story3-soudeur').innerHTML = APP_TEXTS.trades.soudeur.story3;
    document.getElementById('txt-tip-soudeur').innerHTML = APP_TEXTS.trades.soudeur.tip;

    document.getElementById('txt-story-chaudronnier').innerHTML = APP_TEXTS.trades.chaudronnier.story;
    document.getElementById('txt-story2-chaudronnier').innerHTML = APP_TEXTS.trades.chaudronnier.story2;
    document.getElementById('txt-story3-chaudronnier').innerHTML = APP_TEXTS.trades.chaudronnier.story3;
    document.getElementById('txt-tip-chaudronnier').innerHTML = APP_TEXTS.trades.chaudronnier.tip;

    // Clôture
    txtClosureTitle.innerHTML = APP_TEXTS.closure.title;
    txtClosureSubtitle.innerHTML = APP_TEXTS.closure.subtitle;
    txtTimerLabel.textContent = APP_TEXTS.closure.timerLabel;

    // Injecter les arrière-plans des métiers depuis la config
    document.querySelectorAll('.slide[data-bg]').forEach(slide => {
      const key = slide.getAttribute('data-bg');
      const tradeConfig = APP_TEXTS.trades[key];
      if (tradeConfig && tradeConfig.backgroundImage) {
        slide.style.backgroundImage = `url('${tradeConfig.backgroundImage}')`;
      }
    });
  }

  // --- Gestion du glissement de diapositive (Slide / Fade Navigation) ---
  function goToSlide(index, transitionType = 'slide') {
    if (index < 0 || index > 19) return;

    // Gérer l'arrêt/démarrage du chrono d'inactivité final de clôture
    if (index === 19) {
      startInactivityTimer();
    } else {
      stopInactivityTimer();
    }

    if (transitionType === 'fade') {
      appViewport.classList.add('fade-out');
      setTimeout(() => {
        slidesWrapper.classList.add('no-transition'); // Désactiver la transition
        currentSlide = index;
        slidesWrapper.style.setProperty('--active-slide', currentSlide);

        // Forcer le reflow du navigateur pour appliquer le transform immédiatement
        void slidesWrapper.offsetWidth;

        slidesWrapper.classList.remove('no-transition'); // Réactiver la transition pour les swipes/flèches

        playAudioForSlide(currentSlide);
        appViewport.classList.remove('fade-out');
        appViewport.classList.add('fade-in');
        setTimeout(() => {
          appViewport.classList.remove('fade-in');
        }, 400);
      }, 300);
    } else {
      currentSlide = index;
      slidesWrapper.style.setProperty('--active-slide', currentSlide);
      playAudioForSlide(currentSlide);
    }

    // Réinitialiser le chrono d'inactivité global à chaque changement d'écran
    resetGlobalInactivityTimer();
  }

  // --- ⏱️ DOUBLE SYSTÈME DE CHRONOMÈTRE & INACTIVITÉ ---

  // A. Chronomètre d'Inactivité de Clôture (10s)
  let inactivityTimer = null;
  let inactivityCountdown = 10;

  function startInactivityTimer() {
    stopInactivityTimer();
    inactivityCountdown = 10;
    updateTimerDisplay();

    inactivityTimer = setInterval(() => {
      inactivityCountdown--;
      updateTimerDisplay();

      if (inactivityCountdown <= 0) {
        stopInactivityTimer();
        resetApp();
        goToSlide(0, 'fade');
      }
    }, 1000);
  }

  function stopInactivityTimer() {
    if (inactivityTimer) {
      clearInterval(inactivityTimer);
      inactivityTimer = null;
    }
  }

  function updateTimerDisplay() {
    const countdownEl = document.getElementById('timer-countdown');
    const progressBar = document.getElementById('timer-progress-bar');

    if (countdownEl) {
      countdownEl.textContent = inactivityCountdown;
    }

    if (progressBar) {
      const percent = (inactivityCountdown / 10) * 100;
      progressBar.style.strokeDasharray = `${percent}, 100`;
    }
  }

  // B. Chronomètre d'Inactivité Générale (1m30s = 90s) & Overlay (10s)
  let globalInactivityTimer = null;
  let globalOverlayTimer = null;
  let inactivityOverlayCountdown = 10;
  const INACTIVITY_DELAY = 90 * 1000; // 1 minute 30 secondes

  function startGlobalInactivityTimer() {
    clearTimeout(globalInactivityTimer);
    globalInactivityTimer = setTimeout(() => {
      triggerInactivityOverlay();
    }, INACTIVITY_DELAY);
  }

  function resetGlobalInactivityTimer() {
    clearTimeout(globalInactivityTimer);
    if (!inactivityOverlay.classList.contains('active')) {
      startGlobalInactivityTimer();
    }
  }

  // Activer l'overlay de confirmation
  function triggerInactivityOverlay() {
    if (currentSlide === 0 || currentSlide === 19) return;

    inactivityOverlay.classList.add('active');
    inactivityOverlayCountdown = 10;
    btnOverlayNo.textContent = `Non (${inactivityOverlayCountdown}s)`;

    clearInterval(globalOverlayTimer);
    globalOverlayTimer = setInterval(() => {
      inactivityOverlayCountdown--;
      btnOverlayNo.textContent = `Non (${inactivityOverlayCountdown}s)`;

      if (inactivityOverlayCountdown <= 0) {
        confirmExitInactivity();
      }
    }, 1000);
  }

  function confirmExitInactivity() {
    clearInterval(globalOverlayTimer);
    inactivityOverlay.classList.remove('active');
    resetApp();
    goToSlide(0, 'fade');
  }

  function resumeFromInactivity() {
    clearInterval(globalOverlayTimer);
    inactivityOverlay.classList.remove('active');
    resetGlobalInactivityTimer();
  }

  // Détecter l'activité sur toute la page
  window.addEventListener('click', resetGlobalInactivityTimer);
  window.addEventListener('touchstart', resetGlobalInactivityTimer, { passive: true });

  // Boutons de l'overlay
  btnOverlayYes.addEventListener('click', (e) => {
    e.stopPropagation();
    resumeFromInactivity();
  });

  btnOverlayNo.addEventListener('click', (e) => {
    e.stopPropagation();
    confirmExitInactivity();
  });

  // --- Logique Métiers & Menu ---
  function selectTrade(tradeKey) {
    const slideMapping = {
      dessinateur: 3,
      secretaire: 7,
      soudeur: 11,
      chaudronnier: 15
    };

    const targetSlide = slideMapping[tradeKey];
    if (targetSlide !== undefined) {
      goToSlide(targetSlide, 'fade');
    }
  }

  function finishTrade(tradeKey) {
    state.completedTrades[tradeKey] = true;

    const btn = document.querySelector(`.btn-metier[data-metier="${tradeKey}"]`);
    if (btn) btn.classList.add('completed');

    const allDone = Object.values(state.completedTrades).every(v => v);

    if (allDone) {
      goToSlide(19, 'fade');
    } else {
      goToSlide(2, 'fade'); // Retour menu
    }
  }

  function resetApp() {
    stopAudio();
    state.audioEnabled = true;
    updateSoundIndicators();

    state.completedTrades = {
      dessinateur: false,
      secretaire: false,
      soudeur: false,
      chaudronnier: false
    };

    document.querySelectorAll('.btn-metier').forEach(btn => {
      btn.classList.remove('completed');
    });
  }

  // Réinitialiser le compte à rebours de clôture
  const closureSlide = document.getElementById('slide-19');
  if (closureSlide) {
    closureSlide.addEventListener('touchstart', () => {
      if (currentSlide === 19) startInactivityTimer();
    }, { passive: true });

    closureSlide.addEventListener('click', () => {
      if (currentSlide === 19) startInactivityTimer();
    });
  }

  // --- Écouteurs d'Événements Boutons ---
  btnVazcoNext.addEventListener('click', () => goToSlide(1));

  if (btnBackVazcoMeta) {
    btnBackVazcoMeta.addEventListener('click', () => goToSlide(0, 'fade'));
  }

  btnBackMeta.addEventListener('click', () => goToSlide(0, 'fade'));

  btnsMetier.forEach(btn => {
    btn.addEventListener('click', () => {
      const trade = btn.getAttribute('data-metier');
      selectTrade(trade);
    });
  });

  document.querySelectorAll('.btn-back-to-menu').forEach(btn => {
    btn.addEventListener('click', () => goToSlide(2, 'fade'));
  });

  // Navigation dans les sous-slides d'histoire/tip des métiers (boutons ronds SVG)
  document.querySelectorAll('.nav-arrow-btn-round').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-target');
      if (target) {
        const transition = btn.getAttribute('data-transition') || 'slide';
        goToSlide(parseInt(target), transition);
      }
    });
  });

  // Écouteurs pour les dots des métiers
  document.querySelectorAll('.dots-container-bottom .dot-bottom:not([style*="opacity"])').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const target = parseInt(dot.getAttribute('data-target'));
      if (target !== undefined && !isNaN(target)) goToSlide(target);
    });
  });

  // Boutons de fin de métier (chevrons ronds droits sur la slide Tip)
  document.querySelectorAll('.metier-finish-btn-round').forEach(btn => {
    btn.addEventListener('click', () => {
      const trade = btn.getAttribute('data-metier');
      finishTrade(trade);
    });
  });

  btnRestart.addEventListener('click', () => {
    resetApp();
    goToSlide(0, 'fade');
  });

  // Écouteur global pour le bouton de toggle audio (Switch)
  document.addEventListener('click', (e) => {
    const indicator = e.target.closest('.sound-indicator');
    if (indicator) {
      e.stopPropagation();
      toggleAudio();
    }
  });

  // Déverrouillage audio sur la première interaction de l'utilisateur
  window.addEventListener('click', unlockAudio, { once: true });
  window.addEventListener('touchstart', unlockAudio, { once: true });

  // --- Support du swipe (glissement) tactile sur tablette ---
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 50; // pixels minimum pour déclencher le swipe

  // Déterminer si le swipe est autorisé entre deux slides (pour isoler les expériences)
  function isSwipeAllowed(from, to) {
    if (isNaN(to)) return false;
    const groups = [
      [0, 1],                // Accueil Présentation Vazco & Transition Métamorphose
      [3, 4, 5, 6],          // Dessinateur
      [7, 8, 9, 10],         // Secrétaire
      [11, 12, 13, 14],      // Soudeur
      [15, 16, 17, 18]       // Chaudronnier
    ];
    return groups.some(group => group.includes(from) && group.includes(to));
  }

  appViewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  appViewport.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // S'assurer que le geste est horizontal et dépasse le seuil
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > SWIPE_THRESHOLD) {
      const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
      if (!activeSlideEl) return;

      if (diffX < 0) {
        // Geste vers la gauche (Swipe gauche) -> Écran suivant
        const nextBtn = activeSlideEl.querySelector('.next-arrow, #btn-vazco-next');
        if (nextBtn && !nextBtn.disabled && nextBtn.style.display !== 'none' && nextBtn.style.opacity !== '0') {
          const target = parseInt(nextBtn.getAttribute('data-target'));
          if (isSwipeAllowed(currentSlide, target)) {
            nextBtn.click();
          }
        }
      } else {
        // Geste vers la droite (Swipe droite) -> Écran précédent
        let prevBtn = activeSlideEl.querySelector('.prev-arrow');
        if (!prevBtn) {
          prevBtn = activeSlideEl.querySelector('.btn-back, #btn-back-vazco-meta');
        }
        if (prevBtn && !prevBtn.disabled && prevBtn.style.display !== 'none' && prevBtn.style.opacity !== '0') {
          const target = parseInt(prevBtn.getAttribute('data-target'));
          if (isSwipeAllowed(currentSlide, target)) {
            prevBtn.click();
          }
        }
      }
    }
  }, { passive: true });

  // --- Sécurisation anti-zoom tactile ---
  // Bloquer le pinch-to-zoom tactile (gestes à plus de 1 doigt)
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // Bloquer le zoom sur iOS Safari (gestes natifs)
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });

  // --- Démarrage ---
  initTexts();
  setupSoundIndicators();
  updateSoundIndicators();
  startGlobalInactivityTimer();

  // --- Service Worker ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker enregistré.'))
        .catch(err => console.error('Erreur SW:', err));
    });
  }
});
