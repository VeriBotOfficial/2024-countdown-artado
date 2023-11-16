if (window.location.pathname === "/" || window.location.pathname === "/Default.aspx")
{
function updateCountdown() {
    let e = 60 - (new Date).getSeconds(),
        t = new Date("01/01/2024 00:00:01") - new Date,
        n = parseInt(t / 864e5);
    t -= 24 * n * 60 * 60 * 1e3;
    let a = parseInt(t / 36e5);
    t -= 60 * a * 60 * 1e3;
    let s = parseInt(t / 6e4);
    document.getElementById("updateCountdowndown-day").innerHTML = n
    document.getElementById("updateCountdowndown-hour").innerHTML = a
    document.getElementById("updateCountdowndown-min").innerHTML = s + 1
    setTimeout((function() {
        newupdateCountdown()
    }), 1e3 * e)
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var lang = getCookie("Lang");
if (lang === "")
{
  lang = "en";
}


const lang = {
  tr: {
      title: "Yeni Yıla Kalan Süre:",
      days: "GÜN",
      hours: "SAAT",
      minutes: "DAKİKA"
  },
  en: {
      title: "Time left until the new year:",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES"
  },
  el: {
      title: "απομένει χρόνος μέχρι το νέο έτος:",
      days: "ΜΕΡΕΣ",
      hours: "ΩΡΕΣ",
      minutes: "ΛΕΠΤΑ"
  },
  az: {
      title: "Yeni ilə vaxt qalıb:",
      days: "GÜN",
      hours: "SAAT",
      minutes: "DƏQİQƏ"
  },
  ru: {
      title: "До нового года осталось время:",
      days: "ДНИ",
      hours: "ЧАСЫ",
      minutes: "МИНУТЫ"
  },
  de: {
      title: "Es bleibt noch Zeit bis zum neuen Jahr:",
      days: "TAGE",
      hours: "STUNDEN",
      minutes: "MINUTEN"
  },
  bg: {
      title: "остава време до новата година:",
      days: "ДНИ",
      hours: "ЧАСА",
      minutes: "МИНУТИ"
  },
  fr: {
      title: "Temps restant jusqu'à la nouvelle année:",
      days: "JOURS",
      hours: "HEURES",
      minutes: "MINUTES"
  },
  es: {
      title: "Tiempo que queda hasta el nuevo año:",
      days: "DÍAS",
      hours: "HORAS",
      minutes: "MINUTOS"
  },
  pl: {
      title: "Pozostał czas do nowego roku:",
      days: "DNI",
      hours: "GODZINY",
      minutes: "MINUTY"
  },
  ja: {
      title: "新年までの時間：",
      days: "日",
      hours: "時間",
      minutes: "分"
  }
};

const t = lang[lang] || lang.en;

var middle = document.querySelector("div.middle");
middle.innerHTML = `<h1 class="updateCountdown-title">${t.title}</h1><div class="updateCountdown">
    <div class="updateCountdown-item flex-column">
        <span id="updateCountdown-day" class="updateCountdown-time"></span>
        <span>${t.days}</span>
    </div>
    <div class="updateCountdown-item flex-column">
        <span id="updateCountdown-hour" class="updateCountdown-time"></span>
        <span>${t.hours}</span>
    </div>
    <div class="updateCountdown-item flex-column">
        <span id="updateCountdown-min" class="updateCountdown-time"></span>
        <span>${t.minutes}</span>
    </div>
</div>` + middle.innerHTML;

var styles = `.flex-column {
  display: flex;
  flex-direction: column;
}
.updateCountdown-item {
  font-size: 12px;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
}

.updateCountdown-time {
  font-weight: bolder;
  font-size: 32px;
}

.updateCountdown-title {
  font-weight: bolder;
  font-size: 24px;
  margin-top: 82px;
}

.updateCountdown {
  display: flex;
  justify-content: center;
  margin-bottom: .5rem;
  margin-top: .5rem;
}
`;

document.querySelector(".searchbar").style.marginTop = 0;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

newupdateCountdown();}
