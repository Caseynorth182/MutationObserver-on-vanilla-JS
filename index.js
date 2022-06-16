

let btns = document.querySelector('.c');
btns.addEventListener('click', () => {
    btns.classList.toggle('test-class');
})
// btns.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         item.classList.add('test-class');
//         console.log(item);
//     })
// })


let target = document.querySelector('.c')

const config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['class', 'style']
};

// Note Observer
const callback = (mutationList, observer) => {
    for (let mutation of mutationList) {
        console.log(mutation.target.classList);
        if (mutation.target.classList.contains('test-class')) {
            console.log('yeah');
        }
        if (mutation.type === 'childList') {
            console.log('ChildList');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
}

const observer = new MutationObserver(callback)

observer.observe(target, config)
