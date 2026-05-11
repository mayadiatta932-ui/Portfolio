// ============================================================
// MARIAMA DIATTA — PORTFOLIO ULTRA PREMIUM 2025
// ============================================================

(function() {
  'use strict';

  // ==================== NAVBAR SCROLL ====================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==================== MENU MOBILE ====================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ==================== BOUTON RETOUR HAUT ====================
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });
  
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== BARRE DE PROGRESSION ====================
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  // ==================== EFFET DE TAPING (TEXTE QUI S'ÉCRIT) ====================
  const words = ['Community Manager', 'Créatrice Web', 'Stratège Digitale', 'Formatrice'];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const typedSpan = document.querySelector('.typed-text');
  
  function typeEffect() {
    if (!typedSpan) return;
    const current = words[i];
    if (isDeleting) {
      typedSpan.textContent = current.substring(0, j--);
    } else {
      typedSpan.textContent = current.substring(0, j++);
    }
    
    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
  
  if (typedSpan) {
    setTimeout(typeEffect, 500);
  }

  // ==================== ANIMATION DES BARRES DE COMPÉTENCES ====================
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar-fill');
        bars.forEach(bar => {
          const width = bar.dataset.width || '0%';
          bar.style.width = width;
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // ==================== SIMULATION AOS (ANIMATION AU SCROLL) ====================
  const aosElements = document.querySelectorAll('[data-aos]');
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        aosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  aosElements.forEach(el => aosObserver.observe(el));

  // ==================== MODE SOMBRE / CLAIR ====================
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      // Changer l'icône
      const icon = darkToggle.querySelector('i');
      if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  }

  // ==================== CURSEUR PERSONNALISÉ (DESKTOP UNIQUEMENT) ====================
  if (window.innerWidth > 768) {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    
    if (dot && ring) {
      document.addEventListener('mousemove', (e) => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
      
      // Effet au survol des éléments cliquables
      const clickables = document.querySelectorAll('a, button, .btn, .project-card, .service-card');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.style.width = '52px';
          ring.style.height = '52px';
          ring.style.borderColor = 'rgba(139,92,246,0.9)';
        });
        el.addEventListener('mouseleave', () => {
          ring.style.width = '36px';
          ring.style.height = '36px';
          ring.style.borderColor = 'rgba(139,92,246,0.6)';
        });
      });
    }
  }

  // ==================== TÉLÉCHARGEMENT CV ====================
  const downloadBtn = document.getElementById('downloadCV');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('📄 Fonctionnalité CV bientôt disponible');
    });
  }

  // ==================== FORMULAIRE DE CONTACT ====================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nom = document.getElementById('nom')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';
      
      // Validation simple
      if (!nom.trim() || !email.trim() || !message.trim()) {
        if (formStatus) {
          formStatus.style.color = '#f43f5e';
          formStatus.textContent = '⚠️ Veuillez remplir tous les champs.';
        }
        return;
      }
      
      if (!email.includes('@') || !email.includes('.')) {
        if (formStatus) {
          formStatus.style.color = '#f43f5e';
          formStatus.textContent = '⚠️ Veuillez entrer un email valide.';
        }
        return;
      }
      
      // Simulation d'envoi (remplacez par votre logique d'envoi réelle)
      if (formStatus) {
        formStatus.style.color = '#22d3ee';
        formStatus.textContent = '📨 Envoi en cours...';
      }
      
      // Simuler un délai d'envoi
      setTimeout(() => {
        if (formStatus) {
          formStatus.style.color = '#22d3ee';
          formStatus.textContent = '✅ Merci pour votre message ! Je vous répondrai rapidement.';
        }
        contactForm.reset();
        
        // Effacer le message après 5 secondes
        setTimeout(() => {
          if (formStatus) {
            formStatus.textContent = '';
          }
        }, 5000);
      }, 1000);
      
      // ===== POUR UN ENVOI RÉEL, DÉCOMMENTEZ ET CONFIGUREZ LE CODE CI-DESSOUS =====
      /*
      try {
        const response = await fetch('votre-endpoint-de-formulaire', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nom, email, message })
        });
        
        if (response.ok) {
          formStatus.style.color = '#22d3ee';
          formStatus.textContent = '✅ Message envoyé avec succès !';
          contactForm.reset();
        } else {
          throw new Error('Erreur serveur');
        }
      } catch (error) {
        formStatus.style.color = '#f43f5e';
        formStatus.textContent = '❌ Erreur lors de l\'envoi. Réessayez plus tard.';
      }
      */
    });
  }

  // ==================== ANIMATION DES LIENS ACTIFS DANS LA NAVIGATION ====================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function setActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
            // Style pour l'élément actif
            item.style.color = 'var(--white)';
          } else {
            if (!item.classList.contains('active')) {
              item.style.color = '';
            }
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // ==================== EFFET DE RÉVÉLATION AU SCROLL (AOS MANUEL) ====================
  const revealElements = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .about-grid');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(el);
  });

  // ==================== GESTION DES ERREURS D'IMAGE ====================
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('error', function() {
      this.style.opacity = '0.3';
      this.style.background = 'linear-gradient(135deg, var(--violet), var(--cyan))';
      this.style.padding = '2rem';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.alt = 'Mariama Diatta (photo non disponible)';
    });
  }

  // ==================== FERMETURE DU MENU MOBILE LORS DU REDIMENSIONNEMENT ====================
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (hamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    }
  });

  // ==================== PRÉVENTION DES CLICS SUR LES LIENS VIDES ====================
  const emptyLinks = document.querySelectorAll('.social-links a, .footer-social a');
  emptyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
        console.log('Lien social à configurer');
      }
    });
  });

  console.log('✅ Portfolio Mariama Diatta — Initialisé avec succès');
})();