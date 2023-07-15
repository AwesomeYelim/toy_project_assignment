
    let scrollTop = 0;
    let bar;

    function copyClipboard(num) {
      const t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = num;
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    function copy(){
      copyClipboard("010-8291-1153");
      alert('Copied!');
    }

    window.onload = function(){
      bar = document.getElementsByClassName("bar")[0];
    }

    window.addEventListener("scroll", function(e){
      scrollTop = document.documentElement.scrollTop;
      let per = Math.ceil(scrollTop / (document.body.offsetHeight - window.innerHeight) * 100);

      bar.style.width = per +"%";
    }, false)

  