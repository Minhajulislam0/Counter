// set initial count
let count = 0;

// select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        // Decrese Count
        if(styles.contains('decrease')){
            count--;
            // Prevent Negetive Decrease
            if(count < 0){
                confirm( `You Cann't go Below "0"`);
                count = 0;
            }
        }
        // Increase count
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        // count color
        if(count>0){
            value.style.color = 'green'
        }
        else if (count===0){
            value.style.color = 'red'
        };
        value.textContent = count;
    })
});