const bodyElement = document.querySelector('body')
let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let coinFlipped = Math.random()
        if(coinFlipped < .5) {
            this.state = 0
        } else {
            this.state = 1
        }
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
          
           if(this.state === 0) {
           
            return 'Heads'
           } else if(this.state === 1) {
            
            return 'Tails'
           } 
    },
    toHTML: function() {
        let image = document.createElement('img');
           if(this.state === 0) {
            bodyElement.append(image)
            image.src = './assets/images/heads.png'            
           } else if(this.state === 1) {
            bodyElement.append(image)
            image.src = './assets/images/tails.png'
           }
        return image;
    }
}
    function flipTwentyString() {
        for(let index = 0; index < 20; index++) {
            let stringToPage = document.createElement('p')
            coin.flip()
            stringToPage.append(coin.toString())
            bodyElement.append(stringToPage)
        }
    }
    function flipTwentyImage() {
       
        for(let index = 0; index < 20; index++) {
            coin.flip()
            bodyElement.append(coin.toHTML())
        }
    }



