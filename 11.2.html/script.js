// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的轮播图元素
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 每3秒切换一次

    // 如果没有轮播图元素（比如在非首页），则不执行
    if (slides.length === 0) return;

    function nextSlide() {
        // 移除当前图片的 active 类
        slides[currentSlide].classList.remove('active');
        
        // 计算下一张图片的索引
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 给下一张图片添加 active 类
        slides[currentSlide].classList.add('active');
    }

    // 启动定时器
    setInterval(nextSlide, slideInterval);
});
