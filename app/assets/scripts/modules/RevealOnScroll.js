import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll{
    constructor(els,thresholdPercent){
        this.thrPerc=thresholdPercent
        this.itemsToReveal = els
        this.browserHeight=window.innerHeight
        this.hideInitially()
        this.scrollThrottle= throttle(this.calcCaller, 200).bind(this)
        this.events()
       }
       events(){
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(()=>{
            console.log("resize just ran")
            this.browserHeight=window.innerHeight
        }, 333) )
       }


calculateIfScrolledTo(el){
   if(window.scrollY+this.browserHeight >el.offsetTop){
    console.log("element was calculated")
    let scrollPercent= (el.getBoundingClientRect().top / this.browserHeight)*100
    if(scrollPercent <this.thrPerc) {
        el.classList.add("reveal-item__is-visible")
        el.isRevealed=true
        if (el.isLastItem){
            window.removeEventListener("scroll", this.scrollThrottle)
        }
    }
   }
}
       hideInitially(){
           this.itemsToReveal.forEach(el => {
               el.classList.add("reveal-item")
               el.isRevealed =false
            })
            this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=true
       }
       calcCaller(){
        console.log("scroll fuction ran")
                this.itemsToReveal.forEach(el => {
                    if (el.isRevealed == false){
                        this.calculateIfScrolledTo(el)
                    }
                })
    }
}
export default RevealOnScroll;