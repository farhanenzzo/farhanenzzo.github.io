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
    msg2: "Restez en s??curit??"
  },
  {
    lang: "Spanish",
    msg1: "??Hola Mundo!",
    msg2: "Mantente segura"
  },
  {
    lang: "Portuguese",
    msg1: "Ol?? Mundo!",
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
    msg1: "Witaj ??wiecie!",
    msg2: "B??d?? bezpieczny"
  },
  {
    lang: "Croatian",
    msg1: "Pozdrav svijete!",
    msg2: "Ostati siguran"
  },
  {
    lang: "Czech",
    msg1: "Ahoj sv??te!",
    msg2: "Z??stat v bezpe????"
  },
  {
    lang: "Hungarian",
    msg1: "Hell?? Vil??g!",
    msg2: "Maradj biztons??gban"
  },
  {
    lang: "Finnish",
    msg1: "Hei maailma!",
    msg2: "Pysy turvassa"
  },
  {
    lang: "Swedish",
    msg1: "Hej v??rlden!",
    msg2: "Var f??rsiktig"
  },
  {
    lang: "Danish",
    msg1: "Hej Verden!",
    msg2: "Pas p?? dig selv"
  },
  {
    lang: "Greek",
    msg1: "???????? ?????? ??????????",
    msg2: "?????????? ??????????????"
  },
  {
    lang: "Hebrew",
    msg1: "???????? ????????",
    msg2: "???????????? ????????"
  },
  // {
  //   lang: "Russian",
  //   msg1: "????????????, ??????",
  //   msg2: "???????????????????? ?? ????????????????????????"
  // },
  {
    lang: "Hindi",
    msg1: "?????????????????? ??????????????????",
    msg2: "???????????????????????? ????????????"
  },

  {
    lang: "Thai",
    msg1: "????????????????????????????????????",
    msg2: "????????????????????????????????????????????????"
  },
  {
    lang: "Arabic",
    msg1: "?????????? ??????????????",
    msg2: "?????? ??????????"
  },
  {
    lang: "Turkish",
    msg1: "Selam D??nya!",
    msg2: "G??vende kal"
  },
  {
    lang: "Filipino",
    msg1: "Kumusta, Mundo!",
    msg2: "Manatiling ligtas"
  },
  {
    lang: "Korean",
    msg1: "??????????????? ??????",
    msg2: "?????? ??????"
  },
  {
    lang: "Japanese",
    msg1: "?????????????????????",
    msg2: "???????????????"
  },
  {
    lang: "Chinese",
    msg1: "???????????????",
    msg2: "????????????"
  },
  {
    lang: "Vietnamese",
    msg1: "Ch??o th??? gi???i",
    msg2: "Gi??? an to??n"
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