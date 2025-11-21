
      // --- MENU ---
      const menuBtn = document.getElementById("menuBtn");
      const menuModal = document.getElementById("menuModal");
      let menuAberto = false;
      
      menuBtn.onclick = () => {
        menuAberto = !menuAberto;
        menuModal.style.display = menuAberto ? "flex" : "none";
      };
      
      menuModal.onclick = (e) => {
        if (e.target === menuModal) {
          menuModal.style.display = "none";
          menuAberto = false;
        }
      };
    
      // --- ANIMAÇÃO DO TÍTULO ---
      const subtitle = document.querySelector('.sub-title');
      const title = document.querySelector('.main-title');
      title.addEventListener('animationend', () => {
        subtitle.classList.add('show');
      });
    
      // --- BOTÃO INICIAR ---
      const startBtn = document.getElementById('startBtn');
      startBtn.onclick = () => window.location.href = '2.All.Blu.Academy.html';
    
      // --- HEADER SCROLL ---
      const scrollHeader = document.getElementById("scrollHeader");
      const muralSection = document.getElementById("mural-projetos");

      window.addEventListener("scroll", () => {
        const rect = muralSection.getBoundingClientRect();

        // header aparece quando o topo do mural chega perto da tela
        const show = rect.top <= window.innerHeight * 0.2;

        scrollHeader.classList.toggle("show", show);
      });
      
    
      // --- VÍDEOS COM INTERSECTION OBSERVER ---
      const aboutVideos = document.querySelectorAll('.aboutVideo');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.muted = true;
            if (video.readyState >= 2) {
              video.play();
            } else {
              video.addEventListener('canplay', () => video.play(), { once: true });
            }
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.4 });
      
      aboutVideos.forEach(video => {
        observer.observe(video);
        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play();
        });
      });
    
      
