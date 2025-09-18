// Paper Analysis Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Tab functionality for technical details
    initializeTabs();
    
    // Table of contents smooth scrolling and active states
    initializeTableOfContents();
    
    // Animate metrics and charts on scroll
    initializeScrollAnimations();
    
    // Initialize copy-to-clipboard for code blocks
    initializeCopyFunctionality();
    
    // Progress reading indicator
    initializeReadingProgress();
    
    console.log('📄 Paper analysis page initialized successfully!');
});

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
                
                // Trigger animation for charts in the active panel
                animateChartsInPanel(targetPanel);
            }
        });
    });
}

function initializeTableOfContents() {
    const tocLinks = document.querySelectorAll('.paper-toc a');
    const sections = document.querySelectorAll('.content-section');
    
    // Smooth scrolling for TOC links
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active TOC item on scroll
    const updateActiveTocItem = () => {
        const scrollPosition = window.scrollY + 150;
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = '#' + section.id;
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveTocItem);
    updateActiveTocItem(); // Initial call
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate metrics
                if (element.classList.contains('metric-item')) {
                    animateMetric(element);
                }
                
                // Animate charts
                if (element.classList.contains('chart-bar')) {
                    animateChartBar(element);
                }
                
                // Animate cards
                if (element.classList.contains('contribution-card') || 
                    element.classList.contains('experiment-card') ||
                    element.classList.contains('significance-card')) {
                    animateCard(element);
                }
                
                // Animate timeline items
                if (element.classList.contains('timeline-item')) {
                    animateTimelineItem(element);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.metric-item, .chart-bar, .contribution-card, .experiment-card, ' +
        '.significance-card, .timeline-item, .feature-box, .innovation-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function animateMetric(element) {
    const valueElement = element.querySelector('.metric-value, .result-number');
    if (!valueElement) return;
    
    const finalValue = valueElement.textContent;
    const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
    
    if (isNaN(numericValue)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        return;
    }
    
    let currentValue = 0;
    const increment = numericValue / 50;
    const unit = finalValue.replace(/[\d.]/g, '');
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
            valueElement.textContent = finalValue;
            clearInterval(timer);
        } else {
            valueElement.textContent = Math.floor(currentValue) + unit;
        }
    }, 30);
    
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

function animateChartBar(element) {
    const originalWidth = element.style.width;
    element.style.width = '0%';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        element.style.width = originalWidth;
        element.style.transition = 'width 1s ease-in-out';
    }, 100);
}

function animateCard(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add hover effect
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

function animateTimelineItem(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add pulsing effect to the timeline dot
    const timelineDot = element.querySelector('::before');
    if (timelineDot) {
        element.style.position = 'relative';
    }
}

function animateChartsInPanel(panel) {
    const charts = panel.querySelectorAll('.chart-bar, .usage-item');
    charts.forEach((chart, index) => {
        setTimeout(() => {
            if (chart.classList.contains('chart-bar')) {
                animateChartBar(chart);
            } else {
                chart.style.opacity = '1';
                chart.style.transform = 'translateX(0)';
            }
        }, index * 200);
    });
}

function initializeCopyFunctionality() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre, .code-block');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.className = 'copy-button';
        copyButton.title = '复制代码';
        
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(59, 130, 246, 0.9);
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Make parent relative
        block.style.position = 'relative';
        
        // Show button on hover
        block.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        block.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', function() {
            const text = block.textContent || block.innerText;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showCopySuccess(copyButton);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopySuccess(copyButton);
            }
        });
        
        block.appendChild(copyButton);
    });
}

function showCopySuccess(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.background = 'rgba(16, 185, 129, 0.9)';
    
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.style.background = 'rgba(59, 130, 246, 0.9)';
    }, 2000);
}

function initializeReadingProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        z-index: 999;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle table of contents
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey) {
        const toc = document.querySelector('.paper-toc');
        if (toc) {
            toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
        }
    }
    
    // Press 'Escape' to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Print styles
function optimizeForPrint() {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            .navbar, .paper-toc, .paper-navigation, .copy-button, .reading-progress {
                display: none !important;
            }
            
            .content-layout {
                grid-template-columns: 1fr !important;
            }
            
            .paper-main-content {
                box-shadow: none !important;
                margin: 0 !important;
            }
            
            .content-section {
                break-inside: avoid;
                page-break-inside: avoid;
            }
            
            .tab-panel:not(.active) {
                display: block !important;
            }
            
            .tab-buttons {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize print optimization
optimizeForPrint();

// Export functions for global use
window.paperAnalysis = {
    animateMetric,
    animateChartBar,
    animateCard,
    showCopySuccess
};