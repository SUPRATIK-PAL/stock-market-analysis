const API_URL = 'https://stocks3.onrender.com/api/stocks/getstocksdata'
const LIST_URL = "https://stocks3.onrender.com/api/stocks/getstocksprofiledata"
const DETAIL_URL = "https://stocks3.onrender.com/api/stocks/getstockstatsdata"
const stName = document.getElementById("stockName");
const sum = document.getElementById("summary")
const book = document.getElementById("bookValue");
const stockProfit = document.getElementById("profit");
let text = "";
let bookPrice = "";
let profitPrice = "";

let flag = false;
let myChart = null;

let cname = "";
let companyName = "";



async function fetchListData() {
    try {
        const response = await fetch(LIST_URL);

        const data = await response.json();
        //const res = data.stocksStatsData[0]["AAPL"].bookValue;
        //console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function fetchDetailsData(){
    try {
        const response = await fetch(DETAIL_URL);

        const data = await response.json();
        //const res = data.stocksStatsData[0]["AAPL"].bookValue;
        //console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}




async function fetchData() {
    try {
        const response = await fetch(API_URL);

        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


async function changeSummary(company){
    const res = await fetchListData();
    text = res.stocksProfileData[0][company].summary;
}

async function changePrice(company){
    const res = await fetchDetailsData();
    bookPrice = res.stocksStatsData[0][company].bookValue + "%";
    profitPrice = "$" + res.stocksStatsData[0][company].profit;
}
   

//fetchData()

    async function createChart(arr, label){

       if(flag === true){
        if (myChart) {
            myChart.destroy();
        }
       }

    
        const ctx = document.getElementById("myChart").getContext("2d");
        myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: label, // array of labels
                datasets: [{
                    label: "My Chart",
                    data: arr, // array of data values
                    backgroundColor: "rgba(75, 192, 192, 0.2)", // optional: background color
                    borderColor: "rgba(75, 192, 192, 1)", // optional: border color
                    borderWidth: 4, // optional: border width
                    fill: false,
                    tension: 1,
                }]
            },
            
        });
    }

    async function renderForOneMonth(comName){
        if(flag === false){
            flag = true;
        }
        const res = await fetchData();
        const arr_1 = res.stocksData[0][comName]["1mo"].value;
        const label_1 = res.stocksData[0][comName]["1mo"].timeStamp;
        createChart(arr_1, label_1);
    }


    async function renderForFiveYears(comName){
        if(flag === false){
            flag = true;
        }
        const res = await fetchData();
        const arr_2 = res.stocksData[0][comName]["5y"].value;
        const label_2 = res.stocksData[0][comName]["5y"].timeStamp;
        createChart(arr_2, label_2);
    }

    async function renderForThreeMonth(comName){
        if(flag === false){
            flag = true;
        }
        const res = await fetchData();
        const arr_3 = res.stocksData[0][comName]["3mo"].value;
        const label_3 = res.stocksData[0][comName]["3mo"].timeStamp;
        createChart(arr_3, label_3);
    }

    async function renderForOneYear(comName){
        if(flag === false){
            flag = true;
        }
        const res = await fetchData();
        const arr_4 = res.stocksData[0][comName]["1y"].value;
        const label_4 = res.stocksData[0][comName]["1y"].timeStamp;
        createChart(arr_4, label_4);
    }


    

    function forMSFT(){
        cname = "MSFT";
        companyName = "Microsoft"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forAAPL(){
        cname = "AAPL";
        companyName = "Apple"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forGOOGL(){
        cname = "GOOGL";
        companyName = "Google"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forAMZN(){
        cname = "AMZN";
        companyName = "Amazon"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forPYPL(){
        cname = "PYPL";
        companyName = "Paypal"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forTSLA(){
        cname = "TSLA";
        companyName = "Tesla"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forJPM(){
        cname = "JPM";
        companyName = "J.P. Morgan"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forNVDA(){
        cname = "NVDA";
        companyName = "Nvidia"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }

    function forNFLX(){
        cname = "NFLX";
        companyName = "Netflix"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;

    }

    function forDIS(){
        cname = "DIS";
        companyName = "Disney"
        stName.innerText = companyName;
        changeSummary(cname);
        changePrice(cname);
        sum.innerText = text;
        book.innerText = bookPrice;
        stockProfit.innerText = profitPrice;
    }
    
    document.getElementById('1month-btn').addEventListener('click', () => {
        renderForOneMonth(cname);
    });

    document.getElementById('1year-btn').addEventListener('click', () => {
        renderForOneYear(cname);
    });

    document.getElementById('5year-btn').addEventListener('click', () => {
        renderForFiveYears(cname);
    });

    document.getElementById('3month-btn').addEventListener('click', () => {
        renderForThreeMonth(cname);
    });


    

console.log("are you alive?");