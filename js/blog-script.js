// Blog functionality

document.addEventListener('DOMContentLoaded', function() {
    initBlogFilter();
    initBlogSearch();
    initNewsletterForm();
    initLoadMore();
});

// Blog category filtering
function initBlogFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            // Filter blog cards
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Blog search functionality
function initBlogSearch() {
    const searchInput = document.getElementById('blogSearch');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const author = card.querySelector('.author').textContent.toLowerCase();
            
            const matchesSearch = title.includes(searchTerm) || 
                                content.includes(searchTerm) || 
                                tags.some(tag => tag.includes(searchTerm)) ||
                                author.includes(searchTerm);
            
            if (matchesSearch || searchTerm === '') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Reset category filter if search is active
        if (searchTerm) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    });
}

// Newsletter form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.subscribe-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulate subscription
        showNotification('Thank you for subscribing! You\'ll receive our latest updates.', 'success');
        this.reset();
    });
}

// Load more functionality
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    let currentPage = 1;
    const postsPerPage = 6;
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        // Simulate loading more posts
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        this.disabled = true;
        
        setTimeout(() => {
            // Add more posts (simulated)
            const postsGrid = document.querySelector('.posts-grid');
            const newPosts = createDummyPosts(3);
            
            newPosts.forEach(post => {
                postsGrid.appendChild(post);
            });
            
            // Reset button
            this.innerHTML = '<i class="fas fa-plus"></i> Load More Articles';
            this.disabled = false;
            
            // Hide button after 3 loads (simulated end of content)
            currentPage++;
            if (currentPage > 3) {
                this.style.display = 'none';
                showNotification('You\'ve reached the end of our articles!', 'info');
            }
        }, 1500);
    });
}

// Create dummy posts for load more functionality
function createDummyPosts(count) {
    const posts = [];
    const categories = ['web-dev', 'ai-ml', 'mobile', 'devops', 'tutorials'];
    const authors = ['John Doe', 'Jane Smith', 'Alex Johnson', 'Sarah Wilson'];
    const icons = ['fas fa-code', 'fas fa-robot', 'fab fa-react', 'fab fa-docker', 'fas fa-terminal'];
    
    for (let i = 0; i < count; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const author = authors[Math.floor(Math.random() * authors.length)];
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const readTime = Math.floor(Math.random() * 10) + 5;
        
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.setAttribute('data-category', category);
        
        article.innerHTML = `
            <div class="card-image">
                <div class="image-placeholder">
                    <i class="${icon}"></i>
                </div>
                <div class="card-overlay">
                    <span class="category">${category.replace('-', ' & ').toUpperCase()}</span>
                </div>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span class="author">${author}</span>
                    <span class="date">July ${Math.floor(Math.random() * 30) + 1}, 2025</span>
                </div>
                <h3>Advanced ${category.replace('-', ' ')} Techniques</h3>
                <p>Explore cutting-edge techniques and best practices in ${category.replace('-', ' ')} development. This comprehensive guide covers everything you need to know.</p>
                <div class="card-tags">
                    <span class="tag">Tutorial</span>
                    <span class="tag">Advanced</span>
                    <span class="tag">${category}</span>
                </div>
                <div class="card-footer">
                    <span class="read-time">${readTime} min read</span>
                    <a href="#" class="read-link">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        posts.push(article);
    }
    
    return posts;
}

// Reading progress indicator
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    
    const styles = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(0, 0, 0, 0.1);
            z-index: 1001;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            transition: width 0.2s ease;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    document.body.appendChild(progressBar);
    
    const progressFill = progressBar.querySelector('.progress-fill');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressFill.style.width = Math.min(scrollPercent, 100) + '%';
    });
}

// Article bookmarking
function initBookmarking() {
    const readLinks = document.querySelectorAll('.read-link, .read-more-btn');
    
    readLinks.forEach(link => {
        const bookmarkBtn = document.createElement('button');
        bookmarkBtn.className = 'bookmark-btn';
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
        bookmarkBtn.title = 'Bookmark this article';
        
        bookmarkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isBookmarked = this.classList.contains('bookmarked');
            
            if (isBookmarked) {
                this.classList.remove('bookmarked');
                this.innerHTML = '<i class="far fa-bookmark"></i>';
                showNotification('Article removed from bookmarks', 'info');
            } else {
                this.classList.add('bookmarked');
                this.innerHTML = '<i class="fas fa-bookmark"></i>';
                showNotification('Article bookmarked!', 'success');
            }
        });
        
        link.parentNode.appendChild(bookmarkBtn);
    });
}

// Social sharing
function initSocialSharing() {
    const articles = document.querySelectorAll('.blog-card, .featured-post');
    
    articles.forEach(article => {
        const shareBtn = document.createElement('button');
        shareBtn.className = 'share-btn';
        shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
        shareBtn.title = 'Share this article';
        
        shareBtn.addEventListener('click', function() {
            const title = article.querySelector('h2, h3').textContent;
            const url = window.location.href;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(`${title} - ${url}`);
                showNotification('Article link copied to clipboard!', 'success');
            }
        });
        
        const cardFooter = article.querySelector('.card-footer, .post-content');
        if (cardFooter) {
            cardFooter.appendChild(shareBtn);
        }
    });
}

// Add bookmark and share button styles
const additionalStyles = `
    .bookmark-btn, .share-btn {
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--transition-normal);
        margin-left: 0.5rem;
    }
    
    .bookmark-btn:hover, .share-btn:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
    }
    
    .bookmark-btn.bookmarked {
        color: var(--accent-color);
        border-color: var(--accent-color);
    }
    
    .card-footer, .post-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize additional features
document.addEventListener('DOMContentLoaded', () => {
    initReadingProgress();
    initBookmarking();
    initSocialSharing();
});
