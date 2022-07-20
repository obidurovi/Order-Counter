const fiverr = document.getElementById('fiverr');
const counter = document.querySelector('.counter');

fiverr.onsubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());

    let count = setInterval( () => {
        let start_time = Date.now();
        let end_time = new Date(date + ' ' + time);
        let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

        let total_sec = Math.floor(order_time / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hours = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hours / 24);

        let hours = total_hours - (total_day * 24);
        let min = total_min - (total_day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);


        if( total_sec <= 0 ){
            clearInterval(count);
        }

        counter.innerHTML = `<h1>${total_day} Days : ${hours} Hours : ${min} Minutes : ${sec} Seconds</h1>`;


    }, 1000);
}