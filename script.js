document.addEventListener('DOMContentLoaded', function() {
    
    var contactForm = document.getElementById('vaultContactForm');
    var successNotice = document.getElementById('vaultResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            contactForm.style.display = 'none';
            successNotice.style.display = 'block';
        });
    }

    var filterButtons = document.querySelectorAll('.filter-btn');
    var reviewItems = document.querySelectorAll('.vault-review-item');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            var targetFilter = this.getAttribute('data-filter');

            reviewItems.forEach(function(item) {
                var itemGenre = item.getAttribute('data-genre');

                if (targetFilter === 'all' || itemGenre === targetFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

});