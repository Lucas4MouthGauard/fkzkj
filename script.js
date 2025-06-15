document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    const nav = document.querySelector('.pixel-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll) {
            // 向下滚动
            nav.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Twitter 链接点击处理
    const twitterLink = document.getElementById('twitterLink');
    twitterLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://x.com/fuckzkj', '_blank');
    });
});

// 复制到剪贴板功能
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.querySelector('.copy-tooltip');
        tooltip.textContent = 'Copied!';
        setTimeout(() => {
            tooltip.textContent = 'Click to Copy';
        }, 2000);
    }).catch(err => {
        console.error('Copy failed:', err);
    });
} 