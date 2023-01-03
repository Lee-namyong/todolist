let data = [
 
];

const div_list = document.getElementById('div_list');
init_data();


add.addEventListener('click', function(){ 
   
    let title = document.getElementById('title');  // 제목
    let letter = document.getElementById('letter');// 내용
    let date = document.getElementById('date');    // 날짜 
    

    if (!title.value || !letter.value || !date.value)  {
        alert('제목, 내용, 날짜를 모두 입력해 주세요');    
    } 
    
    
    else {
            data.push({id: data.length+1, title: title.value, content: letter.value, date: date.value});
            list_html += 
            `<div class="list_container">

               <div class="list_top_container">
                 <div class="todo" id="title_list" >${data[data.length-1].title}</div> 
                 <div class="todo" id="date_list">${data[data.length-1].date}</div> 
                 <div class="btn_container">
                   <button class="btn" id="btn_delete" dataId="${data[data.length-1].id}" onClick="btn_del(${data[data.length-1].id})">삭제</button>
                 </div>
               </div>

               <div class="list_bottom_container">
                 <div class="todo" id="letter_list">${data[data.length-1].content}</div> 
               </div>

            </div>`;
            div_list.innerHTML = list_html;
            

            title.value= "";
            letter.value= "";   
            date.value= "";   
        }
    
    
    });


    function btn_del(id) {
        data = data.filter((obj) => obj.id != id);
        init_data();
    }

    function init_data() {
        list_html = "";
        for(i=0; i<data.length; i++) {
            data[i].id = i+1;
            list_html += 
            `<div class="list_container">

                <div class="list_top_container">
                  <div class="todo" id="title_list" >${data[i].title}</div> 
                  <div class="todo" id="date_list">${data[i].date}</div> 
                  <div class="btn_container">
                     <button class="btn" id="btn_delete" dataId="${data[i].id}" onClick="btn_del(${data[i].id})">삭제</button>
                  </div>
                </div>

                <div class="list_bottom_container">
                  <div class="todo" id="letter_list">${data[i].content}</div> 
                </div>

            </div>`
        };
        div_list.innerHTML = list_html;
    }


    
