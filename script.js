const chars = document.querySelector('.result')
const cursr = document.getElementById('crsr'),
    chartsContainer = document.querySelector('#chart'),
    h6 = document.querySelector('#content1 h6'),
    textInfo = document.querySelector('#info2 h3'),
    counter1 = document.querySelector('#secound_el h3')
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start));
}
console.log(counter1)
const tl = gsap.timeline();
gsap.from(cursr, {
    scale: 0
})
chartsContainer.addEventListener('mousemove', (e) => {
    gsap.to(cursr, {
        x: e.x,
        y: e.y
    })
})
chartsContainer.addEventListener('mouseleave', (e) => {
    gsap.to(cursr, {
        scale: 0
    })
})
chartsContainer.addEventListener('mouseenter', (e) => {
    gsap.to(cursr, {
        scale: 1
    })
})
function headerAnimation() {
    tl.from('.person #img', {
        opacity: 0,
        scale: 0,
        delay: 0.3
    })
    tl.from('#per_info', {
        opacity: 0,
        scale: 0,
        x: -60,
        delay: 0.3
    })
    tl.to('.person #img', {
        opacity: 1,
        scale: 1,
    })
    tl.from('.header-content #input', {
        scaleY: 0,
        opacity: 0
    })
    tl.to('.header-content #input', {
        scaleY: 1,
        opacity: 1
    })

    tl.from('#items-link', {
        scale: 0,
        duration: 0.4,
        opacity: 0,
        stagger: 0.2,
        rotate: '-100deg',
    })
    tl.to('#items-link', {
        scale: 1,
        opacity: 1,
        rotate: '0deg',
    })
    tl.fromTo('.header-last-part>span', {
        opacity: 0,
        stagger: 0.3
    },
        {
            opacity: 1
        })
}
headerAnimation()
function theAnimation() {


    tl.fromTo('#content2 h2', {
        opacity: 0,
        duration: 0.4
    },
        {
            opacity: 1
        })
    tl.fromTo('#thrd h2', {
        opacity: 0,
        duration: 0.4
    },
        {
            opacity: 1
        })
    h6.innerHTML = h6.textContent.split(' ').map((e) => {
        return `<span>${e}</span>`
    }).join(' ')
    console.log(textInfo)
    textInfo.innerHTML = textInfo.textContent.split(' ').map((e) => {
        return `<span class='block'>${e}</span>`
    }).join(' ')

    tl.fromTo('#content1 h3', {
        opacity: 0,
        duration: 0.6
    },
        {
            opacity: 1
        })
    tl.from('#content1 h6 span', {
        y: 10,
        opacity: 0,
        duration: 0.1,
        stagger: 0.3
    }
    )
    tl.to('#content1 h6 span',
        {
            opacity: 1,
            y: 0
        })

    tl.from('#info2', {
        opacity: 0,
    })
    tl.to('#info2', {
        opacity: 1,
    })
    tl.from('#info2 h3 span', {
        y: 10,
        opacity: 0,
        duration: 0.1,
        stagger: 0.3
    })
    tl.to('#info2 h3 span', {
        opacity: 1,
        y: 0
    })


    tl.fromTo('#landing-part2', {
        scaleY: 0,
        opacity: 0,
        duration: 0.6
    },
        {
            opacity: 1,
            scaleY: 1
        })
    tl.fromTo('#landing-part2 #explain h3', {
        y: -20,
        opacity: 0,
        duration: 1,
    }, {
        y: 0,
        opacity: 1,
    })
    tl.fromTo('#landing-part2 #explain span', {
        y: -20,
        opacity: 0,
        delay: 0.4,
    }, {
        y: 0,
        opacity: 1,
    })

    tl.fromTo('#landing-part2 #offers #offer #image', {
        opacity: 0,
        scale: 0,
        stagger: 0.1
    },
        {
            opacity: 1,
            scale: 1
        }
    )
    tl.from('#landing-part2 #offers #offer i', {
        opacity: 0,
        rotate: '100deg',
        stagger: 0.1
    }
    )
    tl.to("#landing-part2 #offers #offer i",
        {
            opacity: 1,
            rotate: '0deg',
        })
    tl.from('#landing-part2 #offers #details', {
        opacity: 0,
        x: -50,
        stagger: 0.1

    }
    )
    tl.to('#landing-part2 #offers #details', {
        opacity: 1,
        x: 0,
        stagger: 0.2
    }
    )
    tl.fromTo('#final-section #products h3', {
        x: -150,
        opacity: 0
    },
        {
            x: 0,
            duration: 0.5,
            opacity: 1
        })
    tl.from('#final-section #wrapper #chairs section', {
        opacity: 0,
        scale: 0
    })
    tl.from('#final-section #wrapper #chairs section div', {
        scale: 0,
    })
    tl.to('#final-section #wrapper #chairs section div', {
        duration: 0.7,
        scale: 1
    })
    tl.from('#final-section #wrapper #chairs span', {
        scaleX: 0,
    })
    tl.to('#final-section #wrapper #chairs span', {
        scaleX: 1,
    })
    tl.fromTo('#final-section #wrapper #settings ', {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1
    })
}
theAnimation()
for (let i = 14; i < 22; i++) {
    chars.innerHTML += `<section id="res">
    <span>${i + 1}</span>
    </section>
`
}
tl.fromTo('#dashboard h3', { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
tl.fromTo('#chart', { scaleX: 0 }, { scaleX: 1, duration: 1 })
tl.from(".result #res", {
    height: 0,
    stagger: { each: 0.2, from: 'end' },
})
tl.to(".result #res", {
    maxHeight: `${generateRandomNumber(12, 100)}%`,
    duration: 1,
})
function doCounter(count, element) {
    let a = 200;
}
doCounter(312, counter1)
