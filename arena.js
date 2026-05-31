document.addEventListener('DOMContentLoaded', () => {
    // Admin Modal Logic
    const adminBtn = document.getElementById('adminBtn'); 
    const adminModal = document.getElementById('adminModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminModalContent = document.getElementById('adminModalContent');
    
    if(adminBtn) {
        adminBtn.addEventListener('click', () => {
            adminModal.classList.remove('hidden');
            
            setTimeout(() => {
                adminModal.classList.remove('opacity-0');
                adminModalContent.classList.remove('scale-95');
                adminModalContent.classList.add('scale-100');
            }, 10);
        });
    }
    
    const closeModal = () => {
        adminModal.classList.add('opacity-0');
        adminModalContent.classList.remove('scale-100');
        adminModalContent.classList.add('scale-95');
        
        setTimeout(() => {
            adminModal.classList.add('hidden');
        }, 300); 
    };
    
    if(closeAdminModal) {
        closeAdminModal.addEventListener('click', closeModal);
    }
    adminModal.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            closeModal();
        }
    });

    let selectedCategory = 'HTML';
    let selectedDifficulty = 'easy';

    const categoryBtns = document.querySelectorAll('.category-btn');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const launchBtn = document.getElementById('launchBtn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => {
                b.classList.remove('bg-accentPill', 'text-systemBackground', 'shadow-[0_0_15px_rgba(165,200,255,0.2)]');
                b.classList.add('border', 'border-borderSubtle', 'text-textMuted', 'hover:text-white', 'hover:border-textMuted');
            });
            btn.classList.remove('border', 'border-borderSubtle', 'text-textMuted', 'hover:text-white', 'hover:border-textMuted');
            btn.classList.add('bg-accentPill', 'text-systemBackground', 'shadow-[0_0_15px_rgba(165,200,255,0.2)]');
            selectedCategory = btn.dataset.category;
            launchBtn.disabled = false;
        });
    });
});