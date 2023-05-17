var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
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
    var delta = 200 - Math.random() * 100;

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
};

// --------------------

var audio = document.getElementById('audio');
var playPauseTxt = document.getElementById('playPauseTxt');
var count = 0;

function playPause() {
  if(count == 0){
    count = 1;
    audio.play();
    playPauseTxt.innerHTML = 'Music On';
  }else{
    count = 0;
    audio.pause();
    playPauseTxt.innerHTML = 'Music Off';
  }
}

// ------------------------

var today = new Date();
var day = today.getDay();

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.querySelector(".day").innerHTML = dayList[day]


// -----------------------------

const hellos = [
  {
    lang: "English",
    msg1: "Hello, World!",
    msg2: "Stay safe"
  },
  {
    lang: "German",
    msg1: "Hallo Welt!",
    msg2: "Bleib sicher"
  },
  {
    lang: "French",
    msg1: "Bonjour le monde!",
    msg2: "Restez en sécurité"
  },
  {
    lang: "Spanish",
    msg1: "¡Hola Mundo!",
    msg2: "Mantente segura"
  },
  {
    lang: "Portuguese",
    msg1: "Olá Mundo!",
    msg2: "Fique seguro"
  },
  {
    lang: "Italian",
    msg1: "Ciao mondo!",
    msg2: "Rimanga sicuro"
  },
  {
    lang: "Dutch",
    msg1: "Hallo Wereld!",
    msg2: "Blijf Veilig"
  },
  {
    lang: "Polish",
    msg1: "Witaj świecie!",
    msg2: "Bądź bezpieczny"
  },
  {
    lang: "Croatian",
    msg1: "Pozdrav svijete!",
    msg2: "Ostati siguran"
  },
  {
    lang: "Czech",
    msg1: "Ahoj světe!",
    msg2: "Zůstat v bezpečí"
  },
  {
    lang: "Hungarian",
    msg1: "Helló Világ!",
    msg2: "Maradj biztonságban"
  },
  {
    lang: "Finnish",
    msg1: "Hei maailma!",
    msg2: "Pysy turvassa"
  },
  {
    lang: "Swedish",
    msg1: "Hej världen!",
    msg2: "Var försiktig"
  },
  {
    lang: "Danish",
    msg1: "Hej Verden!",
    msg2: "Pas på dig selv"
  },
  {
    lang: "Greek",
    msg1: "Γειά σου Κόσμε",
    msg2: "Μείνε ασφαλής"
  },
  {
    lang: "Hebrew",
    msg1: "שלום עולם",
    msg2: "להישאר בטוח"
  },
  // {
  //   lang: "Russian",
  //   msg1: "Привет, мир",
  //   msg2: "Оставаться в безопасности"
  // },
  {
    lang: "Hindi",
    msg1: "नमस्ते दुनिया",
    msg2: "सुरक्षित रहें"
  },

  {
    lang: "Thai",
    msg1: "สวัสดีชาวโลก",
    msg2: "อยู่อย่างปลอดภัย"
  },
  {
    lang: "Arabic",
    msg1: "مرحبا بالعالم",
    msg2: "ابق آمنًا"
  },
  {
    lang: "Turkish",
    msg1: "Selam Dünya!",
    msg2: "Güvende kal"
  },
  {
    lang: "Filipino",
    msg1: "Kumusta, Mundo!",
    msg2: "Manatiling ligtas"
  },
  {
    lang: "Korean",
    msg1: "안녕하세요 월드",
    msg2: "안전 유지"
  },
  {
    lang: "Japanese",
    msg1: "こんにちは世界",
    msg2: "おげんきで"
  },
  {
    lang: "Chinese",
    msg1: "你好，世界",
    msg2: "注意安全"
  },
  {
    lang: "Vietnamese",
    msg1: "Chào thế giới",
    msg2: "Giữ an toàn"
  }
];

const box1 = document.querySelector(".message-box-1");
const box2 = document.querySelector(".message-box-2");

const duration = 2; // 2 seconds
let startTime;
let box1show = true;
let box2show = false;

let secondCount = 0;
let indexCount = 0;

const animate = (timestamp) => {
  let runtime = timestamp - startTime;
  runtime = (runtime / 1000).toFixed(0);

  if (runtime > secondCount + 1) {
    secondCount++;
  }
  if (indexCount >= hellos.length) {
    indexCount = 0;
  }

  if ((secondCount + duration) % (2 * duration) === 0 && box1show) {
    console.log("box 2 on");
    box2show = true;
    box1show = false;

    box2.classList.add("show");
    box1.classList.remove("show");
    box1.classList.add("opacity-0");

    nextRandomIndex = randomIndexes[indexCount];
    box2.innerHTML = displayMessageBox(nextRandomIndex);
    indexCount++;
  } else if (secondCount % (2 * duration) === 0 && box2show) {
    console.log("box 1 on");
    box2show = false;
    box1show = true;

    box1.classList.add("show");
    box2.classList.remove("show");
    box2.classList.add("opacity-0");

    nextRandomIndex = randomIndexes[indexCount];
    box1.innerHTML = displayMessageBox(nextRandomIndex);
    indexCount++;
  }

  requestAnimationFrame((timestamp) => {
    animate(timestamp);
  });
};

const animationTimer = () => {
  requestAnimationFrame((timestamp) => {
    startTime = timestamp;
    animate(timestamp);
  });
};
// create array of only indices
let justIndexes = hellos.map((item, ind) => {
  return ind;
});
// create an array of indices that are in random order
let randomIndexes = [];
for (let i = 0, length = justIndexes.length; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * justIndexes.length);
  randomIndexes[i] = justIndexes[randomIndex];
  // remove index from array
  justIndexes = justIndexes.filter((x) => x !== justIndexes[randomIndex]);
}

// generate HTML
const displayMessageBox = (index) => {
  return `
  <p class="msg1">${hellos[index].msg1}</p>
  <p class="msg2">${hellos[index].msg2}</p>
  <footer>${hellos[index].lang}</footer>
  `;
};
// kick off timer animation
animationTimer();

