var canvas = document.getElementById('portfolioCanvas') || document.getElementById('beerCanvas');
var ctx = canvas.getContext('2d');
var particles = [];
var particleCount = canvas.id === 'portfolioCanvas' ? 72 : 280;

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

for (var i = 0; i < particleCount; i++) {
  particles.push(new particle());
}

function particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 120;
  this.speed = 0.25 + Math.random() * 0.55;
  this.radius = 1.5 + Math.random() * 4;
  this.opacity = canvas.id === 'portfolioCanvas' ? 0.2 + Math.random() * 0.34 : (Math.random() * 100) / 1000;
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = canvas.id === 'portfolioCanvas' ? 'rgba(241, 166, 106,' + p.opacity + ')' : 'rgba(255,255,255,' + p.opacity + ')';
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    ctx.fill();
    p.y -= p.speed;
    if (p.y <= -10)
      particles[i] = new particle();
  }
}
loop();

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        // var delta = 200 - Math.random() * 100;
        var delta = 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

        var activityMode = new URLSearchParams(window.location.search).get('activity');
        var showActivityMap = function() {
          if (!window.GitHubCalendar) {
            return;
          }

          document.querySelector('.activity-map').hidden = false;
          document.querySelector('[data-activity-fallback]').hidden = true;
          GitHubCalendar('.activity-map', 'jinamshah', { responsive: true });
        };

        if (activityMode === 'map') {
          showActivityMap();
        } else if (activityMode !== 'shelf') {
          fetch('https://api.github.com/users/jinamshah/events/public')
            .then(function(response) { return response.ok ? response.json() : []; })
            .then(function(events) {
              if (window.shouldShowActivityMap && window.shouldShowActivityMap(events)) {
                showActivityMap();
              }
            })
            .catch(function() {});
        }

    };

