document.addEventListener("DOMContentLoaded", function () {
  const chartCanvas = document.getElementById('skillChart');
  let chartInstance = null;

  function createRadarChart() {
    const ctx = chartCanvas.getContext('2d');
    const colorFill = "rgba(254, 153, 0, 0.4)";
    const colorIn = "rgb(254, 153, 0)";

    chartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
        datasets: [{
          label: 'Coding Skills (%)',
          data: [95, 85, 65, 0, 0],
          backgroundColor: colorFill,
          borderColor: colorIn,
          borderWidth: 2,
          pointBackgroundColor: colorIn
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          duration: 1500,
          easing: 'easeInOut',
          animateScale: true,
          animateRotate: true
        },
        scales: {
          r: {
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent'
            },
            pointLabels: {
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !chartInstance) {
        createRadarChart();
        observer.unobserve(chartCanvas);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(chartCanvas);
});
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.setProperty('--target-width', targetWidth);
        bar.classList.add('animate-progress');
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.progress-bar').forEach(bar => {
    observer.observe(bar);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.to-animate').forEach(el => {
    observer.observe(el);
  });
});
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function handleScrollAnimation() {
  const movingText = document.querySelector('.moving-text'); 
  
  if (isElementInViewport(movingText)) {
    movingText.classList.add('visible');
  }
}

window.addEventListener('scroll', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', handleScrollAnimation);
