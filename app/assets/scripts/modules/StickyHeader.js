import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader{
    constructor(){
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections=document.querySelectorAll(".page-section")
        this.browserHeight=window.innerHeight 
        this.previousScrollY=window.scrollY
        this.events()
        
    }

    events(){
        window.addEventListener("scroll", throttle(() => this.runOnScroll(),200))
        window.addEventListener("resize", debounce(()=>{
            this.browserHeight=window.innerHeight
        }, 333) )
    }

    runOnScroll(){
        this.determineScrollDirection()
            if (window.scrollY > 60){
                this.siteHeader.classList.add("site-header__dark") 
            } else {
                this.siteHeader.classList.remove("site-header__dark") 
        }

        this.pageSections.forEach(el => this.calcSection(el))
    }

    determineScrollDirection(){
        if(window.scrollY > this.previousScrollY){
            this.scrollDirection ="Down"
        }else{
            this.scrollDirection="Up"
        }
        this.previousScrollY=window.scrollY
    }

    calcSection(el){
        if(window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent= el.getBoundingClientRect().y / this.browserHeight * 100
            
            if(scrollPercent < 18 && this.scrollDirection=="Down" || scrollPercent<33 && this.scrollDirection=="Up"){
                let matchingLink = el.getAttribute("data-matching-link")
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
                document.querySelector(matchingLink).classList.add("is-current-link")
            }
        }

    }
}

export default StickyHeader