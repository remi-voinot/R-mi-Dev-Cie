function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.titre').forEach(function (x) {
        var a = x.innerHTML.replace(".", "").replace("(", "").split("<");
        x.id = a[0]
        x.href = "#" + a[0]
    })
});


async function hid() {
    var list;
    list = document.querySelectorAll(".li-hid");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.toggle('li-hidden');
        if (list[i].classList.contains("li-hidden")) {
            list[i].style.opacity = "0";
            hiden(list[i]);
        } else {
            list[i].style.opacity = "1";
            showen(list[i]);
        }
    }
}
async function hiden(elem) {
    elem.style.height = "28px"; 
    await sleep(12); 
    elem.style.height = "27px"; 
    await sleep(12);
    elem.style.padding = "4px 32px 4px 4px";
    elem.style.height = "26px"; 
    await sleep(12);
    elem.style.height = "25px"; 
    await sleep(12); 
    elem.style.height = "24px"; 
    await sleep(12); 
    elem.style.height = "22px"; 
    await sleep(12); 
    elem.style.padding = "3px 32px 3px 4px"; 
    elem.style.height = "20px";
    await sleep(12)
    elem.style.height = "18px"; 
    await sleep(12);
    elem.style.height = "16px"; 
    await sleep(12); 
    elem.style.height = "14px"; 
    await sleep(12); 
    elem.style.padding = "2px 32px 2px 4px"; 
    elem.style.height = "12px"; 
    await sleep(12);
    elem.style.height = "10px"; 
    await sleep(12); 
    elem.style.height = "8px"; 
    await sleep(12); 
    elem.style.height = "7px"; 
    await sleep(12);
    elem.style.padding = "2px 32px 2px 4px"; 
    elem.style.height = "6px"; 
    await sleep(12);
    elem.style.height = "5px"; 
    await sleep(12);
    elem.style.height = "4px"; 
    await sleep(12);
    elem.style.height = "3px"; 
    await sleep(12);
    elem.style.padding = "0px 32px 0px 4px";
    elem.style.height = "2px"; 
    await sleep(12);
    elem.style.height = "1px"; 
    await sleep(12);
    elem.style.height = "0px"; 
    await sleep(12);

}
async function showen(elem) {
    elem.style.height = "0px"; 
    await sleep(12); 
    elem.style.height = "1px"; 
    await sleep(12); 
    elem.style.padding = "0px 32px 0px 4px";
    elem.style.height = "2px"; 
    await sleep(12); 
    elem.style.height = "3px"; 
    await sleep(12); 
    elem.style.height = "4px"; 
    await sleep(12); 
    elem.style.height = "5px"; 
    await sleep(12); 
    elem.style.padding = "1px 32px 1px 4px"; 
    elem.style.height = "6px"; 
    await sleep(12); 
    elem.style.height = "7px"; 
    await sleep(12); 
    elem.style.height = "8px"; 
    await sleep(12); 
    elem.style.height = "10px"; 
    await sleep(12); 
    elem.style.padding = "2px 32px 2px 4px"; 
    elem.style.height = "12px"; 
    await sleep(12); 
    elem.style.height = "14px"; 
    await sleep(12); 
    elem.style.height = "16px"; 
    await sleep(12); 
    elem.style.height = "18px"; 
    await sleep(12); 
    elem.style.padding = "3px 32px 3px 4px"; 
    elem.style.height = "20px"; 
    await sleep(12); 
    elem.style.height = "22px"; 
    await sleep(12); 
    elem.style.height = "24px"; 
    await sleep(12); 
    elem.style.height = "25px"; 
    await sleep(12); 
    elem.style.padding = "4px 32px 4px 4px"; 
    elem.style.height = "26px"; 
    await sleep(12); 
    elem.style.height = "27px"; 
    await sleep(12); 
    elem.style.height = "28px"; 
    await sleep(12); 
    elem.style.height = "29px";
}