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
});