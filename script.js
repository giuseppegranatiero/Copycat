function sort_answers(order, question){
    var wrapper = question.getElementsByClassName("SG0AAe");
    var items = wrapper[0].children;
    var elements = document.createDocumentFragment();

    order.forEach(function(idx) {
        elements.appendChild(items[idx].cloneNode(true));
    });

    wrapper[0].innerHTML = null;
    wrapper[0].appendChild(elements);
}

function sort_questions(order){
    var wrapper = document.getElementsByClassName("o3Dpx");
    var items = wrapper[0].children;
    var elements = document.createDocumentFragment();

    order.forEach(function(idx) {
        elements.appendChild(items[idx].cloneNode(true));
    });

    wrapper[0].innerHTML = null;
    wrapper[0].appendChild(elements);
}

function create_new_order_questions(){
    // create map
    const myMap = new Map();
    var allSpans = document.getElementsByTagName("span");
    var index = 0;
    for(var i = 0; i < allSpans.length; i ++) {
        if(allSpans[i].className === 'M7eMe') {
            // add to map
            var question = allSpans[i].innerHTML;
            myMap.set(question, index);
            index++;
        }
    }

    // sort map
    const mapSort3 = new Map([...myMap.entries()].sort());

    // create new order
    const new_order = [];
    var i = 0;
    for (const value of mapSort3.values()) {
        new_order[i] = value;
        i++;
    }

    sort_questions(new_order);
}

function create_new_order_answers(){
    var d = document.getElementsByClassName("Qr7Oae");
    for(var y = 0; y<d.length; y++){
        var q = d[y];
        const myMap = new Map();
        var allSpans = q.getElementsByTagName("span");
        var index = 0;
        for(var i = 0; i < allSpans.length; i ++) {
            if(allSpans[i].className === "aDTYNe snByac OvPDhc OIC90c") {
                // add to map
                var question = allSpans[i].innerHTML;
                myMap.set(question, index);
                index++;
            }
        }
        if(index!=0){
            // sort map
            const mapSort3 = new Map([...myMap.entries()].sort());
        
            // create new order
            const new_order = [];
            var i = 0;
            for (const value of mapSort3.values()) {
                new_order[i] = value;
                i++;
            }
            sort_answers(new_order, q);
        } 
        
    }
}

function init(){
    create_new_order_questions();
    create_new_order_answers();
    alert("Done!");
}

init();

    



