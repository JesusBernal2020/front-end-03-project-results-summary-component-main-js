async function infoDataBase() {
  try {
    const res = await fetch("/js/data/data.json");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

function infoTarget(info) {
  const infomation = () => {
    const elements = document.querySelectorAll(".content");

    elements.forEach((element, index) => {
      element.innerHTML += `
      <div class="img">
               <img src=${info[index].icon} alt="" />
                <span>${info[index].category}</span>
             </div>
              <span class="black">${info[index].score} <span class="semi-black">/100</span></span>
          </div>
      `;
    });
  };
  infomation();
}

infoTarget(await infoDataBase());
